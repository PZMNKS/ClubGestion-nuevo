import { pageHead } from "@/lib/page-head";
import { Button } from "@/components/ui/button";
import { AttendanceActions } from "@/components/AttendanceActions";
import { DraggableBottomSheet } from "@/components/DraggableBottomSheet";
import { usePrototype } from "@/lib/prototype-state";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell, SectionTitle } from "@/components/AppShell";
import { EventCard } from "@/components/EventCard";
import { events as initialEvents } from "@/lib/mock-data";

export const Route = createFileRoute("/eventos")({
  head: () =>
    pageHead(
      "Mis eventos",
      "Calendario de partidos y entrenamientos, con confirmación de asistencia.",
    ),
  component: EventosPage,
});

function EventosPage() {
  const [view, setView] = useState<"lista" | "calendario">("lista");
  const { events } = usePrototype();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = events.find((e) => e.id === selectedId);

  return (
    <AppShell>
      <h1 className="text-2xl font-extrabold">Eventos</h1>
      <p className="text-sm text-muted-foreground">
        Partidos, entrenamientos y actividades.
      </p>

      <div className="mt-4 inline-flex rounded-full bg-secondary p-1">
        {(["lista", "calendario"] as const).map((v) => (
          <Button
            variant="ghost"
            key={v}
            aria-pressed={view === v}
            onClick={() => setView(v)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold capitalize transition ${
              view === v
                ? "bg-card text-foreground shadow-[var(--shadow-card)]"
                : "text-muted-foreground"
            }`}
          >
            {v}
          </Button>
        ))}
      </div>

      {view === "lista" ? (
        <>
          <SectionTitle>Próximos</SectionTitle>
          <div className="space-y-3">
            {events.map((e) => (
              <EventCard
                key={e.id}
                {...e}
                onClick={() => setSelectedId(e.id)}
              />
            ))}
          </div>
        </>
      ) : (
        <CalendarView events={events} onPick={setSelectedId} />
      )}

      {selected && (
        <DraggableBottomSheet onClose={() => setSelectedId(null)}>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {selected.type}
          </p>
          <h2 className="mt-1 text-2xl font-extrabold">{selected.title}</h2>
          <div className="mt-3 space-y-1 text-sm text-muted-foreground">
            <p>
              📅 {selected.monthLabel} {selected.dayLabel} · {selected.time}
            </p>
            <p>📍 {selected.place}</p>
            {selected.rival && <p>🆚 {selected.rival}</p>}
            <p>
              👥 Convocatoria: {selected.called ? "Publicada" : "Pendiente"}
            </p>
          </div>

          <p className="mt-5 text-sm font-semibold">Tu asistencia</p>
          <div className="mt-2">
            <AttendanceActions id={selected.id} status={selected.status} />
          </div>
          <Button
            variant="secondary"
            className="mt-3 w-full"
            onClick={() => setSelectedId(null)}
          >
            Volver a eventos
          </Button>
        </DraggableBottomSheet>
      )}
    </AppShell>
  );
}

function CalendarView({
  events,
  onPick,
}: {
  events: typeof initialEvents;
  onPick: (id: string) => void;
}) {
  const today = new Date(2026, 5, 18);
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  const dayHasEvent = (d: number) =>
    events.some(
      (e) =>
        new Date(e.date).getDate() === d &&
        new Date(e.date).getMonth() === month,
    );

  return (
    <>
      <SectionTitle>Junio 2026</SectionTitle>
      <div className="rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]">
        <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold uppercase text-muted-foreground">
          {["D", "L", "M", "M", "J", "V", "S"].map((d, i) => (
            <div key={i}>{d}</div>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-7 gap-1 text-center text-sm">
          {cells.map((d, i) => (
            <div
              key={i}
              className={`relative flex aspect-square items-center justify-center rounded-lg ${
                d === today.getDate()
                  ? "bg-primary font-bold text-primary-foreground"
                  : "text-foreground"
              }`}
            >
              {d ?? ""}
              {d && dayHasEvent(d) && d !== today.getDate() && (
                <span className="absolute bottom-1 h-1 w-1 rounded-full bg-primary" />
              )}
            </div>
          ))}
        </div>
      </div>
      <SectionTitle>Eventos del mes</SectionTitle>
      <div className="space-y-3">
        {events
          .filter((e) => new Date(e.date).getMonth() === month)
          .map((e) => (
            <EventCard key={e.id} {...e} onClick={() => onPick(e.id)} />
          ))}
      </div>
    </>
  );
}
