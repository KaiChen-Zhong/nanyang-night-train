import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/layout/app-shell";
import { SightCard } from "@/components/guides/sight-card";
import { BookingBoard } from "@/components/guides/booking-board";
import { CITY_LABEL, SIGHTS, type SightCity } from "@/data/guides";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/sights")({ component: SightsPage });

const FILTERS: { id: "all" | SightCity; label: string }[] = [
  { id: "all", label: "全部" },
  { id: "kl", label: CITY_LABEL.kl },
  { id: "melaka", label: CITY_LABEL.melaka },
  { id: "sg", label: CITY_LABEL.sg },
  { id: "transit", label: CITY_LABEL.transit },
  { id: "cn", label: CITY_LABEL.cn },
];

function SightsPage() {
  const [city, setCity] = useState<"all" | SightCity>("all");
  const list = useMemo(
    () => (city === "all" ? SIGHTS : SIGHTS.filter((s) => s.city === city)),
    [city],
  );

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const target = SIGHTS.find((s) => s.id === hash);
    if (target) setCity("all");
    const t = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <PageHero kicker="Playbook" title="每个点怎么玩">
        展开开放时间、花费、走法、红线。必须预约的项会标在卡片顶上。先看预约表，再按城市滤景点。
      </PageHero>
      <Section className="pb-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl">预约先于景点</h2>
            <p className="mt-2 text-sm text-muted">票、联程、大巴、两份 MDAC、一份 SGAC，比任何网红点都优先。</p>
          </div>
          <Button asChild variant="outline">
            <Link to="/prepare">打开注意事项全文</Link>
          </Button>
        </div>
        <div className="mt-8">
          <BookingBoard compact />
        </div>
      </Section>
      <Section>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setCity(f.id)}
              className={cn(
                "h-11 rounded-full px-4 text-sm",
                city === f.id ? "bg-ink text-bg" : "border border-line bg-surface text-muted hover:text-ink",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
        <p className="mt-4 text-xs text-subtle">{list.length} 个点</p>
        <div className="mt-6 grid gap-6">
          {list.map((s) => (
            <SightCard key={s.id} sight={s} />
          ))}
        </div>
      </Section>
    </>
  );
}
