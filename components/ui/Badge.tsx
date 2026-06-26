type BadgeProps = {
  children: string;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="badge-text inline-flex rounded-md border border-line bg-ink-soft px-3 py-2 text-slate-300">
      {children}
    </span>
  );
}
