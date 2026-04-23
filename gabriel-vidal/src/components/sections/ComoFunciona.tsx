"use client"

import { siteContent } from "@/content/site"
import { useInView } from "@/hooks/useInView"
import { Activity, Bell, FileSearch, MessageCircle, Shield } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  "message-circle": <MessageCircle className="w-5 h-5" />,
  "file-search": <FileSearch className="w-5 h-5" />,
  "shield": <Shield className="w-5 h-5" />,
  "activity": <Activity className="w-5 h-5" />,
  "bell": <Bell className="w-5 h-5" />,
}

export function ComoFunciona() {
  const ref = useInView()

  return (
    <section id="como-funciona" className="section-card p-8 md:p-16 lg:p-24 bg-white" ref={ref}>
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-slate-900 mb-6 gv-clip-on-scroll">
          {siteContent.comoFunciona.title}
        </h2>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Linha vertical (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

        <div className="space-y-12">
          {siteContent.comoFunciona.steps.map((step, index) => {
            const isEven = index % 2 === 0
            
            return (
              <div 
                key={index} 
                className={`gv-animate-on-scroll flex flex-col md:flex-row items-center gap-8 ${isEven ? "md:flex-row-reverse" : ""}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Espaço vazio para alinhar */}
                <div className="hidden md:block w-1/2" />
                
                {/* Ícone central */}
                <div className="w-16 h-16 shrink-0 rounded-full bg-brand-navy flex items-center justify-center text-brand-gold shadow-lg z-10 relative">
                  <div className="absolute inset-0 rounded-full bg-brand-gold/20 animate-ping" />
                  {iconMap[step.icon]}
                </div>
                
                {/* Conteúdo */}
                <div className={`w-full md:w-1/2 text-center ${isEven ? "md:text-left" : "md:text-right"}`}>
                  <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                    <span className="text-xs font-label uppercase tracking-widest text-slate-400 mb-2 block">
                      Passo {index + 1}
                    </span>
                    <h4 className="text-xl font-display font-semibold text-slate-900 mb-3">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 font-body text-sm leading-relaxed">
                      {step.description}
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
