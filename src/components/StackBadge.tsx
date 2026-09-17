export default function StackBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-black/10 bg-black/[.03] px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-white/15 dark:bg-white/[.06] dark:text-zinc-300">
      {label}
    </span>
  );
}
