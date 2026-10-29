import { pageHead } from "@/lib/page-head";
import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { AlertTriangle, ChevronRight, Megaphone, Pin } from "lucide-react";
import { AppShell, SectionTitle } from "@/components/AppShell";
import { EventCard } from "@/components/EventCard";
import { club, player, events, payments, announcements } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Inicio",
      "Gestión de clubes deportivos de barrio para dirigentes y jugadores.",
    ),
  beforeLoad: () => {
    throw redirect({ to: "/dirigente" });
  },
  component: Home,
});

function Home() {
  const [evts, setEvts] = useState(events);
  const upcoming = [...evts].slice(0, 2);
  const pending = payments.filter((p) => p.status === "pendiente");
  const pinned = announcements.filter((a) => a.pinned);
  const others = announcements.filter((a) => !a.pinned);
  const xpPct = Math.round((player.xp / player.xpToNext) * 100);

  return (
    <AppShell>
      {/* Club hero */}
      <section className="rounded-3xl bg-primary-soft p-5">
        <div className="flex items-center gap-4">
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-xl font-extrabold text-foreground">
              {club.name}
            </h1>
            <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-success" />
              Miembros activos: {club.members}
            </p>
            <p className="mt-1 text-xs font-medium text-primary">
              {player.category} · Membresía {player.membership}
            </p>
          </div>
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-card text-2xl shadow-[var(--shadow-card)]">
            {club.shield}
          </div>
        </div>

        {/* XP progress */}
        <div className="mt-4 rounded-2xl bg-card/70 p-3">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-foreground">
              Nivel {player.level} · {player.title}
            </span>
            <span className="text-muted-foreground">
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
        <Link
          to="/dirigente"
          className="mt-3 flex items-center justify-center gap-1 rounded-xl bg-card/70 py-2 text-xs font-bold text-primary"
        >
          Cambiar a modo dirigente →
        </Link>
      </section>

      {/* Quick summary */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <SummaryTile
          label="Próximo partido"
          value="Sáb 20"
          sub="vs Unión Centro"
        />
        <SummaryTile label="Próximo entreno" value="Jue 18" sub="19:30 hs" />
        <SummaryTile
          label="Pagos pendientes"
          value={String(pending.length)}
          sub={pending.length ? "Revisar ahora" : "Al día"}
          tone={pending.length ? "warn" : "ok"}
        />
        <SummaryTile
          label="Asistencia mes"
          value={`${player.stats.monthlyAttendance}%`}
          sub={`Racha ${player.stats.streak}`}
          tone="ok"
        />
      </div>

      {/* Upcoming events */}
      <SectionTitle action={<LinkMore to="/eventos">Ver todos</LinkMore>}>
        Próximos eventos
      </SectionTitle>
      <div className="space-y-3">
        {upcoming.map((e) => (
          <EventCard key={e.id} {...e} />
        ))}
      </div>

      {/* Pending payments */}
      <SectionTitle action={<LinkMore to="/pagos">Historial</LinkMore>}>
        Pagos pendientes
      </SectionTitle>
      {pending.length === 0 ? (
        <div className="rounded-2xl bg-success-soft p-4 text-success">
          Estás al día. ¡Gracias!
        </div>
      ) : (
        pending.map((p) => (
          <div
            key={p.id}
            className="flex items-center gap-3 rounded-2xl bg-destructive-soft p-4 text-destructive"
          >
            <AlertTriangle className="h-6 w-6 shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="font-semibold leading-tight">
                Tienes {pending.length} pago pendiente
              </p>
              <p className="text-sm opacity-80">
                {p.concept} · vence {formatShort(p.dueDate)}
              </p>
            </div>
            <Link
              to="/pagos"
              className="rounded-xl bg-destructive px-3 py-2 text-xs font-bold uppercase tracking-wide text-destructive-foreground"
            >
              Pagar ahora
            </Link>
          </div>
        ))
      )}

      {/* Announcements */}
      <SectionTitle>Últimos avisos</SectionTitle>
      <div className="space-y-3">
        {pinned.map((a) => (
          <AnnouncementCard key={a.id} a={a} pinned />
        ))}
        {others.map((a) => (
          <AnnouncementCard key={a.id} a={a} />
        ))}
      </div>

      {/* Quick confirm */}
      <SectionTitle>Confirma tu asistencia</SectionTitle>
      <div className="rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]">
        <p className="font-semibold">{upcoming[0]?.title}</p>
        <p className="text-sm text-muted-foreground">
          {upcoming[0]?.monthLabel} {upcoming[0]?.dayLabel} ·{" "}
          {upcoming[0]?.time}
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {(["confirmado", "no-asiste", "lesionado", "pendiente"] as const).map(
            (s) => (
              <button
                key={s}
                onClick={() =>
                  setEvts((prev) =>
                    prev.map((e, i) => (i === 0 ? { ...e, status: s } : e)),
                  )
                }
                className={`rounded-xl px-2 py-2 text-xs font-semibold transition ${
                  evts[0]?.status === s
                    ? s === "confirmado"
                      ? "bg-success text-success-foreground"
                      : s === "no-asiste"
                        ? "bg-destructive text-destructive-foreground"
                        : s === "lesionado"
                          ? "bg-orange-600 text-white"
                          : "bg-warning text-warning-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                {s === "confirmado"
                  ? "Asistiré"
                  : s === "no-asiste"
                    ? "No asisto"
                    : s === "lesionado"
                      ? "Lesionado"
                      : "Pendiente"}
              </button>
            ),
          )}
        </div>
      </div>
    </AppShell>
  );
}

function SummaryTile({
  label,
  value,
  sub,
  tone = "default",
}: {
  label: string;
  value: string;
  sub: string;
  tone?: "default" | "ok" | "warn";
}) {
  const toneCls =
    tone === "warn"
      ? "text-destructive"
      : tone === "ok"
        ? "text-success"
        : "text-primary";
  return (
    <div className="rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]">
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <p className={`mt-1 text-2xl font-extrabold ${toneCls}`}>{value}</p>
      <p className="text-xs text-muted-foreground">{sub}</p>
    </div>
  );
}

function AnnouncementCard({
  a,
  pinned,
}: {
  a: { title: string; body: string; time: string; icon: string };
  pinned?: boolean;
}) {
  return (
    <article className="flex gap-3 rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg text-primary-foreground">
        <Megaphone className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="font-semibold">{a.title}</p>
          {pinned && (
            <span className="inline-flex items-center gap-1 rounded-full bg-warning-soft px-2 py-0.5 text-[10px] font-bold uppercase text-warning-foreground">
              <Pin className="h-3 w-3" /> Fijado
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{a.body}</p>
        <p className="mt-1 text-xs text-muted-foreground">{a.time}</p>
      </div>
    </article>
  );
}

function LinkMore({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-0.5 text-sm font-semibold text-primary"
    >
      {children} <ChevronRight className="h-4 w-4" />
    </Link>
  );
}

function formatShort(iso: string) {
  const months = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
  ];
  const [y, m, d] = iso.split("-").map(Number);
  void y;
  return `${String(d).padStart(2, "0")}-${months[m - 1]}`;
}
