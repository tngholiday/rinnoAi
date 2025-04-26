import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-provider";
import { siteConfig } from "@/lib/constants";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AIAssist } from "@/components/layout/AIAssist";
import { BackToTop } from "@/components/layout/BackToTop";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://rinnoai.com'),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "software development",
    "AI solutions",
    "machine learning",
    "web development",
    "mobile apps",
    "cloud services",
    "digital transformation",
    "enterprise software",
    "custom software",
    "IT consulting"
  ],
  authors: [{ name: "RinnoAI Softwares" }],
  creator: "RinnoAI Softwares",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rinnoai.com",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@rinnoai",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://rinnoai.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
      <ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
>
  <Navbar />
  {children}
  <Footer />
  <AIAssist />
  <BackToTop />
  <WhatsAppFloat />  {/* <-- Add this here */}
</ThemeProvider>
      </body>
    </html>
  );
}