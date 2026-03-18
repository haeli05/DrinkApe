# Ape Water - Next.js Website

Self-hosted Next.js website for Ape Water, migrated from Shopify with exact design fidelity.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 🎨 Features

- ✅ **Exact Shopify design** - All colors, fonts, and layouts migrated
- ✅ **Bebas Neue + Poppins fonts** - Exact match (headings + body)
- ✅ **Brand colors** - Gold (#FFC800), Dark Green (#0C221A), Blue, Green
- ✅ **Responsive design** - Mobile-first approach
- ✅ **shadcn/ui components** - Modern, accessible UI
- ✅ **Real product images** - All assets migrated
- ✅ **Interactive elements** - Hero carousel, rotating messages
- ✅ **Value propositions** - 6 feature cards with icons
- ✅ **Featured bundles** - Product cards with pricing

## 📦 Tech Stack

- **Next.js 15+** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui**
- **Lucide Icons**
- **Poppins Font** (via next/font)

## 📁 Project Structure

```
/app
  layout.tsx          # Root layout with Poppins
  page.tsx            # Homepage assembly
  globals.css         # Global styles + brand colors
/components
  /layout
    header.tsx        # Site navigation
    footer.tsx        # Site footer
  /sections
    hero.tsx          # Hero carousel
    value-proposition.tsx  # Feature cards
    featured-products.tsx  # Product bundles
    marketing-tagline.tsx  # Rotating banner
  /ui
    (shadcn components)
/public/images        # Product images (22 files)
```

## 🔧 Available Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📸 Design Details Preserved

- **Typography**: Bebas Neue for headings, Poppins (weight 500) for body, line-height 1.4
- **Colors**: HSL values matching exact brand guidelines
- **Animations**: 20s slow spin, 3s rotating messages
- **Layout**: Container max-width, padding, responsive breakpoints
- **Buttons**: Rounded-full, uppercase text, hover states
- **Cards**: Shadow effects, hover transitions, featured badges

## ✅ Completed Pages

- ✅ Homepage with hero carousel, value props, featured bundles
- ✅ Product pages (9 products including bundles and merch)
- ✅ Collection pages (Water, Merch)
- ✅ About Us / Story of Ape page
- ✅ B2B Wholesale page with contact form
- ✅ Cart page with quantity controls
- ✅ Account pages (Login, Register)
- ✅ All product images and assets migrated

## 📝 Next Steps

- [ ] Download value proposition icon PNG files (6 icons)
- [ ] Add shopping cart functionality (currently UI only)
- [ ] Integrate payment processing (Stripe/PayPal)
- [ ] Add CMS for product management
- [ ] Optimize images with next/image component
- [ ] Add comprehensive SEO metadata
- [ ] Set up analytics (GA4, Meta Pixel)
- [ ] Add user authentication backend
- [ ] Add search functionality

## 🌐 Deployment

This Next.js app can be deployed to:
- **Vercel** (recommended - zero config)
- **Netlify**
- **AWS Amplify**
- **Self-hosted** (Docker, VPS)

```bash
npm run build
npm start
```

## 📄 License

© 2025 Ape Water. All rights reserved.
