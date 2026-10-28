import { Button } from "@/components/ui/button";
import { DraggableBottomSheet } from "@/components/DraggableBottomSheet";
import { X } from "lucide-react";
import { useSocios, type EstadoAsistencia } from "@/lib/dirigente-data";

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
    key: "sin-respuesta",
    label: "Sin responder",
    cls: "bg-warning-soft text-warning-foreground",
  },
];

export function AsistenciaListaSheet({
  titulo,
  subtitulo,
  registros,
  onClose,
}: {
  titulo: string;
  subtitulo?: string;
  registros: Record<string, EstadoAsistencia>;
  onClose: () => void;
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
