import "./globals.css";
import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import localFont from "next/font/local";
import Header from "@/widgets/header/Header";
import Footer from "@/widgets/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export const metadata: Metadata = {
  title: "Эллина Буч - консультация психолога онлайн",
  description:
    "Психологическая помощь. Персональные консультации психолога онлайн, первая консультация бесплатно",
  keywords:
    "психолог, психология, психология онлайн, психология онлайн, консультации, консультация",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col relative min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-WSP3R1M8ZN" />
    </html>
  );
}
