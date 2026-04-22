import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "In Your Element | Leadership Training for Emerging Leaders",
  description:
    "A self-paced online leadership program to build confidence, assertive communication and executive presence. 5 modules. Lifetime access. By Mariana Marcano at Elevative.",
  keywords:
    "leadership training, leadership coaching, online leadership course, assertive communication, executive presence, emerging leaders, Mariana Marcano, Elevative",
  alternates: {
    canonical: "https://in-your-element-landing.vercel.app",
  },
  openGraph: {
    title: "In Your Element | Leadership Training",
    description:
      "Build confidence, communication and leadership presence. 5-module self-paced program for mid-level leaders.",
    images: ["/images/mariana.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
