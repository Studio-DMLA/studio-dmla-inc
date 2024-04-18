import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu";
import Footer from "./components/footer";
import { Metadata } from "next";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

const twitter = {
  handle: "@MPStudioDMLA",
  site: "@MPStudioDMLA",
};

export const metadata: Metadata = {
  title: "Studio DMLA Inc.",
  description:
    "Studio DMLA portfolio and marketing website. Book a free consultation, see some of our products and service we offer. We partner with the best in each field from Latin America and locally to deliver cutting-edge digital solutions to Canadian companies while being responsible for the strategy, project management, and final product.",
  twitter: {
    card: "summary_large_image",
  },
  
  metadataBase: new URL('https://studio-dmla.ca'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },

  openGraph: {
    title: 'Studio DMLA Inc.',
    description: 'Studio DMLA portfolio and marketing website. Book a free consultation, see some of our products and service we offer. We partner with the best in each field from Latin America and locally to deliver cutting-edge digital solutions to Canadian companies while being responsible for the strategy, project management, and final product.',
    url: 'https://studio-dmla.ca',
    siteName: 'Studio DMLA Inc.',
    images: [
      {
        url: 'https://studio-dmla.ca/opengraph-image.png',
        width: 1200,
        height: 600,
        alt: 'Studio DMLA portfolio and marketing website. Book a free consultation, see some of our products and service we offer. We partner with the best in each field from Latin America and locally to deliver cutting-edge digital solutions to Canadian companies while being responsible for the strategy, project management, and final product.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  generator: 'Next.js',
  applicationName: 'Studio DMLA',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'Software developers', 'Technical SEO', 'Software', 'Digital Development', 'Digital Marketing', 'Web Development', 'Wordpress Development', 'Web design', 'Web Maintenance'],
  authors: [{ name: 'Robert Leeuwerink', url: 'https://www.linkedin.com/in/robertleeuwerink/' }],
  creator: 'Robert Leeuwerink',
  publisher: 'Robert Leeuwerink',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const resolvedMetadata = {
  title: metadata.title,
  description: metadata.description,
  canonical: `https://studio-dmla.ca`,
  ogImage: {
    alt: metadata.title,
    width: 1200,
    height: 630,
  },
  twitter: {
    cardType: "summary_large_image",
    handle: twitter.handle,
    site: twitter.site,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <GoogleTagManager gtmId="G-ZSGR746CFS" />
      <body className={inter.className + " "}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}