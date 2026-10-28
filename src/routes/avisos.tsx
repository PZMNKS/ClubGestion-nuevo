import { createFileRoute } from "@tanstack/react-router";
import { Megaphone } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { usePrototype } from "@/lib/prototype-state";
import { player } from "@/lib/mock-data";
import { pageHead } from "@/lib/page-head";
export const Route = createFileRoute("/avisos")({
  head: () =>
    pageHead(
      "Avisos del club",
      "Comunicados para tu categoría y novedades generales del club.",
    ),
  component: AvisosPage,
});
function AvisosPage() {
  const { avisos } = usePrototype();
  const list = avisos.filter(
    (a) =>
      a.destinatarios === "Todos" ||
      a.destinatarios === player.category ||
      a.destinatarios === "Socios",
  );
  return (
    <AppShell>
      <h1 className="text-2xl font-extrabold">Avisos</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {player.category} · Comunicados del club
      </p>
      <div className="mt-4 space-y-3">
        {list.map((a) => (
          <article key={a.id} className="rounded-2xl bg-card p-4 shadow-card">
            <div className="flex items-center gap-2">
              <Megaphone className="h-5 w-5 shrink-0 text-primary" />
              <h2 className="min-w-0 text-base font-bold">{a.titulo}</h2>
            </div>
            <p className="mt-2 text-sm">{a.cuerpo}</p>
            <p className="mt-3 text-xs text-muted-foreground">
              {a.destinatarios} · {a.autor} · {a.fecha}
            </p>
          </article>
        ))}
      </div>
    </AppShell>
  );
}
