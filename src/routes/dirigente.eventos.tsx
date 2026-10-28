import { pageHead } from "@/lib/page-head";
import {
  usePrototype,
  getPrototype,
  updatePrototype,
} from "@/lib/prototype-state";
import { FlowSheet } from "@/components/FlowSheet";
import { DraggableBottomSheet } from "@/components/DraggableBottomSheet";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Plus,
  X,
  Send,
  Users,
  ClipboardList,
  ChevronRight,
} from "lucide-react";
import { AsistenciaListaSheet } from "@/components/AsistenciaListaSheet";
import {
  useAsistencias,
  addAsistencia,
  useSocios,
  resumenRegistros,
  convocatoriaEvento,
  type EstadoAsistencia,
  type SesionAsistencia,
} from "@/lib/dirigente-data";
import { DirigenteShell, DSectionTitle } from "@/components/DirigenteShell";
import { EventCard } from "@/components/EventCard";
import { events as initialEvents, type EventType } from "@/lib/mock-data";

export const Route = createFileRoute("/dirigente/eventos")({
  head: () =>
    pageHead(
      "Eventos y asistencia del club",
      "Organiza eventos, convocatorias y registros manuales de asistencia.",
    ),
  validateSearch: (
    s: Record<string, unknown>,
  ): { new?: number; tab?: string } => ({
    new: s.new ? 1 : undefined,
    tab: typeof s.tab === "string" ? s.tab : undefined,
  }),
  component: EventosDirigente,
});

function EventosDirigente() {
  const { events } = usePrototype();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const selected = events.find((e) => e.id === selectedId);
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const [tab, setTab] = useState<"eventos" | "asistencia">(
    search.tab === "asistencia" ? "asistencia" : "eventos",
  );
  const [showConv, setShowConv] = useState(false);

  useEffect(() => {
    if (search.tab === "asistencia") setTab("asistencia");
    if (search.new) setShowForm(true);
    if (search.new || search.tab) navigate({ search: {}, replace: true });
  }, [search.new, search.tab, navigate]);

  const conv = selected ? convocatoriaEvento(selected.id, selected.called) : {};
  if (selected)
    conv.s1 =
      selected.status === "confirmado"
        ? "presente"
        : selected.status === "no-asiste"
          ? "ausente"
          : "sin-respuesta";
  const convR = resumenRegistros(conv);

  return (
    <DirigenteShell>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-2">
        <div>
          <h1 className="text-2xl font-extrabold">Eventos</h1>
          <p className="text-sm text-muted-foreground">
            Planifica y convoca al equipo.
          </p>
        </div>
        <Button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-1 px-3 font-bold"
        >
          <Plus className="h-4 w-4" /> Crear
        </Button>
      </div>

      <div className="mt-4 inline-flex rounded-full bg-secondary p-1">
        {(["eventos", "asistencia"] as const).map((v) => (
          <Button
            variant="ghost"
            key={v}
            aria-pressed={tab === v}
            onClick={() => setTab(v)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold capitalize transition ${
              tab === v
                ? "bg-card text-foreground shadow-[var(--shadow-card)]"
                : "text-muted-foreground"
            }`}
          >
            {v}
          </Button>
        ))}
      </div>

      {tab === "eventos" ? (
        <>
          <DSectionTitle>Próximos</DSectionTitle>
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
        <AsistenciaSection />
      )}

      {selected && (
        <DraggableBottomSheet
          onClose={() => {
            setSelectedId(null);
            setShowConv(false);
          }}
        >
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
          </div>

          <DSectionTitle>Convocatoria</DSectionTitle>
          <Button
            variant="ghost"
            onClick={() => setShowConv(true)}
            className="block w-full rounded-2xl bg-secondary p-3 text-left text-sm transition active:scale-[0.98]"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 font-semibold">
                <Users className="h-4 w-4" /> Convocados
              </span>
              <span className="flex items-center gap-1 font-bold text-primary">
                {convR.presentes}/{convR.total}{" "}
                <ChevronRight className="h-4 w-4" />
              </span>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Mini
                label="Confirmados"
                value={String(convR.presentes)}
                tone="ok"
              />
              <Mini
                label="Sin responder"
                value={String(convR.sinRespuesta)}
                tone="warn"
              />
              <Mini
                label="No asisten"
                value={String(convR.ausentes)}
                tone="bad"
              />
              <Mini
                label="Convocados"
                value={String(convR.total)}
                tone="default"
              />
            </div>
          </Button>

          <Button
            onClick={() =>
              navigate({
                to: "/dirigente/mas",
                search: { tab: "comunicacion", new: 1 },
              })
            }
            className="mt-4 flex w-full items-center justify-center gap-2    text-sm font-bold "
          >
            <Send className="h-4 w-4" /> Enviar aviso a convocados
          </Button>
        </DraggableBottomSheet>
      )}

      {selected && showConv && (
        <AsistenciaListaSheet
          titulo={`Convocatoria · ${selected.title}`}
          subtitulo={`${selected.monthLabel} ${selected.dayLabel} · ${selected.time}`}
          registros={conv}
          onClose={() => setShowConv(false)}
        />
      )}

      {showForm && (
        <NewEventSheet
          onClose={() => setShowForm(false)}
          onSave={(e) => {
            updatePrototype({ events: [e, ...getPrototype().events] });
            toast.success("Evento creado en esta sesión");
            setShowForm(false);
          }}
        />
      )}
    </DirigenteShell>
  );
}

function Mini({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "ok" | "warn" | "bad" | "default";
}) {
  const cls = {
    ok: "bg-success-soft text-success",
    warn: "bg-warning-soft text-warning-foreground",
    bad: "bg-destructive-soft text-destructive",
    default: "bg-card text-foreground",
  }[tone];
  return (
    <div className={`rounded-xl p-2 ${cls}`}>
      <p className="text-[10px] font-semibold uppercase tracking-wider opacity-80">
        {label}
      </p>
      <p className="text-lg font-extrabold">{value}</p>
    </div>
  );
}

function NewEventSheet({
  onClose,
  onSave,
}: {
  onClose: () => void;
  onSave: (e: (typeof initialEvents)[number]) => void;
}) {
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState<EventType>("entrenamiento");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("19:30");
  const [lugar, setLugar] = useState("");
  const [obs, setObs] = useState("");

  return (
    <FlowSheet title="Nuevo evento" onClose={onClose}>
      <div className="mt-4 space-y-3">
        <L label="Título">
          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="fld"
            placeholder="Ej: Entrenamiento"
          />
        </L>
        <L label="Tipo">
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value as EventType)}
            className="fld"
          >
            <option value="entrenamiento">Entrenamiento</option>
            <option value="partido">Partido</option>
            <option value="reunion">Reunión</option>
            <option value="actividad">Actividad</option>
          </select>
        </L>
        <div className="grid grid-cols-2 gap-3">
          <L label="Fecha">
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="fld"
            />
          </L>
          <L label="Hora">
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              className="fld"
            />
          </L>
        </div>
        <L label="Lugar">
          <input
            value={lugar}
            onChange={(e) => setLugar(e.target.value)}
            className="fld"
            placeholder="Ej: Cancha municipal"
          />
        </L>
        <L label="Observaciones">
          <textarea
            value={obs}
            onChange={(e) => setObs(e.target.value)}
            rows={2}
            className="fld"
            placeholder="Notas opcionales..."
          />
        </L>
      </div>
      <div className="flow-actions">
        <Button variant="secondary" className="w-full" onClick={onClose}>
          Cancelar
        </Button>
        <Button
          disabled={!titulo.trim() || !fecha || !hora || !lugar.trim()}
          onClick={() => {
            const d = new Date(fecha + "T00:00:00");
            const months = [
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
            ];
            onSave({
              id: `e${Date.now()}`,
              type: tipo,
              title: titulo,
              date: fecha,
              dayLabel: String(d.getDate()).padStart(2, "0"),
              monthLabel: months[d.getMonth()],
              time: `${hora} hs`,
              place: lugar,
              status: "pendiente",
              called: false,
            });
          }}
          className="w-full text-sm font-bold disabled:opacity-50"
        >
          Crear evento
        </Button>
      </div>
      <style>{`.fld{width:100%;border-radius:0.75rem;background:var(--secondary);padding:0.625rem 0.875rem;font-size:0.875rem;outline:none}`}</style>
    </FlowSheet>
  );
}

function L({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function AsistenciaSection() {
  const sesiones = useAsistencias();
  const [openId, setOpenId] = useState<string | null>(null);
  const [showNew, setShowNew] = useState(false);
  const open = sesiones.find((s) => s.id === openId);
  const pcts = sesiones.map((s) => {
    const r = resumenRegistros(s.registros);
    return r.total ? Math.round((r.presentes / r.total) * 100) : 0;
  });
  const avg = pcts.length
    ? Math.round(pcts.reduce((a, b) => a + b, 0) / pcts.length)
    : 0;

  return (
    <>
      <div className="mt-5 grid grid-cols-3 gap-2">
        <Stat label="Promedio" value={`${avg}%`} />
        <Stat
          label="Mejor"
          value={`${pcts.length ? Math.max(...pcts) : 0}%`}
          cls="text-success"
        />
        <Stat
          label="Menor"
          value={`${pcts.length ? Math.min(...pcts) : 0}%`}
          cls="text-destructive"
        />
      </div>

      <DSectionTitle>Sesiones recientes</DSectionTitle>
      <div className="space-y-2">
        {sesiones.map((a) => {
          const r = resumenRegistros(a.registros);
          const pct = r.total ? Math.round((r.presentes / r.total) * 100) : 0;
          return (
            <Button
              variant="ghost"
              key={a.id}
              onClick={() => setOpenId(a.id)}
              className="block w-full rounded-2xl bg-card p-4 text-left shadow-[var(--shadow-card)] transition active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-success-soft text-success">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{a.titulo}</p>
                  <p className="text-xs text-muted-foreground">
                    {a.categoria} · {a.fecha}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-base font-extrabold text-success">
                    {pct}%
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    {r.presentes}/{r.total}
                  </p>
                </div>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-success"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </Button>
          );
        })}
      </div>

      <Button
        onClick={() => setShowNew(true)}
        className="mt-5 w-full text-sm font-bold"
      >
        Registrar asistencia
      </Button>

      {open && (
        <AsistenciaListaSheet
          titulo={open.titulo}
          subtitulo={`${open.categoria} · ${open.fecha}`}
          registros={open.registros}
          onClose={() => setOpenId(null)}
        />
      )}
      {showNew && (
        <RegistrarAsistenciaSheet onClose={() => setShowNew(false)} />
      )}
    </>
  );
}

function Stat({
  label,
  value,
  cls = "text-foreground",
}: {
  label: string;
  value: string;
  cls?: string;
}) {
  return (
    <div className="rounded-2xl bg-card p-3 text-center shadow-[var(--shadow-card)]">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className={`mt-1 text-lg font-extrabold ${cls}`}>{value}</p>
    </div>
  );
}

function RegistrarAsistenciaSheet({ onClose }: { onClose: () => void }) {
  const socios = useSocios();
  const jugadores = socios.filter((s) => s.rol === "jugador");
  const categorias = [
    "Todos",
    ...Array.from(new Set(jugadores.map((j) => j.categoria))),
  ];
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState<EventType>("entrenamiento");
  const [fecha, setFecha] = useState(() =>
    new Date().toISOString().slice(0, 10),
  );
  const [categoria, setCategoria] = useState("Todos");
  const [reg, setReg] = useState<Record<string, EstadoAsistencia>>({});
  const lista = jugadores.filter(
    (j) => categoria === "Todos" || j.categoria === categoria,
  );
  const opts: { k: EstadoAsistencia; l: string; on: string }[] = [
    { k: "presente", l: "Asistió", on: "bg-success text-success-foreground" },
    {
      k: "ausente",
      l: "No asistió",
      on: "bg-destructive text-destructive-foreground",
    },
    {
      k: "sin-respuesta",
      l: "Sin resp.",
      on: "bg-warning text-warning-foreground",
    },
  ];

  const guardar = () => {
    const [y, m, d] = fecha.split("-");
    const registros: Record<string, EstadoAsistencia> = {};
    lista.forEach((j) => (registros[j.id] = reg[j.id] ?? "sin-respuesta"));
    const r = resumenRegistros(registros);
    const s: SesionAsistencia = {
      id: `as${Date.now()}`,
      titulo: titulo.trim(),
      tipo,
      fecha: `${d}-${m}-${y}`,
      categoria,
      presentes: r.presentes,
      total: r.total,
      registros,
    };
    addAsistencia(s);
    toast.success("Asistencia registrada");
    onClose();
  };

  return (
    <FlowSheet title="Registrar asistencia" onClose={onClose}>
      <div className="mt-4 space-y-3">
        <L label="Título del evento">
          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="fld"
            placeholder="Ej: Entrenamiento martes"
          />
        </L>
        <div className="grid grid-cols-2 gap-3">
          <L label="Tipo">
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value as EventType)}
              className="fld"
            >
              <option value="entrenamiento">Entrenamiento</option>
              <option value="partido">Partido</option>
              <option value="reunion">Reunión</option>
              <option value="actividad">Actividad</option>
            </select>
          </L>
          <L label="Fecha">
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="fld"
            />
          </L>
        </div>
        <L label="Categoría">
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="fld"
          >
            {categorias.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </L>
      </div>

      <DSectionTitle>Jugadores ({lista.length})</DSectionTitle>
      <div className="space-y-2">
        {lista.map((j) => {
          const cur = reg[j.id] ?? "sin-respuesta";
          return (
            <div key={j.id} className="rounded-2xl bg-secondary p-3">
              <p className="text-sm font-semibold">{j.nombre}</p>
              <p className="text-xs text-muted-foreground">{j.categoria}</p>
              <div className="mt-2 grid grid-cols-3 gap-1.5">
                {opts.map((o) => (
                  <Button
                    variant="ghost"
                    key={o.k}
                    onClick={() => setReg((p) => ({ ...p, [j.id]: o.k }))}
                    aria-pressed={cur === o.k}
                    className={`rounded-xl px-1 py-1.5 text-xs font-bold transition ${cur === o.k ? o.on : "bg-card text-secondary-foreground"}`}
                  >
                    {o.l}
                  </Button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <Button variant="secondary" className="mt-4 w-full" onClick={onClose}>
        Cancelar
      </Button>
      <Button
        disabled={!titulo.trim() || !fecha || lista.length === 0}
        onClick={guardar}
        className="mt-5 w-full    text-sm font-bold  disabled:opacity-50"
      >
        Guardar asistencia
      </Button>
      <style>{`.fld{width:100%;border-radius:0.75rem;background:var(--secondary);padding:0.625rem 0.875rem;font-size:0.875rem;outline:none}`}</style>
    </FlowSheet>
  );
}
