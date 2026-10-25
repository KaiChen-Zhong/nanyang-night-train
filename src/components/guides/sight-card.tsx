import { Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import type { Sight } from "@/data/guides";
import { CITY_LABEL } from "@/data/guides";
import { BookingBadge } from "@/components/guides/booking-badge";
import { cn } from "@/lib/utils";

export function SightCard({
  sight,
  compact = false,
  id,
}: {
  sight: Sight;
  compact?: boolean;
  id?: string;
}) {
  return (
    <article
      id={id ?? sight.id}
      className={cn(
        "scroll-mt-24 rounded-xl border bg-surface",
        sight.booking === "must" ? "border-warn/40" : "border-line",
      )}
    >
      <header className="flex flex-wrap items-start justify-between gap-3 border-b border-line px-5 py-4">
        <div>
          <p className="text-xs tracking-widest text-subtle uppercase">{CITY_LABEL[sight.city]}</p>
          <h3 className="mt-1 font-display text-2xl">{sight.name}</h3>
        </div>
        <BookingBadge level={sight.booking} />
      </header>
      <dl className="grid gap-3 px-5 py-4 text-sm sm:grid-cols-3">
        <div>
          <dt className="text-xs text-subtle">开放</dt>
          <dd className="mt-1 text-ink">{sight.hours}</dd>
        </div>
        <div>
          <dt className="text-xs text-subtle">花费</dt>
          <dd className="mt-1 text-ink">{sight.cost}</dd>
        </div>
        <div>
          <dt className="text-xs text-subtle">停留</dt>
          <dd className="mt-1 text-ink">{sight.duration}</dd>
        </div>
      </dl>
      {sight.bookingNote ? (
        <p
          className={cn(
            "mx-5 mb-4 rounded-lg px-3 py-2 text-sm",
            sight.booking === "must" ? "bg-warn/10 text-warn" : "bg-bg-warm text-ink-soft",
          )}
        >
          {sight.bookingNote}
        </p>
      ) : null}
      {compact ? (
        <div className="px-5 pb-5">
          <p className="text-sm text-muted">{sight.play[0]}</p>
          <Link to="/sights" hash={sight.id} className="mt-3 inline-block text-sm text-pine hover:underline">
            完整玩法与注意
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 px-5 pb-5 md:grid-cols-2">
          <div>
            <h4 className="text-xs tracking-widest text-subtle uppercase">怎么玩</h4>
            <ol className="mt-2 space-y-2">
              {sight.play.map((p, i) => (
                <li key={p} className="grid grid-cols-[1.5rem_1fr] gap-1 text-sm text-ink">
                  <span className="font-mono text-xs text-subtle tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h4 className="text-xs tracking-widest text-subtle uppercase">注意事项</h4>
            <ul className="mt-2 space-y-2">
              {sight.notes.map((n) => (
                <li key={n} className="border-l-2 border-line pl-3 text-sm text-muted">
                  {n}
                </li>
              ))}
            </ul>
            {sight.bookingUrl ? (
              <a
                href={sight.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-pine hover:underline"
              >
                打开官方预约
                <ExternalLink className="size-4" />
              </a>
            ) : null}
          </div>
        </div>
      )}
    </article>
  );
}
