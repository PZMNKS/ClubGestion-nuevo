import { pageHead } from "@/lib/page-head";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { FlowSheet, FlowActions } from "@/components/FlowSheet";
import {
  usePrototype,
  getPrototype,
  updatePrototype,
} from "@/lib/prototype-state";
import { toast } from "@/lib/toast";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  FileText,
  Sparkles,
  Upload,
  AlertTriangle,
  CheckCircle2,
  Clock,
  X,
} from "lucide-react";
import { DirigenteShell, DSectionTitle } from "@/components/DirigenteShell";
import { type Documento } from "@/lib/dirigente-data";

export const Route = createFileRoute("/dirigente/mas")({
  head: () =>
    pageHead(
      "Administración de Mi Club",
      "Estado financiero global y documentación legal del club.",
    ),
  validateSearch: (
    s: Record<string, unknown>,
  ): { new?: number; tab?: string } => ({
    tab: typeof s.tab === "string" ? s.tab : undefined,
    new: s.new ? 1 : undefined,
  }),
  component: MasPage,
});

const tabs = ["Resumen", "Documentos"] as const;

function MasPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const initialTab: (typeof tabs)[number] =
    search.tab === "documentos" ? "Documentos" : "Resumen";
  const [tab, setTab] = useState<(typeof tabs)[number]>(initialTab);

  useEffect(() => {
    if (search.tab === "comunicacion" || search.tab === "avisos") {
      navigate({
        to: "/dirigente/eventos",
        search: { tab: "avisos", ...(search.new ? { new: 1 } : {}) },
        replace: true,
      });
      return;
    }
    if (search.tab === "documentos") setTab("Documentos");
    if (search.tab || search.new) {
      navigate({ search: {}, replace: true });
    }
  }, [search.tab, search.new, navigate]);

  return (
    <DirigenteShell>
      <h1 className="text-2xl font-extrabold">Mi Club</h1>
      <p className="text-sm text-muted-foreground">
        Administración financiera y documentación legal.
      </p>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {tabs.map((t) => (
          <Button
            variant="ghost"
            key={t}
            aria-pressed={tab === t}
            onClick={() => setTab(t)}
            className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold transition ${
              tab === t
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            {t}
          </Button>
        ))}
      </div>

      {tab === "Resumen" && <AdminResumen />}
      {tab === "Documentos" && <DocumentosTab />}
    </DirigenteShell>
  );
}

/* ---------------- Documentos ---------------- */

function DocumentosTab() {
  const { documentos: docs } = usePrototype();
  const setDocs = (fn: (items: Documento[]) => Documento[]) =>
    updatePrototype({ documentos: fn(getPrototype().documentos) });
  const [upload, setUpload] = useState(false);
  const [showAI, setShowAI] = useState(false);

  function setEstado(d: Documento, next: Documento["estado"], mensaje: string) {
    const prev = d.estado;
    setDocs((p) => p.map((x) => (x.id === d.id ? { ...x, estado: next } : x)));
    toast.success(`"${d.nombre}" ${mensaje}`, {
      action: {
        label: "Deshacer",
        onClick: () => {
          setDocs((p) =>
            p.map((x) => (x.id === d.id ? { ...x, estado: prev } : x)),
          );
          toast.info("Cambio deshecho");
        },
      },
    });
  }

  const vigentes = docs.filter((d) => d.estado === "vigente").length;
  const alertas = docs.filter((d) => d.estado !== "vigente");
  const formalizacion = Math.round((vigentes / docs.length) * 100);

  return (
    <>
      <section className="mt-5 rounded-3xl bg-primary-soft p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          Estado del club
        </p>
        <p className="mt-1 text-2xl font-extrabold">{formalizacion}% al día</p>
        <p className="text-xs text-muted-foreground">
          {vigentes} de {docs.length} documentos vigentes
        </p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-card/70">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${formalizacion}%` }}
          />
        </div>

        <Button
          variant="ghost"
          onClick={() => setShowAI(true)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-card py-2.5 text-sm font-bold text-primary shadow-[var(--shadow-card)]"
        >
          <Sparkles className="h-4 w-4" /> Guía de documentos
        </Button>
      </section>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-muted-foreground">
          {alertas.length} requieren atención
        </p>
        <Button
          onClick={() => setUpload(true)}
          className="flex items-center gap-1 px-3 font-bold"
        >
          <Upload className="h-3.5 w-3.5" /> Subir
        </Button>
      </div>

      <DSectionTitle>Por revisar</DSectionTitle>
      <div className="space-y-2">
        {alertas.map((d) => (
          <DocItem
            key={d.id}
            d={d}
            onMark={() => setEstado(d, "vigente", "marcado al día")}
          />
        ))}
      </div>

      <DSectionTitle>Vigentes</DSectionTitle>
      <div className="space-y-2">
        {docs
          .filter((d) => d.estado === "vigente")
          .map((d) => (
            <DocItem
              key={d.id}
              d={d}
              onUnmark={() =>
                setEstado(d, "pendiente", "marcado como pendiente")
              }
            />
          ))}
      </div>

      {upload && <UploadDocument onClose={() => setUpload(false)} />}
      {showAI && <AIHelper onClose={() => setShowAI(false)} />}
    </>
  );
}

function DocItem({
  d,
  onMark,
  onUnmark,
}: {
  d: Documento;
  onMark?: () => void;
  onUnmark?: () => void;
}) {
  const estados = {
    vigente: {
      cls: "bg-success-soft text-success",
      label: "Vigente",
      icon: <CheckCircle2 className="h-4 w-4" />,
    },
    "por-vencer": {
      cls: "bg-warning-soft text-warning-foreground",
      label: "Por vencer",
      icon: <Clock className="h-4 w-4" />,
    },
    vencido: {
      cls: "bg-destructive-soft text-destructive",
      label: "Vencido",
      icon: <AlertTriangle className="h-4 w-4" />,
    },
    pendiente: {
      cls: "bg-secondary text-secondary-foreground",
      label: "Pendiente",
      icon: <FileText className="h-4 w-4" />,
    },
  } as const;
  const e = estados[d.estado];
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-card p-3 shadow-[var(--shadow-card)]">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${e.cls}`}
      >
        {e.icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold leading-snug">{d.nombre}</p>
        <p className="text-xs text-muted-foreground">
          {d.vencimiento
            ? `Vence ${d.vencimiento}`
            : d.fechaSubida
              ? `Subido ${d.fechaSubida}`
              : "Sin subir"}
        </p>
      </div>
      <div className="flex flex-col items-end gap-1">
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${e.cls}`}
        >
          {e.label}
        </span>
        <Button
          variant="ghost"
          size="icon"
          aria-label={`Abrir ${d.nombre}`}
          title="Abrir documento"
          onClick={() => {
            const file = getPrototype().files[d.id];
            if (!file) {
              toast.info(
                "Este documento de ejemplo no tiene un archivo adjunto. Sube uno para consultarlo.",
              );
              return;
            }
            const url = URL.createObjectURL(file);
            window.open(url, "_blank", "noopener,noreferrer");
            setTimeout(() => URL.revokeObjectURL(url), 60000);
          }}
        >
          <FileText className="h-4 w-4" />
        </Button>
        {onMark && d.estado !== "vigente" && (
          <Button
            variant="ghost"
            onClick={onMark}
            className="text-[10px] font-bold text-primary"
          >
            Marcar al día
          </Button>
        )}
        {onUnmark && d.estado === "vigente" && (
          <Button
            variant="ghost"
            onClick={onUnmark}
            className="text-[10px] font-bold text-warning-foreground"
          >
            Marcar pendiente
          </Button>
        )}
      </div>
    </div>
  );
}

function AIHelper({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState("");
  const sugerencias = [
    "¿Cómo renuevo la directiva?",
    "¿Qué documentos pide la municipalidad?",
    "¿Cómo redacto un acta?",
  ];
  return (
    <div
      className="fixed inset-0 z-50 flex items-end bg-foreground/40"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mx-auto w-full max-w-[30rem] rounded-t-3xl bg-card p-5 pb-8"
      >
        <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-border" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-base font-extrabold">Guía de documentos</h2>
              <p className="text-[11px] text-muted-foreground">
                Guía simple sobre formalización
              </p>
            </div>
          </div>
          <Button variant="ghost" onClick={onClose} aria-label="Cerrar">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="mt-4 space-y-2">
          {sugerencias.map((s) => (
            <Button
              variant="ghost"
              key={s}
              onClick={() => setQ(s)}
              className="w-full rounded-2xl bg-secondary p-3 text-left text-sm font-medium"
            >
              {s}
            </Button>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Consultar guía"
            placeholder="Ej: ¿Cómo renuevo la directiva?"
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>

        {q && (
          <div className="mt-4 rounded-2xl bg-primary-soft p-4 text-sm text-foreground">
            <p className="font-semibold text-primary">Orientación general</p>
            <p className="mt-1 text-muted-foreground">
              Para "{q}" te recomendamos revisar el módulo de Documentos y
              mantener el acta de directiva vigente. Si necesitas ayuda
              detallada, contacta a tu municipalidad o consulta el Registro
              Civil de Organizaciones Comunitarias.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function AdminResumen() {
  const { pagosClub, documentos } = usePrototype();
  const cobrado = pagosClub
    .filter((p) => p.estado === "pagado")
    .reduce((s, p) => s + p.monto, 0);
  const pendiente = pagosClub
    .filter((p) => p.estado !== "pagado")
    .reduce((s, p) => s + p.monto, 0);
  return (
    <div className="mt-5">
      <h2 className="text-lg font-bold">Estado financiero global</h2>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-success-soft p-4 text-success">
          <p className="text-xs font-semibold">Ingresos registrados</p>
          <p className="mt-1 text-xl font-bold">
            ${cobrado.toLocaleString("es-CL")}
          </p>
        </div>
        <div className="rounded-2xl bg-destructive-soft p-4 text-destructive">
          <p className="text-xs font-semibold">Por cobrar</p>
          <p className="mt-1 text-xl font-bold">
            ${pendiente.toLocaleString("es-CL")}
          </p>
        </div>
      </div>
      <Button asChild className="mt-4 w-full">
        <Link to="/dirigente/pagos">Gestionar pagos</Link>
      </Button>
      <DSectionTitle>Documentación legal</DSectionTitle>
      <p className="text-sm text-muted-foreground">
        {documentos.filter((d) => d.estado === "vigente").length} de{" "}
        {documentos.length} documentos vigentes
      </p>
      <Button asChild variant="secondary" className="mt-3 w-full">
        <Link to="/dirigente/mas" search={{ tab: "documentos" }}>
          Ver documentos y estatutos
        </Link>
      </Button>
      <DSectionTitle>Equipo de gestión</DSectionTitle>
      <p className="text-sm text-muted-foreground">
        Dirigentes y cuerpo técnico registrados en el club.
      </p>
      <Button asChild variant="secondary" className="mt-3 w-full">
        <Link to="/dirigente/socios">Ver socios y dirigentes</Link>
      </Button>
      <p className="mt-5 text-xs text-warning-foreground">
        Prototipo de gestión: los permisos de acceso y el envío al club aún no
        están habilitados.
      </p>
    </div>
  );
}
function UploadDocument({ onClose }: { onClose: () => void }) {
  const [nombre, setNombre] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [tipo, setTipo] = useState<Documento["tipo"]>("estatuto");
  return (
    <FlowSheet
      title="Subir documento legal"
      description="Registro de documento · Prototipo de esta sesión"
      onClose={onClose}
    >
      <label className="block text-sm font-semibold">
        Nombre del documento
        <input
          className="field mt-1"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ej: Estatutos del club 2026"
        />
      </label>
      <label className="block text-sm font-semibold">
        Tipo
        <select
          className="field mt-1"
          value={tipo}
          onChange={(e) => setTipo(e.target.value as Documento["tipo"])}
        >
          <option value="estatuto">Estatutos</option>
          <option value="acta">Acta</option>
          <option value="certificado">Certificado</option>
          <option value="directiva">Directiva</option>
          <option value="otro">Otro</option>
        </select>
      </label>
      <div>
        <p className="text-sm font-semibold">Archivo PDF o imagen</p>
        <label className="mt-2 flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border border-primary bg-primary-soft px-4 py-3 text-sm font-bold text-primary">
          <Upload className="h-4 w-4" />
          {file ? "Cambiar archivo" : "Seleccionar PDF o imagen"}
          <input
            className="sr-only"
            type="file"
            accept="application/pdf,image/jpeg,image/png"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (
                f &&
                (!["application/pdf", "image/jpeg", "image/png"].includes(
                  f.type,
                ) ||
                  f.size > 10 * 1024 * 1024)
              ) {
                setFile(null);
                setError("Elige un PDF, JPG o PNG de hasta 10 MB.");
              } else {
                setFile(f ?? null);
                setError("");
              }
            }}
          />
        </label>
        {file && (
          <p className="mt-2 break-all rounded-lg bg-secondary p-2 text-xs font-medium">
            {file.name}
          </p>
        )}
      </div>
      {error && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
      <p className="text-xs text-muted-foreground">
        El archivo quedará disponible en esta sesión, sin subirse a un servidor.
      </p>
      <FlowActions
        onCancel={onClose}
        disabled={!nombre.trim() || !file}
        label="Subir documento"
        onSave={() => {
          if (!file) return;
          const id = `doc${Date.now()}`;
          updatePrototype({
            documentos: [
              {
                id,
                nombre: nombre.trim(),
                tipo,
                estado: "vigente",
                fechaSubida: new Date().toISOString().slice(0, 10),
                subidoPor: "Tú",
              },
              ...getPrototype().documentos,
            ],
            files: { ...getPrototype().files, [id]: file },
          });
          toast.success("Documento registrado en esta sesión");
          onClose();
        }}
      />
    </FlowSheet>
  );
}
