import type { Metadata, Viewport } from "next";
import { Providers } from "@/components/providers";
import "./globals.css";

const siteUrl = "https://anshumannigam.github.io/Anshuman-Nigam/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anshuman Nigam — Ideas. Algorithms. Action.",
    template: "%s · Anshuman Nigam",
  },
  description:
    "Anshuman Nigam is an engineer building practical systems across AI, machine learning, data, and software.",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Anshuman Nigam — Ideas. Algorithms. Action.",
    description:
      "An engineer building practical systems across AI, machine learning, data, and software.",
    url: siteUrl,
    siteName: "Anshuman Nigam",
    type: "website",
    images: [{ url: `${siteUrl}og.svg`, width: 1200, height: 630, alt: "Anshuman Nigam — Ideas. Algorithms. Action." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshuman Nigam — Ideas. Algorithms. Action.",
    description:
      "An engineer building practical systems across AI, machine learning, data, and software.",
    images: [`${siteUrl}og.svg`],
  },
  robots: { index: true, follow: true },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f3ee" },
    { media: "(prefers-color-scheme: dark)", color: "#11110f" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
