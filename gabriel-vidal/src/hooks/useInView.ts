"use client"

import { useCallback, useEffect, useState } from "react"

interface UseInViewOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

/**
 * Ref de callback: o IntersectionObserver só roda depois que o nó existe no DOM.
 * (useRef + useEffect no primeiro paint costuma pegar ref.current === null.)
 */
export function useInView({
  threshold = 0.08,
  rootMargin = "0px 0px -5% 0px",
  triggerOnce = true,
}: UseInViewOptions = {}) {
  const [element, setElement] = useState<HTMLElement | null>(null)

  const ref = useCallback((node: HTMLElement | null) => {
    setElement(node)
  }, [])

  useEffect(() => {
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            if (triggerOnce) {
              observer.unobserve(entry.target)
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove("is-visible")
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(element)
    element.querySelectorAll(".gv-animate-on-scroll, .gv-clip-on-scroll").forEach((child) => {
      observer.observe(child)
    })

    return () => observer.disconnect()
  }, [element, threshold, rootMargin, triggerOnce])

  return ref
}
