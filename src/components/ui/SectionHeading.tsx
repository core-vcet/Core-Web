import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface SectionHeadingProps {
  title: string;
  eyebrow?: string; // small label above the title, e.g. "Featured"
  description?: string;
  align?: "left" | "center"; // default "left"
  as?: "h2" | "h3"; // default "h2" (the page owns the h1)
  action?: { label: string; href: string }; // e.g. "View all"
}

export function SectionHeading({
  title,
  eyebrow,
  description,
  align = "left",
  as: HeadingTag = "h2",
  action,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const headingSizeClasses =
    HeadingTag === "h3"
      ? "text-[1.25rem] md:text-[1.5rem] leading-[1.3]"
      : "text-[1.5rem] md:text-[1.75rem] leading-[1.3]";

  return (
    <div
      className={`flex flex-col gap-3 ${
        isCenter
          ? "items-center text-center"
          : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={`flex flex-col gap-2 ${isCenter ? "items-center" : ""}`}>
        {eyebrow && (
          <p className="text-[13px] sm:text-[14px] font-medium uppercase tracking-wider text-brand-cyan">
            {eyebrow}
          </p>
        )}

        <HeadingTag
          className={`${headingSizeClasses} font-semibold text-high break-words`}
        >
          {title}
        </HeadingTag>

        {description && (
          <p className="text-base font-normal text-body max-w-prose">
            {description}
          </p>
        )}
      </div>

      {action && (
        <Link
          href={action.href}
          className="inline-flex items-center gap-1.5 min-h-[44px] md:min-h-0 shrink-0 text-brand-cyan font-medium hover:underline rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2"
        >
          <span>{action.label}</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}

export default SectionHeading;