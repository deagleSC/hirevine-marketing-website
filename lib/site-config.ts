/**
 * Marketing site configuration (structure aligned with rentfit-marketing-website).
 * Product copy reflects hirevine-v2-web + hirevine-v2-be.
 */

export const SITE_NAME = "Hirevine";

export const SITE_DESCRIPTION =
  "Hiring automation: jobs, applications, and evaluation pipelines";

export const SITE_DESCRIPTION_LONG =
  "Hirevine helps teams publish roles, collect applications with resumes, and run structured evaluation pipelines—resume screening, role-specific quizzes, and hiring-manager-ready reports—so recruiters and candidates stay aligned in one place.";

export const SITE_TAGLINE =
  "Job posts, pipelines, and clear outcomes for recruiters and candidates.";

export const CONTACT_EMAIL = "supratik.deagle@gmail.com";

export const KEYWORDS = [
  "hiring automation",
  "applicant tracking",
  "recruitment pipeline",
  "resume screening",
  "job postings",
  "candidate applications",
  "hiring platform",
  "recruiter tools",
  "evaluation pipeline",
  "Hirevine",
] as const;

/** Logo asset under `public/` (same convention as rentfit `logo.png`). */
export const MARKETING_LOGO_SRC = "/app-logo.png";

/** Placeholder feature images (add files to `public/`). */
export const FEATURE_IMAGE_1 = "/image1.png";
export const FEATURE_IMAGE_2 = "/image2.png";
export const FEATURE_IMAGE_3 = "/image3.png";

export function getMarketingSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/+$/, "");
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL.replace(/\/+$/, "")}`;
  return "http://localhost:3000";
}

export const DEFAULT_APP_URL = "https://hirevine-v2-web.vercel.app";

/**
 * Product app URL. Override with `NEXT_PUBLIC_APP_URL` for local dev.
 */
export function getAppUrl(): string {
  const raw = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (raw) return raw.replace(/\/+$/, "");
  return DEFAULT_APP_URL;
}

export function getMarketingLogo() {
  return {
    url: "/",
    src: MARKETING_LOGO_SRC,
    alt: SITE_NAME,
    title: SITE_NAME,
  };
}

export const FOOTER_MENU = [
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
];
