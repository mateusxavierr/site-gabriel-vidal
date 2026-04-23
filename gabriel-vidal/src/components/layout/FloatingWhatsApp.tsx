import { siteContent } from "@/content/site"
import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${siteContent.contact.phoneClean}?text=${encodeURIComponent(siteContent.contact.whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-4 bg-white text-slate-900 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-slate-100 font-label">
        Fale com um especialista
      </span>
    </a>
  )
}
