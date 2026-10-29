import { toast } from "@/lib/toast";
import { usePrototype } from "@/lib/prototype-state";
import { useAsistencias } from "@/lib/dirigente-data";
import { pageHead } from "@/lib/page-head";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
  CheckCircle2,
  Clock,
  HeartPulse,
  XCircle,
  Wallet,
} from "lucide-react";
import { DirigenteShell, DSectionTitle } from "@/components/DirigenteShell";
import {
  useSocios,
  updateSocio,
  pagosClub,
  asistencias,
  type SocioStatus,
  type SocioRol,
  type Socio,
} from "@/lib/dirigente-data";
import { PagoBadge } from "./dirigente.index";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/dirigente/socios/$id")({
  head: () =>
    pageHead(
      "Perfil individual del socio",
      "Datos del socio e historial de pagos y asistencia filtrados.",
    ),
  component: SocioDetail,
  notFoundComponent: () => (
    <DirigenteShell>
      <p className="rounded-2xl bg-secondary p-6 text-center">
        Socio no encontrado.
      </p>
    </DirigenteShell>
  ),
});

const MESES = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];

function mesDe(fechaDDMMYYYY: string): string {
  // formato dd-mm-yyyy
  const [, mm, yyyy] = fechaDDMMYYYY.split("-");
  const idx = parseInt(mm, 10) - 1;
  if (isNaN(idx) || !MESES[idx]) return fechaDDMMYYYY;
  return `${MESES[idx]} ${yyyy}`;
}

function SocioDetail() {
  const { id } = Route.useParams();
  const socios = useSocios();
  const { pagosClub } = usePrototype();
  const sesiones = useAsistencias();
  const s = socios.find((x) => x.id === id);
  if (!s) throw notFound();

  // Pagos del socio
  const pagosSocio = pagosClub.filter((p) => p.socioId === s.id);

  const asistenciasSocio = useMemo(
    () =>
      sesiones
        .filter((a) => a.registros[s.id] !== undefined)
        .map((a) => ({
          ...a,
          presente: a.registros[s.id] === "presente",
          lesionado: a.registros[s.id] === "lesionado",
          sinRespuesta: a.registros[s.id] === "sin-respuesta",
        })),
    [sesiones, s.id],
  );

  // Filtros
  const mesesPagos = useMemo(
    () => Array.from(new Set(pagosSocio.map((p) => mesDe(p.vencimiento)))),
    [pagosSocio],
  );
  const mesesAsist = useMemo(
    () => Array.from(new Set(asistenciasSocio.map((a) => mesDe(a.fecha)))),
    [asistenciasSocio],
  );
  const eventos = useMemo(
    () => Array.from(new Set(asistenciasSocio.map((a) => a.titulo))),
    [asistenciasSocio],
  );

  const [filtroMesPago, setFiltroMesPago] = useState<string>("Todos");
  const [filtroMesAsist, setFiltroMesAsist] = useState<string>("Todos");
  const [filtroEvento, setFiltroEvento] = useState<string>("Todos");
  const [editOpen, setEditOpen] = useState(false);

  const pagosFiltrados = pagosSocio.filter(
    (p) => filtroMesPago === "Todos" || mesDe(p.vencimiento) === filtroMesPago,
  );
  const asistFiltradas = asistenciasSocio.filter(
    (a) =>
      (filtroMesAsist === "Todos" || mesDe(a.fecha) === filtroMesAsist) &&
      (filtroEvento === "Todos" || a.titulo === filtroEvento),
  );

  const presentes = asistFiltradas.filter((a) => a.presente).length;
  const lesionados = asistFiltradas.filter((a) => a.lesionado).length;
  const sinRespuesta = asistFiltradas.filter((a) => a.sinRespuesta).length;
  const ausentes =
    asistFiltradas.length - presentes - lesionados - sinRespuesta;

  return (
    <DirigenteShell>
      <Link
        to="/dirigente/socios"
        className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> Socios
      </Link>

      <section className="mt-3 rounded-3xl bg-card p-5 shadow-[var(--shadow-card)]">
        <div className="flex items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft text-2xl font-extrabold text-primary">
            {s.foto}
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-xl font-extrabold">{s.nombre}</h1>
            <p className="text-sm text-muted-foreground">
              {s.categoria}
              {s.numero ? ` · #${s.numero}` : ""}
            </p>
            <p className="text-xs capitalize text-primary">
              {s.rol.replace("-", " ")}
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <Stat label="Pago" value={<PagoBadge estado={s.pago} />} />
          <Stat
            label="Asistencia"
            value={
              <span className="text-base font-bold">{s.asistenciaPct}%</span>
            }
          />
          <Stat
            label="Desde"
            value={<span className="text-xs font-semibold">{s.desde}</span>}
          />
        </div>

        <div className="mt-4 space-y-1 text-sm">
          <p className="flex items-center gap-2 text-muted-foreground">
            <Phone className="h-4 w-4" /> {s.telefono}
          </p>
          <p className="flex items-center gap-2 text-muted-foreground">
            <Mail className="h-4 w-4" /> {s.contacto}
          </p>
          {s.posicion && (
            <p className="text-muted-foreground">
              Posición: <span className="text-foreground">{s.posicion}</span>
            </p>
          )}
        </div>

        {s.observaciones && (
          <div className="mt-4 rounded-xl bg-warning-soft p-3 text-sm text-warning-foreground">
            <span className="font-bold">Observación: </span>
            {s.observaciones}
          </div>
        )}
      </section>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <Button onClick={() => setEditOpen(true)} className="font-bold">
          Editar datos
        </Button>
        <Button asChild variant="secondary">
          <Link to="/dirigente/eventos" search={{ tab: "avisos", new: 1 }}>
            Publicar aviso
          </Link>
        </Button>
      </div>

      <EditSocioDialog open={editOpen} onOpenChange={setEditOpen} socio={s} />

      {/* HISTORIAL DE PAGOS */}
      <DSectionTitle>Historial de pagos</DSectionTitle>
      <FilterRow
        label="Mes"
        options={["Todos", ...mesesPagos]}
        value={filtroMesPago}
        onChange={setFiltroMesPago}
      />
      <div className="mt-2 mb-3 flex gap-2 text-[11px] font-semibold">
        <span className="rounded-full bg-secondary px-2 py-1">
          {pagosFiltrados.length} pago(s)
        </span>
        <span className="rounded-full bg-success-soft px-2 py-1 text-success">
          {pagosFiltrados.filter((p) => p.estado === "pagado").length} pagados
        </span>
        <span className="rounded-full bg-destructive/10 px-2 py-1 text-destructive">
          {pagosFiltrados.filter((p) => p.estado !== "pagado").length}{" "}
          pendientes
        </span>
      </div>
      {pagosFiltrados.length === 0 ? (
        <p className="rounded-2xl bg-secondary p-4 text-center text-sm text-muted-foreground">
          Sin pagos para ese filtro.
        </p>
      ) : (
        <div className="space-y-2">
          {pagosFiltrados.map((p) => (
            <div
              key={p.id}
              className="flex items-center gap-3 rounded-2xl bg-card p-3 shadow-[var(--shadow-card)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Wallet className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">{p.concepto}</p>
                <p className="text-xs text-muted-foreground">
                  Vence {p.vencimiento}
                  {p.pagadoEl ? ` · Pagado ${p.pagadoEl}` : ""}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold">
                  ${p.monto.toLocaleString("es-CL")}
                </p>
                <p
                  className={`text-[10px] font-bold uppercase ${
                    p.estado === "pagado"
                      ? "text-success"
                      : p.estado === "vencido"
                        ? "text-destructive"
                        : "text-warning-foreground"
                  }`}
                >
                  {p.estado}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* HISTORIAL DE ASISTENCIA */}
      <DSectionTitle>Historial de asistencia</DSectionTitle>
      <FilterRow
        label="Mes"
        options={["Todos", ...mesesAsist]}
        value={filtroMesAsist}
        onChange={setFiltroMesAsist}
      />
      <div className="mt-2">
        <FilterRow
          label="Evento"
          options={["Todos", ...eventos]}
          value={filtroEvento}
          onChange={setFiltroEvento}
        />
      </div>
      <div className="mt-2 mb-3 flex flex-wrap gap-2 text-[11px] font-semibold">
        <span className="rounded-full bg-secondary px-2 py-1">
          {asistFiltradas.length} sesión(es)
        </span>
        <span className="rounded-full bg-success-soft px-2 py-1 text-success">
          {presentes} presente(s)
        </span>
        <span className="rounded-full bg-destructive/10 px-2 py-1 text-destructive">
          {ausentes} ausente(s)
        </span>
        {lesionados > 0 && (
          <span className="rounded-full bg-orange-100 px-2 py-1 text-orange-800">
            {lesionados} lesionado(s)
          </span>
        )}
      </div>
      {asistFiltradas.length === 0 ? (
        <p className="rounded-2xl bg-secondary p-4 text-center text-sm text-muted-foreground">
          Sin asistencias para ese filtro.
        </p>
      ) : (
        <div className="space-y-2">
          {asistFiltradas.map((a) => (
            <div
              key={a.id}
              className="flex items-center gap-3 rounded-2xl bg-card p-3 shadow-[var(--shadow-card)]"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                  a.sinRespuesta
                    ? "bg-warning-soft text-warning-foreground"
                    : a.presente
                      ? "bg-success-soft text-success"
                      : a.lesionado
                        ? "bg-orange-100 text-orange-800"
                        : "bg-destructive/10 text-destructive"
                }`}
              >
                {a.sinRespuesta ? (
                  <Clock className="h-5 w-5" />
                ) : a.presente ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : a.lesionado ? (
                  <HeartPulse className="h-5 w-5" />
                ) : (
                  <XCircle className="h-5 w-5" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">{a.titulo}</p>
                <p className="text-xs text-muted-foreground">
                  <Calendar className="mr-1 inline h-3 w-3" />
                  {a.fecha} · {a.categoria}
                </p>
              </div>
              <p
                className={`text-xs font-bold ${
                  a.sinRespuesta
                    ? "text-warning-foreground"
                    : a.presente
                      ? "text-success"
                      : a.lesionado
                        ? "text-orange-700"
                        : "text-destructive"
                }`}
              >
                {a.sinRespuesta
                  ? "Sin responder"
                  : a.presente
                    ? "Presente"
                    : a.lesionado
                      ? "Lesionado"
                      : "Ausente"}
              </p>
            </div>
          ))}
        </div>
      )}
    </DirigenteShell>
  );
}

function FilterRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {options.map((o) => (
          <Button
            variant="ghost"
            key={o}
            onClick={() => onChange(o)}
            className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold transition ${
              value === o
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            {o}
          </Button>
        ))}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-secondary p-2">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <div className="mt-1 flex items-center justify-center">{value}</div>
    </div>
  );
}

function EditSocioDialog({
  open,
  onOpenChange,
  socio,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  socio: Socio;
}) {
  const [form, setForm] = useState({
    nombre: socio.nombre,
    categoria: socio.categoria,
    rol: socio.rol,
    numero: socio.numero?.toString() ?? "",
    posicion: socio.posicion ?? "",
    contacto: socio.contacto,
    telefono: socio.telefono,
    pago: socio.pago,
    asistenciaPct: socio.asistenciaPct.toString(),
    observaciones: socio.observaciones ?? "",
  });

  function set<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function onSave() {
    updateSocio(socio.id, {
      nombre: form.nombre.trim() || socio.nombre,
      categoria: form.categoria.trim() || socio.categoria,
      rol: form.rol as SocioRol,
      numero: form.numero ? parseInt(form.numero, 10) || undefined : undefined,
      posicion: form.posicion.trim() || undefined,
      contacto: form.contacto.trim(),
      telefono: form.telefono.trim(),
      pago: form.pago as SocioStatus,
      asistenciaPct: Math.max(
        0,
        Math.min(100, parseInt(form.asistenciaPct, 10) || 0),
      ),
      observaciones: form.observaciones.trim() || undefined,
    });
    toast.success("Datos del socio actualizados");
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-2xl">
        <DialogHeader>
          <DialogTitle>Editar socio</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <Field label="Nombre">
            <Input
              placeholder="Ej: Matías Rojas"
              value={form.nombre}
              onChange={(e) => set("nombre", e.target.value)}
            />
          </Field>
          <div className="grid grid-cols-2 gap-2">
            <Field label="Rol">
              <select
                value={form.rol}
                onChange={(e) => set("rol", e.target.value as SocioRol)}
                className="h-9 w-full rounded-md border bg-transparent px-2 text-sm"
              >
                <option value="jugador">Jugador</option>
                <option value="cuerpo-tecnico">Cuerpo técnico</option>
                <option value="dirigente">Dirigente</option>
                <option value="socio">Socio</option>
              </select>
            </Field>
            <Field label="Categoría">
              <Input
                placeholder="Ej: Primera Adulta"
                value={form.categoria}
                onChange={(e) => set("categoria", e.target.value)}
              />
            </Field>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Field label="N°">
              <Input
                placeholder="Ej: 8"
                value={form.numero}
                onChange={(e) => set("numero", e.target.value)}
                inputMode="numeric"
              />
            </Field>
            <Field label="Posición">
              <Input
                placeholder="Ej: Mediocampista"
                value={form.posicion}
                onChange={(e) => set("posicion", e.target.value)}
              />
            </Field>
          </div>
          <Field label="Email">
            <Input
              placeholder="Ej: socio@correo.cl"
              value={form.contacto}
              onChange={(e) => set("contacto", e.target.value)}
            />
          </Field>
          <Field label="Teléfono">
            <Input
              placeholder="Ej: +56 9 1234 5678"
              value={form.telefono}
              onChange={(e) => set("telefono", e.target.value)}
            />
          </Field>
          <div className="grid grid-cols-2 gap-2">
            <Field label="Estado pago">
              <select
                value={form.pago}
                onChange={(e) => set("pago", e.target.value as SocioStatus)}
                className="h-9 w-full rounded-md border bg-transparent px-2 text-sm"
              >
                <option value="al-dia">Al día</option>
                <option value="pendiente">Pendiente</option>
                <option value="vencido">Vencido</option>
              </select>
            </Field>
            <Field label="Asistencia %">
              <Input
                placeholder="Ej: 80"
                value={form.asistenciaPct}
                onChange={(e) => set("asistenciaPct", e.target.value)}
                inputMode="numeric"
              />
            </Field>
          </div>
          <Field label="Observaciones">
            <textarea
              placeholder="Ej: Capitán del equipo"
              value={form.observaciones}
              onChange={(e) => set("observaciones", e.target.value)}
              rows={3}
              className="w-full rounded-md border bg-transparent p-2 text-sm"
            />
          </Field>
        </div>
        <DialogFooter className="gap-2">
          <DialogClose className="rounded-xl bg-secondary px-4 py-2 text-sm font-semibold">
            Cancelar
          </DialogClose>
          <Button
            disabled={!form.nombre.trim() || !form.categoria.trim()}
            onClick={onSave}
            className="rounded-xl  px-4  text-sm font-bold "
          >
            Guardar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
