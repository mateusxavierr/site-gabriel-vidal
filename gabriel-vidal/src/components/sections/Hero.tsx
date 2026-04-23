"use client"

import { GvInViewSection, useGvReveal } from "@/components/GvInViewSection"
import { siteContent } from "@/content/site"
import { withBasePath } from "@/lib/basePath"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const tH1 = useGvReveal()
  const tP = useGvReveal()
  const tCta = useGvReveal()

  return (
    <GvInViewSection id="hero" className="section-card p-8 md:p-16 lg:p-24 min-h-[85vh] flex items-center relative overflow-hidden bg-white">
      {/* Background Video */}
      <div 
        className="hidden lg:block absolute top-0 right-0 bottom-0 w-full lg:w-[70%] z-0 pointer-events-none overflow-hidden"
        style={{ 
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 100%)'
        }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover object-center opacity-10 lg:opacity-100 transition-opacity duration-1000"
        >
          <source src={withBasePath("/videos/video-transito.mp4")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent w-full lg:w-[40%]" />
      </div>

      {/* Background light effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none translate-x-1/4 -translate-y-1/4 z-0" />
      
      <div className="grid lg:grid-cols-12 gap-12 items-center w-full z-10 relative max-w-7xl mx-auto">
        
        {/* Left: Content */}
        <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center max-lg:pt-12 sm:max-lg:pt-14">
          <h1
            className={cn(
              "text-4xl md:text-5xl lg:text-[52px] font-display font-bold text-slate-900 tracking-tighter leading-[1.1] mb-6 gv-clip-on-scroll delay-200",
              tH1.isVisible && "is-visible"
            )}
            {...tH1.revealProps}
          >
            Escritório de Advocacia especializado em <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-goldhover">Direito de Trânsito</span>
          </h1>
          
          <p
            className={cn(
              "text-lg text-slate-600 leading-relaxed mb-10 max-w-lg font-body gv-animate-on-scroll delay-350",
              tP.isVisible && "is-visible"
            )}
            {...tP.revealProps}
          >
            {siteContent.hero.description}
          </p>
          
          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4 gv-animate-on-scroll delay-500",
              tCta.isVisible && "is-visible"
            )}
            {...tCta.revealProps}
          >
            <a
              href={`https://wa.me/${siteContent.contact.phoneClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gv-btn-primary inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-navy px-8 py-4 rounded-full text-sm font-semibold shadow-glow hover:scale-105 transition-transform duration-300 font-label"
            >
              {siteContent.hero.ctaPrimary}
              <ArrowRight className="w-4 h-4" />
              {/* Particles */}
              <span className="gv-particle" style={{ left: "20%", animationDuration: "2s", animationDelay: "0.1s" }} />
              <span className="gv-particle" style={{ left: "50%", animationDuration: "2.5s", animationDelay: "0.5s" }} />
              <span className="gv-particle" style={{ left: "80%", animationDuration: "1.8s", animationDelay: "0.3s" }} />
            </a>
            <a
              href="#atuacao"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 font-label"
            >
              {siteContent.hero.ctaSecondary}
            </a>
          </div>
        </div>
        
      </div>
    </GvInViewSection>
  )
}
