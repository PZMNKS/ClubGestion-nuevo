import { pageHead } from "@/lib/page-head";
import {
  usePrototype,
  getPrototype,
  updatePrototype,
  resolveConvocatoriaEvento,
  saveConvocatoriaEvento,
} from "@/lib/prototype-state";
import { FlowSheet, FlowActions } from "@/components/FlowSheet";
import { DraggableBottomSheet } from "@/components/DraggableBottomSheet";
import { toast } from "@/lib/toast";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Plus,
  Send,
  Users,
  ClipboardList,
  ChevronRight,
  Megaphone,
} from "lucide-react";
import {
  AsistenciaListaSheet,
  EditarAsistenciaSheet,
  OpcionesAsistenciaRow,
} from "@/components/AsistenciaListaSheet";
import {
  useAsistencias,
  addAsistencia,
  updateAsistencia,
  useSocios,
  resumenRegistros,
  type EstadoAsistencia,
  type SesionAsistencia,
  type AvisoDirigente,
} from "@/lib/dirigente-data";
import { DirigenteShell, DSectionTitle } from "@/components/DirigenteShell";
import { EventCard } from "@/components/EventCard";
import { events as initialEvents, type EventType } from "@/lib/mock-data";

export const Route = createFileRoute("/dirigente/eventos")({
  head: () =>
    pageHead(
      "Eventos, asistencia y avisos del club",
      "Organiza eventos, convocatorias, registros de asistencia y avisos del club.",
    ),
  validateSearch: (
    s: Record<string, unknown>,
  ): { new?: number; tab?: string } => ({
    new: s.new ? 1 : undefined,
    tab: typeof s.tab === "string" ? s.tab : undefined,
  }),
  component: EventosDirigente,
});

const DESTINATARIOS_OPTIONS = [
  "Todos",
  "Primera Adulta",
  "Femenino Adulto",
  "Sub-17",
  "Socios",
  "Directiva",
] as const;

type EventosTab = "eventos" | "asistencia" | "avisos";

function resolveEventosTab(tab?: string): EventosTab {
  if (tab === "asistencia") return "asistencia";
  if (tab === "avisos" || tab === "comunicacion") return "avisos";
  return "eventos";
}

function EventosDirigente() {
  const { events, convocatorias } = usePrototype();
  useSocios();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = events.find((e) => e.id === selectedId);
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const isInitialAvisoTab =
    search.tab === "avisos" || search.tab === "comunicacion";
  const isInitialAsistenciaTab = search.tab === "asistencia";
  const [tab, setTab] = useState<EventosTab>(() =>
    resolveEventosTab(search.tab),
  );
  const [showForm, setShowForm] = useState(
    Boolean(search.new) && !isInitialAvisoTab && !isInitialAsistenciaTab,
  );
  const [showNewAsistencia, setShowNewAsistencia] = useState(
    Boolean(search.new) && isInitialAsistenciaTab,
  );
  const [openNewAviso, setOpenNewAviso] = useState(
    Boolean(search.new) && isInitialAvisoTab,
  );
  const [avisoInitialDest, setAvisoInitialDest] = useState("Todos");
  const [showConv, setShowConv] = useState(false);

  useEffect(() => {
    const isAviso = search.tab === "avisos" || search.tab === "comunicacion";
    const isAsistencia = search.tab === "asistencia";
    if (search.tab) {
      setTab(resolveEventosTab(search.tab));
    }
    if (search.new) {
      if (isAviso) {
        setOpenNewAviso(true);
      } else if (isAsistencia) {
        setShowNewAsistencia(true);
      } else {
        setShowForm(true);
      }
    }
    if (search.new || search.tab) {
      navigate({ search: {}, replace: true });
    }
  }, [search.new, search.tab, navigate]);

  const conv = selected
    ? resolveConvocatoriaEvento(selected, convocatorias[selected.id])
    : {};
  const convR = resumenRegistros(conv);

  return (
    <DirigenteShell>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-2">
        <div>
          <h1 className="text-2xl font-extrabold">Eventos</h1>
          <p className="text-sm text-muted-foreground">
            Planifica, convoca y comunica al equipo.
          </p>
        </div>
        {tab === "eventos" && (
          <Button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-1 px-3 font-bold"
          >
            <Plus className="h-4 w-4" /> Crear
          </Button>
        )}
        {tab === "asistencia" && (
          <Button
            onClick={() => setShowNewAsistencia(true)}
            className="flex items-center gap-1 px-3 font-bold"
          >
            <ClipboardList className="h-4 w-4" /> Registrar asistencia
          </Button>
        )}
      </div>

      <div className="mt-4 inline-flex max-w-full overflow-x-auto rounded-full bg-secondary p-1">
        {(["eventos", "asistencia", "avisos"] as const).map((v) => (
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

      {tab === "eventos" && (
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
      )}
      {tab === "asistencia" && (
        <AsistenciaSection onOpenNew={() => setShowNewAsistencia(true)} />
      )}
      {tab === "avisos" && (
        <AvisosSection
          openNew={openNewAviso}
          initialDestinatarios={avisoInitialDest}
          onConsumeOpenNew={() => {
            setOpenNewAviso(false);
            setAvisoInitialDest("Todos");
          }}
        />
      )}

      {selected && !showConv && (
        <DraggableBottomSheet
          onClose={() => {
            setSelectedId(null);
            setShowConv(false);
          }}
        >
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              {selected.type}
            </p>
            {selected.destinatarios && (
              <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-bold text-secondary-foreground">
                {selected.destinatarios}
              </span>
            )}
          </div>
          <h2 className="mt-1 text-2xl font-extrabold">{selected.title}</h2>
          <div className="mt-3 space-y-1 text-sm text-muted-foreground">
            <p>
              📅 {selected.monthLabel} {selected.dayLabel} · {selected.time}
            </p>
            <p>📍 {selected.place}</p>
            {selected.destinatarios && (
              <p>👥 Destinatarios: {selected.destinatarios}</p>
            )}
            {selected.rival && <p>🆚 {selected.rival}</p>}
          </div>

          <DSectionTitle>Convocatoria</DSectionTitle>
          <Button
            variant="ghost"
            onClick={() => setShowConv(true)}
            className="block h-auto w-full rounded-2xl bg-secondary p-3 text-left text-sm transition active:scale-[0.98]"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 font-semibold">
                <Users className="h-4 w-4" /> Convocados ({convR.presentes}/
                {convR.total})
              </span>
              <span className="flex items-center gap-1 text-xs font-bold text-primary">
                Editar asistencia <ChevronRight className="h-4 w-4" />
              </span>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Mini
                label="Confirmados"
                value={String(convR.presentes)}
                tone="ok"
              />
              <Mini
                label="No asisten"
                value={String(convR.ausentes)}
                tone="bad"
              />
              <Mini
                label="Lesionados"
                value={String(convR.lesionados)}
                tone="injured"
              />
              <Mini
                label="Sin responder"
                value={String(convR.sinRespuesta)}
                tone="warn"
              />
            </div>
          </Button>

          <Button
            onClick={() => {
              const dest = selected.destinatarios ?? "Todos";
              setSelectedId(null);
              setShowConv(false);
              setAvisoInitialDest(dest);
              setTab("avisos");
              setOpenNewAviso(true);
            }}
            className="mt-4 flex w-full items-center justify-center gap-2 text-sm font-bold"
          >
            <Send className="h-4 w-4" /> Enviar aviso a convocados
          </Button>
        </DraggableBottomSheet>
      )}

      {selected && showConv && (
        <EditarAsistenciaSheet
          titulo={`Convocatoria · ${selected.title}`}
          subtitulo={`${selected.monthLabel} ${selected.dayLabel} · ${selected.time}`}
          registros={conv}
          onClose={() => setShowConv(false)}
          onSave={(nuevos) => {
            saveConvocatoriaEvento(selected.id, nuevos);
            toast.success("Asistencia de la convocatoria actualizada");
            setShowConv(false);
          }}
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

      {showNewAsistencia && (
        <RegistrarAsistenciaSheet onClose={() => setShowNewAsistencia(false)} />
      )}
    </DirigenteShell>
  );
}

function AvisosSection({
  openNew = false,
  initialDestinatarios = "Todos",
  onConsumeOpenNew,
}: {
  openNew?: boolean;
  initialDestinatarios?: string;
  onConsumeOpenNew?: () => void;
}) {
  const { avisos } = usePrototype();
  const setAvisos = (fn: (items: AvisoDirigente[]) => AvisoDirigente[]) =>
    updatePrototype({ avisos: fn(getPrototype().avisos) });
  const [show, setShow] = useState(openNew);
  const [defaultDest, setDefaultDest] = useState(initialDestinatarios);

  useEffect(() => {
    if (openNew) {
      setDefaultDest(initialDestinatarios);
      setShow(true);
      onConsumeOpenNew?.();
    }
  }, [openNew, initialDestinatarios, onConsumeOpenNew]);

  return (
    <>
      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm font-semibold text-muted-foreground">
          {avisos.length} avisos publicados
        </p>
        <Button
          onClick={() => {
            setDefaultDest("Todos");
            setShow(true);
          }}
          className="flex items-center gap-1 px-3 font-bold"
        >
          <Plus className="h-3.5 w-3.5" /> Nuevo
        </Button>
      </div>

      <div className="mt-3 space-y-3">
        {avisos.map((a) => (
          <article
            key={a.id}
            className="rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Megaphone className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold">{a.titulo}</p>
                <p className="text-xs text-muted-foreground">
                  {a.autor} · {a.fecha}
                </p>
              </div>
              <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-bold text-secondary-foreground">
                {a.destinatarios}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{a.cuerpo}</p>
          </article>
        ))}
      </div>

      {show && (
        <NewAvisoSheet
          defaultDestinatarios={defaultDest}
          onClose={() => setShow(false)}
          onSave={(a) => {
            setAvisos((p) => [a, ...p]);
            toast.success("Aviso publicado en esta sesión");
            setShow(false);
          }}
        />
      )}
    </>
  );
}

function NewAvisoSheet({
  defaultDestinatarios = "Todos",
  onClose,
  onSave,
}: {
  defaultDestinatarios?: string;
  onClose: () => void;
  onSave: (a: AvisoDirigente) => void;
}) {
  const [titulo, setTitulo] = useState("");
  const [cuerpo, setCuerpo] = useState("");
  const [destinatarios, setDestinatarios] = useState(defaultDestinatarios);

  return (
    <FlowSheet title="Nuevo aviso" onClose={onClose}>
      <div className="mt-4 space-y-3">
        <label className="block">
          <span className="mb-1 block text-xs font-semibold text-muted-foreground">
            Título
          </span>
          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full rounded-xl bg-secondary px-3 py-2.5 text-sm outline-none"
            placeholder="Ej: Convocatoria sábado"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold text-muted-foreground">
            Destinatarios
          </span>
          <select
            value={destinatarios}
            onChange={(e) => setDestinatarios(e.target.value)}
            className="w-full rounded-xl bg-secondary px-3 py-2.5 text-sm outline-none"
          >
            {DESTINATARIOS_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold text-muted-foreground">
            Mensaje
          </span>
          <textarea
            value={cuerpo}
            onChange={(e) => setCuerpo(e.target.value)}
            rows={4}
            className="w-full rounded-xl bg-secondary px-3 py-2.5 text-sm outline-none"
            placeholder="Escribe el mensaje..."
          />
        </label>
      </div>
      <FlowActions
        onCancel={onClose}
        disabled={!titulo.trim() || !cuerpo.trim()}
        label="Publicar aviso"
        onSave={() =>
          onSave({
            id: `av${Date.now()}`,
            titulo,
            cuerpo,
            destinatarios,
            fecha: "ahora",
            autor: "Tú",
          })
        }
      />
    </FlowSheet>
  );
}

function Mini({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "ok" | "warn" | "bad" | "injured" | "default";
}) {
  const cls = {
    ok: "bg-success-soft text-success",
    warn: "bg-warning-soft text-warning-foreground",
    bad: "bg-destructive-soft text-destructive",
    injured: "bg-orange-100 text-orange-800",
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
  const [destinatarios, setDestinatarios] = useState("Todos");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("19:30");
  const [lugar, setLugar] = useState("");
  const [obs, setObs] = useState("");

  const inputCls =
    "w-full rounded-xl bg-secondary px-3 py-2.5 text-sm outline-none";

  return (
    <FlowSheet title="Nuevo evento" onClose={onClose}>
      <div className="mt-4 space-y-3">
        <L label="Título">
          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className={inputCls}
            placeholder="Ej: Entrenamiento"
          />
        </L>
        <L label="Tipo">
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value as EventType)}
            className={inputCls}
          >
            <option value="entrenamiento">Entrenamiento</option>
            <option value="partido">Partido</option>
            <option value="reunion">Reunión</option>
            <option value="actividad">Actividad</option>
          </select>
        </L>
        <L label="Destinatarios">
          <select
            value={destinatarios}
            onChange={(e) => setDestinatarios(e.target.value)}
            className={inputCls}
          >
            {DESTINATARIOS_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </L>
        <div className="grid grid-cols-2 gap-3">
          <L label="Fecha">
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className={inputCls}
            />
          </L>
          <L label="Hora">
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              className={inputCls}
            />
          </L>
        </div>
        <L label="Lugar">
          <input
            value={lugar}
            onChange={(e) => setLugar(e.target.value)}
            className={inputCls}
            placeholder="Ej: Cancha municipal"
          />
        </L>
        <L label="Observaciones">
          <textarea
            value={obs}
            onChange={(e) => setObs(e.target.value)}
            rows={2}
            className={inputCls}
            placeholder="Notas opcionales..."
          />
        </L>
      </div>
      <FlowActions
        onCancel={onClose}
        disabled={!titulo.trim() || !fecha || !hora || !lugar.trim()}
        label="Crear evento"
        onSave={() => {
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
            destinatarios,
            status: "pendiente",
            called: false,
          });
        }}
      />
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

function AsistenciaSection({ onOpenNew }: { onOpenNew: () => void }) {
  const sesiones = useAsistencias();
  const [openId, setOpenId] = useState<string | null>(null);
  const [editing, setEditing] = useState(false);
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
              onClick={() => {
                setEditing(false);
                setOpenId(a.id);
              }}
              className="block h-auto w-full rounded-2xl bg-card p-4 text-left shadow-[var(--shadow-card)] transition active:scale-[0.98]"
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

      <Button onClick={onOpenNew} className="mt-5 w-full text-sm font-bold">
        Registrar asistencia
      </Button>

      {open && !editing && (
        <AsistenciaListaSheet
          titulo={open.titulo}
          subtitulo={`${open.categoria} · ${open.fecha}`}
          registros={open.registros}
          onEdit={() => setEditing(true)}
          onClose={() => setOpenId(null)}
        />
      )}
      {open && editing && (
        <EditarAsistenciaSheet
          titulo={`Editar · ${open.titulo}`}
          subtitulo={`${open.categoria} · ${open.fecha}`}
          registros={open.registros}
          categoria={open.categoria}
          onClose={() => setEditing(false)}
          onSave={(nuevos) => {
            updateAsistencia(open.id, nuevos);
            toast.success("Asistencia actualizada");
            setEditing(false);
          }}
        />
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
              <OpcionesAsistenciaRow
                value={cur}
                onChange={(next) => setReg((p) => ({ ...p, [j.id]: next }))}
              />
            </div>
          );
        })}
      </div>

      <FlowActions
        onCancel={onClose}
        disabled={!titulo.trim() || !fecha || lista.length === 0}
        label="Guardar asistencia"
        onSave={guardar}
      />
    </FlowSheet>
  );
}
