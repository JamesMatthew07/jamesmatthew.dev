"use client";

import { useEffect, useId, useState } from "react";
import { Download, FileText, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

type DownloadCvButtonProps = {
  className?: string;
  label?: string;
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline" | "ghost" | "secondary";
};

export function DownloadCvButton({
  className,
  label = "Download CV",
  size = "default",
  variant = "outline",
}: DownloadCvButtonProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  function downloadCv() {
    const link = document.createElement("a");

    link.href = profile.cvPath;
    link.download = profile.cvFileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setOpen(false);
  }

  return (
    <>
      <Button
        type="button"
        variant={variant}
        size={size}
        className={className}
        onClick={() => setOpen(true)}
      >
        <Download data-icon="inline-start" className="size-4" />
        {label}
      </Button>

      {open ? (
        <div
          className="fixed inset-0 z-[90] grid place-items-center bg-black/70 px-4 backdrop-blur-sm"
          role="presentation"
          onMouseDown={() => setOpen(false)}
        >
          <div
            aria-describedby={descriptionId}
            aria-labelledby={titleId}
            aria-modal="true"
            className="relative w-full max-w-md border border-zinc-200 bg-white p-6 text-zinc-950 shadow-2xl shadow-black/30"
            role="dialog"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              aria-label="Close CV download confirmation"
              className="absolute right-4 top-4 grid size-8 place-items-center rounded-md text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950"
              type="button"
              onClick={() => setOpen(false)}
            >
              <X className="size-4" />
            </button>

            <span className="grid size-11 place-items-center rounded-md bg-zinc-950 text-lime-200">
              <FileText className="size-5" />
            </span>
            <h2 id={titleId} className="mt-6 text-2xl font-semibold tracking-normal">
              Download James Matthew Llanos&apos; CV?
            </h2>
            <p id={descriptionId} className="mt-3 text-sm leading-6 text-zinc-600">
              This will save a PDF copy of the CV to your device.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <Button
                type="button"
                className="h-10 !bg-lime-300 !text-black hover:!bg-lime-200 hover:!text-black focus-visible:!text-black"
                onClick={downloadCv}
              >
                <Download data-icon="inline-start" className="size-4" />
                Download
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-10"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
