import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "header" | "footer" | "standalone" | "mark-only";
  className?: string;
}

export function Logo({ variant = "header", className = "" }: LogoProps) {
  const isHeader = variant === "header";

  return (
    <Link
      href="/"
      aria-label="EKAA Rise — home"
      className={`inline-flex flex-none items-center justify-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#176C70] ${className}`}
    >
      <Image
        src="/images/ekaa/ekaa-rise-official.png"
        alt="EKAA Rise"
        width={556}
        height={689}
        priority={isHeader}
        className={isHeader ? "h-[52px] w-auto object-contain sm:h-[62px]" : "h-[112px] w-auto object-contain"}
      />
    </Link>
  );
}
