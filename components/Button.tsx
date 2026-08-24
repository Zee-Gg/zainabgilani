import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "filled" | "outline";
  size?: "sm" | "lg";
  icon?: ReactNode;
  fullWidth?: boolean;
  className?: string;
};

const sizeStyles = {
  sm: "gap-2.5 rounded-[14px] px-5 py-[15px] text-[15px]",
  lg: "gap-2.5 rounded-2xl px-7 py-4 text-[15.5px]",
} as const;

const variantStyles = {
  filled:
    "bg-orchid-btn font-semibold text-canvas hover:bg-orchid-btn-hover hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(212,74,158,0.55)]",
  outline:
    "border border-border-strong font-medium text-text hover:border-border-strong-hover hover:bg-surface-hover hover:-translate-y-0.5",
} as const;

export function Button({
  href,
  children,
  variant = "filled",
  size = "sm",
  icon,
  fullWidth = false,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center transition-[background-color,border-color,transform,box-shadow] duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orchid ${
        fullWidth ? "justify-between" : ""
      } ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
      {icon}
    </Link>
  );
}
