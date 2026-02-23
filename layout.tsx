import type { Metadata } from "next"
import { DM_Sans, Inter } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Monara — AI Employees That Automate Your Growth",
  description:
    "Meet Monara, the AI co-founder built to drive consistent revenue growth on autopilot. From finding verified leads to booking sales calls—Monara handles the entire outbound funnel 24/7.",
  openGraph: {
    title: "Monara — AI Employees That Automate Your Growth",
    description:
      "Meet Monara, the AI co-founder built to drive consistent revenue growth on autopilot.",
    url: "https://monara.ai",
    siteName: "Monara",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monara — AI Employees That Automate Your Growth",
    description:
      "Meet Monara, the AI co-founder built to drive consistent revenue growth on autopilot.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-white antialiased">{children}</body>
    </html>
  )
}
