import { Check, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { getPrototype, updatePrototype } from "@/lib/prototype-state";
import type { EventStatus } from "@/lib/mock-data";

const base =
  "rounded-xl border transition-all duration-150 active:scale-[0.97] active:shadow-none";
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
    updatePrototype({
      events: getPrototype().events.map((e) =>
        e.id === id ? { ...e, status: next } : e,
      ),
    });
    toast.success(
      next === "confirmado"
        ? "Asistencia confirmada"
        : "Registrado: no vas a asistir",
      {
        action: {
          label: "Deshacer",
          onClick: () =>
            updatePrototype({
              events: getPrototype().events.map((e) =>
                e.id === id ? { ...e, status } : e,
              ),
            }),
        },
      },
    );
  }
  return (
    <div className="grid grid-cols-2 gap-2">
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
    </div>
  );
}
