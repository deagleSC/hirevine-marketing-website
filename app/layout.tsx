import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { ScrollToTop } from "@/components/scroll-to-top";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://hirevine.ai";
const siteName = "Hirevine";
const siteDescription =
  "Enterprise Talent Intelligence Platform. AI-powered recruitment screening, automated resume parsing, and voice-based interviews. Streamline your hiring process with Hirevine.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hirevine - Enterprise Talent Intelligence Platform | AI-Powered Recruitment",
    template: "%s | Hirevine",
  },
  description: siteDescription,
  keywords: [
    "talent intelligence",
    "AI recruitment",
    "resume parsing",
    "automated screening",
    "AI interviews",
    "recruitment platform",
    "hiring automation",
    "candidate screening",
    "talent acquisition",
    "recruitment AI",
    "hiring platform",
    "enterprise recruitment",
  ],
  authors: [{ name: "Hirevine Team", url: siteUrl }],
  creator: "Hirevine",
  publisher: "Hirevine",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/app-logo.png", type: "image/png", sizes: "32x32" },
      { url: "/app-logo.png", type: "image/png", sizes: "16x16" },
      { url: "/app-logo.png", type: "image/png", sizes: "192x192" },
      { url: "/app-logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/app-logo.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: "/app-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: "Hirevine - Enterprise Talent Intelligence Platform | AI-Powered Recruitment",
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/app-logo.png`,
        width: 1200,
        height: 630,
        alt: "Hirevine - Enterprise Talent Intelligence Platform",
        type: "image/png",
      },
    ],
    // Add when available
    // emails: ["contact@hirevine.ai"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hirevine - Enterprise Talent Intelligence Platform | AI-Powered Recruitment",
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/app-logo.png`,
        alt: "Hirevine - Enterprise Talent Intelligence Platform",
      },
    ],
    creator: "@hirevine",
    site: "@hirevine",
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
  alternates: {
    canonical: siteUrl,
  },
  category: "Recruitment & Talent Intelligence",
  verification: {
    // Add verification codes here when available
    // google: "verification-code",
    // yandex: "verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <body className={`${montserrat.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
