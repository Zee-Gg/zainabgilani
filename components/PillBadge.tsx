type PillBadgeProps = {
  children: React.ReactNode;
  size?: "sm" | "md";
  pulse?: boolean;
  className?: string;
};

const sizeStyles = {
  sm: "gap-2 px-3 py-[5px] text-xs",
  md: "gap-[9px] px-3.5 py-[7px] text-[12.5px]",
} as const;

const dotSize = {
  sm: "h-[5px] w-[5px]",
  md: "h-1.5 w-1.5",
} as const;

export function PillBadge({
  children,
  size = "md",
  pulse = false,
  className = "",
}: PillBadgeProps) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full bg-badge text-orchid-text ${sizeStyles[size]} ${className}`}
    >
      <span
        className={`rounded-full bg-orchid ${dotSize[size]} ${
          pulse ? "animate-pulse-soft" : ""
        }`}
      />
      {children}
    </span>
  );
}