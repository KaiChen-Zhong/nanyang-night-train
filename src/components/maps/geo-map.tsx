import { useEffect, useRef } from "react";
import type { DayMap, Place } from "@/data/trip";
import { cn } from "@/lib/utils";

type LeafletNS = typeof import("leaflet");

function pinHtml(label: string, on: boolean) {
  return `<div class="route-pin${on ? " is-on" : ""}">${label}</div>`;
}

function mapSignature(data: DayMap) {
  return JSON.stringify({
    c: data.center,
    z: data.zoom,
    m: data.markers.map((p) => [p.id, p.lat, p.lng, p.name, p.note ?? ""]),
    l: data.lines ?? [],
  });
}

export function GeoMap({
  data,
  className,
  selectedId,
  onSelect,
}: {
  data: DayMap;
  className?: string;
  selectedId?: string;
  onSelect?: (id: string) => void;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);
  const layerRef = useRef<import("leaflet").LayerGroup | null>(null);
  const markersRef = useRef<Map<string, import("leaflet").Marker>>(new Map());
  const LRef = useRef<LeafletNS | null>(null);
  const sig = mapSignature(data);
  const onSelectRef = useRef(onSelect);
  const selectedRef = useRef(selectedId);
  const prevSelRef = useRef(selectedId);
  const prevSigRef = useRef(sig);
  onSelectRef.current = onSelect;
  selectedRef.current = selectedId;

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let cancelled = false;
    let ro: ResizeObserver | undefined;
    let map: import("leaflet").Map | undefined;

    (async () => {
      const L = await import("leaflet");
      if (cancelled || !wrapRef.current) return;
      LRef.current = L;

      const parsed = JSON.parse(sig) as {
        c: { lat: number; lng: number };
        z: number;
        m: [string, number, number, string, string][];
        l: [number, number][][];
      };

      map = L.map(wrapRef.current, {
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
      }).setView([parsed.c.lat, parsed.c.lng], parsed.z);

      L.tileLayer("https://mt{s}.google.com/vt/lyrs=m&hl=zh-CN&x={x}&y={y}&z={z}", {
        attribution: "地图 &copy; Google",
        subdomains: "0123",
        maxZoom: 20,
      }).addTo(map);

      const pine =
        getComputedStyle(document.documentElement).getPropertyValue("--color-pine").trim() || "#3a5248";

      const group = L.layerGroup().addTo(map);
      layerRef.current = group;
      const markerMap = new Map<string, import("leaflet").Marker>();

      parsed.l.forEach((ln) => {
        L.polyline(
          ln.map(([lat, lng]) => [lat, lng] as [number, number]),
          { color: pine, weight: 3, opacity: 0.88 },
        ).addTo(group);
      });

      parsed.m.forEach((row, i) => {
        const [id, lat, lng, name, note] = row;
        const on = selectedRef.current === id;
        const marker = L.marker([lat, lng], {
          icon: L.divIcon({
            className: "",
            html: pinHtml(String(i + 1), on),
            iconSize: on ? [32, 32] : [28, 28],
            iconAnchor: on ? [16, 16] : [14, 14],
          }),
          title: name,
        }).addTo(group);
        const extra = note ? `<div class="map-pop-note">${note}</div>` : "";
        marker.bindPopup(`<div class="map-pop"><strong>${name}</strong>${extra}</div>`);
        marker.on("click", () => onSelectRef.current?.(id));
        markerMap.set(id, marker);
      });

      markersRef.current = markerMap;

      if (parsed.m.length > 1) {
        const b = L.latLngBounds(parsed.m.map((row) => [row[1], row[2]] as [number, number]));
        map.fitBounds(b.pad(0.22));
      }

      mapRef.current = map;
      const resize = () => map?.invalidateSize();
      ro = new ResizeObserver(resize);
      ro.observe(wrapRef.current);
      window.setTimeout(resize, 160);
    })();

    return () => {
      cancelled = true;
      ro?.disconnect();
      map?.remove();
      mapRef.current = null;
      layerRef.current = null;
      markersRef.current = new Map();
    };
  }, [sig]);

  useEffect(() => {
    const L = LRef.current;
    const map = mapRef.current;
    if (!L || !map) return;

    const ids = [...markersRef.current.keys()];
    markersRef.current.forEach((marker, id) => {
      const on = id === selectedId;
      const idx = ids.indexOf(id);
      marker.setIcon(
        L.divIcon({
          className: "",
          html: pinHtml(String(idx + 1), on),
          iconSize: on ? [32, 32] : [28, 28],
          iconAnchor: on ? [16, 16] : [14, 14],
        }),
      );
    });

    const sameMap = prevSigRef.current === sig;
    const prev = prevSelRef.current;
    prevSigRef.current = sig;
    prevSelRef.current = selectedId;
    if (!sameMap || !selectedId || selectedId === prev) return;

    const marker = markersRef.current.get(selectedId);
    if (!marker) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ll = marker.getLatLng();
    const inView = map.getBounds().pad(-0.18).contains(ll);
    if (!inView) {
      if (reduce) map.panTo(ll);
      else map.flyTo(ll, map.getZoom(), { duration: 0.5 });
    }
    marker.openPopup();
  }, [selectedId, sig]);


  return (
    <div
      ref={wrapRef}
      role="img"
      aria-label="行程地图"
      className={cn("h-[320px] w-full overflow-hidden rounded-xl border border-line bg-bg-warm sm:h-[420px]", className)}
    />
  );
}

export function MapCaption({ children }: { children: string }) {
  return <p className="mt-3 text-xs text-subtle">{children}</p>;
}

export function markerIndex(markers: Place[], id?: string) {
  if (!id) return -1;
  return markers.findIndex((m) => m.id === id);
}
