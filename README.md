# Family Care Farms Initiatives Nigeria

Official website — West Africa's Master CareFarm, official partner of Family & Care International (Germany).

**Stack:** Next.js 16 · Tailwind CSS v4 · Sanity CMS · Resend · Cloudflare Turnstile · Vercel

---

## Routes (25 total — all building clean)

| Route | Type | Description |
|---|---|---|
| `/` | Static | Homepage |
| `/about` | Static | Organisation, MOU, timeline, partners |
| `/model/how-it-works` | Static | CareFarm concept explainer |
| `/model/daily-life` | Static | Typical day, schedule, pillars |
| `/model/intergenerational` | Static | Intergenerational community |
| `/services/elderly-care` | Static | Residential care |
| `/services/dementia` | Static | Dementia & memory care |
| `/services/farm-therapy` | Static | Green care & animal therapy |
| `/services/training` | Static | Training & Education Centre |
| `/west-africa` | Static | West Africa mandate & expansion |
| `/apply` | Static | Application hub |
| `/apply/resident` | Static | Resident application form |
| `/apply/staff` | Static | Staff application form |
| `/apply/franchise` | Static | Franchise inquiry form |
| `/partners` | Static | Partner/invest + form |
| `/news` | Static | Blog listing (Sanity) |
| `/news/[slug]` | Dynamic | Blog post pages |
| `/contact` | Static | Contact form |
| `/studio/[[...tool]]` | Dynamic | Sanity Studio (admin) |
| `/api/resident-application` | Dynamic | Form handler |
| `/api/staff-application` | Dynamic | Form handler |
| `/api/franchise-inquiry` | Dynamic | Form handler |
| `/api/partner-inquiry` | Dynamic | Form handler |
| `/api/contact` | Dynamic | Form handler |

---

## Quick Setup

### 1. Install
```bash
npm install
```

### 2. Create Sanity project
```bash
npx sanity@latest init --project family-care-farms-ng --dataset production
```
Note the **Project ID** from Sanity dashboard.

### 3. Create `.env.local`
```bash
cp .env.local.example .env.local
# Fill in all values
```

| Variable | Source |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity dashboard → Settings |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `SANITY_API_TOKEN` | Sanity → API → Tokens → New Editor token |
| `RESEND_API_KEY` | resend.com → API Keys |
| `ADMIN_EMAIL` | Client admin email |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile → Add Site |
| `TURNSTILE_SECRET_KEY` | Same |
| `NEXT_PUBLIC_SITE_URL` | Production domain |

### 4. Run locally
```bash
npm run dev
# Site: http://localhost:3000
# Studio: http://localhost:3000/studio
```

---

## Deploy to Vercel

```bash
# Push to GitHub first
git init && git add . && git commit -m "initial"
git remote add origin https://github.com/YOUR_ORG/family-care-farms-ng.git
git push -u origin main
```

1. [vercel.com](https://vercel.com) → New Project → Import repo
2. Add all env vars from `.env.local`
3. Deploy

---

## Pending (Client to Confirm)

- [ ] Domain name → update `NEXT_PUBLIC_SITE_URL` + Vercel
- [ ] Admin email → `ADMIN_EMAIL` in `.env.local`
- [ ] WhatsApp number → `src/components/ui/WhatsAppButton.tsx` line 6
- [ ] Physical location → `Footer.tsx` MapPin section + `contact/page.tsx`
- [ ] Phone number → `Footer.tsx` Phone section
- [ ] Logo file → replace `<Leaf>` icon in `Navbar.tsx`
- [ ] Google Analytics ID → add `<Script>` tag in `layout.tsx`
- [ ] Brand color review (currently: Family & Care International green + earth/ochre)
- [ ] Transfer Sanity project ownership → Sanity dashboard → Members

---

## Sanity Studio Admin

Accessible at `/studio` on the live site.

**Schemas:**
- `post` — Blog posts
- `teamMember` — Team profiles
- `residentApplication` — Resident form submissions
- `staffApplication` — Staff form submissions
- `franchiseInquiry` — Franchise form submissions
- `partnerInquiry` — Partner/invest form submissions
- `contactMessage` — Contact form submissions

All form submissions are stored in Sanity AND emailed to admin via Resend.

**Grant client Sanity access:**
sanity.io → Project → Members → Invite → Editor role

---

## Form Flow (all 5 forms)

```
User submits form
  → Cloudflare Turnstile bot check
  → POST /api/[form-type]
  → Document created in Sanity (queryable in Studio)
  → Email notification sent to ADMIN_EMAIL via Resend
  → Success state shown to user
```

---

## Colors (can be updated in `src/app/globals.css`)

| Name | Hex | Usage |
|---|---|---|
| Forest 600 | `#2e7034` | Primary buttons, links |
| Forest 900 | `#1c3c1f` | Dark sections |
| Forest 950 | `#0e2011` | Footer, dark CTAs |
| Earth 600 | `#b96e1b` | Secondary buttons, labels |
| Earth 300 | `#e9bf6e` | Light accent on dark |
| Cream 50 | `#fdfcf8` | Section backgrounds |
