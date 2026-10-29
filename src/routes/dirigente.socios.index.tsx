import { toast } from "@/lib/toast";
import { pageHead } from "@/lib/page-head";
import { FlowSheet } from "@/components/FlowSheet";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ChevronRight, Plus, Search, X } from "lucide-react";
import { DirigenteShell, DSectionTitle } from "@/components/DirigenteShell";
import {
  addSocio,
  useSocios,
  type Socio,
  type SocioRol,
} from "@/lib/dirigente-data";
import { PagoBadge } from "./dirigente.index";

export const Route = createFileRoute("/dirigente/socios/")({
  head: () =>
    pageHead(
      "Socios del club",
      "Busca, filtra y registra socios del club deportivo.",
    ),
  validateSearch: (
    s: Record<string, unknown>,
  ): { new?: number; tab?: string } => ({ new: s.new ? 1 : undefined }),
  component: SociosPage,
});

const categorias = [
  "Todas",
  "Primera Adulta",
  "Femenino Adulto",
  "Sub-17",
  "Directiva",
  "Otros",
];
const filtros = ["todos", "al-dia", "pendiente", "vencido"] as const;

function SociosPage() {
  const socios = useSocios();
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Todas");
  const [estado, setEstado] = useState<(typeof filtros)[number]>("todos");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (search.new) {
      setShowForm(true);
      navigate({ search: {}, replace: true });
    }
  }, [search.new, navigate]);

  const filtered = useMemo(() => {
    return socios.filter((s) => {
      if (q && !s.nombre.toLowerCase().includes(q.toLowerCase())) return false;
      if (cat !== "Todas") {
        if (cat === "Otros") {
          if (
            [
              "Primera Adulta",
              "Femenino Adulto",
              "Sub-17",
              "Directiva",
            ].includes(s.categoria)
          )
            return false;
        } else if (s.categoria !== cat) return false;
      }
      if (estado !== "todos" && s.pago !== estado) return false;
      return true;
    });
  }, [socios, q, cat, estado]);

  return (
    <DirigenteShell>
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-extrabold">Socios</h1>
          <p className="text-sm text-muted-foreground">
            {socios.length} registrados
          </p>
        </div>
        <Button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-1 px-3 font-bold"
        >
          <Plus className="h-4 w-4" /> Registrar
        </Button>
      </div>

      <label
        htmlFor="socios-search"
        className="mt-4 block text-xs font-semibold text-muted-foreground"
      >
        Buscar socio
      </label>
      {/* Búsqueda */}
      <div className="mt-4 flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-[var(--shadow-card)]">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input
          id="socios-search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar por nombre..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>

      {/* Filtros categoría */}
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {categorias.map((c) => (
          <Button
            variant="ghost"
            key={c}
            onClick={() => setCat(c)}
            className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              cat === c
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            {c}
          </Button>
        ))}
      </div>

      {/* Filtros estado de pago */}
      <div className="mt-2 inline-flex max-w-full overflow-x-auto rounded-full bg-secondary p-1">
        {filtros.map((f) => (
          <Button
            variant="ghost"
            key={f}
            onClick={() => setEstado(f)}
            className={`rounded-full px-3 py-1 text-[11px] font-semibold capitalize transition ${
              estado === f
                ? "bg-card text-foreground shadow-[var(--shadow-card)]"
                : "text-muted-foreground"
            }`}
          >
            {f === "todos" ? "Todos" : f === "al-dia" ? "Al día" : f}
          </Button>
        ))}
      </div>

      <DSectionTitle>{filtered.length} resultado(s)</DSectionTitle>
      <div className="space-y-2">
        {filtered.map((s) => (
          <Link
            key={s.id}
            to="/dirigente/socios/$id"
            params={{ id: s.id }}
            className="flex items-center gap-3 rounded-2xl bg-card p-3 shadow-[var(--shadow-card)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-primary">
              {s.foto}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{s.nombre}</p>
              <p className="truncate text-xs text-muted-foreground">
                {s.categoria}
                {s.numero ? ` · #${s.numero}` : ""} · Asist {s.asistenciaPct}%
              </p>
            </div>
            <PagoBadge estado={s.pago} />
            <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="rounded-2xl bg-secondary p-4 text-center text-sm text-muted-foreground">
            No hay socios con esos filtros.
          </p>
        )}
      </div>

      {showForm && (
        <NewSocioSheet
          onClose={() => setShowForm(false)}
          onSave={(s) => {
            addSocio(s);
            toast.success("Socio registrado");
            setShowForm(false);
          }}
        />
      )}
    </DirigenteShell>
  );
}

function NewSocioSheet({
  onClose,
  onSave,
}: {
  onClose: () => void;
  onSave: (s: Socio) => void;
}) {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("Primera Adulta");
  const [rol, setRol] = useState<SocioRol>("jugador");
  const [telefono, setTelefono] = useState("");
  const [contacto, setContacto] = useState("");

  return (
    <FlowSheet title="Nuevo socio" onClose={onClose}>
      <div className="mt-4 space-y-3">
        <Field label="Nombre completo">
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="field"
            placeholder="Ej: Juan Pérez"
          />
        </Field>
        <Field label="Categoría">
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="field"
          >
            {[
              "Primera Adulta",
              "Femenino Adulto",
              "Sub-17",
              "Directiva",
              "Cuerpo Técnico",
              "Socio colaborador",
            ].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </Field>
        <Field label="Rol">
          <select
            value={rol}
            onChange={(e) => setRol(e.target.value as SocioRol)}
            className="field"
          >
            <option value="jugador">Jugador</option>
            <option value="cuerpo-tecnico">Cuerpo técnico</option>
            <option value="dirigente">Dirigente</option>
            <option value="socio">Socio</option>
          </select>
        </Field>
        <Field label="Teléfono">
          <input
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="field"
            placeholder="+56 9 ..."
          />
        </Field>
        <Field label="Correo (opcional)">
          <input
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
            type="email"
            className="field"
            placeholder="Ej: socio@correo.cl"
          />
        </Field>
      </div>
      {contacto && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contacto) && (
        <p role="alert" className="text-xs text-destructive">
          El correo debe incluir @ y un dominio, por ejemplo socio@correo.cl.
        </p>
      )}
      {telefono && telefono.replace(/\D/g, "").length < 9 && (
        <p role="alert" className="text-xs text-destructive">
          Ingresa un teléfono con al menos 9 dígitos o deja el campo vacío.
        </p>
      )}
      <div className="flow-actions">
        <Button variant="secondary" className="w-full" onClick={onClose}>
          Cancelar
        </Button>
        <Button
          disabled={
            !nombre.trim() ||
            (Boolean(contacto.trim()) &&
              !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contacto)) ||
            (Boolean(telefono.trim()) && telefono.replace(/\D/g, "").length < 9)
          }
          onClick={() =>
            onSave({
              id: `s${Date.now()}`,
              nombre: nombre.trim(),
              rol,
              categoria,
              contacto: contacto || "—",
              telefono: telefono || "—",
              pago: "al-dia",
              asistenciaPct: 0,
              desde: "Hoy",
              foto: nombre
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")
                .toUpperCase(),
            })
          }
          className="w-full text-sm font-bold disabled:opacity-50"
        >
          Guardar socio
        </Button>
      </div>
    </FlowSheet>
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
      <span className="mb-1 block text-xs font-semibold text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
