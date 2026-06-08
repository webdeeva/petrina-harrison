import type { Metadata } from "next";
import { Cormorant_Garamond, Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://petrina-harrison.netlify.app"),
  title: {
    default:
      "Dr. Petrina N. Harrison, DNP, APRN, AGCNS-BC, CIC — No Woman Left Behind",
    template: "%s · Dr. Petrina N. Harrison",
  },
  description:
    "The personal site of Dr. Petrina N. Harrison, DNP, APRN, AGCNS-BC, CIC — Doctor of Nursing Practice, board-certified Adult-Gerontology Clinical Nurse Specialist, Certified in Infection Control, ovarian-cancer advocate, educator, and patent-pending inventor.",
  openGraph: {
    title:
      "Dr. Petrina N. Harrison, DNP, APRN, AGCNS-BC, CIC — No Woman Left Behind",
    description:
      "A life devoted to the women medicine forgot. Clinical nurse specialist, ovarian-cancer advocate, nursing professor, and patent-pending inventor.",
    url: "https://petrina-harrison.netlify.app",
    siteName: "Dr. Petrina N. Harrison",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Dr. Petrina N. Harrison, DNP, APRN, AGCNS-BC, CIC — A life devoted to the women medicine forgot.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dr. Petrina N. Harrison, DNP, APRN, AGCNS-BC, CIC — No Woman Left Behind",
    description:
      "A life devoted to the women medicine forgot. Clinical nurse specialist, ovarian-cancer advocate, nursing professor, and patent-pending inventor.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
