type BadgeProps = {
  children: string;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="badge-text inline-flex rounded-md border border-lineStrong/60 bg-ink-soft/75 px-3 py-2 text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      {children}
    </span>
  );
}
