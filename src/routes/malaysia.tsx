import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/layout/app-shell";
import { GeoMap, MapCaption } from "@/components/maps/geo-map";
import { SightCard } from "@/components/guides/sight-card";
import { Button } from "@/components/ui/button";
import { PLACES } from "@/data/trip";
import { SIGHTS } from "@/data/guides";

export const Route = createFileRoute("/malaysia")({ component: Malaysia });

const MY_MAP = {
  center: { lat: 2.7, lng: 101.9 },
  zoom: 8,
  markers: [
    PLACES.batu,
    PLACES.petronas,
    PLACES.chinatownKL,
    PLACES.jalanAlor,
    PLACES.tbs,
    PLACES.melaka,
    PLACES.jonker,
  ],
  lines: [
    [
      [PLACES.batu.lat, PLACES.batu.lng],
      [PLACES.petronas.lat, PLACES.petronas.lng],
    ],
    [
      [PLACES.petronas.lat, PLACES.petronas.lng],
      [PLACES.jalanAlor.lat, PLACES.jalanAlor.lng],
    ],
    [
      [PLACES.tbs.lat, PLACES.tbs.lng],
      [PLACES.melaka.lat, PLACES.melaka.lng],
    ],
  ] as [number, number][][],
};

function Malaysia() {
  return (
    <>
      <PageHero kicker="Malaysia" title="吉隆坡与马六甲">
        吃住交通都可以压低。市区用 LRT / MRT + Grab。不排云顶、不去槟城。
      </PageHero>
      <Section>
        <GeoMap data={MY_MAP} />
        <MapCaption>吉隆坡市区一天走完，马六甲用巴士往返，不必报一日游。</MapCaption>
      </Section>
      <Section className="grid gap-8 md:grid-cols-2">
        <figure className="overflow-hidden rounded-xl border border-line">
          <img src="/images/batu-caves.jpg" alt="黑风洞" className="h-56 w-full object-cover" />
          <figcaption className="p-4">
            <h2 className="font-display text-2xl">黑风洞</h2>
            <p className="mt-2 text-sm text-muted">
              早去。KTM 科摩罗线几个马币。272 级台阶，猴子抢食。中午最热。
            </p>
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-xl border border-line">
          <img src="/images/jalan-alor.jpg" alt="亚罗街" className="h-56 w-full object-cover" />
          <figcaption className="p-4">
            <h2 className="font-display text-2xl">亚罗街</h2>
            <p className="mt-2 text-sm text-muted">烤串、炒粿条、炒河粉。酒店附近即可，不必每天换区。</p>
          </figcaption>
        </figure>
      </Section>
      <Section className="grid gap-6 md:grid-cols-3">
        {[
          { t: "住", b: "武吉免登或茨厂街，RM90–180 能干净有窗。不要住梳邦 / 蒲种。" },
          { t: "行", b: "Grab + Touch n Go / 二维码坐轨。双峰塔到免登经常走路更快。" },
          { t: "吃", b: "椰浆饭、香蕉叶、肉骨茶、mamak。一天 30–60 马币够吃好。便利店水比景区贵。" },
        ].map((x) => (
          <article key={x.t} className="rounded-xl border border-line bg-surface p-5">
            <h2 className="font-display text-xl">{x.t}</h2>
            <p className="mt-2 text-sm text-muted">{x.b}</p>
          </article>
        ))}
      </Section>
      <Section>
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <h2 className="font-display text-3xl">马六甲：KL 附近性价比最高的一站</h2>
            <p className="mt-3 text-muted">
              荷兰红屋、圣保罗山、荷兰街、鸡场街夜市、河边。古城步行即可。自己坐巴士，不要报昂贵一日游。
            </p>
            <Button asChild className="mt-6">
              <Link to="/itinerary/$day" params={{ day: "11-26" }}>
                看 26–27 日
              </Link>
            </Button>
          </div>
          <img src="/images/melaka.jpg" alt="马六甲红屋" className="h-64 w-full rounded-xl object-cover" />
        </div>
      </Section>
      <Section className="border-t border-line">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-display text-3xl">景点玩法与注意</h2>
          <Button asChild variant="outline">
            <Link to="/sights">全部景点</Link>
          </Button>
        </div>
        <div className="grid gap-6">
          {SIGHTS.filter((s) => s.city === "kl" || s.city === "melaka").map((s) => (
            <SightCard key={s.id} sight={s} compact />
          ))}
        </div>
      </Section>
    </>
  );
}
