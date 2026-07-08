// app/layout.tsx

import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import { ToastProvider } from "./ToastProvider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {

  title: {
    default:
    "MPlug Business Management",
    template: "%s | MPlug",
  },

  description:
  "Manage your business with ease",

  other: {
    "geo.region": "LS",
    "geo.placename": "Maseru, Lesotho",
    "geo.position": "-29.3158;27.4869",
    "ICBM": "-29.3158, 27.4869",
  },

  keywords: [
  "find businesses in Lesotho",
  "local services Lesotho",
  "Maseru businesses",
  "nail technicians in Lesotho",
  "tattoo artists in Lesotho",
  "carpenters in Lesotho",
  "crochet businesses in Lesotho",
  "welders in Lesotho",
  "small businesses in Lesotho",
  "business directory Lesotho",
  "MaseruPlug",
],

  authors: [
    {
      name: "Tankiso Fuma",
    },
    {
      name: "Lemohang Makintane",
    },
  ],

  creator: "Tankiso Fuma",

  applicationName: "MPlug",

  category: "Business Management",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.variable, poppins.variable)}
    >
      <body className="min-h-screen bg-white font-sans antialiased">
        <ToastProvider />

        {children}

        <Toaster />

      </body>
    </html>
  );
}