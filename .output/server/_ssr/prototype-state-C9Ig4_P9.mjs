import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as payments, i as events } from "./mock-data-CqGgOLXS.mjs";
import { o as documentos, r as avisos, s as pagosClub } from "./dirigente-data-Bu9bjl4U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/prototype-state-C9Ig4_P9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var initial = {
	events,
	payments,
	avisos,
	documentos,
	pagosClub,
	receipts: {},
	files: {}
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
	return (0, import_react.useSyncExternalStore)(subscribe, () => state, () => initial);
}
function updatePrototype(patch) {
	state = {
		...state,
		...patch
	};
	listeners.forEach((cb) => cb());
}
function getPrototype() {
	return state;
}
//#endregion
export { updatePrototype as n, usePrototype as r, getPrototype as t };
