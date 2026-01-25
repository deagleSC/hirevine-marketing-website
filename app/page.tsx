import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Hero7 } from "@/components/hero7";
import { Feature1 } from "@/components/feature1";
import { Pricing4 } from "@/components/pricing4";
import { Faq1 } from "@/components/faq1";
import { ContactSection } from "@/components/contact-section";
import { Footer2 } from "@/components/footer2";
import { StructuredData } from "@/components/structured-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hirevine.ai";

export const metadata: Metadata = {
  title:
    "Hirevine - Enterprise Talent Intelligence Platform | AI-Powered Recruitment",
  description:
    "Streamline your recruitment process with AI-powered candidate screening, automated resume parsing, and voice-based interviews. Reduce time-to-hire by 85% with Hirevine's multimodal intelligence engine.",
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
    "voice interviews",
    "multimodal AI",
  ],
  openGraph: {
    title:
      "Hirevine - Enterprise Talent Intelligence Platform | AI-Powered Recruitment",
    description:
      "Streamline your recruitment process with AI-powered candidate screening, automated resume parsing, and voice-based interviews. Reduce time-to-hire by 85% with Hirevine.",
    url: siteUrl,
    siteName: "Hirevine",
    images: [
      {
        url: `${siteUrl}/app-logo.png`,
        width: 1200,
        height: 630,
        alt: "Hirevine - Enterprise Talent Intelligence Platform",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Hirevine - Enterprise Talent Intelligence Platform | AI-Powered Recruitment",
    description:
      "Streamline your recruitment process with AI-powered candidate screening, automated resume parsing, and voice-based interviews.",
    images: [
      {
        url: `${siteUrl}/app-logo.png`,
        alt: "Hirevine - Enterprise Talent Intelligence Platform",
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
  name: "Hirevine",
  url: siteUrl,
  logo: `${siteUrl}/app-logo.png`,
  description:
    "Enterprise Talent Intelligence Platform. AI-powered recruitment screening, automated resume parsing, and voice-based interviews to streamline the hiring process.",
  sameAs: [
    // Add social media links when available
    // "https://twitter.com/hirevine",
    // "https://linkedin.com/company/hirevine",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "supratik.deagle@gmail.com",
    availableLanguage: ["English"],
  },
  foundingDate: "2025",
  legalName: "Hirevine",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hirevine",
  url: siteUrl,
  description:
    "Enterprise Talent Intelligence Platform. AI-powered candidate screening, automated resume parsing, and voice-based interviews to reduce time-to-hire by 85%.",
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
  name: "Hirevine",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  description:
    "Enterprise Talent Intelligence Platform. AI-powered candidate screening, automated resume parsing, and voice-based interviews to streamline recruitment.",
  url: siteUrl,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "AI-Powered Resume Parsing",
    "Real-Time Voice Interviews",
    "Automated Candidate Screening",
    "Human-in-the-Loop Evaluation",
    "Team Collaboration",
    "Analytics Dashboard",
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
        text: "Hirevine is an Enterprise Talent Intelligence Platform that streamlines recruitment through AI-powered candidate screening, automated resume parsing, and voice-based interviews. It helps organizations reduce time-to-hire by 85% by automating resume review and technical screening.",
      },
    },
    {
      "@type": "Question",
      name: "How does AI resume parsing work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hirevine uses Gemini 2.0 Flash multimodal AI to process PDF resumes directly, extracting structured data including name, email, skills, experience, and education. No brittle OCR or regex parsing—the AI understands resume formats naturally and extracts key information automatically.",
      },
    },
    {
      "@type": "Question",
      name: "What file formats do you support for resumes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hirevine supports PDF resume files. Our multimodal AI engine can process resumes in various formats and layouts, automatically extracting candidate information, skills, work experience, and education details.",
      },
    },
    {
      "@type": "Question",
      name: "How do AI interviews work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hirevine conducts real-time voice-based interviews using Gemini 2.0 Flash Live, with sub-800ms latency. The AI builds dynamic prompts based on the job description and candidate resume, asking relevant technical questions and following up based on responses. The interview is streamed in real-time and transcripts are automatically generated.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={softwareApplicationSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: siteUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Features",
              item: `${siteUrl}/#features`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Pricing",
              item: `${siteUrl}/#pricing`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "FAQ",
              item: `${siteUrl}/#faq`,
            },
          ],
        }}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Talent Intelligence & Recruitment Platform",
          provider: {
            "@type": "Organization",
            name: "Hirevine",
          },
          areaServed: "Worldwide",
          description:
            "AI-powered recruitment services including resume parsing, candidate screening, and voice-based interviews.",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
        }}
      />
      <div className="min-h-screen">
        <Navbar />
        <Hero7
          heading="Streamline Your Hiring Process with AI-Powered Talent Intelligence"
          description="Reduce time-to-hire by 85% with automated resume parsing, AI-powered candidate screening, and voice-based interviews. Perfect for high-growth organizations looking to scale recruitment efficiently."
          button={{
            text: "Get Started",
            url: "https://hirevine-web-1026586041764.asia-south1.run.app/",
          }}
          reviews={null}
        />

        {/* Feature 1: Multimodal Resume Parsing - Image on right, text on left */}
        <Feature1
          id="features"
          title="Multimodal AI Resume Parsing"
          description="Process PDF resumes directly with Gemini 2.0 Flash multimodal AI—no brittle OCR or regex parsing. Automatically extract candidate information, skills, experience, and education. Our advanced AI understands resume formats naturally and extracts structured data in seconds."
          imageSrcLight="/assets/analysis-light.png"
          imageSrcDark="/assets/analysis-dark.png"
          imageAlt="AI Resume Parsing"
          imagePosition="right"
          variant="default"
        />

        {/* Feature 2: Real-Time AI Interviews - Image on left, text on right */}
        <Feature1
          title="Real-Time AI-Powered Interviews"
          description="Conduct voice-based interviews with sub-800ms latency using Gemini 2.0 Flash Live. The AI builds dynamic prompts based on job descriptions and candidate resumes, asking relevant technical questions and following up intelligently. Stream interviews in real-time with automatic transcript generation."
          imageSrcLight="/assets/puzzles-light.png"
          imageSrcDark="/assets/puzzles-dark.png"
          imageAlt="AI Interviews"
          imagePosition="left"
          variant="muted"
        />

        {/* Feature 3: Human-in-the-Loop Evaluation - Image on right, text on left */}
        <Feature1
          title="Human-in-the-Loop Evaluation"
          description="Maintain human oversight with mandatory justification signatures for all hiring decisions. Evaluators review AI-generated scores and summaries, then provide their own assessment with required justifications. This HITL model ensures quality while maintaining the speed of AI automation."
          imageSrcLight="/assets/dashboard-light.png"
          imageSrcDark="/assets/dashboard-dark.png"
          imageAlt="Evaluation Dashboard"
          imagePosition="right"
          variant="default"
        />

        <Pricing4
          title="Pricing"
          description="Hirevine is currently in free preview. Pricing plans will be introduced in the future as we continue to enhance the platform."
          plans={[
            {
              name: "Professional",
              badge: "Professional",
              monthlyPrice: "$99",
              yearlyPrice: "$990",
              features: [
                "Unlimited resume parsing",
                "AI-powered interviews",
                "Advanced candidate matching",
                "Team collaboration",
              ],
              buttonText: "Get Started",
            },
            {
              name: "Free",
              badge: "Free Preview",
              monthlyPrice: "$0",
              yearlyPrice: "$0",
              features: [
                "Unlimited resume parsing",
                "AI-powered candidate screening",
                "Real-time AI interviews",
                "Human-in-the-loop evaluation",
                "Team management",
              ],
              buttonText: "Start Free Preview",
            },
            {
              name: "Enterprise",
              badge: "Enterprise",
              monthlyPrice: "$299",
              yearlyPrice: "$2990",
              features: [
                "Everything in Professional",
                "Custom integrations",
                "Dedicated support",
                "Advanced analytics",
                "DPDP/GDPR compliance",
              ],
              buttonText: "Contact Sales",
            },
          ]}
        />

        <Faq1
          heading="Frequently Asked Questions"
          items={[
            {
              id: "faq-1",
              question: "What is Hirevine?",
              answer:
                "Hirevine is an Enterprise Talent Intelligence Platform that streamlines recruitment through AI-powered candidate screening, automated resume parsing, and voice-based interviews. It helps organizations reduce time-to-hire by 85% by automating resume review and technical screening.",
            },
            {
              id: "faq-2",
              question: "How does AI resume parsing work?",
              answer:
                "Hirevine uses Gemini 2.0 Flash multimodal AI to process PDF resumes directly, extracting structured data including name, email, skills, experience, and education. No brittle OCR or regex parsing—the AI understands resume formats naturally and extracts key information automatically in seconds.",
            },
            {
              id: "faq-3",
              question: "What file formats do you support for resumes?",
              answer:
                "Hirevine supports PDF resume files. Our multimodal AI engine can process resumes in various formats and layouts, automatically extracting candidate information, skills, work experience, and education details without manual data entry.",
            },
            {
              id: "faq-4",
              question: "How do AI interviews work?",
              answer:
                "Hirevine conducts real-time voice-based interviews using Gemini 2.0 Flash Live, with sub-800ms latency. The AI builds dynamic prompts based on the job description and candidate resume, asking relevant technical questions and following up based on responses. The interview is streamed in real-time and transcripts are automatically generated.",
            },
            {
              id: "faq-5",
              question: "What is Human-in-the-Loop (HITL) evaluation?",
              answer:
                "HITL evaluation ensures human oversight in the hiring process. After AI generates interview scores and summaries, evaluators review candidates and provide mandatory justifications for their hiring decisions. This maintains quality and accountability while leveraging AI speed and efficiency.",
            },
            {
              id: "faq-6",
              question: "Is Hirevine really free?",
              answer:
                "Yes! Hirevine is currently in free preview, which means all features are available at no cost. This includes unlimited resume parsing, AI-powered candidate screening, real-time AI interviews, and human-in-the-loop evaluation. We'll introduce pricing plans in the future as we continue to enhance the platform.",
            },
            {
              id: "faq-7",
              question: "Do I need to create an account?",
              answer:
                "Yes, creating a free account is required to use Hirevine. This allows you to manage job postings, upload resumes, conduct interviews, and track candidates. You can sign up quickly using email or Google OAuth. Organizations can invite team members with role-based access control (Admin or Evaluator).",
            },
            {
              id: "faq-8",
              question:
                "How accurate is the AI resume parsing and candidate matching?",
              answer:
                "Our multimodal AI engine uses Gemini 2.0 Flash, trained on millions of documents, to provide highly accurate resume parsing and candidate matching. The AI extracts structured data with high precision and generates match scores based on job requirements. Human evaluators review all decisions to ensure quality.",
            },
          ]}
        />

        <ContactSection />

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
                { text: "Features", url: "#features" },
                { text: "Pricing", url: "#pricing" },
                { text: "FAQ", url: "#faq" },
              ],
            },
            {
              title: "Company",
              links: [
                { text: "About", url: "/about" },
                { text: "Contact", url: "#contact" },
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
