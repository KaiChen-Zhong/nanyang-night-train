import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { DAYS } from "@/data/trip";
import { cn } from "@/lib/utils";
import { GeoMap, MapCaption } from "@/components/maps/geo-map";
import { Button } from "@/components/ui/button";

export function JourneyExplorer() {
  const [active, setActive] = useState(DAYS[3].id);
  const day = DAYS.find((d) => d.id === active) ?? DAYS[0];
  const [placeId, setPlaceId] = useState<string | undefined>(day.map.markers[0]?.id);

  function pick(id: string) {
    const next = DAYS.find((d) => d.id === id) ?? DAYS[0];
    setActive(id);
    setPlaceId(next.map.markers[0]?.id);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface">
      <div className="flex gap-2 overflow-x-auto border-b border-line px-3 py-3">
        {DAYS.map((d, i) => {
          const on = d.id === active;
          return (
            <button
              key={d.id}
              type="button"
              onClick={() => pick(d.id)}
              className={cn(
                "h-11 shrink-0 rounded-full px-3.5 text-sm transition-colors",
                on ? "bg-ink text-bg" : "bg-bg-warm text-muted hover:text-ink",
              )}
            >
              <span className="font-mono text-xs tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <span className="ml-2">{d.title}</span>
            </button>
          );
        })}
      </div>
      <div className="grid lg:grid-cols-[minmax(0,1fr)_260px]">
        <GeoMap
          data={day.map}
          selectedId={placeId}
          onSelect={setPlaceId}
          className="h-[340px] rounded-none border-0 sm:h-[460px] lg:h-[520px]"
        />
        <aside className="flex flex-col justify-between gap-4 border-t border-line p-5 lg:border-t-0 lg:border-l">
          <div>
            <p className="text-xs tracking-widest text-subtle uppercase">
              {day.monthDay} · {day.weekday}
            </p>
            <h3 className="mt-2 font-display text-2xl text-ink">{day.title}</h3>
            <p className="mt-2 text-sm text-muted">{day.city}</p>
            <p className="mt-3 text-sm text-ink-soft">{day.summary}</p>
            <ol className="mt-4 space-y-1">
              {day.map.markers.map((m, i) => (
                <li key={m.id}>
                  <button
                    type="button"
                    onClick={() => setPlaceId(m.id)}
                    className={cn(
                      "flex h-10 w-full items-center gap-2 rounded-lg px-2 text-left text-sm",
                      placeId === m.id ? "bg-pine text-pine-fg" : "text-muted hover:bg-bg-warm hover:text-ink",
                    )}
                  >
                    <span className="grid size-5 place-items-center rounded-full bg-bg/20 font-mono text-xs">
                      {i + 1}
                    </span>
                    {m.name}
                  </button>
                </li>
              ))}
            </ol>
          </div>
          <Button asChild>
            <Link to="/itinerary/$day" params={{ day: day.id }}>
              打开这一天
            </Link>
          </Button>
        </aside>
      </div>
      <div className="border-t border-line px-5 py-3">
        <MapCaption>数字是当天顺序。点芯片换日，点图钉或右侧地名，地图会飞过去。</MapCaption>
      </div>
    </div>
  );
}
