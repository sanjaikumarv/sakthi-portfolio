import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";

export const metadata: Metadata = {
  title: `${profile.name} — Generative AI Software Engineer`,
  description: profile.summary,
  authors: [{ name: profile.name, url: socialLinks.linkedin }],
  keywords: [
    "Generative AI",
    "Software Engineer",
    "LLM Applications",
    "Python",
    "FastAPI",
    "Groq API",
    "InsightFace",
    "ONNXRuntime",
    "Next.js",
    "Computer Vision",
    "AI Inference",
    "Conversational AI",
  ],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sakthi-portfolio.vercel.app",
    title: `${profile.name} — Generative AI Software Engineer`,
    description: profile.summary,
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Generative AI Software Engineer`,
    description: profile.summary,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD schema for search engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: profile.social.email,
    telephone: profile.social.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    sameAs: [socialLinks.github, socialLinks.linkedin],
    knowsAbout: [
      "Generative AI",
      "Large Language Models",
      "FastAPI",
      "Groq API",
      "InsightFace",
      "Python",
      "Next.js",
      "Computer Vision",
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#090a0f] text-slate-100 antialiased selection:bg-blue-600/30 selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
