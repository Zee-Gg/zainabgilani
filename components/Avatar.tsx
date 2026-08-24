import Image from "next/image";

type AvatarProps = {
  src?: string;
  alt: string;
  size: number;
  className?: string;
};

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

export function Avatar({ src, alt, size, className = "" }: AvatarProps) {
  if (!src) {
    return (
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded-full bg-surface-hover font-display font-semibold text-orchid-text ${className}`}
        style={{ width: size, height: size, fontSize: size * 0.36 }}
        role="img"
        aria-label={alt}
      >
        {getInitials(alt)}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`shrink-0 rounded-full object-cover ${className}`}
    />
  );
}
