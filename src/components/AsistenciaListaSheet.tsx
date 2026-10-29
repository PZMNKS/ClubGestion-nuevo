import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DraggableBottomSheet } from "@/components/DraggableBottomSheet";
import { FlowSheet, FlowActions } from "@/components/FlowSheet";
import { Pencil, X } from "lucide-react";
import {
  resumenRegistros,
  useSocios,
  type EstadoAsistencia,
} from "@/lib/dirigente-data";

const grupos: { key: EstadoAsistencia; label: string; cls: string }[] = [
  {
    key: "presente",
    label: "Asistieron / Confirmaron",
    cls: "bg-success-soft text-success",
  },
  {
    key: "ausente",
    label: "No asistieron",
    cls: "bg-destructive-soft text-destructive",
  },
  {
    key: "lesionado",
    label: "Lesionados",
    cls: "bg-orange-100 text-orange-800",
  },
  {
    key: "sin-respuesta",
    label: "Sin responder",
    cls: "bg-warning-soft text-warning-foreground",
  },
];

const opcionesEstado: {
  k: Exclude<EstadoAsistencia, "sin-respuesta">;
  l: string;
  on: string;
}[] = [
  {
    k: "presente",
    l: "Asistió",
    on: "border-transparent bg-success text-success-foreground shadow-sm hover:bg-success hover:text-success-foreground",
  },
  {
    k: "ausente",
    l: "No asistió",
    on: "border-transparent bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive hover:text-destructive-foreground",
  },
  {
    k: "lesionado",
    l: "Lesionado",
    on: "border-transparent bg-orange-600 text-white shadow-sm hover:bg-orange-600 hover:text-white",
  },
];

const idleEstadoCls =
  "border-input bg-card text-foreground hover:bg-card hover:text-foreground [@media(hover:hover)]:hover:bg-secondary/70";

export function OpcionesAsistenciaRow({
  value,
  onChange,
}: {
  value: EstadoAsistencia;
  onChange: (next: EstadoAsistencia) => void;
}) {
  return (
    <div className="mt-2.5 grid grid-cols-3 gap-1.5">
      {opcionesEstado.map((o) => {
        const selected = value === o.k;
        return (
          <Button
            variant="ghost"
            key={o.k}
            onClick={() => onChange(selected ? "sin-respuesta" : o.k)}
            aria-pressed={selected}
            className={`rounded-xl border px-2 py-1.5 text-xs font-bold transition active:scale-[0.97] ${
              selected ? o.on : idleEstadoCls
            }`}
          >
            {o.l}
          </Button>
        );
      })}
    </div>
  );
}

export function AsistenciaListaSheet({
  titulo,
  subtitulo,
  registros,
  onClose,
  onEdit,
}: {
  titulo: string;
  subtitulo?: string;
  registros: Record<string, EstadoAsistencia>;
  onClose: () => void;
  onEdit?: () => void;
}) {
  const socios = useSocios();
  return (
    <DraggableBottomSheet onClose={onClose} level="raised">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-extrabold">{titulo}</h2>
          {subtitulo && (
            <p className="text-xs text-muted-foreground">{subtitulo}</p>
          )}
        </div>
        <Button variant="ghost" onClick={onClose} aria-label="Cerrar">
          <X className="h-5 w-5" />
        </Button>
      </div>
      {onEdit && (
        <Button
          onClick={onEdit}
          className="mt-4 flex w-full items-center justify-center gap-2 text-sm font-bold"
        >
          <Pencil className="h-4 w-4" /> Editar asistencia
        </Button>
      )}
      {grupos.map((g) => {
        const ids = Object.entries(registros)
          .filter(([, v]) => v === g.key)
          .map(([k]) => k);
        return (
          <div key={g.key} className="mt-5">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-bold">{g.label}</p>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-bold ${g.cls}`}
              >
                {ids.length}
              </span>
            </div>
            {ids.length === 0 ? (
              <p className="text-xs text-muted-foreground">
                Nadie en este grupo.
              </p>
            ) : (
              <div className="space-y-2">
                {ids.map((id) => {
                  const s = socios.find((x) => x.id === id);
                  if (!s) return null;
                  return (
                    <div
                      key={id}
                      className="flex items-center gap-3 rounded-2xl bg-secondary p-2.5"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-xs font-bold text-primary">
                        {s.foto}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold">
                          {s.nombre}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {s.categoria}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </DraggableBottomSheet>
  );
}

export function EditarAsistenciaSheet({
  titulo,
  subtitulo,
  registros,
  categoria = "Todos",
  onClose,
  onSave,
}: {
  titulo: string;
  subtitulo?: string;
  registros: Record<string, EstadoAsistencia>;
  categoria?: string;
  onClose: () => void;
  onSave: (registros: Record<string, EstadoAsistencia>) => void;
}) {
  const socios = useSocios();
  const idsRegistrados = Object.keys(registros);
  const jugadores = socios.filter(
    (s) =>
      s.rol === "jugador" &&
      (idsRegistrados.includes(s.id) ||
        categoria === "Todos" ||
        s.categoria === categoria),
  );
  const [reg, setReg] = useState<Record<string, EstadoAsistencia>>(() => {
    const init: Record<string, EstadoAsistencia> = {};
    jugadores.forEach((j) => {
      init[j.id] = registros[j.id] ?? "sin-respuesta";
    });
    return init;
  });

  const resumen = resumenRegistros(reg);

  return (
    <FlowSheet title={titulo} description={subtitulo} onClose={onClose}>
      <div className="grid grid-cols-4 gap-1.5 text-center text-xs">
        <div className="rounded-xl bg-success-soft p-2 text-success">
          <p className="text-[10px] font-bold">Asistió</p>
          <p className="text-base font-extrabold">{resumen.presentes}</p>
        </div>
        <div className="rounded-xl bg-destructive-soft p-2 text-destructive">
          <p className="text-[10px] font-bold">No asist.</p>
          <p className="text-base font-extrabold">{resumen.ausentes}</p>
        </div>
        <div className="rounded-xl bg-orange-100 p-2 text-orange-800">
          <p className="text-[10px] font-bold">Lesionado</p>
          <p className="text-base font-extrabold">{resumen.lesionados}</p>
        </div>
        <div className="rounded-xl bg-warning-soft p-2 text-warning-foreground">
          <p className="text-[10px] font-bold">Sin resp.</p>
          <p className="text-base font-extrabold">{resumen.sinRespuesta}</p>
        </div>
      </div>

      <div className="space-y-2">
        {jugadores.map((j) => {
          const cur = reg[j.id] ?? "sin-respuesta";
          return (
            <div key={j.id} className="rounded-2xl bg-secondary p-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-xs font-bold text-primary">
                  {j.foto}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{j.nombre}</p>
                  <p className="text-xs text-muted-foreground">{j.categoria}</p>
                </div>
              </div>
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
        label="Guardar asistencia"
        onSave={() => onSave(reg)}
      />
    </FlowSheet>
  );
}
