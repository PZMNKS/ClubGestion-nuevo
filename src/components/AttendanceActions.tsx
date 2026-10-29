import { Check, HeartPulse, X } from "lucide-react";
import { toast } from "@/lib/toast";
import { Button } from "@/components/ui/button";
import { setPlayerEventStatus } from "@/lib/prototype-state";
import type { EventStatus } from "@/lib/mock-data";

const base =
  "rounded-xl border px-2 text-xs transition-all duration-150 active:scale-[0.97] active:shadow-none";
const idle =
  "border-input bg-card text-foreground shadow-card hover:bg-secondary";

export function AttendanceActions({
  id,
  status,
}: {
  id: string;
  status: EventStatus;
}) {
  function respond(next: EventStatus) {
    setPlayerEventStatus(id, next);
    toast.success(
      next === "confirmado"
        ? "Asistencia confirmada"
        : next === "lesionado"
          ? "Registrado: baja por lesión"
          : "Registrado: no vas a asistir",
      {
        action: {
          label: "Deshacer",
          onClick: () => setPlayerEventStatus(id, status),
        },
      },
    );
  }
  return (
    <div className="grid grid-cols-3 gap-2">
      <Button
        aria-pressed={status === "confirmado"}
        onClick={() => respond("confirmado")}
        className={`${base} ${status === "confirmado" ? "border-transparent bg-success text-success-foreground shadow-sm hover:bg-success hover:text-success-foreground" : idle}`}
      >
        <Check /> Sí voy
      </Button>
      <Button
        aria-pressed={status === "no-asiste"}
        onClick={() => respond("no-asiste")}
        className={`${base} ${status === "no-asiste" ? "border-transparent bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive hover:text-destructive-foreground" : idle}`}
      >
        <X /> No voy
      </Button>
      <Button
        aria-pressed={status === "lesionado"}
        onClick={() => respond("lesionado")}
        className={`${base} ${status === "lesionado" ? "border-transparent bg-orange-600 text-white shadow-sm hover:bg-orange-600 hover:text-white" : idle}`}
      >
        <HeartPulse /> Lesionado
      </Button>
    </div>
  );
}
