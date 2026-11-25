import Link from "next/link";

export default function Logo({ className = "h-14 sm:h-16" }: { className?: string }) {
  return (
    <Link href="/" className="flex items-center" aria-label="AccelEye home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/logo/logo-white.png" alt="AccelEye" className={`${className} w-auto`} />
    </Link>
  );
}
