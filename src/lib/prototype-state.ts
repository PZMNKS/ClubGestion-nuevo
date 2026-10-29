import { useSyncExternalStore } from "react";
import { events, payments, type EventStatus } from "./mock-data";
import {
  avisos,
  convocatoriaEvento,
  documentos,
  pagosClub,
  type EstadoAsistencia,
} from "./dirigente-data";

// Session-only state: no real transactions, uploads or authorization are implied.
const initial = {
  events,
  payments,
  avisos,
  documentos,
  pagosClub,
  convocatorias: {} as Record<string, Record<string, EstadoAsistencia>>,
  receipts: {} as Record<string, string>,
  files: {} as Record<string, File>,
};
let state = initial;
const listeners = new Set<() => void>();
function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}
export function usePrototype() {
  return useSyncExternalStore(
    subscribe,
    () => state,
    () => initial,
  );
}
export function updatePrototype(patch: Partial<typeof initial>) {
  state = { ...state, ...patch };
  listeners.forEach((cb) => cb());
}
export function getPrototype() {
  return state;
}

export function eventStatusToAsistencia(status: EventStatus): EstadoAsistencia {
  if (status === "confirmado") return "presente";
  if (status === "no-asiste") return "ausente";
  if (status === "lesionado") return "lesionado";
  return "sin-respuesta";
}

export function asistenciaToEventStatus(estado: EstadoAsistencia): EventStatus {
  if (estado === "presente") return "confirmado";
  if (estado === "ausente") return "no-asiste";
  if (estado === "lesionado") return "lesionado";
  return "pendiente";
}

export function resolveConvocatoriaEvento(
  event: { id: string; called: boolean; status: EventStatus },
  custom?: Record<string, EstadoAsistencia>,
): Record<string, EstadoAsistencia> {
  const base = convocatoriaEvento(event.id, event.called);
  base.s1 = eventStatusToAsistencia(event.status);
  if (!custom) return base;
  return { ...base, ...custom };
}

export function setPlayerEventStatus(eventId: string, next: EventStatus) {
  const cur = getPrototype();
  const existingConv = cur.convocatorias[eventId];
  updatePrototype({
    events: cur.events.map((e) =>
      e.id === eventId ? { ...e, status: next } : e,
    ),
    ...(existingConv
      ? {
          convocatorias: {
            ...cur.convocatorias,
            [eventId]: {
              ...existingConv,
              s1: eventStatusToAsistencia(next),
            },
          },
        }
      : {}),
  });
}

export function saveConvocatoriaEvento(
  eventId: string,
  registros: Record<string, EstadoAsistencia>,
) {
  const cur = getPrototype();
  const s1Status = registros.s1
    ? asistenciaToEventStatus(registros.s1)
    : undefined;
  updatePrototype({
    convocatorias: {
      ...cur.convocatorias,
      [eventId]: registros,
    },
    events: cur.events.map((e) =>
      e.id === eventId
        ? {
            ...e,
            called: true,
            ...(s1Status ? { status: s1Status } : {}),
          }
        : e,
    ),
  });
}
