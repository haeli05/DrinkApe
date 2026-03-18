# Ape Water - Shopify to Next.js Migration

This project is a complete migration of the Ape Water website from Shopify to a self-hosted Next.js + shadcn/ui stack.

## ✅ Completed

### Design System
- **Colors**: Exact brand colors migrated
  - Gold/Yellow: `#FFC800` (primary accent)
  - Dark Green: `#0C221A` (text and secondary)
  - Blue: `#1D6CBB` (accent)
  - Green: `#4D9E76` (accent)
- **Typography**: Poppins font with matching weights (400, 500, 600, 700)
- **Font styles**: Body weight 500, Headings weight 700, line-height 1.4 for body

### Components Built
1. **Header/Navigation**
   - Logo placeholder
   - Desktop navigation menu (Water, Merch, Story of Ape, Wholesale)
   - User account icon
   - Shopping cart icon
   - Top announcement bar

2. **Hero Section**
   - Two-slide carousel
   - Gradient backgrounds matching brand colors
   - "Unleash Your Primal Thirst" messaging
   - Navigation controls
   - Rotating badge element (100% Natural)
   - Image placeholders ready

3. **Value Proposition Section**
   - 6 feature cards with icons:
     - 100% Natural Spring Water
     - Locally Sourced
     - Natural Electrolytes & Minerals
     - Infinitely Recyclable Cans
     - Tap Water Free
     - Fluoride & Sulfate Free

4. **Featured Products**
   - 3 bundle cards (Nice, Big, Huge packages)
   - "Most Popular" badge on Big Package
   - Pricing display
   - Add to cart buttons
   - Image placeholders ready

5. **Marketing Tagline Banner**
   - Rotating messages every 3 seconds
   - Brand messaging (hydrate, recyclable, natural, etc.)

6. **Footer**
   - Brand info
   - Navigation links
   - Social media icons
   - Copyright

## 📝 TODO - Add Real Content

### Images Needed
Replace placeholders in these locations:

1. **Logo** (`components/layout/header.tsx`)
   - Current: Text placeholder "APE WATER"
   - Add: Actual Ape Water logo from `/Users/gladosiv/Desktop/Ape Big Package_files/Copy_of_AW.MAIN.LOGO.NS.png`

2. **Hero Slides** (`components/sections/hero.tsx`)
   - Two hero background images
   - Position: Cover background for each slide

3. **Product Images** (`components/sections/featured-products.tsx`)
   - Ape Nice Package image
   - Ape Big Package image (use `Ape-Bundle-Image-Main_*.jpg`)
   - Ape Huge Package image (use `Total-Ape-Bundle-Image-Main_*.jpg`)
   - Starter bundle: `Starter-Bundle-Image-1_*.jpg`

4. **Favicon**
   - Add to `/public` directory
   - Update in `app/layout.tsx` metadata

### Videos (if applicable)
- Check if original site had product videos
- Add to relevant product sections

### Additional Pages to Build
- `/water` - Product listing page
- `/merch` - Merchandise page
- `/story` - About/Story page
- `/wholesale` - Wholesale information
- Product detail pages
- Cart page
- Checkout flow

## 🚀 Running the Project

```bash
# Install dependencies (if not already done)
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Design Fidelity

All design elements from drinkape.com have been preserved:
- Exact color scheme
- Poppins font family with proper weights
- Layout structure and sections
- Interactive elements (sliders, rotating text)
- Button styles with rounded-full
- Card layouts with shadows and hover effects
- Uppercase headings matching original
- Font weights and line-heights

## 🔧 Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Font**: Poppins (via next/font/google)
- **Language**: TypeScript

## 📦 Project Structure

```
/app
  layout.tsx          # Root layout with Poppins font
  page.tsx            # Homepage assembly
  globals.css         # Global styles + brand colors
/components
  /layout
    header.tsx        # Site header & navigation
    footer.tsx        # Site footer
  /sections
    hero.tsx          # Hero carousel
    value-proposition.tsx  # Feature grid
    featured-products.tsx  # Product bundles
    marketing-tagline.tsx  # Rotating banner
  /ui
    (shadcn components)
```

## 📸 Next Steps

1. Copy images from `/Users/gladosiv/Desktop/Ape Big Package_files/` to `/public/images/`
2. Update image paths in components
3. Optimize images (use Next.js Image component)
4. Add product data (consider a CMS or JSON file)
5. Build remaining pages
6. Add shopping cart functionality
7. Integrate payment processing
8. Set up product management
