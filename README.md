# Website

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4, deployed on Vercel.

See **CLAUDE.md** for the full working guide (stack, conventions, publish flow).

## Quick start

```bash
npm install          # install dependencies (first time only)
npm run dev          # local dev server at http://localhost:3000
npm run typecheck    # tsc --noEmit — should report no errors
```

## Where content lives

Edit files in `lib/` (they render automatically):

- `lib/site.ts` — name, tagline, contact info, nav menu
- `lib/catalog.ts` — products / listings
- `lib/categories.ts` — categories / collections
- `lib/blog.ts` — blog posts
- `lib/policies.ts` — policy pages
- `lib/seo.ts` — page titles & meta descriptions

Images go in `public/images/` (item photos in `public/images/catalog/<slug>/`).

## Publish (goes live on Vercel)

```bash
git add -A
git commit -m "describe your change"
git push origin main
```
