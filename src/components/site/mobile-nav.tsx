"use client";

import { Menu, Send } from "lucide-react";

import { BrandLogo } from "@/components/site/brand-logo";
import { DownloadCvButton } from "@/components/site/download-cv-button";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems, profile } from "@/data/profile";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" size="icon" aria-label="Open navigation" />}>
        <Menu className="size-4" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[310px] border-white/10 bg-black text-white">
        <SheetHeader>
          <SheetTitle className="text-left text-base text-white">
            <BrandLogo />
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8 grid gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-3 text-sm font-medium text-white/72 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/85"
        >
          <Send className="size-4" />
          Email James
        </a>
        <DownloadCvButton
          className="mt-3 h-10 border-white/15 bg-white/5 px-3 text-white hover:bg-white/10 hover:text-white focus-visible:text-white"
        />
      </SheetContent>
    </Sheet>
  );
}
