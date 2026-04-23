import { Hero } from "@/components/sections/Hero"
import { Credenciais } from "@/components/sections/Credenciais"
import { Servicos } from "@/components/sections/Servicos"
import { CasosUrgentes } from "@/components/sections/CasosUrgentes"
import { ComoFunciona } from "@/components/sections/ComoFunciona"
import { Sobre } from "@/components/sections/Sobre"
import { Depoimentos } from "@/components/sections/Depoimentos"
import { CtaIntermediario } from "@/components/sections/CtaIntermediario"
import { FAQ } from "@/components/sections/FAQ"
import { Contato } from "@/components/sections/Contato"

export default function Home() {
  return (
    <>
      <Hero />
      <Credenciais />
      <Servicos />
      <CasosUrgentes />
      <ComoFunciona />
      <Sobre />
      <Depoimentos />
      <CtaIntermediario />
      <FAQ />
      <Contato />
    </>
  )
}
