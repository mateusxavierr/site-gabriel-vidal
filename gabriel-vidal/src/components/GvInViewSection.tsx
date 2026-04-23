"use client"

import { useCallback, useRef, useState, type ReactNode, type RefCallback } from "react"

const defaultObserverOptions = {
  threshold: 0.08,
  rootMargin: "0px 0px -5% 0px" as const,
}

type GvInViewSectionProps = {
  id?: string
  className?: string
  children: ReactNode
}

/**
 * Section simples usada no Hero; a revelação por scroll fica nos filhos via `useGvReveal`.
 */
export function GvInViewSection({ id, className, children }: GvInViewSectionProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  )
}

/**
 * Observa um único elemento (h1, p, div…) e expõe `is-visible` via estado + ref de callback.
 * Mesmos defaults do `useInView` para consistência em mobile/desktop.
 */
export function useGvReveal() {
  const [isVisible, setIsVisible] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const setRef: RefCallback<HTMLElement> = useCallback((node) => {
    observerRef.current?.disconnect()
    observerRef.current = null
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: defaultObserverOptions.threshold, rootMargin: defaultObserverOptions.rootMargin },
    )

    observer.observe(node)
    observerRef.current = observer
  }, [])

  return { isVisible, revealProps: { ref: setRef } }
}
