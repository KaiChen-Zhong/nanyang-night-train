import { ExternalLink } from "lucide-react";
import { MUST_BOOKINGS, SHOULD_BOOKINGS, type BookingItem } from "@/data/guides";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

function Row({ item, featured = false }: { item: BookingItem; featured?: boolean }) {
  return (
    <article
      className={cn(
        "rounded-xl border p-5",
        item.level === "must" ? "border-warn/35 bg-surface" : "border-line bg-surface",
        featured && "md:col-span-2",
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone={item.level === "must" ? "warn" : "ink"}>
          {item.level === "must" ? "必须预约" : "建议预约"}
        </Badge>
        <span className="text-xs text-subtle">{item.when}</span>
      </div>
      <h3 className="mt-3 font-display text-xl">{item.title}</h3>
      <p className="mt-2 text-sm text-warn/90">{item.why}</p>
      <p className="mt-2 text-sm text-muted">{item.how}</p>
      {item.href ? (
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-pine hover:underline"
        >
          {item.hrefLabel ?? "官方入口"}
          <ExternalLink className="size-4" />
        </a>
      ) : null}
    </article>
  );
}

export function BookingBoard({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <ol className="grid gap-3">
        {MUST_BOOKINGS.map((b, i) => (
          <li key={b.id} className="flex gap-3 rounded-xl border border-warn/30 bg-surface px-4 py-3">
            <span className="font-mono text-xs text-warn tabular-nums">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <div className="font-medium">{b.title}</div>
              <div className="text-sm text-muted">{b.when}</div>
            </div>
          </li>
        ))}
      </ol>
    );
  }
  return (
    <div className="space-y-10">
      <div>
        <p className="text-xs tracking-widest text-warn uppercase">Must book</p>
        <h2 className="mt-2 font-display text-3xl">必须提前预约</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          这九项不做，行程会断。电子入境卡有 3 天窗口，早填会被系统拒，晚填可能过不了关。
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {MUST_BOOKINGS.map((b) => (
            <Row key={b.id} item={b} featured={b.id === "gnr" || b.id === "air"} />
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs tracking-widest text-subtle uppercase">Optional</p>
        <h2 className="mt-2 font-display text-3xl">想去再订</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          不订也不影响主线：双峰塔可以只拍外景，花园可以只看室外和灯光秀。
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {SHOULD_BOOKINGS.map((b) => (
            <Row key={b.id} item={b} />
          ))}
        </div>
      </div>
    </div>
  );
}
