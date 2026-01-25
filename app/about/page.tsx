import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer2 } from "@/components/footer2";
import { StructuredData } from "@/components/structured-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hirevine.ai";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Hirevine - Our mission to streamline recruitment through AI-powered candidate screening, automated resume parsing, and voice-based interviews. Discover our values, mission, and commitment to transforming talent acquisition.",
  keywords: [
    "hirevine about",
    "talent intelligence platform",
    "recruitment automation",
    "AI recruitment",
    "hiring platform",
  ],
  openGraph: {
    title: "About Hirevine - Our Mission & Values",
    description:
      "Learn about Hirevine - Our mission to streamline recruitment through AI-powered candidate screening, automated resume parsing, and voice-based interviews. Discover our values and commitment to transforming talent acquisition.",
    url: `${siteUrl}/about`,
    siteName: "Hirevine",
    images: [
      {
        url: `${siteUrl}/app-logo.png`,
        width: 1200,
        height: 630,
        alt: "Hirevine - About Us",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Hirevine - Our Mission & Values",
    description:
      "Learn about Hirevine - Our mission to streamline recruitment through AI-powered candidate screening, automated resume parsing, and voice-based interviews.",
    images: [
      {
        url: `${siteUrl}/app-logo.png`,
        alt: "Hirevine - About Us",
      },
    ],
    creator: "@hirevine",
    site: "@hirevine",
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Hirevine",
  description:
    "Learn about Hirevine - Our mission to streamline recruitment through AI-powered candidate screening, automated resume parsing, and voice-based interviews.",
  url: `${siteUrl}/about`,
  mainEntity: {
    "@type": "Organization",
    name: "Hirevine",
    description:
      "Enterprise Talent Intelligence Platform. AI-powered recruitment screening, automated resume parsing, and voice-based interviews to streamline the hiring process.",
    url: siteUrl,
  },
};

export default function AboutPage() {
  return (
    <>
      <StructuredData data={aboutPageSchema} />
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Hirevine
            </h1>
            <p className="text-lg text-muted-foreground">
              Empowering organizations to streamline recruitment and reduce
              time-to-hire through AI-powered talent intelligence and automated screening.
            </p>
          </div>

          <div className="space-y-16">
            <section className="space-y-6 container mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-base text-muted-foreground">
                <p>
                  At Hirevine, we believe that every organization deserves access
                  to world-class recruitment tools that eliminate the screening bottleneck.
                  Our mission is to transform talent acquisition by leveraging cutting-edge
                  artificial intelligence to provide automated resume parsing, intelligent
                  candidate screening, and real-time voice-based interviews that help
                  organizations of all sizes hire faster and smarter.
                </p>
                <p>
                  We&apos;re committed to making recruitment efficient, scalable, and
                  effective. Whether you&apos;re a startup looking to build your team or
                  an enterprise managing high-volume hiring, Hirevine provides the tools
                  you need to reduce time-to-hire by 85% and focus on what matters most—finding
                  the right talent.
                </p>
              </div>
            </section>

            <section className="space-y-6 container mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Values
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border-0 dark:border-0 bg-card space-y-2 shadow-[0_10px_40px_rgb(0,0,0,0.08),0_4px_12px_rgb(0,0,0,0.04)] dark:shadow-[0_4px_12px_rgb(0,0,0,0.3),inset_0_1px_0_rgb(255,255,255,0.05)]">
                  <h3 className="text-lg font-semibold text-foreground">
                    Excellence
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We strive for excellence in everything we do, from the
                    accuracy of our AI parsing to the user experience of our
                    platform and the quality of candidate matches.
                  </p>
                </div>
                <div className="p-6 rounded-xl border-0 dark:border-0 bg-card space-y-2 shadow-[0_10px_40px_rgb(0,0,0,0.08),0_4px_12px_rgb(0,0,0,0.04)] dark:shadow-[0_4px_12px_rgb(0,0,0,0.3),inset_0_1px_0_rgb(255,255,255,0.05)]">
                  <h3 className="text-lg font-semibold text-foreground">
                    Efficiency
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Recruitment should be fast and efficient, regardless of company
                    size or hiring volume. We&apos;re committed to eliminating
                    bottlenecks and reducing time-to-hire.
                  </p>
                </div>
                <div className="p-6 rounded-xl border-0 dark:border-0 bg-card space-y-2 shadow-[0_10px_40px_rgb(0,0,0,0.08),0_4px_12px_rgb(0,0,0,0.04)] dark:shadow-[0_4px_12px_rgb(0,0,0,0.3),inset_0_1px_0_rgb(255,255,255,0.05)]">
                  <h3 className="text-lg font-semibold text-foreground">
                    Innovation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We continuously push the boundaries of what&apos;s possible
                    with AI and recruitment technology, always looking for new ways to
                    help organizations hire smarter and faster.
                  </p>
                </div>
                <div className="p-6 rounded-xl border-0 dark:border-0 bg-card space-y-2 shadow-[0_10px_40px_rgb(0,0,0,0.08),0_4px_12px_rgb(0,0,0,0.04)] dark:shadow-[0_4px_12px_rgb(0,0,0,0.3),inset_0_1px_0_rgb(255,255,255,0.05)]">
                  <h3 className="text-lg font-semibold text-foreground">
                    Human-Centric
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We&apos;re built by recruiters, for recruiters. Our platform
                    maintains human oversight through HITL evaluation, ensuring
                    quality while leveraging AI speed. We&apos;re always listening
                    to feedback to make Hirevine better.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6 container mx-auto bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Join Our Journey
              </h2>
              <div className="space-y-4 text-base text-muted-foreground">
                <p>
                  Hirevine is more than just a platform—it&apos;s a solution
                  for organizations committed to efficient and effective hiring.
                  Whether you&apos;re just starting to scale your team or managing
                  high-volume recruitment, we&apos;re here to support you every
                  step of the way.
                </p>
                <p>
                  Start your free preview today and experience the power of
                  AI-driven talent intelligence. Upload your first resumes, explore
                  our automated parsing features, conduct AI interviews, and discover
                  how Hirevine can help you reduce time-to-hire by 85%.
                </p>
                <p className="mt-6">
                  Get Started or reach out to us at{" "}
                  <a
                    href="mailto:supratik.deagle@gmail.com"
                    className="text-primary hover:underline font-medium"
                  >
                    supratik.deagle@gmail.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
        <Footer2
          logo={{
            src: "/app-logo.png",
            alt: "Hirevine",
            title: "Hirevine",
            url: "/",
          }}
          tagline="Streamline your hiring process with AI-powered talent intelligence."
          menuItems={[
            {
              title: "Product",
              links: [
                { text: "Features", url: "/#features" },
                { text: "Pricing", url: "/#pricing" },
                { text: "FAQ", url: "/#faq" },
              ],
            },
            {
              title: "Company",
              links: [
                { text: "About", url: "/about" },
                { text: "Contact", url: "/#contact" },
              ],
            },
            {
              title: "Legal",
              links: [
                { text: "Privacy Policy", url: "/privacy" },
                { text: "Terms of Service", url: "/terms" },
              ],
            },
          ]}
          copyright={`© ${new Date().getFullYear()} Hirevine. All rights reserved.`}
          bottomLinks={[
            { text: "Privacy Policy", url: "/privacy" },
            { text: "Terms of Service", url: "/terms" },
          ]}
        />
      </div>
    </>
  );
}
