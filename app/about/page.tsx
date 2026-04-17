import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer2 } from "@/components/footer2";
import { StructuredData } from "@/components/structured-data";
import {
  CONTACT_EMAIL,
  FOOTER_MENU,
  getAppUrl,
  getMarketingLogo,
  getMarketingSiteUrl,
  KEYWORDS,
  MARKETING_LOGO_SRC,
  SITE_DESCRIPTION_LONG,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/site-config";

const siteUrl = getMarketingSiteUrl();
const appUrl = getAppUrl();

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${SITE_NAME}—job posts, applications, and evaluation pipelines aligned with the Hirevine web app and API.`,
  keywords: [...KEYWORDS],
  openGraph: {
    title: `About ${SITE_NAME}`,
    description: SITE_DESCRIPTION_LONG,
    url: `${siteUrl}/about`,
    siteName: SITE_NAME,
    images: [
      {
        url: `${siteUrl}${MARKETING_LOGO_SRC}`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - About`,
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${SITE_NAME}`,
    description: SITE_DESCRIPTION_LONG,
    images: [
      {
        url: `${siteUrl}${MARKETING_LOGO_SRC}`,
        alt: `${SITE_NAME} - About`,
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
  name: `About ${SITE_NAME}`,
  description: SITE_DESCRIPTION_LONG,
  url: `${siteUrl}/about`,
  mainEntity: {
    "@type": "Organization",
    name: SITE_NAME,
    description: SITE_DESCRIPTION_LONG,
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
              About {SITE_NAME}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {SITE_TAGLINE} The product experience lives in the{" "}
              <Link
                href={appUrl}
                className="text-primary underline-offset-4 hover:underline"
              >
                Hirevine web app
              </Link>
              , backed by the Hirevine HTTP API for auth, organizations, jobs,
              resumes, applications, and asynchronous pipeline runs.
            </p>
          </div>

          <div className="space-y-16">
            <section className="space-y-6 container mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our mission
              </h2>
              <div className="space-y-4 text-base text-muted-foreground max-w-3xl">
                <p>
                  Hiring should be easier to run and easier to understand. We
                  built Hirevine so teams can publish roles, collect
                  applications with resumes, and move candidates through a
                  structured pipeline—screening, quiz, and a clear hiring report
                  —without losing context between tools.
                </p>
                <p>
                  The web app focuses on recruiter and candidate workflows; the
                  API is the source of truth for data, OpenAPI documentation,
                  and background processing when evaluation steps run outside
                  the request that created an application.
                </p>
              </div>
            </section>

            <section className="space-y-6 container mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Values
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border-0 dark:border-0 bg-card space-y-2 shadow-[0_10px_40px_rgb(0,0,0,0.08),0_4px_12px_rgb(0,0,0,0.04)] dark:shadow-[0_4px_12px_rgb(0,0,0,0.3),inset_0_1px_0_rgb(255,255,255,0.05)]">
                  <h3 className="text-lg font-semibold text-foreground">
                    Clarity
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Pipeline stages, scores, and final reports should be easy to
                    find in the application detail view—so decisions are based
                    on shared evidence.
                  </p>
                </div>
                <div className="p-6 rounded-xl border-0 dark:border-0 bg-card space-y-2 shadow-[0_10px_40px_rgb(0,0,0,0.08),0_4px_12px_rgb(0,0,0,0.04)] dark:shadow-[0_4px_12px_rgb(0,0,0,0.3),inset_0_1px_0_rgb(255,255,255,0.05)]">
                  <h3 className="text-lg font-semibold text-foreground">
                    Fair process
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Candidates get a consistent path: apply, progress through
                    defined stages, and complete assessments when the pipeline
                    reaches them.
                  </p>
                </div>
                <div className="p-6 rounded-xl border-0 dark:border-0 bg-card space-y-2 shadow-[0_10px_40px_rgb(0,0,0,0.08),0_4px_12px_rgb(0,0,0,0.04)] dark:shadow-[0_4px_12px_rgb(0,0,0,0.3),inset_0_1px_0_rgb(255,255,255,0.05)]">
                  <h3 className="text-lg font-semibold text-foreground">
                    Pragmatic automation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Long-running evaluation belongs in background jobs so the UI
                    stays fast; the product reflects that split between what you
                    see in the app and what the API schedules next.
                  </p>
                </div>
                <div className="p-6 rounded-xl border-0 dark:border-0 bg-card space-y-2 shadow-[0_10px_40px_rgb(0,0,0,0.08),0_4px_12px_rgb(0,0,0,0.04)] dark:shadow-[0_4px_12px_rgb(0,0,0,0.3),inset_0_1px_0_rgb(255,255,255,0.05)]">
                  <h3 className="text-lg font-semibold text-foreground">
                    Security-minded defaults
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Roles and org boundaries matter. The API enforces
                    authorization for recruiter versus candidate flows so each
                    party sees only what they should.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6 container mx-auto bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Try the app
              </h2>
              <div className="space-y-4 text-base text-muted-foreground max-w-3xl">
                <p>
                  Open the Hirevine web app to explore jobs, applications, and
                  pipeline views against your configured API. For local
                  development, follow the README in{" "}
                  <code className="rounded bg-muted px-1 py-0.5 text-sm">
                    hirevine-v2-web
                  </code>{" "}
                  and{" "}
                  <code className="rounded bg-muted px-1 py-0.5 text-sm">
                    hirevine-v2-be
                  </code>
                  .
                </p>
                <p>
                  <Link
                    href={appUrl}
                    className="text-primary font-medium underline-offset-4 hover:underline"
                  >
                    Go to app →
                  </Link>
                  {" · "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-primary font-medium underline-offset-4 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
        <Footer2
          logo={getMarketingLogo()}
          tagline={SITE_TAGLINE}
          menuItems={FOOTER_MENU}
          copyright={`© ${new Date().getFullYear()} ${SITE_NAME}. All rights reserved.`}
          bottomLinks={[
            { text: "Privacy Policy", url: "/privacy" },
            { text: "Terms of Service", url: "/terms" },
          ]}
        />
      </div>
    </>
  );
}
