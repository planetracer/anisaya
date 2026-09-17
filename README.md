# Anisaya Cleaning Website

A modern, mobile-first website for Anisaya Cleaning built with Next.js, React, and Tailwind CSS.

## Features

- 📱 **Mobile-first design** - Optimized for phones since most traffic comes from Google searches
- 💰 **Instant quote system** - 60-second quote form with dynamic price calculation
- 🎨 **Brand-consistent** - Purple bubbles branding with calming aesthetic
- 📍 **Multi-city support** - Separate pages for Allen, Plano, McKinney, and Frisco
- 🔍 **SEO-optimized** - Unique titles, descriptions, and local business schema
- ⚡ **Fast & lightweight** - Built for Cloudflare Pages hosting

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd ~/anisaya
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
anisaya/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── quote/             # Quote flow pages
│   ├── services/          # Service pages
│   ├── about/             # About page
│   ├── faq/               # FAQ page
│   └── ...other pages
├── components/            # Reusable React components
│   ├── Header.tsx         # Site header
│   ├── Footer.tsx         # Site footer
│   ├── QuoteForm.tsx      # Main quote form component
│   └── quote/             # Quote step components
├── lib/                   # Utilities and config
│   └── settings.ts        # Pricing and business info
└── public/               # Static files
```

## Configuration

### Update Business Info

Edit `lib/settings.ts` to update:
- Phone number
- Email address
- Service hours
- Pricing
- Promo codes

### Update Branding

Colors and fonts are defined in `tailwind.config.ts`. The Anisaya purple, pink, and other brand colors follow the brand guide.

## Pages to Build

According to the website guide, 14 pages are needed:
- ✅ Home `/`
- ✅ Instant quote `/quote`
- ✅ Services overview `/services`
- ⬜ Service detail pages (Standard, Deep, Move-in/out)
- ✅ City pages (Allen, Plano, McKinney, Frisco)
- ✅ About `/about`
- ✅ FAQ `/faq`
- ✅ Careers `/careers`
- ✅ Contact `/contact`
- ✅ Privacy `/privacy`
- ✅ Terms `/terms`

## Deployment

This site is optimized for **Cloudflare Pages**:

1. Push to GitHub
2. Connect to Cloudflare Pages
3. Set build command: `npm run build`
4. Set publish directory: `.next`

For forms and promo code validation, use Cloudflare Functions (serverless).

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Hosting**: Cloudflare Pages
- **Fonts**: Fredoka (headlines), Nunito Sans (body)

## Next Steps

1. Add your phone number, email, hours to `lib/settings.ts`
2. Create service detail pages for Standard, Deep, and Move-in/out
3. Set up email service (Brevo) for quote follow-ups
4. Set up booking integration
5. Add real photos and client testimonials
6. Deploy to Cloudflare Pages

## License

Private - Anisaya Cleaning 2026
