"use client"

import { siteContent } from "@/content/site"
import { useInView } from "@/hooks/useInView"
import { ArrowRight, Ban, Car, FileWarning, MessageCircle, Scale, ShieldCheck } from "lucide-react"
import { useRef } from "react"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ReactNode> = {
  "file-warning": <FileWarning className="w-6 h-6" />,
  "ban": <Ban className="w-6 h-6" />,
  "shield-check": <ShieldCheck className="w-6 h-6" />,
  "scale": <Scale className="w-6 h-6" />,
  "car": <Car className="w-6 h-6" />,
  "message-circle": <MessageCircle className="w-6 h-6" />,
}

export function Servicos() {
  const ref = useInView()

  return (
    <section id="atuacao" className="section-card p-8 md:p-16 lg:p-24 bg-slate-50" ref={ref}>
      <div className="mb-16">
        <span className="text-xs font-label uppercase tracking-widest text-slate-500 block mb-2 gv-animate-on-scroll">
          {siteContent.atuacao.subtitle}
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-slate-900 mb-6 pb-2 gv-clip-on-scroll delay-100">
          {siteContent.atuacao.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteContent.atuacao.services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      <div className="mt-16 text-center gv-animate-on-scroll delay-500">
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
    </section>
  )
}

function ServiceCard({ service, index }: { service: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return

    const clientX = e.clientX
    const clientY = e.clientY

    // Cancelar o frame anterior se ainda não foi executado
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)

    rafRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect()
      const x = (clientX - rect.left) / rect.width - 0.5
      const y = (clientY - rect.top) / rect.height - 0.5
      // Manipulação direta do DOM — zero re-renders do React
      card.style.transform = `perspective(800px) rotateY(${x * 15}deg) rotateX(${-y * 15}deg) scale(1.05)`
    })
  }

  const handleMouseLeave = () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    const card = cardRef.current
    if (!card) return
    card.style.transform = "perspective(800px) rotateY(0) rotateX(0) scale(1)"
  }

  return (
    <div 
      className="gv-animate-on-scroll cursor-pointer h-full flex flex-col group z-10 hover:z-20"
      style={{ transitionDelay: `${index * 120}ms` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="w-full h-full flex flex-col p-8 bg-white rounded-2xl border border-transparent shadow-sm hover:shadow-[0_16px_40px_rgba(255,199,138,0.3)] hover:border-brand-gold/50 transition-[transform,box-shadow,border-color] ease-out"
        style={{
          transformStyle: "preserve-3d",
          transitionDuration: "300ms",
        }}
      >
        <div 
          className="w-12 h-12 bg-brand-navy group-hover:bg-[#003388] transition-colors duration-300 rounded-xl flex items-center justify-center text-brand-gold mb-6"
          style={{ transform: "translateZ(30px)" }}
        >
          {iconMap[service.icon]}
        </div>
        <h4 className="text-xl font-display font-semibold text-slate-900 mb-4" style={{ transform: "translateZ(20px)" }}>
          {service.title}
        </h4>
        <p className="text-slate-600 text-sm leading-relaxed flex-1 font-body" style={{ transform: "translateZ(10px)" }}>
          {service.description}
        </p>
      </div>
    </div>
  )
}
