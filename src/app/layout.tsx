import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import { FloatingWhatsApp, CookieBanner } from "@/components/Utilities";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jamille Miranda | Neuropsicóloga em Belém - PA",
  description: "Especialista em Avaliação Neuropsicológica e Terapia Cognitivo-Comportamental. Um novo olhar sobre a sua mente para o seu bem-estar e desenvolvimento humano.",
  keywords: ["Neuropsicologia", "Terapia Cognitiva", "Avaliação Cognitiva", "Reabilitação", "Saúde Mental", "Belém", "Jamille Miranda"],
  openGraph: {
    title: "Jamille Miranda | Neuropsicóloga",
    description: "Avaliação neuropsicológica e terapia para o seu bem-estar.",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${bodoni.variable} ${inter.variable} font-sans antialiased text-dark bg-background`}
      >
        {children}
        <FloatingWhatsApp />
        <CookieBanner />
      </body>
    </html>
  );
}
