"use client"

import { siteContent } from "@/content/site"
import { useInView } from "@/hooks/useInView"
import { useEffect, useRef } from "react"

export function Credenciais() {
  const ref = useInView()
  const countersRef = useRef<HTMLSpanElement[]>([])

  useEffect(() => {
    const section = document.getElementById("credenciais-section")
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            countersRef.current.forEach((el) => {
              if (!el || el.dataset.animated) return
              el.dataset.animated = "true"
              
              const target = parseInt(el.dataset.target || "0")
              const duration = 2000
              const step = target / (duration / 16)
              let current = 0
              
              const timer = setInterval(() => {
                current += step
                if (current >= target) { 
                  current = target 
                  clearInterval(timer) 
                }
                el.textContent = Math.floor(current).toLocaleString("pt-BR") + (el.dataset.suffix || "")
              }, 16)
            })
            
            observer.disconnect()
          }
        })
      },
      { threshold: 0, rootMargin: "50px" }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="credenciais-section" className="section-card dark py-12 relative z-20 -mt-16 overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
          {siteContent.provas.metrics.map((metric, index) => (
            <div key={index} className={`flex flex-col items-center justify-center py-4 md:py-0 gv-animate-on-scroll delay-${(index + 1) * 100}`}>
              {/* Desktop: Animado */}
              <span 
                className="hidden md:block text-4xl md:text-5xl font-display font-bold text-brand-gold mb-2"
                data-target={metric.value}
                data-suffix={metric.suffix}
                ref={(el) => {
                  if (el) countersRef.current[index] = el
                }}
              >
                0
              </span>
              {/* Mobile: Estático */}
              <span className="md:hidden text-4xl md:text-5xl font-display font-bold text-brand-gold mb-2">
                {metric.value}{metric.suffix}
              </span>
              <p className="text-slate-400 text-xs font-label uppercase tracking-widest">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
