import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { ScrollToTop } from "@/components/scroll-to-top";
import {
  getMarketingSiteUrl,
  KEYWORDS,
  MARKETING_LOGO_SRC,
  SITE_DESCRIPTION_LONG,
  SITE_DESCRIPTION,
  SITE_NAME,
} from "@/lib/site-config";
import "./globals.css";

const fontSans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const siteUrl = getMarketingSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME} — ${SITE_DESCRIPTION}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION_LONG,
  keywords: [...KEYWORDS],
  authors: [{ name: `${SITE_NAME} Team`, url: siteUrl }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: MARKETING_LOGO_SRC, type: "image/png", sizes: "32x32" },
      { url: MARKETING_LOGO_SRC, type: "image/png", sizes: "16x16" },
      { url: MARKETING_LOGO_SRC, type: "image/png", sizes: "192x192" },
      { url: MARKETING_LOGO_SRC, type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: MARKETING_LOGO_SRC, type: "image/png", sizes: "180x180" }],
    shortcut: MARKETING_LOGO_SRC,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_DESCRIPTION}`,
    description: SITE_DESCRIPTION_LONG,
    images: [
      {
        url: `${siteUrl}${MARKETING_LOGO_SRC}`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — ${SITE_DESCRIPTION}`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_DESCRIPTION}`,
    description: SITE_DESCRIPTION_LONG,
    images: [
      {
        url: `${siteUrl}${MARKETING_LOGO_SRC}`,
        alt: `${SITE_NAME} — ${SITE_DESCRIPTION}`,
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
  verification: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontSans.variable} suppressHydrationWarning>
      <body className={`${fontSans.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
