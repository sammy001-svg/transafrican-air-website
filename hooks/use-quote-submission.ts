'use client'

import { useState } from 'react';

interface SubmitQuoteResponse {
  success: boolean;
  message: string;
  referenceNumber?: string;
  error?: string;
}

export const useQuoteSubmission = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState<string | null>(null);

  const submitQuote = async (data: Record<string, any>): Promise<SubmitQuoteResponse> => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);
    setReferenceNumber(null);

    try {
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies (for CSRF token)
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        const errorMessage = result.error || 'Failed to submit quote. Please try again.';
        setError(errorMessage);
        return { success: false, message: '', error: errorMessage };
      }

      setSuccess(true);
      setReferenceNumber(result.referenceNumber);
      return {
        success: true,
        message: result.message,
        referenceNumber: result.referenceNumber,
      };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Network error. Please try again.';
      setError(errorMessage);
      return { success: false, message: '', error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setError(null);
    setSuccess(false);
    setReferenceNumber(null);
  };

  return {
    submitQuote,
    isLoading,
    error,
    success,
    referenceNumber,
    reset,
  };
};
