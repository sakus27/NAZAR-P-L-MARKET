import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartToast from "@/components/CartToast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nazarpilicmarket.com"),
  title: {
    default: "Nazar Piliç Market | İnegöl",
    template: "%s | Nazar Piliç Market",
  },
  description: "2005'ten bu yana İnegöl'de günlük taze piliç, özel marineli mangallık çeşitler ve şarküteri lezzetleri. WhatsApp üzerinden anında sipariş verin.",
  keywords: [
    "Nazar Piliç Market",
    "İnegöl tavuk",
    "İnegöl piliç",
    "taze bonfile",
    "soslu kanat",
    "çıtır kelebek",
    "şarküteri",
    "köy sütü",
    "tavuk sucuk",
    "WhatsApp tavuk sipariş"
  ],
  authors: [{ name: "Nazar Piliç Market" }],
  creator: "Nazar Piliç Market",
  publisher: "Nazar Piliç Market",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Nazar Piliç Market | İnegöl'ün Taze Piliç Marketi",
    description: "2005'ten bu yana İnegöl'de taze piliç, özel marineli mangallık çeşitler ve şarküteri ürünleri.",
    locale: "tr_TR",
    type: "website",
    siteName: "Nazar Piliç Market",
    images: [
      {
        url: "/images/logo-circle.png",
        width: 800,
        height: 800,
        alt: "Nazar Piliç Market Amblem",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Nazar Piliç Market | İnegöl",
    description: "2005'ten bu yana günlük taze kesim ve özel soslu piliç çeşitleri.",
    images: ["/images/logo-circle.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-brand-offwhite text-brand-text-main selection:bg-brand-red selection:text-white">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <CartToast />
      </body>
    </html>
  );
}
