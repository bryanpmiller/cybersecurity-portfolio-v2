type BadgeProps = {
  children: string;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="badge-text inline-flex rounded-md border border-line bg-ink-soft/70 px-3 py-2 text-slate-200">
      {children}
    </span>
  );
}
