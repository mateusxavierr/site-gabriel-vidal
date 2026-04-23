"use client"

import { siteContent } from "@/content/site"
import { useInView } from "@/hooks/useInView"
import { ArrowRight } from "lucide-react"

export function CasosUrgentes() {
  const ref = useInView()

  return (
    <section id="casos-urgentes" className="section-card p-8 md:p-16 lg:p-24 dark relative" ref={ref}>
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/4" />

      <div className="mb-16 text-center md:text-left z-10 relative">
        <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-white mb-6 gv-clip-on-scroll">
          {siteContent.casosUrgentes.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 z-10 relative">
        {siteContent.casosUrgentes.items.map((item, index) => (
          <div 
            key={index} 
            className="gv-animate-on-scroll bg-white text-slate-900 border border-slate-100 p-8 rounded-2xl flex flex-col h-full shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            {item.badge && (
              <span className="inline-block px-3 py-1 bg-brand-gold text-brand-navy text-[10px] font-label font-semibold uppercase tracking-widest rounded-full w-fit mb-6">
                {item.badge}
              </span>
            )}
            {!item.badge && <div className="h-[28px] mb-6" />}
            
            <h4 className="text-2xl font-display font-semibold text-brand-navy mb-4">
              {item.title}
            </h4>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1 font-body">
              {item.description}
            </p>
            
            <a
              href={`https://wa.me/${siteContent.contact.phoneClean}?text=${encodeURIComponent(siteContent.contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gv-btn-primary mt-auto flex items-center justify-center gap-2 !w-full !py-3 font-label font-semibold !text-[14px] tracking-[0.02em] whitespace-nowrap"
            >
              {siteContent.hero.ctaPrimary}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
