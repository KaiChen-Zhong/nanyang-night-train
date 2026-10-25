import { Badge } from "@/components/ui/badge";
import type { BookingLevel } from "@/data/guides";

export function BookingBadge({ level }: { level: BookingLevel }) {
  if (level === "must") return <Badge tone="warn">必须预约</Badge>;
  if (level === "should") return <Badge tone="ink">建议预约</Badge>;
  return <Badge tone="muted">不用预约</Badge>;
}
