import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/layout/app-shell";
import { GeoMap, MapCaption } from "@/components/maps/geo-map";
import { SightCard } from "@/components/guides/sight-card";
import { Button } from "@/components/ui/button";
import { PLACES } from "@/data/trip";
import { SIGHTS } from "@/data/guides";

export const Route = createFileRoute("/singapore")({ component: Singapore });

const SG_MAP = {
  center: { lat: 1.295, lng: 103.86 },
  zoom: 13,
  markers: [
    PLACES.merlion,
    PLACES.gardens,
    PLACES.chinatownSG,
    PLACES.littleIndia,
    PLACES.bugis,
    PLACES.stadium,
    PLACES.goldenMile,
    PLACES.kallang,
    PLACES.mountbatten,
  ],
  lines: [
    [
      [PLACES.merlion.lat, PLACES.merlion.lng],
      [PLACES.gardens.lat, PLACES.gardens.lng],
    ],
    [
      [PLACES.gardens.lat, PLACES.gardens.lng],
      [PLACES.chinatownSG.lat, PLACES.chinatownSG.lng],
    ],
    [
      [PLACES.bugis.lat, PLACES.bugis.lng],
      [PLACES.stadium.lat, PLACES.stadium.lng],
    ],
  ] as [number, number][][],
};

function Singapore() {
  return (
    <>
      <PageHero kicker="Singapore" title="新加坡怎么玩才不烧钱">
        地铁闪付即可。短途别天天打车。演唱会散场会涨价。口香糖有管制，电子烟不要带。
      </PageHero>
      <Section>
        <GeoMap data={SG_MAP} />
        <MapCaption>滨海免费看外景，食阁解决正餐，25 日晚去体育城。</MapCaption>
      </Section>
      <Section className="grid gap-8 md:grid-cols-2">
        <img src="/images/singapore.jpg" alt="滨海湾" className="h-64 rounded-xl object-cover sm:h-80" />
        <div>
          <h2 className="font-display text-3xl">经典但不买贵票</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>鱼尾狮看一眼就走。</li>
            <li>滨海湾花园室外免费。花穹 / 云雾林可跳过。</li>
            <li>超级树灯光秀可在地面看。</li>
            <li>牛车水 Maxwell、老机场路、Lau Pa Sat：人均 8–15 新币。</li>
            <li>环球影城、动物园这次时间不够。</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/concert">演唱会页</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/itinerary/$day" params={{ day: "11-24" }}>
                24 日动线
              </Link>
            </Button>
          </div>
        </div>
      </Section>
      <Section className="grid gap-4 md:grid-cols-3">
        {[
          { t: "住", b: "23–24 日小印度 / 武吉士 / 牛车水。25 日尽量靠近 Kallang、Lavender、明古连。" },
          { t: "行", b: "Visa / Mastercard 闪付或 SimplyGo。国家体育场最近 Stadium 站（环线 CC6）。" },
          { t: "一天花费", b: "吃 15–28 新币 + 交通 3–8 新币。住宿演唱会夜会涨。" },
        ].map((x) => (
          <article key={x.t} className="rounded-xl border border-line bg-surface p-5">
            <h2 className="font-display text-xl">{x.t}</h2>
            <p className="mt-2 text-sm text-muted">{x.b}</p>
          </article>
        ))}
      </Section>
      <Section className="border-t border-line">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-display text-3xl">景点玩法与注意</h2>
          <Button asChild variant="outline">
            <Link to="/sights">全部景点</Link>
          </Button>
        </div>
        <div className="grid gap-6">
          {SIGHTS.filter((s) => s.city === "sg").map((s) => (
            <SightCard key={s.id} sight={s} compact />
          ))}
        </div>
      </Section>
    </>
  );
}
