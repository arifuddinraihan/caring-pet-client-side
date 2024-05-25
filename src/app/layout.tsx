import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caring Pet",
  description:
    "Discover your perfect furry friend at Caring Pet, Dhaka's premier pet adoption site. We connect loving homes with rescue animals in need, offering a wide variety of pets for adoption. Join us in giving these wonderful animals a second chance. Adopt, don't shop!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
