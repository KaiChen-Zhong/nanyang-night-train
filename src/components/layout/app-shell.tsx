import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV } from "@/data/trip";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-bg text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-pine focus:px-4 focus:py-2 focus:text-pine-fg"
      >
        跳到内容
      </a>
      <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" className="flex shrink-0 items-baseline gap-2" onClick={() => setOpen(false)}>
            <span className="font-display text-xl tracking-tight">南洋夜车</span>
            <span className="hidden text-xs tracking-widest text-subtle uppercase sm:inline">November Rain</span>
          </Link>
          <nav className="hidden min-w-0 flex-1 items-center justify-end gap-0.5 overflow-x-auto lg:flex">
            {NAV.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm transition-colors",
                    active ? "bg-ink text-bg" : "text-muted hover:bg-bg-warm hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "关闭菜单" : "打开菜单"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open ? (
          <nav className="border-t border-line bg-surface px-4 py-3 lg:hidden">
            <ul className="grid gap-1">
              {NAV.map((item) => {
                const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex h-11 items-center rounded-xl px-3 text-sm",
                        active ? "bg-ink text-bg" : "text-ink hover:bg-bg-warm",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </header>
      <div id="main">{children}</div>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-6">
          <div>
            <div className="font-display text-2xl">南洋夜车</div>
            <p className="mt-1 max-w-md text-sm text-muted">
              2026.11.19–29 · 沈阳 / 北京 / 吉隆坡 / 新加坡 · Guns N' Roses
            </p>
          </div>
          <p className="text-xs text-subtle">时刻会变，出发前再核航班、大巴与入境卡官网。</p>
        </div>
      </footer>
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-bg-warm/60">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-xs tracking-widest text-subtle uppercase">{kicker}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl text-ink sm:text-5xl">{title}</h1>
        {children ? <div className="mt-4 max-w-2xl text-base text-muted">{children}</div> : null}
      </div>
    </section>
  );
}

export function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={cn("mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14", className)}>{children}</section>;
}
