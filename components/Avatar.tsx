import Image from "next/image";

type AvatarProps = {
  src?: string;
  alt: string;
  size: number;
  className?: string;
};

export function Avatar({ src, alt, size, className = "" }: AvatarProps) {
  if (!src) {
    return (
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded-full bg-surface-hover text-meta ${className}`}
        style={{ width: size, height: size }}
        role="img"
        aria-label={alt}
      />
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
