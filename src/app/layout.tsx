import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A GEN - Soluciones de Nueva Generación | Automatización e IA",
  description: "Revoluciona tu negocio con integraciones inteligentes, automatización avanzada y soluciones que transforman datos en resultados extraordinarios. Especialistas en IA, chatbots, call center automatizado y optimización de ventas.",
  keywords: [
    "automatización",
    "inteligencia artificial", 
    "IA",
    "chatbots",
    "integraciones",
    "GoHighLevel",
    "GHL",
    "call center",
    "agentes de voz",
    "optimización de ventas",
    "soluciones empresariales"
  ],
  authors: [{ name: "A GEN" }],
  creator: "A GEN - Soluciones de Nueva Generación",
  publisher: "A GEN",
  robots: "index, follow",
  openGraph: {
    title: "A GEN - Soluciones de Nueva Generación",
    description: "Automatización empresarial con IA, integraciones inteligentes y optimización de procesos",
    type: "website",
    locale: "es_ES",
    siteName: "A GEN",
  },
  twitter: {
    card: "summary_large_image",
    title: "A GEN - Soluciones de Nueva Generación",
    description: "Automatización empresarial con IA, integraciones inteligentes y optimización de procesos",
  },
  verification: {
    google: "google-site-verification-code", // Reemplazar con código real
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-white`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
