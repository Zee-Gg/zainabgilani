import { Avatar } from "./Avatar";

export function StatusAvatar({ alt, size = 96 }: { alt: string; size?: number }) {
  return (
    <div className="group relative w-fit">
      <Avatar
        alt={alt}
        size={size}
        className="ring-1 ring-hairline transition-transform duration-300 ease-out group-hover:scale-[1.03]"
      />
      <span className="absolute right-0.5 bottom-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-canvas">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-pulse-soft absolute inline-flex h-full w-full rounded-full bg-orchid" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orchid" />
        </span>
      </span>
    </div>
  );
}