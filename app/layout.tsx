import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bricktrust.in"),
  title: {
    default: "BrickTrust | India's Most Trusted New Launch Platform",
    template: "%s | BrickTrust",
  },
  description:
    "Discover verified new launch real estate projects from India's most trusted developers. Curated, transparent, and reliable — powered by the BrickTrust Score.",
  keywords: [
    "new launch projects India",
    "luxury real estate India",
    "BrickTrust",
    "Gurgaon new launch",
    "Mumbai luxury apartments",
    "RERA verified projects",
  ],
  openGraph: {
    title: "BrickTrust | India's Most Trusted New Launch Platform",
    description:
      "Discover verified new launch real estate projects from India's most trusted developers. Curated, transparent, and reliable.",
    url: "https://bricktrust.in",
    siteName: "BrickTrust",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrickTrust | India's Most Trusted New Launch Platform",
    description:
      "Discover verified new launch real estate projects from India's most trusted developers.",
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
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
