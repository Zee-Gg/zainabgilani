type SectionHeaderProps = {
  title: string;
  meta: string;
  className?: string;
};

export function SectionHeader({ title, meta, className = "" }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col items-baseline justify-between gap-2 sm:flex-row ${className}`}>
      <h2 className="font-display text-[28px] font-bold tracking-[-0.035em] sm:text-[34px]">
        {title}
      </h2>
      <span className="text-sm text-meta">{meta}</span>
    </div>
  );
}
