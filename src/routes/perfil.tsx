import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/lib/toast";
import { pageHead } from "@/lib/page-head";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { AppShell, SectionTitle } from "@/components/AppShell";
import { player, achievements, club } from "@/lib/mock-data";

export const Route = createFileRoute("/perfil")({
  head: () =>
    pageHead(
      "Mi perfil de jugador",
      "Datos de jugador, estadísticas y preferencias de notificaciones.",
    ),
  component: PerfilPage,
});

function PerfilPage() {
  const [prefs, setPrefs] = useState<Record<string, boolean>>({});
  const xpPct = Math.round((player.xp / player.xpToNext) * 100);
  const unlocked = achievements.filter((a) => a.unlocked);

  return (
    <AppShell>
      <h1 className="text-2xl font-extrabold">Mi Perfil</h1>

      <section className="mt-4 rounded-3xl bg-card p-5 shadow-[var(--shadow-card)]">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-warning to-primary" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft text-3xl">
              {player.name[0]}
            </div>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
              Nv {player.level}
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              {player.title}
            </p>
            <h2 className="truncate text-xl font-extrabold">{player.name}</h2>
            <p className="text-sm text-muted-foreground">
              #{player.number} · {player.position}
            </p>
            <p className="text-xs text-muted-foreground">
              {club.name} · {player.category}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-xs font-semibold">
            <span>Nivel {player.level}</span>
            <span className="text-muted-foreground">
              {player.xp}/{player.xpToNext} XP
            </span>
          </div>
          <div className="mt-1 h-2.5 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${xpPct}%` }}
            />
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            {player.xpToNext - player.xp} XP para subir a Nivel{" "}
            {player.level + 1}
          </p>
        </div>

        <p className="mt-3 text-xs text-muted-foreground">
          Socio desde {player.memberSince}
        </p>
      </section>

      <SectionTitle>Estadísticas</SectionTitle>
      <div className="grid grid-cols-2 gap-3">
        <StatCard
          label="Entrenamientos"
          value={player.stats.trainingsAttended}
        />
        <StatCard label="Partidos jugados" value={player.stats.matchesPlayed} />
        <StatCard
          label="Asistencia mes"
          value={`${player.stats.monthlyAttendance}%`}
          tone="ok"
        />
        <StatCard
          label="Asistencia año"
          value={`${player.stats.yearlyAttendance}%`}
          tone="ok"
        />
        <StatCard label="Goles" value={player.stats.goals} />
        <StatCard
          label="Racha actual"
          value={`${player.stats.streak} 🔥`}
          tone="warn"
        />
      </div>

      <SectionTitle>Logros</SectionTitle>
      <div className="grid grid-cols-4 gap-3">
        {achievements.map((a) => (
          <div
            key={a.id}
            className={`flex flex-col items-center gap-1 rounded-2xl p-3 text-center ${
              a.unlocked
                ? "bg-card shadow-[var(--shadow-card)]"
                : "bg-secondary/60 opacity-60"
            }`}
          >
            <span className={`text-2xl ${a.unlocked ? "" : "grayscale"}`}>
              {a.icon}
            </span>
            <span className="text-[10px] font-medium leading-tight">
              {a.name}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        {unlocked.length} de {achievements.length} logros desbloqueados
      </p>

      <SectionTitle>Insignias y títulos</SectionTitle>
      <div className="flex flex-wrap gap-2">
        {["Capitán", "Goleador", "Constante", "Puntual", "Compañero"].map(
          (b) => (
            <span
              key={b}
              className="rounded-full bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary"
            >
              🏅 {b}
            </span>
          ),
        )}
      </div>

      <SectionTitle>Notificaciones</SectionTitle>
      <div className="space-y-2 rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]">
        {[
          ["Recordatorio de entrenamientos", true],
          ["Recordatorio de partidos", true],
          ["Convocatorias publicadas", true],
          ["Pagos por vencer", true],
          ["Avisos del club", false],
        ].map(([label, on]) => (
          <div
            key={label as string}
            className="flex items-center justify-between py-1"
          >
            <span className="text-sm">{label as string}</span>
            <Switch
              aria-label={label as string}
              checked={prefs[label as string] ?? Boolean(on)}
              onCheckedChange={(value) => {
                setPrefs((p) => ({ ...p, [label as string]: value }));
                toast.success("Preferencia actualizada en esta sesión");
              }}
            />
          </div>
        ))}
      </div>
    </AppShell>
  );
}

function StatCard({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: string | number;
  tone?: "default" | "ok" | "warn";
}) {
  const cls =
    tone === "ok"
      ? "text-success"
      : tone === "warn"
        ? "text-warning-foreground"
        : "text-primary";
  return (
    <div className="rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className={`mt-1 text-2xl font-extrabold ${cls}`}>{value}</p>
    </div>
  );
}
