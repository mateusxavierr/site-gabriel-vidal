"use client"

import { siteContent } from "@/content/site"
import { useInView } from "@/hooks/useInView"
import { AlertCircle, Loader2, Send } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("Insira um e-mail válido"),
  phone: z.string().min(10, "Telefone inválido"),
  message: z.string().min(10, "Mensagem muito curta"),
})

type FormValues = z.infer<typeof formSchema>

export function Contato() {
  const ref = useInView()
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormValues) => {
    setStatus("loading")
    
    // Simular API (Aqui entraria Resend ou Webhook)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setStatus("success")
    reset()
    
    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <section id="contato" className="section-card dark p-8 md:p-16 lg:p-24 relative" ref={ref as any}>
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 z-10 relative">
        
        {/* Left: Contact Info */}
        <div className="lg:col-span-5 flex flex-col justify-center gv-animate-on-scroll">
          <span className="text-xs font-label uppercase tracking-widest text-slate-400 mb-4 block">
            Fale Conosco
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-white mb-6">
            Contato
          </h2>
          <p className="text-slate-300 font-body leading-relaxed mb-10">
            Tem alguma dúvida ou precisa de ajuda urgente com a sua CNH? Preencha o formulário ou chame diretamente no WhatsApp.
          </p>
          
          <div className="space-y-6 mb-10">
            <div>
              <p className="text-[10px] font-label font-bold uppercase tracking-widest text-slate-500 mb-2">
                Telefone / WhatsApp
              </p>
              <a href={`https://wa.me/${siteContent.contact.phoneClean}`} className="text-xl font-display text-brand-gold hover:text-brand-goldhover transition-colors">
                {siteContent.contact.phone}
              </a>
            </div>
            
            <div>
              <p className="text-[10px] font-label font-bold uppercase tracking-widest text-slate-500 mb-2">
                E-mail
              </p>
              <a href={`mailto:${siteContent.contact.email}`} className="text-lg font-body text-white hover:text-slate-300 transition-colors">
                {siteContent.contact.email}
              </a>
            </div>
          </div>
        </div>
        
        {/* Right: Form */}
        <div className="lg:col-span-7 gv-animate-on-scroll delay-200">
          <form 
            onSubmit={handleSubmit(onSubmit)}
            className="bg-surface-dark border border-slate-700/50 p-8 rounded-2xl shadow-2xl relative overflow-hidden"
          >
            {/* Beam decoration on form */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="gv-beam gv-beam-1" style={{ left: "10%" }} />
              <div className="gv-beam gv-beam-2" style={{ right: "10%" }} />
            </div>
            
            <div className="space-y-5 relative z-10">
              <div>
                <label className="gv-label font-label">
                  Nome Completo
                </label>
                <input 
                  type="text" 
                  {...register("name")}
                  className={`gv-input ${errors.name ? 'error' : ''}`}
                  placeholder="Seu nome" 
                />
                {errors.name && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-body">
                    <AlertCircle className="w-3 h-3" /> {errors.name.message}
                  </p>
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="gv-label font-label">
                    E-mail
                  </label>
                  <input 
                    type="email" 
                    {...register("email")}
                    className={`gv-input ${errors.email ? 'error' : ''}`}
                    placeholder="seu@email.com" 
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-body">
                      <AlertCircle className="w-3 h-3" /> {errors.email.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="gv-label font-label">
                    Telefone
                  </label>
                  <input 
                    type="tel" 
                    {...register("phone")}
                    className={`gv-input ${errors.phone ? 'error' : ''}`}
                    placeholder="(00) 00000-0000" 
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-body">
                      <AlertCircle className="w-3 h-3" /> {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="gv-label font-label">
                  Mensagem
                </label>
                <textarea 
                  {...register("message")}
                  rows={4}
                  className={`gv-input resize-none ${errors.message ? 'error' : ''}`}
                  placeholder="Como podemos te ajudar?" 
                />
                {errors.message && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-body">
                    <AlertCircle className="w-3 h-3" /> {errors.message.message}
                  </p>
                )}
              </div>
              
              <button 
                type="submit" 
                disabled={status === "loading" || status === "success"}
                className={`w-full font-label font-semibold py-3.5 transition-all flex items-center justify-center gap-2 mt-4 relative overflow-hidden ${
                  status === "success" 
                    ? "bg-green-500 text-white rounded-full" 
                    : "gv-btn-primary"
                }`}
              >
                {status === "loading" ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</>
                ) : status === "success" ? (
                  <>Mensagem enviada com sucesso!</>
                ) : (
                  <>Enviar Mensagem <Send className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </form>
        </div>
        
      </div>
    </section>
  )
}
