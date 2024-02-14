import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Home | Hotel Cas Contador",
  description:
    "Tu navegador no soporta iframesTu navegador no soporta iframesTu navegador no soporta iframes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}
