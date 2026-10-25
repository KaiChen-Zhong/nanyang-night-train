import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/layout/app-shell";
import { GeoMap, MapCaption } from "@/components/maps/geo-map";
import { PLACES } from "@/data/trip";

export const Route = createFileRoute("/bus")({ component: BusPage });

const BUS_MAP = {
  center: { lat: 2.35, lng: 102.7 },
  zoom: 8,
  markers: [
    { ...PLACES.tbs, note: "吉隆坡出发总站" },
    { ...PLACES.goldenMile, note: "新加坡常见落客" },
    { ...PLACES.melakaSentral, note: "马六甲巴士站" },
    { ...PLACES.jonker, note: "古城住宿圈" },
  ],
  lines: [
    [
      [PLACES.tbs.lat, PLACES.tbs.lng],
      [PLACES.goldenMile.lat, PLACES.goldenMile.lng],
    ],
    [
      [PLACES.goldenMile.lat, PLACES.goldenMile.lng],
      [PLACES.melakaSentral.lat, PLACES.melakaSentral.lng],
    ],
    [
      [PLACES.melakaSentral.lat, PLACES.melakaSentral.lng],
      [PLACES.tbs.lat, PLACES.tbs.lng],
    ],
  ] as [number, number][][],
};

function BusPage() {
  return (
    <>
      <PageHero kicker="Coach" title="跨境大巴">
        这是整趟最容易出错、也最省钱的一段。三张车都要提前出票。护照和手机随身，大箱子听司机指挥。
      </PageHero>
      <Section>
        <article className="rounded-xl border border-warn/35 bg-warn/5 p-5">
          <h2 className="font-display text-xl text-warn">必须提前预约</h2>
          <p className="mt-2 text-sm text-muted">
            Easybook / redBus 锁票：11/23 上午 TBS→新加坡、11/26 早班新加坡→马六甲、11/27 马六甲→TBS。11/23
            下午班容易堵在新山。11/23 还要有 SG Arrival Card，11/26 要有第二份 MDAC。护照姓名与车票一致。
          </p>
        </article>
      </Section>
      <Section className="pt-0">
        <GeoMap data={BUS_MAP} />
        <MapCaption>三角动线：吉隆坡 TBS → 新加坡 Golden Mile → 马六甲 → 再回 TBS。</MapCaption>
      </Section>
      <Section className="grid gap-4 md:grid-cols-3">
        {[
          {
            t: "11/23 KL → 新加坡",
            p: "RM45–90 / S$15–40",
            b: "TBS 上午发车。账面 5 小时，含过关 5.5–7 小时。落客 Golden Mile / Queen Street / Lavender。",
          },
          {
            t: "11/26 新加坡 → 马六甲",
            p: "S$20–40",
            b: "早班。约 3.5–4.5 小时。出发前 3 天再填 MDAC。Melaka Sentral 再 Grab 进鸡场街。",
          },
          {
            t: "11/27 马六甲 → KL",
            p: "RM10–18",
            b: "2–2.5 小时。KKKL 等三排座更舒服。到 TBS 后坐 KLIA Transit 回市区。",
          },
        ].map((x) => (
          <article key={x.t} className="rounded-xl border border-line bg-surface p-5">
            <h2 className="font-display text-xl">{x.t}</h2>
            <p className="mt-1 font-mono text-xs text-pine">{x.p}</p>
            <p className="mt-2 text-sm text-muted">{x.b}</p>
          </article>
        ))}
      </Section>
      <Section>
        <h2 className="font-display text-3xl">过关怎么走</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            "马来西亚出境：下车排队盖章，再上车。",
            "开过长堤。护照不要放托运舱。",
            "新加坡入境：再下车，护照 + 已提交的 SGAC。",
          ].map((s, i) => (
            <li key={s} className="rounded-xl border border-line bg-surface p-5">
              <div className="font-mono text-xs text-subtle">0{i + 1}</div>
              <p className="mt-2 text-sm">{s}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-display text-xl">车站</h3>
            <p className="mt-2 text-sm text-muted">
              吉隆坡出发是 TBS（Terminal Bersepadu Selatan），不是 KL Sentral 大厅。去 TBS：KL Sentral 坐 KLIA
              Transit 到 Bandar Tasik Selatan，走天桥。订票用 easybook、12Go、redBus、KKKL / StarMart
              官网。带 25kg 箱子选有行李舱的公司，不要迷你巴。
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl">选车</h3>
            <p className="mt-2 text-sm text-muted">
              最便宜：StarMart、普通 KKKL。更舒服：KKKL VIP、Aeroline。有厕所的选 VIP /
              单层豪华。演唱会前后和周末早订。
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
