import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Clock, Users } from "lucide-react";
import type { EventStatus, EventType } from "@/lib/mock-data";

type Props = {
  dayLabel: string;
  monthLabel: string;
  date?: string;
  title: string;
  time: string;
  place: string;
  type?: EventType;
  destinatarios?: string;
  rival?: string;
  status?: EventStatus;
  onClick?: () => void;
  compact?: boolean;
};

const typeStyles: Record<EventType, string> = {
  partido: "bg-primary-soft text-primary",
  entrenamiento: "bg-success-soft text-success",
  reunion: "bg-warning-soft text-warning-foreground",
  actividad: "bg-accent text-accent-foreground",
};

const statusLabels: Record<EventStatus, { label: string; cls: string }> = {
  confirmado: { label: "Confirmado", cls: "bg-success-soft text-success" },
  pendiente: {
    label: "Pendiente",
    cls: "bg-warning-soft text-warning-foreground",
  },
  "no-asiste": {
    label: "No asiste",
    cls: "bg-destructive-soft text-destructive",
  },
  lesionado: {
    label: "Lesionado",
    cls: "bg-orange-100 text-orange-800",
  },
};

export function EventCard({
  dayLabel,
  monthLabel,
  date,
  title,
  time,
  place,
  type = "entrenamiento",
  destinatarios,
  rival,
  status,
  onClick,
  compact,
}: Props) {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className="flex h-auto w-full items-center justify-start whitespace-normal gap-3 rounded-2xl bg-card p-4 text-left font-normal shadow-[var(--shadow-card)] transition-transform active:scale-[0.99]"
    >
      <div
        className={`flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl ${typeStyles[type]}`}
      >
        <span className="text-[10px] font-bold tracking-wider">
          {date
            ? [
                "ENE",
                "FEB",
                "MAR",
                "ABR",
                "MAY",
                "JUN",
                "JUL",
                "AGO",
                "SEP",
                "OCT",
                "NOV",
                "DIC",
              ][Number(date.split("-")[1]) - 1]
            : monthLabel}
        </span>
        <span className="text-xl font-extrabold leading-none">{dayLabel}</span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-semibold leading-snug text-foreground">{title}</p>
        <p className="mt-0.5 flex items-center gap-1 text-xs font-normal text-muted-foreground">
          <Clock className="h-3.5 w-3.5" /> {time}
        </p>
        <p className="mt-1 flex items-center gap-1 text-xs font-normal text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" /> {place}
        </p>
        {!compact && (destinatarios || rival || status) && (
          <div className="mt-2 flex flex-wrap items-center gap-2">
            {destinatarios && (
              <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-bold text-secondary-foreground">
                {destinatarios}
              </span>
            )}
            {rival && (
              <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                <Users className="h-3 w-3" /> vs {rival}
              </span>
            )}
            {status && (
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusLabels[status].cls}`}
              >
                {statusLabels[status].label}
              </span>
            )}
          </div>
        )}
      </div>
      <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" />
    </Button>
  );
}
