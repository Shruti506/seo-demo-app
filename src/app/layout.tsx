import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "SEO Demo App",
  description: "A powerful SEO optimized demo application built with Next.js.",
  keywords: [
    "SEO",
    "Next.js",
    "Search Engine Optimization",
    "Demo App",
    "Open Graph"
  ],
  openGraph: {
    title: "SEO Demo App",
    description: "A powerful SEO optimized demo application built with Next.js.",
    url: "https://seo-demo-app-two.vercel.app/",
    siteName: "SEO Demo App",
    images: [
      {
        url: "https://seo-demo-app-two.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Demo App Thumbnail",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Demo App",
    description: "A powerful SEO optimized demo application built with Next.js.",
    images: ["https://seo-demo-app-two.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* required for metadata injection */}
      <head />

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
