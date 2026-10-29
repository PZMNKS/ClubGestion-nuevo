import { usePrototype } from "@/lib/prototype-state";
import {
  useSocios,
  useAsistencias,
  resumenRegistros,
} from "@/lib/dirigente-data";
import { pageHead } from "@/lib/page-head";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Calendar,
  ChevronRight,
  FileText,
  Megaphone,
  UserPlus,
  Wallet,
  Users,
  CheckCircle2,
  ClipboardList,
  Shield,
} from "lucide-react";
import { DirigenteShell, DSectionTitle } from "@/components/DirigenteShell";
import { clubResumen } from "@/lib/dirigente-data";
import { events } from "@/lib/mock-data";

export const Route = createFileRoute("/dirigente/")({
  head: () =>
    pageHead(
      "Inicio del dirigente",
      "Resumen de socios, pagos, eventos y documentación del club.",
    ),
  component: DirigenteHome,
});

function DirigenteHome() {
  const { pagosClub, documentos, avisos, events } = usePrototype();
  const socios = useSocios();
  const asistencias = useAsistencias();
  const pagosPend = pagosClub.filter((p) => p.estado !== "pagado");
  const docsAlerta = documentos.filter(
    (d) =>
      d.estado === "por-vencer" ||
      d.estado === "vencido" ||
      d.estado === "pendiente",
  );
  const vigentes = documentos.filter((d) => d.estado === "vigente").length;
  const formalizacion = documentos.length
    ? Math.round((vigentes / documentos.length) * 100)
    : 0;
  const proximos = events.slice(0, 2);
  const ultAsistencia = asistencias[0];
  const formatCLP = (n: number) => `$${n.toLocaleString("es-CL")}`;

  return (
    <DirigenteShell>
      {/* Hero del club */}
      <section className="rounded-3xl bg-primary-soft p-5">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-card text-2xl shadow-[var(--shadow-card)]">
            {clubResumen.escudo}
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-lg font-extrabold text-foreground">
              {clubResumen.nombre}
            </h1>
            <p className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-success" />
              {socios.length} socios registrados ·{" "}
              {socios.filter((s) => s.rol === "jugador").length} jugadores
            </p>
            <p className="mt-1 text-xs font-semibold text-primary">
              Panel de dirigente
            </p>
          </div>
        </div>

        {/* Estado del club */}
        <div className="mt-4 rounded-2xl bg-card/80 p-3">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-foreground">Estado de formalización</span>
            <span className="text-muted-foreground">{formalizacion}%</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${formalizacion}%` }}
            />
          </div>
          <p className="mt-2 text-[11px] text-muted-foreground">
            {docsAlerta.length} documento(s) requieren tu atención.
          </p>
        </div>
      </section>

      <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
        <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
        <span className="font-semibold text-success">
          {socios.filter((s) => s.pago === "al-dia").length} al día
        </span>
        <span className="text-muted-foreground">·</span>
        <span className="font-semibold text-destructive">
          {socios.filter((s) => s.pago !== "al-dia").length} con pagos
          pendientes
        </span>
      </p>
      {/* Resumen rápido */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <Link to="/dirigente/socios" aria-label="Ver miembros activos">
          <Tile
            label="Miembros activos"
            value={String(socios.length)}
            sub={`${socios.filter((s) => s.rol === "jugador").length} jugadores`}
            icon={<Users className="h-4 w-4" />}
          />
        </Link>
        <Link to="/dirigente/pagos" aria-label="Ver pagos pendientes">
          <Tile
            label="Pagos pendientes"
            value={String(pagosPend.length)}
            sub={pagosPend.length ? "Revisar ahora" : "Al día"}
            tone={pagosPend.length ? "warn" : "ok"}
            icon={<Wallet className="h-4 w-4" />}
          />
        </Link>
        <Link to="/dirigente/eventos" aria-label="Ver próximo evento">
          <Tile
            label="Próximo evento"
            value="Sáb 20"
            sub="vs Unión Centro"
            icon={<Calendar className="h-4 w-4" />}
          />
        </Link>
        <Link
          to="/dirigente/eventos"
          search={{ tab: "asistencia" }}
          aria-label="Ver asistencia del mes"
        >
          <Tile
            label="Asistencia mes"
            value={`${clubResumen.asistenciaPromedio}%`}
            sub="Promedio del club"
            tone="ok"
            icon={<CheckCircle2 className="h-4 w-4" />}
          />
        </Link>
      </div>

      {/* Alertas */}
      {(pagosPend.length > 0 || docsAlerta.length > 0) && (
        <>
          <DSectionTitle>Alertas importantes</DSectionTitle>
          <div className="space-y-3">
            {pagosPend.length > 0 && (
              <Link
                to="/dirigente/pagos"
                className="flex items-center gap-3 rounded-2xl bg-destructive-soft p-4 text-destructive"
              >
                <AlertTriangle className="h-6 w-6 shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold leading-tight">
                    {pagosPend.length} pago(s) sin regularizar
                  </p>
                  <p className="text-sm opacity-80">
                    {formatCLP(pagosPend.reduce((s, p) => s + p.monto, 0))} por
                    cobrar
                  </p>
                </div>
                <ChevronRight className="h-5 w-5" />
              </Link>
            )}
            {docsAlerta.length > 0 && (
              <Link
                to="/dirigente/mas"
                search={{ tab: "documentos" }}
                className="flex items-center gap-3 rounded-2xl bg-warning-soft p-4 text-warning-foreground"
              >
                <FileText className="h-6 w-6 shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold leading-tight">
                    {docsAlerta.length} documento(s) por revisar
                  </p>
                  <p className="text-sm opacity-80">
                    Vencidos, por vencer o pendientes
                  </p>
                </div>
                <ChevronRight className="h-5 w-5" />
              </Link>
            )}
          </div>
        </>
      )}

      {/* Acciones rápidas */}
      <DSectionTitle>Acciones rápidas</DSectionTitle>
      <div className="grid grid-cols-2 gap-3">
        <QuickAction
          to="/dirigente/socios"
          search={{ new: 1 }}
          icon={<UserPlus className="h-5 w-5" />}
          label="Registrar socio"
        />
        <QuickAction
          to="/dirigente/eventos"
          search={{ new: 1 }}
          icon={<Calendar className="h-5 w-5" />}
          label="Crear evento"
        />
        <QuickAction
          to="/dirigente/pagos"
          icon={<Wallet className="h-5 w-5" />}
          label="Revisar pagos"
        />
        <QuickAction
          to="/dirigente/eventos"
          search={{ tab: "avisos", new: 1 }}
          icon={<Megaphone className="h-5 w-5" />}
          label="Publicar aviso"
        />
      </div>

      {/* Próximos eventos */}
      <DSectionTitle
        action={<MoreLink to="/dirigente/eventos">Ver todos</MoreLink>}
      >
        Próximos eventos
      </DSectionTitle>
      <div className="space-y-3">
        {proximos.map((e) => (
          <Link
            key={e.id}
            to="/dirigente/eventos"
            className="flex items-center gap-4 rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]"
          >
            <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-primary-soft text-primary">
              <span className="text-[10px] font-bold tracking-wider">
                {e.monthLabel}
              </span>
              <span className="text-xl font-extrabold leading-none">
                {e.dayLabel}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold">{e.title}</p>
              <p className="text-xs text-muted-foreground">
                {e.time} · {e.place}
              </p>
              <p className="mt-1 text-[11px] font-semibold text-primary">
                {e.called ? "Convocatoria publicada" : "Sin convocar"}
              </p>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </Link>
        ))}
      </div>

      {/* Asistencia reciente */}
      <DSectionTitle
        action={
          <Link
            to="/dirigente/eventos"
            search={{ tab: "asistencia" }}
            className="flex items-center gap-0.5 text-sm font-semibold text-primary"
          >
            Detalle <ChevronRight className="h-4 w-4" />
          </Link>
        }
      >
        Asistencia reciente
      </DSectionTitle>
      <Link
        to="/dirigente/eventos"
        search={{ tab: "asistencia" }}
        className="block rounded-2xl bg-card p-4 shadow-[var(--shadow-card)] transition active:scale-[0.98]"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success-soft text-success">
            <ClipboardList className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-semibold">{ultAsistencia.titulo}</p>
            <p className="text-xs text-muted-foreground">
              {ultAsistencia.categoria} · {ultAsistencia.fecha}
            </p>
          </div>
          <div className="text-right">
            <p className="text-lg font-extrabold text-success">
              {Math.round(
                (resumenRegistros(ultAsistencia.registros).presentes /
                  (resumenRegistros(ultAsistencia.registros).total || 1)) *
                  100,
              )}
              %
            </p>
            <p className="text-[10px] text-muted-foreground">
              {resumenRegistros(ultAsistencia.registros).presentes}/
              {resumenRegistros(ultAsistencia.registros).total}
            </p>
          </div>
        </div>
      </Link>

      {/* Últimos avisos */}
      <DSectionTitle
        action={
          <Link
            to="/dirigente/eventos"
            search={{ tab: "avisos" }}
            className="text-sm font-semibold text-primary"
          >
            Ver todos
          </Link>
        }
      >
        Últimos avisos
      </DSectionTitle>
      <div className="space-y-3">
        {avisos.slice(0, 2).map((a) => (
          <article
            key={a.id}
            className="flex gap-3 rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Megaphone className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="truncate font-semibold">{a.titulo}</p>
                <span className="shrink-0 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-bold text-secondary-foreground">
                  {a.destinatarios}
                </span>
              </div>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                {a.cuerpo}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {a.autor} · {a.fecha}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Socios destacados */}
      <DSectionTitle
        action={<MoreLink to="/dirigente/socios">Ver todos</MoreLink>}
      >
        Socios recientes
      </DSectionTitle>
      <div className="space-y-2">
        {socios.slice(0, 3).map((s) => (
          <Link
            key={s.id}
            to="/dirigente/socios/$id"
            params={{ id: s.id }}
            className="flex items-center gap-3 rounded-2xl bg-card p-3 shadow-[var(--shadow-card)]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-primary">
              {s.foto}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{s.nombre}</p>
              <p className="text-xs text-muted-foreground">{s.categoria}</p>
            </div>
            <PagoBadge estado={s.pago} />
          </Link>
        ))}
      </div>

      {/* Barra de estado del club */}
      <section className="mt-6 rounded-3xl bg-primary-soft p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          Estado del club
        </p>
        <p className="mt-1 text-2xl font-extrabold">{formalizacion}% al día</p>
        <p className="text-xs text-muted-foreground">
          {vigentes} de {documentos.length} documentos vigentes
        </p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-card/70">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${formalizacion}%` }}
          />
        </div>

        <Link
          to="/dirigente/mas"
          search={{ tab: "documentos" }}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-card py-2.5 text-sm font-bold text-primary shadow-[var(--shadow-card)] transition active:scale-[0.98]"
        >
          Documentos <ChevronRight className="h-4 w-4" />
        </Link>
      </section>
    </DirigenteShell>
  );
}

function Tile({
  label,
  value,
  sub,
  tone = "default",
  icon,
}: {
  label: string;
  value: string;
  sub: string;
  tone?: "default" | "ok" | "warn";
  icon?: React.ReactNode;
}) {
  const cls =
    tone === "warn"
      ? "text-destructive"
      : tone === "ok"
        ? "text-success"
        : "text-primary";
  return (
    <div className="h-full rounded-2xl bg-card p-4 shadow-[var(--shadow-card)] transition active:scale-[0.98]">
      <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        {icon}
        {label}
      </div>
      <p className={`mt-1 text-2xl font-extrabold ${cls}`}>{value}</p>
      <div className="flex items-end justify-between gap-2">
        <p className="text-xs text-muted-foreground">{sub}</p>
        <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
      </div>
    </div>
  );
}

function QuickAction({
  to,
  search,
  icon,
  label,
}: {
  to: string;
  search?: Record<string, string | number>;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      to={to}
      search={search as never}
      className="flex items-center gap-3 rounded-2xl bg-card p-4 shadow-[var(--shadow-card)] transition active:scale-[0.98]"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
        {icon}
      </span>
      <span className="text-sm font-semibold text-foreground">{label}</span>
    </Link>
  );
}

function MoreLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-0.5 text-sm font-semibold text-primary"
    >
      {children} <ChevronRight className="h-4 w-4" />
    </Link>
  );
}

export function PagoBadge({
  estado,
}: {
  estado: "al-dia" | "pendiente" | "vencido";
}) {
  const map = {
    "al-dia": { label: "Al día", cls: "bg-success-soft text-success" },
    pendiente: {
      label: "Pendiente",
      cls: "bg-warning-soft text-warning-foreground",
    },
    vencido: { label: "Vencido", cls: "bg-destructive-soft text-destructive" },
  } as const;
  const it = map[estado];
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${it.cls}`}
    >
      {it.label}
    </span>
  );
}
