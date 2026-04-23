import { siteContent } from "@/content/site"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="#hero" className="inline-block mb-6 hover:opacity-80 transition-opacity">
              <Image src="/images/logo-gv-nobg.png" alt="Gabriel Vidal Advocacia" width={360} height={90} className="h-16 md:h-20 w-auto max-w-full object-contain" />
            </Link>
            <p className="text-slate-400 font-body mb-6 max-w-md">
              Soluções técnicas e personalizadas para proteger o seu direito de dirigir em todo o território nacional.
            </p>
            <div className="flex items-center gap-4">
              <a href={siteContent.contact.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-navy transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href={siteContent.contact.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-navy transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-4 text-brand-gold">Contato</h3>
            <ul className="space-y-3 font-body">
              <li className="flex items-center gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-brand-gold" />
                <a href={`https://wa.me/${siteContent.contact.phoneClean}`} className="hover:text-white transition-colors">
                  {siteContent.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-brand-gold" />
                <a href={`mailto:${siteContent.contact.email}`} className="hover:text-white transition-colors">
                  {siteContent.contact.email}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-4 text-brand-gold">Links Rápidos</h3>
            <ul className="space-y-3 font-body">
              {siteContent.header.nav.slice(1, 5).map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-slate-300 hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-body text-sm text-slate-400">
          <p>{siteContent.footer.copyright}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
