import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valen Info | High-Tech IT Solutions & Digital Agency",
  description:
    "Valen Info - Innovative Digital Agency and Creative Enterprise IT Solutions. Cloud architectures, custom software development, data analytics, and digital transformation.",
  metadataBase: new URL("https://valen.info"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-dark.png", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.png", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/icon-dark.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Valen Info | High-Tech IT Solutions & Digital Agency",
    description:
      "Transforming complex problems into elegant digital realities. High-tech enterprise solutions, cloud architectures, and digital services.",
    url: "https://valen.info",
    siteName: "Valen Info",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Valen Info - High-Tech IT Solutions & Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valen Info | High-Tech IT Solutions & Digital Agency",
    description:
      "Transforming complex problems into elegant digital realities. High-tech enterprise solutions, cloud architectures, and digital services.",
    images: ["/og-image.png"],
    creator: "@valeninfo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="bg-background text-on-surface font-body-md selection:bg-primary selection:text-on-primary md:selection:bg-primary/30 md:selection:text-on-surface">
        {children}
      </body>
    </html>
  );
}
