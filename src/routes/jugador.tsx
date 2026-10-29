import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Wallet,
  Megaphone,
  Calendar,
  Clock,
  MapPin,
  ChevronRight,
  ListTodo,
  FileClock,
  CheckCircle2,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { AttendanceActions } from "@/components/AttendanceActions";
import { usePrototype } from "@/lib/prototype-state";
import { club, player } from "@/lib/mock-data";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/jugador")({
  head: () =>
    pageHead(
      "Inicio del jugador",
      "Tus pendientes por resolver, próximo partido, asistencia, pagos y avisos del club.",
    ),
  component: Home,
});
function Home() {
  const { events, payments, avisos, receipts } = usePrototype();
  const next = events.find((e) => e.type === "partido") ?? events[0];
  const pending = payments.filter((p) => p.status !== "pagado");
  const total = pending.reduce((s, p) => s + p.amount, 0);
  const notice = avisos.find(
    (a) => a.destinatarios === "Todos" || a.destinatarios === player.category,
  );
  const xpPct = Math.round((player.xp / player.xpToNext) * 100);
  const unanswered = events.filter((e) => e.status === "pendiente").length;
  const reviewing = pending.filter((p) => receipts[p.id]).length;
  return (
    <AppShell>
      <section className="rounded-2xl bg-primary-soft p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold text-primary">{club.name}</p>
            <h1 className="mt-1 break-words text-xl font-extrabold">
              {player.name}
            </h1>
            <p className="text-xs text-muted-foreground">
              {player.category} · {player.position}
            </p>
          </div>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-card text-xl shadow-card">
            {club.shield}
          </span>
        </div>
        <div className="mt-4 rounded-xl bg-card/80 p-3">
          <div className="flex items-center justify-between gap-2 text-xs font-semibold">
            <span>
              Nivel {player.level} · {player.title}
            </span>
            <span className="shrink-0 text-muted-foreground">
              {player.xp}/{player.xpToNext} XP
            </span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${xpPct}%` }}
            />
          </div>
        </div>
      </section>
      <section
        aria-labelledby="pending-title"
        className="mt-3 border-y border-border py-2"
      >
        <h2
          id="pending-title"
          className="flex items-center gap-2 text-sm font-bold"
        >
          <ListTodo className="h-4 w-4 text-primary" /> Pendientes por resolver
        </h2>
        <div aria-live="polite" className="mt-1">
          {unanswered > 0 && (
            <Button
              asChild
              variant="ghost"
              className="h-auto min-h-11 w-full justify-between whitespace-normal px-0 text-left text-xs"
            >
              <Link to="/eventos">
                <span className="flex min-w-0 items-center gap-2">
                  <Calendar className="h-4 w-4 shrink-0 text-primary" />
                  <span>
                    {unanswered}{" "}
                    {unanswered === 1
                      ? "evento sin respuesta"
                      : "eventos sin respuesta"}
                  </span>
                </span>
                <ChevronRight className="h-4 w-4 shrink-0" />
              </Link>
            </Button>
          )}
          {reviewing > 0 && (
            <Button
              asChild
              variant="ghost"
              className="h-auto min-h-11 w-full justify-between whitespace-normal px-0 text-left text-xs"
            >
              <Link to="/pagos">
                <span className="flex min-w-0 items-center gap-2">
                  <FileClock className="h-4 w-4 shrink-0 text-warning-foreground" />
                  <span>
                    {reviewing}{" "}
                    {reviewing === 1
                      ? "comprobante en revisión"
                      : "comprobantes en revisión"}
                  </span>
                </span>
                <ChevronRight className="h-4 w-4 shrink-0" />
              </Link>
            </Button>
          )}
          {unanswered === 0 && reviewing === 0 && (
            <p className="flex min-h-11 items-center gap-2 text-xs text-success">
              <CheckCircle2 className="h-4 w-4 shrink-0" /> No tienes respuestas
              ni revisiones pendientes.
            </p>
          )}
        </div>
      </section>
      {next && (
        <section className="mt-3 rounded-2xl border border-border bg-card p-3 shadow-card">
          <div className="flex items-center justify-between gap-2 text-xs">
            <p className="flex items-center gap-1 font-bold text-primary">
              <Calendar className="h-4 w-4" /> Próximo partido
            </p>
            <Link
              to="/eventos"
              aria-label="Ver eventos"
              className="flex h-8 w-8 items-center justify-center text-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <h2 className="mt-1 text-base font-bold">{next.title}</h2>
          <p className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 shrink-0" />
            {next.date.split("-").reverse().join("/")}{" "}
            <Clock className="h-3.5 w-3.5 shrink-0" />
            {next.time}
          </p>
          <p className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            {next.place}
          </p>
          <p
            role="status"
            className={`my-2 text-xs font-semibold ${
              next.status === "confirmado"
                ? "text-success"
                : next.status === "no-asiste"
                  ? "text-destructive"
                  : next.status === "lesionado"
                    ? "text-orange-700"
                    : "text-muted-foreground"
            }`}
          >
            {next.status === "confirmado"
              ? "Confirmaste que vas"
              : next.status === "no-asiste"
                ? "Confirmaste que no vas"
                : next.status === "lesionado"
                  ? "Reportaste baja por lesión"
                  : "Tu asistencia está sin confirmar"}
          </p>
          <AttendanceActions id={next.id} status={next.status} />
        </section>
      )}
      <section
        className={`mt-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-2xl p-3 ${total ? "bg-destructive-soft text-destructive" : "bg-success-soft text-success"}`}
      >
        <div className="min-w-0">
          <h2 className="flex items-center gap-1 text-xs font-bold">
            <Wallet className="h-4 w-4" />
            {total ? "Pagos pendientes" : "Pagos al día"}
          </h2>
          <p className="mt-1 text-lg font-extrabold">
            ${total.toLocaleString("es-CL")}
          </p>
          <p className="text-xs">
            {pending.length
              ? `${pending.length} cuota por regularizar`
              : "Sin deuda pendiente"}
          </p>
        </div>
        <Button asChild size="sm">
          <Link to="/pagos">{total ? "Registrar pago" : "Historial"}</Link>
        </Button>
      </section>
      <section className="mt-3 border-t border-border pt-3">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-sm font-bold">
            <Megaphone className="h-4 w-4 text-primary" /> Avisos del club
          </h2>
          <Link to="/avisos" className="text-xs font-semibold text-primary">
            Ver todos
          </Link>
        </div>
        {notice ? (
          <Link to="/avisos" className="mt-2 block rounded-xl bg-card p-3">
            <p className="truncate text-sm font-semibold">{notice.titulo}</p>
            <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
              {notice.cuerpo}
            </p>
          </Link>
        ) : (
          <p className="mt-2 text-sm text-muted-foreground">
            No tienes avisos nuevos.
          </p>
        )}
      </section>
    </AppShell>
  );
}
