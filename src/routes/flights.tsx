import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/layout/app-shell";
import { GeoMap, MapCaption } from "@/components/maps/geo-map";
import { FLIGHTS, PLACES } from "@/data/trip";

export const Route = createFileRoute("/flights")({ component: Flights });

const AIR_MAP = {
  center: { lat: 20, lng: 112 },
  zoom: 3,
  markers: [PLACES.shenyang, PLACES.pek, PLACES.changi, PLACES.klia],
  lines: [
    [
      [PLACES.shenyang.lat, PLACES.shenyang.lng],
      [PLACES.beijing.lat, PLACES.beijing.lng],
    ],
    [
      [PLACES.pek.lat, PLACES.pek.lng],
      [PLACES.changi.lat, PLACES.changi.lng],
    ],
    [
      [PLACES.changi.lat, PLACES.changi.lng],
      [PLACES.klia.lat, PLACES.klia.lng],
    ],
  ] as [number, number][][],
};

function Flights() {
  return (
    <>
      <PageHero kicker="Air & Rail" title="飞机与火车">
        25kg 托运只在全服务或已买行李额时成立。亚航 / Scoot 单独买通常不含 25kg。去程回程都订联程。
      </PageHero>
      <Section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <ol className="divide-y divide-line rounded-xl border border-line bg-surface">
          {FLIGHTS.map((f) => (
            <li key={f.name} className="px-5 py-4">
              <div className="text-xs tracking-widest text-subtle uppercase">{f.when}</div>
              <div className="mt-1 font-medium">{f.name}</div>
              <p className="mt-1 text-sm text-muted">{f.meta}</p>
            </li>
          ))}
        </ol>
        <div>
          <GeoMap data={AIR_MAP} className="h-full min-h-[360px]" />
          <MapCaption>大跨度航线在图上是直线示意，不是实际航路。</MapCaption>
        </div>
      </Section>
      <Section className="grid gap-6 md:grid-cols-3">
        {[
          {
            t: "值机",
            b: "首都 T3 国际起飞前 3.5–4 小时到。托运 23–24kg。手提放证件、药品、充电宝、换洗衣物。液体单件 ≤100ml。",
          },
          {
            t: "樟宜空侧",
            b: "同一张票跟 Transfer 指示。跨航站楼坐 Skytrain。不要出关去 Jewel。回程 90 分钟只够过安检。",
          },
          {
            t: "KLIA / KLIA2",
            b: "T1 是新航马航，KLIA2 是亚航。两楼要坐机场列车。进城用 KLIA Transit；去 TBS 必须坐 Transit，不能坐直达 Ekspres。",
          },
        ].map((x) => (
          <article key={x.t} className="rounded-xl border border-line bg-surface p-5">
            <h2 className="font-display text-xl">{x.t}</h2>
            <p className="mt-2 text-sm text-muted">{x.b}</p>
          </article>
        ))}
      </Section>
    </>
  );
}
