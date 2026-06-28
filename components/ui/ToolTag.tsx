type ToolTagProps = {
  children: string;
};

export function ToolTag({ children }: ToolTagProps) {
  return (
    <span className="chip-text inline-flex rounded-md border border-line bg-ink-soft px-3 py-2 text-slate-300">
      {children}
    </span>
  );
}
