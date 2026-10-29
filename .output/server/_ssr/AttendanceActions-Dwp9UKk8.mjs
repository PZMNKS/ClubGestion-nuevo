import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { S as HeartPulse, j as Check, t as X } from "../_libs/lucide-react.mjs";
import { i as setPlayerEventStatus } from "./prototype-state-BkJ0Cljr.mjs";
import { s as Button } from "./router-CuTlj-1m.mjs";
import { t as toast$1 } from "./toast-kixGVRDj.mjs";
// node_modules/.nitro/vite/services/ssr/assets/AttendanceActions-Dwp9UKk8.js
var import_jsx_runtime = require_jsx_runtime();
var base =
  "rounded-xl border px-2 text-xs transition-all duration-150 active:scale-[0.97] active:shadow-none";
var idle =
  "border-input bg-card text-foreground shadow-card hover:bg-secondary";
function AttendanceActions({ id, status }) {
  function respond(next) {
    setPlayerEventStatus(id, next);
    toast$1.success(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "grid grid-cols-3 gap-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
        "aria-pressed": status === "confirmado",
        onClick: () => respond("confirmado"),
        className: `${base} ${status === "confirmado" ? "border-transparent bg-success text-success-foreground shadow-sm hover:bg-success hover:text-success-foreground" : idle}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}),
          " Sí voy",
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
        "aria-pressed": status === "no-asiste",
        onClick: () => respond("no-asiste"),
        className: `${base} ${status === "no-asiste" ? "border-transparent bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive hover:text-destructive-foreground" : idle}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}),
          " No voy",
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
        "aria-pressed": status === "lesionado",
        onClick: () => respond("lesionado"),
        className: `${base} ${status === "lesionado" ? "border-transparent bg-orange-600 text-white shadow-sm hover:bg-orange-600 hover:text-white" : idle}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, {}),
          " Lesionado",
        ],
      }),
    ],
  });
}
export { AttendanceActions as t };
