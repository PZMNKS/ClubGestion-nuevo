import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as payments, i as events } from "./mock-data-6dlC7T92.mjs";
import {
  a as convocatoriaEvento,
  o as documentos,
  r as avisos,
  s as pagosClub,
} from "./dirigente-data-CBIkTrPW.mjs";
// node_modules/.nitro/vite/services/ssr/assets/prototype-state-BkJ0Cljr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var initial = {
  events,
  payments,
  avisos,
  documentos,
  pagosClub,
  convocatorias: {},
  receipts: {},
  files: {},
};
var state = initial;
var listeners = /* @__PURE__ */ new Set();
function subscribe(cb) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}
function usePrototype() {
  return (0, import_react.useSyncExternalStore)(
    subscribe,
    () => state,
    () => initial,
  );
}
function updatePrototype(patch) {
  state = {
    ...state,
    ...patch,
  };
  listeners.forEach((cb) => cb());
}
function getPrototype() {
  return state;
}
function eventStatusToAsistencia(status) {
  if (status === "confirmado") return "presente";
  if (status === "no-asiste") return "ausente";
  if (status === "lesionado") return "lesionado";
  return "sin-respuesta";
}
function asistenciaToEventStatus(estado) {
  if (estado === "presente") return "confirmado";
  if (estado === "ausente") return "no-asiste";
  if (estado === "lesionado") return "lesionado";
  return "pendiente";
}
function resolveConvocatoriaEvento(event, custom) {
  const base = convocatoriaEvento(event.id, event.called);
  base.s1 = eventStatusToAsistencia(event.status);
  if (!custom) return base;
  return {
    ...base,
    ...custom,
  };
}
function setPlayerEventStatus(eventId, next) {
  const cur = getPrototype();
  const existingConv = cur.convocatorias[eventId];
  updatePrototype({
    events: cur.events.map((e) =>
      e.id === eventId
        ? {
            ...e,
            status: next,
          }
        : e,
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
function saveConvocatoriaEvento(eventId, registros) {
  const cur = getPrototype();
  const s1Status = registros.s1
    ? asistenciaToEventStatus(registros.s1)
    : void 0;
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
export {
  updatePrototype as a,
  setPlayerEventStatus as i,
  resolveConvocatoriaEvento as n,
  usePrototype as o,
  saveConvocatoriaEvento as r,
  getPrototype as t,
};
