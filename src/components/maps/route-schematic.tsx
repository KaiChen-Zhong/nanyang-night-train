import { Link } from "@tanstack/react-router";
import { DAYS } from "@/data/trip";
import { cn } from "@/lib/utils";

const NODES = [
  { label: "沈阳", sub: "硬卧", day: "11-19" },
  { label: "北京", sub: "缓冲", day: "11-20" },
  { label: "樟宜", sub: "空侧", day: "11-21" },
  { label: "吉隆坡", sub: "两段", day: "11-22" },
  { label: "新加坡", sub: "枪花", day: "11-25" },
  { label: "马六甲", sub: "古城", day: "11-26" },
  { label: "吉隆坡", sub: "返航", day: "11-28" },
  { label: "沈阳", sub: "北归", day: "11-29" },
];

export function RouteSchematic({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute top-5 right-8 left-8 hidden h-px bg-line-strong md:block" />
      <ol
        className={cn(
          "grid gap-3",
          compact ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-4 lg:grid-cols-8",
        )}
      >
        {NODES.map((n, i) => (
          <li key={`${n.label}-${n.day}-${i}`}>
            <Link
              to="/itinerary/$day"
              params={{ day: n.day }}
              className="group flex flex-col items-start gap-2 rounded-xl border border-line bg-surface p-3 transition-colors hover:border-pine/40 hover:bg-bg"
            >
              <span className="grid size-7 place-items-center rounded-full bg-pine text-xs font-semibold text-pine-fg">
                {i + 1}
              </span>
              <span className="font-display text-lg leading-none text-ink">{n.label}</span>
              <span className="text-xs text-muted">{n.sub}</span>
            </Link>
          </li>
        ))}
      </ol>
      {!compact ? (
        <p className="mt-4 max-w-2xl text-sm text-muted">
          不去槟城和云顶。马来西亚拆成吉隆坡 → 新加坡看演唱会 → 马六甲 → 再回吉隆坡起飞，少走回头路。
        </p>
      ) : null}
    </div>
  );
}

export function DayStrip({ activeId }: { activeId?: string }) {
  return (
    <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2">
      {DAYS.map((d, i) => {
        const on = d.id === activeId;
        return (
          <Link
            key={d.id}
            to="/itinerary/$day"
            params={{ day: d.id }}
            className={cn(
              "min-w-[148px] shrink-0 rounded-xl border p-3 transition-colors",
              on ? "border-ink bg-ink text-bg" : "border-line bg-surface hover:border-pine/40",
            )}
          >
            <div className={cn("font-mono text-xs tabular-nums", on ? "text-bg/70" : "text-subtle")}>
              {String(i + 1).padStart(2, "0")} · {d.monthDay}
            </div>
            <div className="mt-1 font-display text-base">{d.title}</div>
            <div className={cn("mt-1 text-xs", on ? "text-bg/70" : "text-muted")}>{d.city}</div>
          </Link>
        );
      })}
    </div>
  );
}
