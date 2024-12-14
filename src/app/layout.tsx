import "./globals.css";
import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/widgets/header/Header";
import Footer from "@/widgets/footer/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export const metadata: Metadata = {
  title: "Онлайн Психолог Эллина Буч - Консультации и Помощь",
  description:
    "Онлайн психологические консультации с сертифицированным психологом Эллиной Буч. Получите профессиональную помощь и поддержку в решении личных и семейных проблем. Консультации проводятся онлайн в удобное для вас время.",
  keywords:
    "онлайн психологические консультации, психологическая помощь онлайн, консультации психолога онлайн, онлайн психологическая помощь для взрослых, психологические консультации для пар онлайн, психолог, психология, эллина, буч, ellina, buch",
  robots: "index, follow",
  authors: [{ name: "ellinabuch" }],
  generator: "Next.js, TailwindCSS, Typescript, React",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col relative min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-WSP3R1M8ZN" />
    </html>
  );
}
