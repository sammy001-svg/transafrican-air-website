"use client"

import { ReactNode } from "react"
import { useMaskedText } from "@/hooks/use-masked-text"

interface MaskedTextRevealProps {
  children: string | ReactNode
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
  className?: string
}

export function MaskedTextReveal({
  children,
  as: Tag = "div",
  className = "",
}: MaskedTextRevealProps) {
  const elementRef = useMaskedText()

  // Convert string to array of words
  const text = typeof children === "string" ? children : children?.toString() || ""
  const words = text.split(" ")

  return (
    <Tag ref={elementRef as any} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className="masked-word inline-block opacity-0 translate-y-6"
          style={{
            marginRight: word === words[words.length - 1] ? "0" : "0.25em",
          }}
        >
          {word}
        </span>
      ))}
    </Tag>
  )
}
