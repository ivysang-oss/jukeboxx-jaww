# Website Starter Guide & Claude Context (Next.js 15 + Vercel)

**Read this first.** This is a reusable blueprint for building a fast, modern, SEO-friendly
marketing/catalog website — the same setup used successfully on other production sites.
Save this file as **`CLAUDE.md`** in the root of your new project; Claude Cowork/Code loads
it automatically at the start of every session, so your AI already knows the stack, the
conventions, and the publish workflow instead of figuring them out from scratch.

If you only remember one thing: **you (with Claude's help) edit text and images in this
folder, then push to GitHub, and the live site rebuilds itself on Vercel.** You do not
need to be a developer to make everyday edits.

> **Fill-in placeholders** appear in ANGLE BRACKETS throughout, e.g. `<YOUR-BUSINESS>`,
> `<your-domain>.com`, `<your-github-username>/<your-repo>`. Replace them once at the start.

---

## 1. What you're building (and the core philosophy)

A custom website on a modern stack — homepage, content pages, a catalog/listing section,
policy pages, a blog/journal, and contact/lead forms.

**The one idea that makes this easy: content is DATA, not code.** Almost everything you'll
want to change — the products/listings, the categories, blog posts, policies, phone number,
menu — lives in plain data files in a `lib/` folder. You (and Claude) edit those simple
files, and the page-building code renders them automatically. You rarely touch the actual
layout/design code.

---

## 2. Tech stack (plain-English)

| Piece | What it is | Why it matters |
|---|---|---|
| **Next.js 15** (App Router) | The website framework (React 19) | Pages live in `app/`. Each folder = a URL. |
| **TypeScript** | JavaScript with type-checking | Catches typos/mistakes before they go live. |
| **Tailwind CSS v4** | Styling system | Design tokens (colors, fonts) live in `app/globals.css` under `@theme`. |
| **Vercel** | The host | Builds & publishes the site automatically on every push to GitHub. |
| **GitHub** | Where the code is stored | The "save + publish" button. Pushing here = going live. |

> **Pin Next.js 15 on purpose.** The default `create-next-app` now installs Next.js **16**.
> This blueprint targets **15** for stability/compatibility — see the bootstrap step below.

---

## 3. Bootstrap from zero (one-time, ~15 minutes)

Ask Claude to walk you through these live. From a terminal, in the folder where you keep projects:

**1. Scaffold the app on Next.js 15** (answer the prompts: TypeScript **Yes**, ESLint **Yes**,
Tailwind **Yes**, App Router **Yes**, `src/` directory **No**, import alias `@/*` **Yes**):
```
npx create-next-app@15 <your-repo>
cd <your-repo>
```

**2. Start a git repo and make the first commit:**
```
git init
git add -A
git commit -m "Initial scaffold (Next.js 15, TS, Tailwind v4)"
```

**3. Create the GitHub repo and push** (needs the GitHub CLI — see §7):
```
gh repo create <your-github-username>/<your-repo> --private --source=. --push
```

**4. Connect it to Vercel** — go to https://vercel.com → **Add New… → Project** → import
`<your-repo>` from GitHub → framework preset **Next.js** → **Deploy**. From now on, every
push to `main` auto-deploys.

**5. Point your domain** (when ready) — in Vercel → Project → **Settings → Domains** → add
`<your-domain>.com`. Vercel shows the exact DNS records (an `A` record for the apex and a
`CNAME` for `www`) to enter at your DNS provider. **If you use email on that domain, do not
touch the MX or TXT records** — only add/replace the A and CNAME that Vercel specifies.

**6. Connect the folder in Claude Cowork** — open Cowork, connect this project folder.
Claude reads this `CLAUDE.md` automatically. You're ready to build.

---

## 4. The golden workflow (how a change goes live)

```
1. Open this folder in Claude Cowork (it's a connected folder).
2. Tell Claude what you want ("add a new product", "change the phone number",
   "write a blog post about X").
3. Claude edits the right file(s) here.
4. Claude runs a quick type-check:  npx tsc --noEmit   (should report no errors)
5. Publish from your terminal, in this folder:

   git add -A
   git commit -m "short description of the change"
   git push origin main

6. Vercel rebuilds automatically. The live site updates in ~1–2 minutes.
```

That's the whole loop. Claude can hand you the exact push commands each time.

> **Note on building locally:** the Cowork sandbox can't run a full `next build` (memory).
> That's expected — verify changes with `npx tsc --noEmit` and let **Vercel** do the real
> build. If a Vercel build ever fails, it emails you and the live site simply stays on the
> previous version — nothing breaks.

---

## 5. Recommended repo structure

```
app/                       # Pages (each folder is a URL)
  page.tsx                 #   Homepage  (/)
  <section>/page.tsx       #   A listing/catalog page  (/<section>)
  <section>/[slug]/        #   A detail page per item  (/<section>/<slug>)
  about/  contact/         #   Static content pages
  <service-pages>/         #   Lead-gen / service pages (with a form)
  blog/  (or journal/)     #   Blog / articles
  policies/[slug]/         #   Shipping, Returns, Privacy, Terms, etc.
  layout.tsx               #   Global wrapper (nav, footer, analytics)
  globals.css              #   Brand colors, fonts, design tokens (@theme)
  components/              #   Reusable UI (Nav, Footer, Card, Gallery, forms…)

lib/                       # ★ CONTENT LIVES HERE — edit these most ★
  catalog.ts               #   Your products/listings (one entry each) + helpers
  categories.ts            #   Categories/brands/collections
  site.ts                  #   Phone, email, tagline, nav menu, footer, socials
  blog.ts                  #   Blog posts
  policies.ts              #   Policy page text
  seo.ts                   #   Page titles & meta descriptions

public/images/             # All imagery
  catalog/<slug>/          #   Each item's photos (hero.* is the main one)
  logos/  backgrounds/
```

Adapt the names to your business (e.g. `catalog.ts` → `inventory.ts`, `menu.ts`,
`properties.ts`, `services.ts`). The *pattern* is what matters.

---

## 6. The content-as-data pattern (the heart of this setup)

Each content type is a typed array in `lib/`. Pages import it and render it. To add/edit/
remove an item, you edit the array — you never touch the page code.

Example `lib/catalog.ts`:
```ts
export type Item = {
  slug: string;          // URL id, e.g. "blue-widget-9000"
  name: string;
  category: string;
  price: number | "inquire";
  images: string[];      // first one is the card/hero image
  description: string;
  status?: "available" | "sold" | "reserved";
  featured?: boolean;
};

export const CATALOG: Item[] = [
  {
    slug: "blue-widget-9000",
    name: "Blue Widget 9000",
    category: "widgets",
    price: 1299,
    images: ["/images/catalog/blue-widget-9000/hero.jpg"],
    description: "A short, factual description.",
    status: "available",
    featured: true,
  },
  // …more items
];

export const getItem = (slug: string) => CATALOG.find((i) => i.slug === slug);
export const getByCategory = (c: string) => CATALOG.filter((i) => i.category === c);
```

Common recipes (ask Claude for these by name):
- **Add an item:** add photos to `public/images/catalog/<slug>/`, then add an entry to `CATALOG`.
- **Mark sold / change price:** edit that item's `status` or `price` (use `"inquire"` to hide the number).
- **Add a category/brand:** add an entry to `lib/categories.ts` — it can auto-generate its own page.
- **Change phone/email/menu:** all in `lib/site.ts`.
- **Add a blog post / edit a policy:** add an entry to `lib/blog.ts` / `lib/policies.ts`.
- **SEO titles & descriptions:** `lib/seo.ts`.

---

## 7. Styling & brand tokens

Colors and fonts are defined once in `app/globals.css` under Tailwind's `@theme` block, then
used everywhere via utility classes. Change a token there and it updates site-wide. Fonts are
loaded with `next/font`. Ask Claude to "set the brand palette and fonts" and describe your look.

---

## 8. Image conventions (keep things consistent)

- Item photos live in `public/images/catalog/<slug>/`; the main image is `hero.<ext>`.
- The listing card and the detail page both use the first image, so they always match.
- Pick ONE consistent hero style (angle, background, crop) and use it for every item — uniformity
  is what makes a catalog look premium.
- Logos: if you render them white-on-dark via a CSS invert, supply **solid black art on a
  transparent background** (PNG or WebP; avoid raw `.svg` unless you enable the Next.js SVG flag).

---

## 9. What's safe to change vs. what to be careful with

**✅ Safe anytime (this is the job):** text, prices, statuses, catalog items, categories, blog
posts, policies, menu labels, contact info, images, SEO copy — everything in `lib/` and
`public/images/`.

**⚠️ Ask Claude to explain impact first:** files in `app/components/` and page layout code,
`app/globals.css`, and build config (`next.config.ts`, `package.json`, `tsconfig.json`).

**⛔ Never change from here:** DNS records, environment variables / API keys (managed in the
Vercel dashboard), and domain / Vercel / GitHub account settings. Changing DNS can take the
site or email offline.

---

## 10. First-time setup on a new computer

> **Windows or Mac?** Every command is identical on both — only the terminal differs. On
> **Mac** use **Terminal**; on **Windows** use **PowerShell** or **Git Bash** (Git Bash is
> installed with Git for Windows and behaves most like the Mac Terminal — recommended). Open
> it by pressing the Windows key and typing "Git Bash" (or "PowerShell"). Claude Cowork works
> the same on both.

1. **Install Git** — https://git-scm.com/downloads *(on Windows, accept defaults — installs Git Bash)*
2. **Install the GitHub CLI** — https://cli.github.com — then `gh auth login` (GitHub.com → HTTPS → log in).
3. **Install Node.js** (v20+) — https://nodejs.org
4. **Clone your project** (if it already exists): `gh repo clone <your-github-username>/<your-repo>`
5. Inside the folder: `npm install` (only needed for local type-checks; Vercel does the real build).
6. **Connect the folder in Claude Cowork** and you're ready.

---

## 11. House rules for Claude

- Prefer editing **content files in `lib/`** over page/component code.
- After any change, run `npx tsc --noEmit` and report whether it's clean.
- Never touch DNS, secrets, or Vercel/GitHub account settings from here.
- Keep copy consistent with the site's established tone.
- Keep hero images to one uniform style (§8).
- Always hand the user the exact `git add / commit / push` commands after a change.
- This project targets **Next.js 15** — don't upgrade the major version without being asked.

---

## 12. Fill these in before you start

- Business name: `<YOUR-BUSINESS>`
- Live domain: `<your-domain>.com`
- GitHub repo: `<your-github-username>/<your-repo>`
- Contact: phone `<phone>`, email `<email>`
- Brand look: primary color(s), accent, heading font, body font
- What the catalog/listing represents (products, services, properties, menu items, etc.)

*Tell Claude these once and it can wire them through `lib/site.ts`, `globals.css`, and the
catalog data files for you.*
