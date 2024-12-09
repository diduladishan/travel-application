import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel Application Developed Using Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
