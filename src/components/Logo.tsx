"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "horizontal" | "badge" | "full";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "horizontal", className = "", size = "md" }: LogoProps) {
  if (variant === "badge") {
    const dim = size === "sm" ? 44 : size === "lg" ? 80 : 60;
    return (
      <Link href="/" className={`inline-flex items-center gap-3 group ${className}`} aria-label="Nazar Piliç Market Ana Sayfa">
        <div className="relative shrink-0 transition-transform group-hover:scale-105" style={{ width: dim, height: dim }}>
          <Image
            src="/images/logo-circle.webp"
            alt="Nazar Piliç Amblem"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>
    );
  }

  // Horizontal navbar brand with authentic storefront sign badge & typography
  return (
    <Link href="/" className={`inline-flex items-center gap-3.5 group select-none ${className}`} aria-label="Nazar Piliç Market Ana Sayfa">
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-md rounded-full overflow-hidden bg-white">
        <Image
          src="/images/logo-circle.webp"
          alt="Nazar Piliç Amblem"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-brand-red group-hover:text-red-700 transition-colors drop-shadow-xs">
            Nazar
          </span>
          <span className="text-xl sm:text-2xl font-black tracking-tight text-brand-charcoal">
            Piliç
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="text-[10px] font-bold tracking-widest text-brand-text-secondary uppercase">
            2005'ten bu yana
          </span>
          <span className="w-1 h-1 rounded-full bg-brand-red"></span>
          <span className="text-[10px] font-semibold tracking-wider text-brand-red">
            İnegöl
          </span>
        </div>
      </div>
    </Link>
  );
}
