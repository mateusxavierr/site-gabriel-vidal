"use client"

import { siteContent } from "@/content/site"
import { useInView } from "@/hooks/useInView"
import { Star, User } from "lucide-react"

export function Depoimentos() {
  const ref = useInView()

  return (
    <section className="section-card p-8 md:p-16 lg:p-24 relative overflow-hidden bg-white" ref={ref as any}>
      <div className="mb-16 gv-animate-on-scroll text-center z-10 relative">
        <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-slate-900 mb-6">
          {siteContent.depoimentos.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10 relative">
        {siteContent.depoimentos.items.map((item, index) => (
          <div 
            key={index} 
            className="gv-animate-on-scroll bg-brand-blue border-x border-b border-white/10 border-t-2 border-t-brand-gold p-8 rounded-2xl flex flex-col h-full shadow-card"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex gap-1 text-brand-gold mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-current" />
              ))}
            </div>
            
            <p className="text-[16px] text-white/90 mb-8 flex-1 font-body font-normal leading-[1.7]">
              "{item.text}"
            </p>
            
            <div className="flex items-center gap-4 mt-auto border-t border-white/15 pt-6">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <p className="text-[14px] font-semibold text-white font-label">
                  {item.author}
                </p>
                <p className="text-[11px] text-white/55 font-label uppercase tracking-[0.05em] mt-1">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
