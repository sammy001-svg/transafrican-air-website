import crypto from 'crypto'
import { cookies } from 'next/headers'

const CSRF_TOKEN_LENGTH = 32
const CSRF_COOKIE_NAME = '__csrf_token'
const CSRF_HEADER_NAME = 'x-csrf-token'

/**
 * Generate a new CSRF token and store it in a secure HTTP-only cookie
 * This should be called on the server side when rendering forms
 */
export async function generateCSRFToken(): Promise<string> {
  const token = crypto.randomBytes(CSRF_TOKEN_LENGTH).toString('hex')
  
  const cookieStore = await cookies()
  cookieStore.set(CSRF_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24, // 24 hours
    path: '/',
  })

  return token
}

/**
 * Verify CSRF token from request
 * Compares token from request body/headers with cookie
 */
export async function verifyCSRFToken(token: string): Promise<boolean> {
  const cookieStore = await cookies()
  const storedToken = cookieStore.get(CSRF_COOKIE_NAME)?.value

  if (!storedToken || !token) {
    return false
  }

  // Use timing-safe comparison to prevent timing attacks
  return crypto.timingHalfOpenCompare(
    Buffer.from(token),
    Buffer.from(storedToken)
  )
}

/**
 * Clear CSRF token (e.g., after successful form submission)
 */
export async function clearCSRFToken(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(CSRF_COOKIE_NAME)
}

export { CSRF_COOKIE_NAME, CSRF_HEADER_NAME }
