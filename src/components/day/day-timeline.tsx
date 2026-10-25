import { Bus, Hotel, Info, Landmark, Music, Plane, Utensils } from "lucide-react";
import type { DayStop, TripDay } from "@/data/trip";
import { sightsByPlace } from "@/data/guides";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const ICONS = {
  transit: Plane,
  city: Landmark,
  eat: Utensils,
  sleep: Hotel,
  show: Music,
  border: Bus,
  tip: Info,
};

export function StopList({
  stops,
  selectedId,
  onSelect,
}: {
  stops: DayStop[];
  selectedId?: string;
  onSelect?: (id: string) => void;
}) {
  return (
    <ol className="relative">
      {stops.map((s, i) => {
        const Icon = ICONS[s.kind];
        const on = Boolean(s.placeId && s.placeId === selectedId);
        const clickable = Boolean(s.placeId && onSelect);
        const booking = sightsByPlace(s.placeId)[0]?.booking;
        return (
          <li
            key={`${s.time}-${s.title}`}
            className="grid grid-cols-[72px_20px_1fr] gap-3 sm:grid-cols-[88px_24px_1fr]"
          >
            <div className="pt-1 text-right font-mono text-xs tracking-wide text-muted tabular-nums">{s.time}</div>
            <div className="relative flex flex-col items-center">
              {i !== stops.length - 1 ? <span className="absolute top-6 bottom-0 w-px bg-line" /> : null}
              <span
                className={cn(
                  "grid size-5 place-items-center rounded-full sm:size-6",
                  on ? "bg-ink text-bg" : "bg-pine text-pine-fg",
                )}
              >
                <Icon className="size-3" />
              </span>
            </div>
            <div className="pb-8">
              {clickable ? (
                <button
                  type="button"
                  onClick={() => s.placeId && onSelect?.(s.placeId)}
                  className={cn(
                    "w-full rounded-lg px-2 py-1 text-left transition-colors",
                    on ? "bg-bg-warm" : "hover:bg-bg-warm/70",
                  )}
                >
                  <h3 className="font-medium text-ink">{s.title}</h3>
                  {booking && booking !== "none" ? (
                    <span className="mt-1 inline-block">
                      <Badge tone={booking === "must" ? "warn" : "ink"}>
                        {booking === "must" ? "必须预约" : "建议预约"}
                      </Badge>
                    </span>
                  ) : null}
                  <p className="mt-1 text-sm text-muted">{s.detail}</p>
                </button>
              ) : (
                <>
                  <h3 className="font-medium text-ink">{s.title}</h3>
                  {booking && booking !== "none" ? (
                    <span className="mt-1 inline-block">
                      <Badge tone={booking === "must" ? "warn" : "ink"}>
                        {booking === "must" ? "必须预约" : "建议预约"}
                      </Badge>
                    </span>
                  ) : null}
                  <p className="mt-1 text-sm text-muted">{s.detail}</p>
                </>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export function DayMeta({ day, className }: { day: TripDay; className?: string }) {
  return (
    <aside className={cn("space-y-5 rounded-xl border border-line bg-surface p-5", className)}>
      <div>
        <div className="text-xs tracking-widest text-subtle uppercase">住宿</div>
        <p className="mt-1 text-sm text-ink">{day.stay}</p>
      </div>
      <div>
        <div className="text-xs tracking-widest text-subtle uppercase">饮食</div>
        <ul className="mt-1 space-y-1 text-sm text-ink">
          {day.eat.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
      <div>
        <div className="text-xs tracking-widest text-subtle uppercase">花费体感</div>
        <p className="mt-1 text-sm text-ink">{day.budget}</p>
      </div>
      <Badge tone="pine">{day.city}</Badge>
    </aside>
  );
}
