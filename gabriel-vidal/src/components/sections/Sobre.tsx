"use client"

import { siteContent } from "@/content/site"
import { withBasePath } from "@/lib/basePath"
import { useInView } from "@/hooks/useInView"
import Image from "next/image"
import { ArrowRight, User } from "lucide-react"

export function Sobre() {
  const ref = useInView()

  return (
    <section id="sobre" className="section-card p-8 md:p-16 lg:p-24 dark relative" ref={ref}>
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/4" />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center w-full z-10 relative max-w-7xl mx-auto">
        
        {/* Mobile Title (Top) */}
        <div className="lg:hidden col-span-full flex flex-col justify-center order-1 text-center gv-animate-on-scroll">
          <span className="text-xs font-label uppercase tracking-widest text-slate-400 mb-4 block">
            {siteContent.sobre.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-white mb-2">
            {siteContent.sobre.title}
          </h2>
        </div>

        {/* Left: Image / Photo */}
        <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 gv-animate-on-scroll delay-100">
          <div className="relative w-full aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface-dark">
            <Image
              src={withBasePath("/images/vidal.jpeg")}
              alt="Gabriel Vidal - Advogado de Trânsito"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          
          <div className="mt-8 bg-surface-glass border border-white/10 p-6 rounded-2xl backdrop-blur-md relative overflow-hidden text-center">
             <div className="absolute inset-0 bg-white/5" />
             <span className="text-sm font-label uppercase tracking-widest text-brand-gold block relative z-10">
               {siteContent.contact.oab}
             </span>
          </div>
        </div>
        
        {/* Right: Content */}
        <div className="lg:col-span-7 flex flex-col justify-center order-3 lg:order-2">
          <span className="hidden lg:block text-xs font-label uppercase tracking-widest text-slate-400 mb-4 gv-animate-on-scroll delay-100">
            {siteContent.sobre.subtitle}
          </span>
          
          <h2 className="hidden lg:block text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-white mb-6 gv-clip-on-scroll delay-200">
            {siteContent.sobre.title}
          </h2>
          
          <h3 className="text-3xl lg:text-2xl font-display text-brand-gold italic mb-6 lg:mb-8 gv-animate-on-scroll delay-350">
            {siteContent.sobre.name}
          </h3>
          
          <div className="space-y-5 text-lg text-slate-300 leading-relaxed mb-10 font-body">
            {siteContent.sobre.bio.map((paragraph, i) => (
              <p key={i} className="gv-animate-on-scroll" style={{ transitionDelay: `${i * 120 + 400}ms` }}>{paragraph}</p>
            ))}
          </div>
          
          <div className="gv-animate-on-scroll delay-600">
            <a
              href={`https://wa.me/${siteContent.contact.phoneClean}?text=${encodeURIComponent(siteContent.contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gv-btn-primary inline-flex items-center justify-center gap-2 !px-8 !py-4 font-label font-semibold !text-[14px] tracking-[0.02em] whitespace-nowrap"
            >
              Falar com um especialista
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        
      </div>
    </section>
  )
}
