import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageHero, Section } from "@/components/layout/app-shell";
import { BookingBoard } from "@/components/guides/booking-board";
import { NOTE_GROUPS } from "@/data/guides";
import { LINKS } from "@/data/trip";
import { checklistProgress, useChecklist } from "@/lib/checklist-store";
import { CHECKLIST } from "@/data/trip";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/prepare")({ component: Prepare });

function Prepare() {
  const checked = useChecklist((s) => s.checked);
  const toggle = useChecklist((s) => s.toggle);
  const reset = useChecklist((s) => s.reset);
  const { done, total, pct } = checklistProgress(checked);

  return (
    <>
      <PageHero kicker="Before you go" title="预约、清单、全部注意事项">
        先订必须订的，再勾行李。电子入境卡只能提前 3 天填，早了系统拒，晚了过不了关。政策会变，出发前再核官网。
      </PageHero>

      <Section>
        <BookingBoard />
      </Section>

      <Section className="border-t border-line">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-sm text-muted">清单进度</div>
            <div className="font-display text-4xl tabular-nums">{pct}%</div>
            <div className="text-xs text-subtle">
              {done} / {total}
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link to="/sights">景点玩法</Link>
            </Button>
            <Button variant="outline" onClick={reset}>
              清空勾选
            </Button>
          </div>
        </div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-bg-warm">
          <div className="h-full bg-pine transition-[width] duration-300" style={{ width: `${pct}%` }} />
        </div>
      </Section>
      <Section className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {CHECKLIST.map((g) => (
          <div key={g.title}>
            <h2 className="font-display text-2xl">{g.title}</h2>
            <ul className="mt-4 space-y-2">
              {g.items.map((item) => {
                const on = Boolean(checked[item.id]);
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      className={cn(
                        "flex min-h-11 w-full items-start gap-3 rounded-xl border px-3 py-3 text-left text-sm transition-colors",
                        on ? "border-pine/40 bg-pine/10" : "border-line bg-surface hover:border-line-strong",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 grid size-5 shrink-0 place-items-center rounded-sm border",
                          on ? "border-pine bg-pine text-pine-fg" : "border-line-strong",
                        )}
                        aria-hidden
                      >
                        {on ? "✓" : ""}
                      </span>
                      <span className={cn(on && "text-muted line-through")}>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </Section>

      <Section>
        <h2 className="font-display text-3xl">全行程注意事项</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          按主题分组。标了强调的是会让行程中断或被罚的红线。
        </p>
        <div className="mt-8 grid gap-4">
          {NOTE_GROUPS.map((g) => (
            <details key={g.id} open className="rounded-xl border border-line bg-surface">
              <summary className="cursor-pointer px-5 py-4 font-display text-xl">{g.title}</summary>
              <ul className="space-y-4 border-t border-line px-5 py-5">
                {g.items.map((item) => (
                  <li key={item.title}>
                    <h3 className={cn("text-sm font-medium", item.warn ? "text-warn" : "text-ink")}>{item.title}</h3>
                    <p className="mt-1 text-sm text-muted">{item.body}</p>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-2xl">只走官方入口</h2>
        <p className="mt-2 text-sm text-muted">MDAC、SGAC、登塔、演唱会票都有收费假站。下表以外的链接先怀疑。</p>
        <ul className="mt-4 grid gap-3 md:grid-cols-3">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-start justify-between gap-3 rounded-xl border border-line bg-surface px-4 py-3 hover:border-pine/40"
              >
                <span>
                  <span className="block text-sm font-medium">{l.label}</span>
                  <span className="mt-1 block text-xs text-muted">{l.hint}</span>
                </span>
                <ExternalLink className="mt-0.5 size-4 shrink-0 text-subtle" />
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
