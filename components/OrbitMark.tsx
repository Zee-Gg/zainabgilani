export function OrbitMark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-14 -right-28 z-0 hidden h-[440px] w-[440px] opacity-80 lg:block xl:-right-12"
    >
      <svg viewBox="0 0 400 400" className="animate-slow-spin h-full w-full">
        <circle
          cx="200" cy="200" r="180" fill="none"
          stroke="var(--color-orchid)" strokeOpacity="0.16" strokeWidth="1"
          strokeDasharray="3 11"
        />
        <circle
          cx="200" cy="200" r="138" fill="none"
          stroke="var(--color-orchid)" strokeOpacity="0.24" strokeWidth="1"
          strokeDasharray="1 9"
        />
        <path
          d="M200 20 A180 180 0 0 1 380 200"
          fill="none" stroke="var(--color-orchid)" strokeOpacity="0.55"
          strokeWidth="1.5" strokeLinecap="round"
        />
        <circle cx="380" cy="200" r="4" fill="var(--color-orchid)" />
      </svg>
    </div>
  );
}