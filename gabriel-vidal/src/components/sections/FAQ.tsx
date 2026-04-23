"use client"

import { siteContent } from "@/content/site"
import { useInView } from "@/hooks/useInView"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function FAQ() {
  const ref = useInView()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-card p-8 md:p-16 lg:p-24 bg-white" ref={ref}>
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left: Heading */}
        <div className="lg:col-span-5 gv-animate-on-scroll">
          <span className="text-xs font-label uppercase tracking-widest text-slate-500 block mb-4">
            {siteContent.faq.title}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-slate-900 mb-6">
            {siteContent.faq.subtitle}
          </h2>
          <p className="text-slate-600 font-body leading-relaxed mb-8">
            Tire suas principais dúvidas sobre o processo de defesa e nossos serviços.
          </p>
        </div>
        
        {/* Right: Accordion */}
        <div className="lg:col-span-7 space-y-4">
          {siteContent.faq.questions.map((faq, index) => {
            const isOpen = openIndex === index
            
            return (
              <div 
                key={index} 
                className="gv-animate-on-scroll border border-slate-200 rounded-2xl overflow-hidden bg-slate-50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-100 transition-colors"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-display font-semibold text-slate-900 text-lg">
                    {faq.q}
                  </span>
                  <ChevronDown className={cn(
                    "w-5 h-5 text-brand-gold transition-transform duration-300 shrink-0",
                    isOpen && "rotate-180"
                  )} />
                </button>
                
                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pt-2 text-slate-600 font-body leading-relaxed border-t border-slate-200 mx-6">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
      </div>
    </section>
  )
}
