import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Hero7 } from "@/components/hero7";
import { Feature1 } from "@/components/feature1";
import { Pricing4 } from "@/components/pricing4";
import { Faq1 } from "@/components/faq1";
import { ContactSection } from "@/components/contact-section";
import { Footer2 } from "@/components/footer2";
import { StructuredData } from "@/components/structured-data";
import {
  CONTACT_EMAIL,
  FEATURE_IMAGE_1,
  FEATURE_IMAGE_2,
  FEATURE_IMAGE_3,
  FOOTER_MENU,
  getAppUrl,
  getMarketingLogo,
  getMarketingSiteUrl,
  KEYWORDS,
  MARKETING_LOGO_SRC,
  SITE_DESCRIPTION,
  SITE_DESCRIPTION_LONG,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/site-config";

const siteUrl = getMarketingSiteUrl();
const appUrl = getAppUrl();

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${SITE_DESCRIPTION}`,
  description: SITE_DESCRIPTION_LONG,
  keywords: [...KEYWORDS],
  openGraph: {
    title: `${SITE_NAME} — ${SITE_DESCRIPTION}`,
    description: SITE_DESCRIPTION_LONG,
    url: siteUrl,
    siteName: SITE_NAME,
    images: [
      {
        url: `${siteUrl}${MARKETING_LOGO_SRC}`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — ${SITE_DESCRIPTION}`,
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
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
  alternates: {
    canonical: siteUrl,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: siteUrl,
  logo: `${siteUrl}${MARKETING_LOGO_SRC}`,
  description: SITE_DESCRIPTION_LONG,
  sameAs: [] as string[],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: CONTACT_EMAIL,
    availableLanguage: ["English"],
  },
  foundingDate: "2025",
  legalName: SITE_NAME,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: siteUrl,
  description: SITE_DESCRIPTION_LONG,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  description: SITE_DESCRIPTION_LONG,
  url: appUrl,
  featureList: [
    "Organization-scoped job postings",
    "Application pipeline with per-stage results",
    "Resume upload and screening",
    "Role-specific quiz assessments",
    "Hiring-manager Markdown reports",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Hirevine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hirevine is a hiring automation platform backed by the Hirevine API: teams publish jobs, candidates apply with resumes, and applications move through a structured evaluation pipeline—including resume screening, a quiz stage, and a final hiring-manager report.",
      },
    },
    {
      "@type": "Question",
      name: "How does the evaluation pipeline work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Applications progress through automated stages: initial resume screening, then a quiz when the run reaches the quiz stage, and finally a synthesized hiring report (Markdown) for recruiters. Long-running steps run asynchronously so the app stays responsive.",
      },
    },
    {
      "@type": "Question",
      name: "Who is Hirevine for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recruiters and admins manage organizations and jobs; candidates browse active jobs, apply with a resume, and complete assessments. Roles are enforced so each party sees the right views for their account.",
      },
    },
    {
      "@type": "Question",
      name: "How do I sign in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The web app supports email and password authentication backed by the Hirevine API session model.",
      },
    },
  ],
};

const footerLogo = getMarketingLogo();

export default function Home() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={softwareApplicationSchema} />
      <StructuredData data={faqSchema} />
      <div className="min-h-screen">
        <Navbar />
        <Hero7
          heading="Run jobs, applications, and hiring pipelines in one place"
          description="Publish roles under your organization, collect applications with resumes, and move candidates through structured evaluation—screening, quiz, and hiring-ready reports your team can act on."
          button={{
            text: "Open app",
            url: appUrl,
          }}
          reviews={null}
        />

        <Feature1
          id="features"
          title="Jobs and AI-shaped pipelines"
          description="Create job postings and, when configured, generate a structured hiring pipeline for a role—stages, quiz content, and screening logic—so every opening follows a consistent evaluation path."
          imageSrcLight={FEATURE_IMAGE_1}
          imageSrcDark={FEATURE_IMAGE_1}
          imageAlt="Job posts and hiring pipeline configuration"
          imagePosition="right"
          variant="default"
        />

        <Feature1
          title="Applications candidates can complete"
          description="Candidates discover active jobs, apply with a resume stored securely, and take the pipeline quiz when their application reaches that stage. Recruiters see status, scores, and reasoning as the run progresses."
          imageSrcLight={FEATURE_IMAGE_2}
          imageSrcDark={FEATURE_IMAGE_2}
          imageAlt="Applications list and candidate flow"
          imagePosition="left"
          variant="muted"
        />

        <Feature1
          title="Reports your team can read"
          description="When the pipeline finishes, recruiters get a hiring-manager-style report as Markdown—including summaries and recommendations—rendered in the application detail view alongside the rest of the pipeline."
          imageSrcLight={FEATURE_IMAGE_3}
          imageSrcDark={FEATURE_IMAGE_3}
          imageAlt="Hiring report and application detail"
          imagePosition="right"
          variant="default"
        />

        <Pricing4
          id="pricing"
          title="Pricing"
          description="Hirevine is evolving with the product. The app is available to try while we validate jobs, pipelines, and recruiter workflows—paid tiers may follow."
          plans={[
            {
              name: "Team",
              badge: "Planned",
              monthlyPrice: "—",
              yearlyPrice: "—",
              features: [
                "Reserved for future paid capabilities",
                "Same core flows until launch",
              ],
              buttonText: "Notify me",
            },
            {
              name: "Preview",
              badge: "Current",
              monthlyPrice: "$0",
              yearlyPrice: "$0",
              features: [
                "Organizations, jobs, and applications",
                "Pipeline stages with screening and quiz",
                "Resume upload and application detail views",
                "Hiring report (Markdown) on completion",
              ],
              buttonText: "Open app",
            },
            {
              name: "Enterprise",
              badge: "Planned",
              monthlyPrice: "—",
              yearlyPrice: "—",
              features: [
                "For larger hiring programs and integrations",
                "Details to be announced",
              ],
              buttonText: "Contact us",
            },
          ]}
        />

        <Faq1
          id="faq"
          heading="Frequently asked questions"
          items={[
            {
              id: "faq-1",
              question: "What is Hirevine?",
              answer:
                "Hirevine is a hiring automation platform: recruiters and candidates use the web app for job posts, applications, pipeline visualization, and application details, backed by the Hirevine API for authentication, organizations, jobs, resumes, applications, and asynchronous evaluation runs.",
            },
            {
              id: "faq-2",
              question: "What does the API do?",
              answer:
                "The API handles authentication, organizations and jobs, resume storage, the application lifecycle, OpenAPI documentation, and asynchronous pipeline runs (e.g. via Inngest) for screening, quiz progression, and final report generation when AI is configured.",
            },
            {
              id: "faq-3",
              question: "How are resumes handled?",
              answer:
                "Candidates upload a resume as part of applying; files are stored using the platform’s configured blob storage. Screening uses the resume text in pipeline automation according to your job configuration.",
            },
            {
              id: "faq-4",
              question: "What is the quiz stage?",
              answer:
                "When an application reaches the quiz stage, the candidate can load and submit the pipeline quiz from the app. Results feed into the next automation steps and the final report.",
            },
            {
              id: "faq-5",
              question: "What is the hiring report?",
              answer:
                "After the final pipeline stage, a hiring-manager-style report is produced as Markdown and shown on the application detail page—readable in the product with Markdown rendering—so your team can review outcomes in one place.",
            },
            {
              id: "faq-6",
              question: "Which roles exist in the product?",
              answer:
                "Accounts map to recruiter, candidate, and admin roles. Candidates apply across organizations; recruiters manage jobs and applications within their org with API-enforced authorization.",
            },
            {
              id: "faq-7",
              question: "Do I need an account?",
              answer:
                "Yes. Sign up with email and password to use the app as a recruiter or candidate. You’ll need a running API (see each repo’s README) and environment configuration for local development.",
            },
            {
              id: "faq-8",
              question: "Where do AI features come from?",
              answer:
                "When AI keys and related services are configured on the API, jobs can use AI-assisted pipeline generation and automated stages. Without those services, some steps may be limited or use stubs—see the API documentation for details.",
            },
          ]}
        />

        <ContactSection
          title="Contact"
          description="Questions about Hirevine or partnerships? Send a note—we read every message."
        />

        <Footer2
          logo={footerLogo}
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
