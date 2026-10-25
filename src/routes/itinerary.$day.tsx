import { useEffect, useState } from "react";
import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { adjacentDays, getDay } from "@/data/trip";
import { SIGHTS, sightsByPlace } from "@/data/guides";
import { GeoMap, MapCaption } from "@/components/maps/geo-map";
import { DayStrip } from "@/components/maps/route-schematic";
import { DayMeta, StopList } from "@/components/day/day-timeline";
import { SightCard } from "@/components/guides/sight-card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/app-shell";

export const Route = createFileRoute("/itinerary/$day")({
  component: DayPage,
});

function DayPage() {
  const { day: id } = Route.useParams();
  const day = getDay(id);
  if (!day) throw notFound();
  return <DayView key={day.id} id={day.id} />;
}

function DayView({ id }: { id: string }) {
  const day = getDay(id);
  const navigate = useNavigate();
  if (!day) throw notFound();
  const { prev, next } = adjacentDays(id);
  const [placeId, setPlaceId] = useState<string | undefined>(day.map.markers[0]?.id);
  const selected = sightsByPlace(placeId);
  const rest = SIGHTS.filter((s) => s.dayIds.includes(day.id) && s.placeId !== placeId);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowLeft" && prev) {
        navigate({ to: "/itinerary/$day", params: { day: prev.id } });
      }
      if (e.key === "ArrowRight" && next) {
        navigate({ to: "/itinerary/$day", params: { day: next.id } });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, prev, next]);

  return (
    <>
      <section className="border-b border-line bg-bg-warm/50">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
          <Link to="/itinerary" className="text-sm text-muted hover:text-ink">
            全部日程
          </Link>
          <p className="mt-4 text-xs tracking-widest text-subtle uppercase">
            {day.kicker} · {day.monthDay} · {day.weekday}
          </p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl">{day.title}</h1>
          <p className="mt-3 max-w-2xl text-muted">{day.summary}</p>
        </div>
      </section>

      <Section className="pb-4 pt-6">
        <DayStrip activeId={day.id} />
      </Section>

      {day.image ? (
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <img
            src={day.image}
            alt={day.imageAlt ?? day.title}
            className="h-56 w-full rounded-xl object-cover sm:h-80"
          />
        </div>
      ) : null}

      <Section className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.9fr)]">
        <div>
          <h2 className="mb-3 font-display text-2xl">当天地图</h2>
          <div className="lg:sticky lg:top-20">
            <GeoMap data={day.map} selectedId={placeId} onSelect={setPlaceId} className="lg:h-[520px]" />
            <MapCaption>点时间轴或图钉，地图会飞到对应地点。下方会出现该点的玩法和注意。</MapCaption>
          </div>
        </div>
        <div>
          <h2 className="mb-6 font-display text-2xl">时刻</h2>
          <StopList stops={day.stops} selectedId={placeId} onSelect={setPlaceId} />
          <DayMeta day={day} className="mt-2" />
        </div>
      </Section>

      {selected.length || rest.length ? (
        <Section className="border-t border-line pt-8">
          <h2 className="font-display text-3xl">当天怎么玩、注意什么</h2>
          <p className="mt-2 mb-6 max-w-2xl text-sm text-muted">
            点地图图钉会把对应攻略提到最前。必须预约的项用红字标出。
          </p>
          <div className="grid gap-6">
            {selected.map((s) => (
              <SightCard key={s.id} sight={s} />
            ))}
            {rest.map((s) => (
              <SightCard key={s.id} sight={s} compact />
            ))}
          </div>
        </Section>
      ) : null}

      <Section className="flex items-center justify-between gap-3 border-t border-line pt-8">
        {prev ? (
          <Button asChild variant="outline">
            <Link to="/itinerary/$day" params={{ day: prev.id }}>
              <ArrowLeft />
              {prev.title}
            </Link>
          </Button>
        ) : (
          <span />
        )}
        {next ? (
          <Button asChild>
            <Link to="/itinerary/$day" params={{ day: next.id }}>
              {next.title}
              <ArrowRight />
            </Link>
          </Button>
        ) : (
          <Button asChild variant="outline">
            <Link to="/prepare">预约注意</Link>
          </Button>
        )}
      </Section>
    </>
  );
}
