import { createFileRoute, Link } from "@tanstack/react-router";
import { DAYS, phaseLabel } from "@/data/trip";
import { PageHero, Section } from "@/components/layout/app-shell";
import { RouteSchematic } from "@/components/maps/route-schematic";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/itinerary/")({ component: ItineraryIndex });

function ItineraryIndex() {
  return (
    <>
      <PageHero kicker="Itinerary" title="按日动线">
        每天一页地图、时刻、吃住，以及该日每个点的玩法和注意事项。点图钉会把对应攻略提到最前。必须预约的项会标出来。
      </PageHero>
      <Section className="pb-4">
        <RouteSchematic compact />
      </Section>
      <Section>
        <ol className="grid gap-3">
          {DAYS.map((d, i) => (
            <li key={d.id}>
              <Link
                to="/itinerary/$day"
                params={{ day: d.id }}
                className="grid gap-3 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-pine/40 sm:grid-cols-[88px_1fr_auto] sm:items-center"
              >
                <div>
                  <div className="font-mono text-xs text-subtle tabular-nums">{d.monthDay}</div>
                  <div className="text-xs text-muted">{d.weekday}</div>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-display text-2xl">{d.title}</h2>
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-xs",
                        d.phase === "sg" && "bg-ink text-bg",
                        d.phase === "my" && "bg-pine text-pine-fg",
                        d.phase === "air" && "bg-bg-warm text-ink",
                        d.phase === "cn" && "bg-bg-warm text-muted",
                      )}
                    >
                      {phaseLabel(d.phase)}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{d.summary}</p>
                </div>
                <div className="hidden font-mono text-xs text-subtle sm:block">Day {i + 1}</div>
              </Link>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
