"use client"

import { siteContent } from "@/content/site"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 pointer-events-none",
        scrolled ? "top-2" : "top-6"
      )}
    >
      <nav className="pointer-events-auto bg-brand-navy/90 backdrop-blur-md border border-white/10 rounded-full py-2 px-3 flex items-center gap-6 text-sm shadow-header">
        {/* Logo/Badge */}
        <Link href="#hero" className="flex items-center justify-center hover:scale-105 transition-transform mr-2">
          <Image src="/images/logo-gv-nobg.png" alt="Gabriel Vidal Advocacia" width={180} height={40} className="h-8 w-auto object-contain" />
        </Link>
        
        {/* Links Desktop */}
        <div className="hidden lg:flex items-center gap-6 mx-2">
          {siteContent.header.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-widest text-slate-300 hover:text-white transition-colors font-label"
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        {/* CTA */}
        <a
          href={`https://wa.me/${siteContent.contact.phoneClean}?text=${encodeURIComponent(siteContent.contact.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="gv-btn-primary !px-[22px] !py-[10px] !text-[14px] font-label font-semibold tracking-[0.02em] whitespace-nowrap inline-flex items-center justify-center gap-2"
        >
          {siteContent.hero.ctaPrimary}
          <ArrowRight className="hidden lg:block w-4 h-4" />
        </a>
      </nav>
    </header>
  )
}
