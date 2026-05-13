import type { Metadata } from "next";
import type { ReactNode } from "react";

import { TooltipProvider } from "@/components/ui/tooltip";
import { profile } from "@/data/profile";

import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.brand} | AI Engineer`,
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  description:
    "Portfolio for James Matthew Llanos, an AI Engineer building production AI systems, agents, automation, and full-stack products.",
  keywords: [
    "James Matthew Llanos",
    "AI Engineer",
    "Software Engineer",
    "AI Agents",
    "Automation",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: `${profile.brand} | AI Engineer`,
    description:
      "Production AI systems, agents, automation, ML pipelines, and full-stack engineering work.",
    type: "website",
    siteName: profile.brand,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.brand} | AI Engineer`,
    description:
      "Production AI systems, agents, automation, ML pipelines, and full-stack engineering work.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth bg-black antialiased">
      <body>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
