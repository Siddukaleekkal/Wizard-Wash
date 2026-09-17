import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const interHeading = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wizardwashva.com"),
  title: {
    default: "Wizard Wash | Professional Exterior Cleaning - Richmond, VA",
    template: "%s | Wizard Wash",
  },
  description: "Professional exterior cleaning and strategic property maintenance in the Richmond, VA area. Expert pressure washing, soft wash roof cleaning, and commercial maintenance.",
  keywords: [
    "Wizard Wash",
    "Power washing Richmond VA",
    "Pressure washing Richmond",
    "Soft washing Richmond",
    "Roof cleaning Richmond VA",
    "Commercial power washing Virginia",
    "Driveway cleaning Central VA",
  ],
  icons: {
    icon: "/logo-final.png",
    apple: "/logo-final.png",
  },
  openGraph: {
    title: "Wizard Wash | Professional Exterior Cleaning - Richmond, VA",
    description: "Professional exterior cleaning and strategic property maintenance in the Richmond, VA area.",
    url: "https://wizardwashva.com",
    siteName: "Wizard Wash",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo-final.png",
        width: 1200,
        height: 1074,
        alt: "Wizard Wash Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interHeading.variable} ${interSans.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
