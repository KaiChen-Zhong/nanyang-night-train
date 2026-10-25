import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JourneyExplorer } from "@/components/maps/journey-explorer";
import { DayStrip, RouteSchematic } from "@/components/maps/route-schematic";
import { Section } from "@/components/layout/app-shell";
import { BookingBoard } from "@/components/guides/booking-board";
import { HOW_TO, RISKS, STATS } from "@/data/trip";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0">
          <img src="/images/singapore.jpg" alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-linear-to-b from-bg/30 via-bg/75 to-bg" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs tracking-widest text-ink-soft uppercase">2026.11.19 — 11.29</p>
          <h1 className="mt-4 max-w-xl font-display text-5xl text-ink sm:text-7xl">南洋夜车</h1>
          <p className="mt-5 max-w-xl text-lg text-ink-soft">
            沈阳硬卧进京，经樟宜空侧转入吉隆坡，再坐大巴去新加坡看枪花。然后南下马六甲，折回吉隆坡红眼北归。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/itinerary">
                按日走一遍
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/prepare">预约注意</Link>
            </Button>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-4 gap-4 border-t border-line pt-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="text-xs text-muted">{s.label}</dt>
                <dd className="font-display text-3xl tabular-nums">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Section>
        <p className="text-xs tracking-widest text-subtle uppercase">How</p>
        <h2 className="mt-2 font-display text-3xl">怎么用这份攻略</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {HOW_TO.map((s) => (
            <article key={s.n} className="rounded-xl border border-line bg-surface p-5">
              <div className="font-mono text-xs text-subtle">{s.n}</div>
              <h3 className="mt-3 font-display text-xl">{s.t}</h3>
              <p className="mt-2 text-sm text-muted">{s.b}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-widest text-warn uppercase">Book first</p>
            <h2 className="mt-2 font-display text-3xl">必须提前预约</h2>
            <p className="mt-2 max-w-xl text-sm text-muted">
              票、联程、硬卧、三张大巴、两份马入境卡、一份新入境卡。电子卡只能提前 3 天填。
            </p>
          </div>
          <Link to="/prepare" className="text-sm text-pine">
            看完整预约表
          </Link>
        </div>
        <BookingBoard compact />
      </Section>

      <Section className="pt-0">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-widest text-subtle uppercase">Route</p>
            <h2 className="mt-2 font-display text-3xl">整趟动线</h2>
          </div>
          <Link to="/itinerary" className="hidden text-sm text-pine sm:inline">
            打开日程
          </Link>
        </div>
        <RouteSchematic />
        <div className="mt-10">
          <JourneyExplorer />
        </div>
      </Section>

      <Section className="pt-0">
        <h2 className="font-display text-3xl">十一日</h2>
        <p className="mt-2 mb-6 text-sm text-muted">点一天，看当天地图和时刻。</p>
        <DayStrip />
      </Section>

      <Section className="grid gap-8 border-t border-line md:grid-cols-2">
        <figure className="overflow-hidden rounded-xl border border-line">
          <img src="/images/petronas.jpg" alt="吉隆坡双峰塔" className="h-64 w-full object-cover sm:h-80" />
          <figcaption className="bg-surface px-4 py-3 text-sm text-muted">
            吉隆坡：黑风洞、茨厂街、双峰塔、亚罗街。
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-xl border border-line">
          <img src="/images/stadium.jpg" alt="新加坡国家体育场" className="h-64 w-full object-cover sm:h-80" />
          <figcaption className="bg-surface px-4 py-3 text-sm text-muted">
            新加坡国家体育场 · 11 月 25 日 20:00 Guns N' Roses
          </figcaption>
        </figure>
      </Section>

      <Section>
        <h2 className="font-display text-3xl">最容易翻车的三件事</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {RISKS.map((r, i) => (
            <article key={r.title} className="rounded-xl border border-line bg-surface p-5">
              <div className="font-mono text-xs text-subtle tabular-nums">0{i + 1}</div>
              <h3 className="mt-3 font-display text-xl">{r.title}</h3>
              <p className="mt-2 text-sm text-muted">{r.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line">
        <div className="flex flex-col items-start justify-between gap-6 rounded-xl bg-pine px-6 py-10 text-pine-fg sm:flex-row sm:items-center sm:px-10">
          <div>
            <h2 className="font-display text-3xl">先订联程票和必须预约项</h2>
            <p className="mt-2 max-w-md text-sm text-pine-fg/80">
              回程对准 SQ800。枪花票、硬卧、三张大巴、两份 MDAC 和一张 SGAC。景点玩法按日写在日程里。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="invert">
              <Link to="/prepare">预约注意</Link>
            </Button>
            <Button asChild variant="outline" className="border-pine-fg/30 bg-transparent text-pine-fg hover:bg-pine-fg/10">
              <Link to="/sights">景点攻略</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
