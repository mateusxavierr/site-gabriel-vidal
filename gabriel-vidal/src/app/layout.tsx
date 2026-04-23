import type { Metadata } from "next";
import { Inter, Lora, Playfair_Display } from "next/font/google";
import { siteContent } from "@/content/site";
import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gabrielvidaladvdetransito.com.br"),
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  icons: {
    icon: [{ url: "/images/logo-gv-notext.png", type: "image/png" }],
    shortcut: "/images/logo-gv-notext.png",
    apple: "/images/logo-gv-notext.png",
  },
  openGraph: {
    title: "Gabriel Vidal Advocacia",
    description: "Escritório de Advocacia especializado em Direito de Trânsito - Multas e CNH",
    url: "https://gabrielvidaladvdetransito.com.br/",
    siteName: "Gabriel Vidal Advocacia",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${lora.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="font-body selection:bg-brand-gold/30 selection:text-brand-navy antialiased min-h-screen flex flex-col relative overflow-x-hidden">
        <Header />
        <main className="flex-1 w-full pt-24">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
