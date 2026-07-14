import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Header/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Receitas",
  description: "Site de Receitas simples e saborosas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} h-full antialiased`}
    >
      <Header />
      {children}
      <Footer />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
