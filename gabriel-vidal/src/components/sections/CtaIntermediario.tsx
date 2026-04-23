"use client"

import { siteContent } from "@/content/site"
import { useInView } from "@/hooks/useInView"
import { ArrowRight } from "lucide-react"

export function CtaIntermediario() {
  const ref = useInView()

  return (
    <section className="section-card p-8 md:p-16 lg:p-24 dark relative overflow-hidden text-center" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-white mb-6 gv-clip-on-scroll">
          Precisa de ajuda urgente com a sua CNH?
        </h2>
        
        <p className="text-lg text-slate-300 leading-relaxed mb-10 font-body gv-animate-on-scroll delay-100">
          Não espere o prazo acabar. Entre em contato agora mesmo para uma análise técnica gratuita do seu caso e descubra como podemos proteger o seu direito de dirigir.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 gv-animate-on-scroll delay-200">
          <a
            href={`https://wa.me/${siteContent.contact.phoneClean}?text=${encodeURIComponent(siteContent.contact.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="gv-btn-primary inline-flex items-center justify-center gap-2 !px-8 !py-4 font-label font-semibold !text-[14px] tracking-[0.02em] whitespace-nowrap"
          >
            {siteContent.hero.ctaPrimary}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
