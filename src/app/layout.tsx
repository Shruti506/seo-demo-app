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
  metadataBase: new URL("https://seo-demo-app-two.vercel.app"),
  title: "SEO Demo App - Next.js Powered",
  description: "A powerful SEO optimized demo application built with Next.js. Experience modern web development with optimal search engine visibility.",
  keywords: [
    "SEO",
    "Next.js",
    "Search Engine Optimization",
    "Demo App",
    "Open Graph",
    "Web Development"
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "SEO Demo App - Next.js Powered",
    description: "A powerful SEO optimized demo application built with Next.js. Experience modern web development with optimal search engine visibility.",
    url: "/",
    siteName: "SEO Demo App",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Demo App - Next.js Application",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Demo App - Next.js Powered",
    description: "A powerful SEO optimized demo application built with Next.js. Experience modern web development with optimal search engine visibility.",
    images: ["/og-image.jpg"],
    creator: "@yourtwitterhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}