# Hirevine marketing site

Public **Next.js** marketing website for **Hirevine**: positioning, feature sections, FAQ, and legal pages. It does **not** implement product APIs—those live in **hirevine-v2-be**; the recruiter/candidate app is **hirevine-v2-web**.

Copy and structure are aligned with the current product: job posts, applications, evaluation pipelines (resume screening → quiz → hiring report), and links to the deployed web app.

## Related repositories

| Repository | Role |
|------------|------|
| [hirevine-v2-web](../hirevine-v2-web/) | Product web app (recruiters & candidates) |
| [hirevine-v2-be](../hirevine-v2-be/) | HTTP API, OpenAPI, Inngest |

## Requirements

- **Node.js** ≥ 20

## Environment

Copy `.env.example` to `.env.local` and adjust:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL of **this** marketing deployment (no trailing slash). Used for metadata, sitemap, and canonical URLs. |
| `NEXT_PUBLIC_APP_URL` | URL of the **product web app** (“Open app” / CTAs). Defaults in `lib/site-config.ts` if unset. |

## Local development

```bash
npm ci
cp .env.example .env.local   # set URLs as needed
npm run dev
```

Open the URL printed by the dev server (default `http://localhost:3000`).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Next.js dev server |
| `npm run build` | Production build |
| `npm run start` | Production server |
| `npm run lint` | ESLint |

## Content & assets

- Global styles and theme tokens: `app/globals.css` (aligned with hirevine-v2-web typography setup).
- Site-wide copy and CTAs: `lib/site-config.ts`.
- Feature section images (optional): place `image1.png`, `image2.png`, `image3.png` under `public/` (see `FEATURE_IMAGE_*` in `lib/site-config.ts`).

## License

Private project unless otherwise stated by the repository owner.
