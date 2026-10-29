import { Button } from "@/components/ui/button";
import { usePrototype, getPrototype } from "@/lib/prototype-state";
import { toast } from "@/lib/toast";
import { pageHead } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import { AppShell, SectionTitle } from "@/components/AppShell";
import { club, standings, recentResults } from "@/lib/mock-data";

export const Route = createFileRoute("/club")({
  head: () =>
    pageHead(
      "Mi club deportivo",
      "Historia, documentación, resultados y categorías de tu club.",
    ),
  component: ClubPage,
});

function ClubPage() {
  const { documentos } = usePrototype();
  return (
    <AppShell>
      <section className="rounded-3xl bg-primary p-6 text-primary-foreground">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-card text-4xl shadow-lg">
          {club.shield}
        </div>
        <h1 className="mt-4 text-2xl font-extrabold">{club.name}</h1>
        <p className="text-sm opacity-80">
          {club.city} · Fundado en {club.founded}
        </p>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <Stat label="Miembros" value={String(club.members)} />
          <Stat label="Años" value={String(2026 - club.founded)} />
          <Stat label="Colores" value={club.colors.split(" ")[0]} />
        </div>
      </section>

      <SectionTitle>Documentos del club</SectionTitle>
      <div className="space-y-2">
        {documentos
          .filter((d) => d.tipo === "estatuto" || d.tipo === "acta")
          .map((d) => (
            <article
              key={d.id}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-2xl bg-card p-3"
            >
              <div className="min-w-0">
                <p className="text-sm font-bold">{d.nombre}</p>
                <p className="text-xs text-muted-foreground">{d.estado}</p>
              </div>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  const file = getPrototype().files[d.id];
                  if (!file) {
                    toast.info("Documento de ejemplo sin archivo adjunto.");
                    return;
                  }
                  const url = URL.createObjectURL(file);
                  window.open(url, "_blank", "noopener,noreferrer");
                  setTimeout(() => URL.revokeObjectURL(url), 60000);
                }}
              >
                Abrir
              </Button>
            </article>
          ))}
      </div>
      <SectionTitle>Historia</SectionTitle>
      <p className="rounded-2xl bg-card p-4 text-sm leading-relaxed text-muted-foreground shadow-[var(--shadow-card)]">
        {club.history}
      </p>

      <SectionTitle>Tabla de posiciones</SectionTitle>
      <div className="overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)]">
        <div className="grid grid-cols-[28px_1fr_40px_40px] gap-2 border-b border-border px-4 py-2 text-[11px] font-bold uppercase text-muted-foreground">
          <span>#</span>
          <span>Equipo</span>
          <span className="text-right">PJ</span>
          <span className="text-right">Pts</span>
        </div>
        {standings.map((s) => {
          const me = s.team === club.name;
          return (
            <div
              key={s.pos}
              className={`grid grid-cols-[28px_1fr_40px_40px] gap-2 px-4 py-2.5 text-sm ${
                me ? "bg-primary-soft font-bold text-foreground" : ""
              }`}
            >
              <span className="text-muted-foreground">{s.pos}</span>
              <span className="truncate">{s.team}</span>
              <span className="text-right">{s.pj}</span>
              <span className="text-right">{s.pts}</span>
            </div>
          );
        })}
      </div>

      <SectionTitle>Resultados recientes</SectionTitle>
      <div className="space-y-2">
        {recentResults.map((r) => (
          <div
            key={r.id}
            className="flex items-center justify-between rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]"
          >
            <div>
              <p className="font-semibold">
                {r.local ? "Local" : "Visita"} · vs {r.rival}
              </p>
              <p className="text-xs text-muted-foreground">{r.date}</p>
            </div>
            <p className="text-xl font-extrabold text-primary">{r.result}</p>
          </div>
        ))}
      </div>

      <SectionTitle>Plantel y categorías</SectionTitle>
      <div className="grid grid-cols-2 gap-3">
        {["Primera Adulta", "Sub-20", "Sub-17", "Femenino"].map((c) => (
          <div
            key={c}
            className="rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]"
          >
            <p className="text-2xl">👥</p>
            <p className="mt-1 font-semibold">{c}</p>
            <p className="text-xs text-muted-foreground">
              {
                [22, 18, 16, 20][
                  ["Primera Adulta", "Sub-20", "Sub-17", "Femenino"].indexOf(c)
                ]
              }{" "}
              jugadores
            </p>
          </div>
        ))}
      </div>

      <SectionTitle>Galería</SectionTitle>
      <div className="grid grid-cols-3 gap-2">
        {["🏆", "⚽", "🎽", "🏟️", "🥇", "📸"].map((emoji, i) => (
          <div
            key={i}
            className="flex aspect-square items-center justify-center rounded-xl bg-accent text-3xl"
          >
            {emoji}
          </div>
        ))}
      </div>
    </AppShell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-card/15 p-2 backdrop-blur">
      <p className="text-lg font-extrabold">{value}</p>
      <p className="text-[11px] opacity-80">{label}</p>
    </div>
  );
}
