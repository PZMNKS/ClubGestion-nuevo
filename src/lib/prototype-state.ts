import { useSyncExternalStore } from "react";
import { events, payments } from "./mock-data";
import { avisos, documentos, pagosClub } from "./dirigente-data";

// Session-only state: no real transactions, uploads or authorization are implied.
const initial = {
  events,
  payments,
  avisos,
  documentos,
  pagosClub,
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
