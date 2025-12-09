import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.js

export const metadata = {
  title: "CAIOLOG | Inteligência Logística",
  description: "Sistema de gestão de frotas e entregas.",
  manifest: "/manifest.json", // O Next.js gera isso automaticamente pelo arquivo do Passo 1
};

export const viewport = {
  themeColor: "#0f172a", // A cor da barra de status do celular
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Impede o zoom (sensação de app nativo)
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}