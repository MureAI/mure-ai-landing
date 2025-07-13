import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mure AI | AI Automation Consulting & Workflow Solutions",
  description: "Automate repetitive tasks, streamline workflows, and future-proof your business with Mure AI's enterprise-grade automation services.",
  keywords: ["AI automation", "workflow automation", "business automation", "enterprise automation", "AI consulting", "Mure AI"],
  robots: "index, follow",
  metadataBase: new URL("https://mureai.com"),
  openGraph: {
    title: "Mure AI | AI Automation Consulting & Workflow Solutions",
    description: "We help companies streamline operations and unlock growth through AI-powered workflows and intelligent automation.",
    url: "https://mureai.com",
    siteName: "Mure AI",
    images: [
      {
        url: "/seo_image.webp", // Add your actual OG image here
        width: 1200,
        height: 630,
        alt: "Mure AI - Enterprise Automation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mure AI | AI Automation Consulting & Workflow Solutions",
    description: "Streamline your business and stay competitive with Mure AI automation experts.",
    images: ["/seo_image.webp"], // Same image as OG image
    creator: "@mureai", // optional: your Twitter handle
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Favicon + Manifest */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
