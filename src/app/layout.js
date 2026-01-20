import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import siteConfig from "../data/siteConfig";
import { Poppins } from "next/font/google";

/* -----------------------------------------
   GLOBAL METADATA (SEO + WHATSAPP)
------------------------------------------ */
export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),

  // 🔹 SEO (Google)
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.description,

  viewport: "width=device-width, initial-scale=1",

  // 🔹 WHATSAPP / SOCIAL (SHORT)
  openGraph: {
    title: siteConfig.seo.ogTitle,
    description: siteConfig.seo.ogDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.companyName,
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.companyName,
      },
    ],
  },

  // 🔹 TWITTER / X
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.ogTitle,
    description: siteConfig.seo.ogDescription,
    images: [siteConfig.seo.ogImage],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* -----------------------------------------
   ROOT LAYOUT
------------------------------------------ */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white`}>
        <Header />

        <main>{children}</main>

        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
