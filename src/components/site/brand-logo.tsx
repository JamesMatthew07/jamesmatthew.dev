import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <svg
        aria-hidden="true"
        className="size-8 shrink-0 overflow-visible"
        fill="none"
        viewBox="0 0 36 36"
      >
        <circle cx="18" cy="18" r="13.5" stroke="white" strokeOpacity="0.16" />
        <path d="M18 4.5v27M4.5 18h27" stroke="white" strokeOpacity="0.12" />
        <path d="M8 10 18 18 29 26" stroke="#9AFB7E" strokeLinecap="round" strokeWidth="2.6" />
        <path d="M8 10 18 18" stroke="#2D8CA8" strokeLinecap="round" strokeWidth="2.6" />
        <circle cx="8" cy="10" r="3.3" fill="#2D8CA8" />
        <circle cx="18" cy="18" r="4.2" fill="#9AFB7E" />
        <circle cx="29" cy="26" r="3.3" fill="#6AA85F" />
      </svg>
      <span className="text-base font-semibold tracking-normal text-white transition group-hover:text-white">
        james<span className="text-lime-300">.dev</span>
      </span>
    </span>
  );
}
