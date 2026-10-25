import { cn } from "@/lib/utils";

export function Badge({
  className,
  tone = "muted",
  ...props
}: React.ComponentProps<"span"> & { tone?: "muted" | "pine" | "warn" | "ink" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide",
        tone === "muted" && "bg-bg-warm text-muted",
        tone === "pine" && "bg-pine text-pine-fg",
        tone === "warn" && "bg-warn/10 text-warn",
        tone === "ink" && "bg-ink text-bg",
        className,
      )}
      {...props}
    />
  );
}
