# Ugarix Systems Website

The official bilingual website for **Ugarix Systems — أوغاريكس للأنظمة**.

An immersive dark-theme React experience built around the Ugarix brand idea: **Engineered to Endure — أنظمة تُبنى لتبقى**.

## Highlights

- Arabic and English with native RTL/LTR layout switching
- Responsive layouts from 360px mobile to large desktop screens
- Original animated system-core hero built with CSS, SVG, and Framer Motion
- Brand fonts and identity assets served locally
- Accessible navigation, keyboard focus states, reduced-motion support, and semantic structure
- Company story, capabilities, selected work, method, principles, disciplines, and project inquiry
- Netlify-ready contact form, redirects, and production configuration
- SEO metadata and Organization structured data

## Stack

- React 18
- Vite 6
- Framer Motion
- Lucide React
- CSS design system with no external UI framework

## Run locally

```bash
npm ci
npm run dev
```

Open the local URL shown by Vite.

## Production

```bash
npm run lint
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Content and brand assets

- Bilingual content: `src/i18n/content.js`
- Global design system: `src/styles.css`
- Brand assets: `public/brand/`
- Brand fonts: `public/fonts/`

## Contact form

The project inquiry form is configured for Netlify Forms. It is detected through the hidden static form in `index.html`, while the visible form lives in `src/App.jsx`.

## Deployment

The included `netlify.toml` builds the site with `npm run build`, publishes `dist`, and keeps client-side navigation safe through an SPA fallback.

All Ugarix identity assets and company content are proprietary to Ugarix Systems.
