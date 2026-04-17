"use client";

import Image from "next/image";
import { MARKETING_LOGO_SRC, SITE_NAME } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type HirevineLogoProps = {
  className?: string;
  /** Edge length in pixels (square). */
  size?: number;
  priority?: boolean;
  alt?: string;
};

export function HirevineLogo({
  className,
  size = 32,
  priority = false,
  alt = SITE_NAME,
}: HirevineLogoProps) {
  return (
    <Image
      src={MARKETING_LOGO_SRC}
      alt={alt}
      width={size}
      height={size}
      priority={priority}
      className={cn("shrink-0 object-contain", className)}
    />
  );
}
