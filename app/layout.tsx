import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://drinkape.com'),
  title: "Best Canned Spring Water Delivery Services in Sustainable Cans Atlanta",
  description: "Our commitment to providing the finest quality natural spring water is unmatched, ensuring that every sip delivers pure refreshment sourced from California's natural springs.",
  keywords: "spring water, canned water, sustainable water, natural water, aluminum cans, recyclable water, mountain spring water",
  openGraph: {
    title: "Best Canned Spring Water Delivery Services in Sustainable Cans Atlanta",
    description: "Our commitment to providing the finest quality natural spring water is unmatched, ensuring that every sip delivers pure refreshment sourced from California's natural springs.",
    siteName: "Ape Water",
    type: "website",
    url: "https://drinkape.com",
    images: [
      {
        url: "/images/Ape-Water---Box-and-Can-1a-OPT.jpg",
        width: 1200,
        height: 628,
        alt: "Ape Water - Natural Spring Water",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Canned Spring Water Delivery Services in Sustainable Cans Atlanta",
    description: "Our commitment to providing the finest quality natural spring water is unmatched, ensuring that every sip delivers pure refreshment sourced from California's natural springs.",
    images: ["/images/Ape-Water---Box-and-Can-1a-OPT.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
