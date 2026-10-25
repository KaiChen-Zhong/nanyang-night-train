import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/layout/app-shell";
import { GeoMap, MapCaption } from "@/components/maps/geo-map";
import { Button } from "@/components/ui/button";
import { PLACES } from "@/data/trip";

export const Route = createFileRoute("/concert")({ component: Concert });

const SHOW_MAP = {
  center: { lat: 1.306, lng: 103.876 },
  zoom: 14,
  markers: [PLACES.stadium, PLACES.kallang, PLACES.mountbatten, PLACES.bugis],
  lines: [
    [
      [PLACES.bugis.lat, PLACES.bugis.lng],
      [PLACES.stadium.lat, PLACES.stadium.lng],
    ],
    [
      [PLACES.stadium.lat, PLACES.stadium.lng],
      [PLACES.kallang.lat, PLACES.kallang.lng],
    ],
    [
      [PLACES.stadium.lat, PLACES.stadium.lng],
      [PLACES.mountbatten.lat, PLACES.mountbatten.lng],
    ],
  ] as [number, number][][],
};

function Concert() {
  return (
    <>
      <PageHero kicker="25 Nov 2026 · 20:00" title="Guns N’ Roses">
        新加坡国家体育场，世界巡演亚洲一站。开门约 18:00。票只出电子票，Ticketmaster SG。
      </PageHero>
      <Section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <img src="/images/stadium.jpg" alt="国家体育场" className="h-64 rounded-xl object-cover sm:h-[420px]" />
        <div>
          <dl className="grid grid-cols-2 gap-4">
            {[
              ["场地", "National Stadium，1 Stadium Drive"],
              ["地铁", "Stadium CC6；备选 Kallang / Tanjong Rhu"],
              ["开演", "20:00，安可可能到 23:00"],
              ["票价", "约 S$138 起，只认官方"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs text-subtle">{k}</dt>
                <dd className="mt-1 text-sm">{v}</dd>
              </div>
            ))}
          </dl>
          <Button asChild className="mt-8">
            <Link to="/itinerary/$day" params={{ day: "11-25" }}>
              当天完整时刻
            </Link>
          </Button>
        </div>
      </Section>
      <Section>
        <h2 className="mb-4 font-display text-3xl">进出场动线</h2>
        <GeoMap data={SHOW_MAP} selectedId="ns" />
        <MapCaption>散场不要挤 Stadium Exit A，走 Exit B 或步行去 Mountbatten / Kallang。</MapCaption>
      </Section>
      <Section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-warn/35 bg-surface p-5">
          <h2 className="font-display text-xl text-warn">必须提前预约</h2>
          <p className="mt-2 text-sm text-muted">
            只在 Ticketmaster SG 出电子票。黄牛、转发截图、打印 PDF 常无效。入场前再核年龄限制（有渠道标 R18）。手机电量 50% 以上，App 与截图双备份。
          </p>
        </article>
        <article className="rounded-xl border border-line bg-surface p-5">
          <h2 className="font-display text-xl">开门与走位</h2>
          <p className="mt-2 text-sm text-muted">
            约 18:00 开门，20:00 开演。17:00 前吃完。地铁 Stadium（CC6）。散场走 Exit B 或步行去 Mountbatten / Kallang，不要挤 Exit A。
          </p>
        </article>
        <article className="rounded-xl border border-line bg-surface p-5">
          <h2 className="font-display text-xl">可以带</h2>
          <p className="mt-2 text-sm text-muted">手机、证件、折叠雨衣、薄外套、小斜挎或无包。尽量走快速安检。</p>
        </article>
        <article className="rounded-xl border border-line bg-surface p-5">
          <h2 className="font-display text-xl">不能带</h2>
          <p className="mt-2 text-sm text-muted">
            外食外饮、易拉罐、超过 35×20×30cm 的包、自拍杆、喇叭、电子烟、平板、非折叠伞。空瓶也常被拦，不要赌。
          </p>
        </article>
      </Section>
    </>
  );
}
