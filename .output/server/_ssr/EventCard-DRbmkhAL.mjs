import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import {
  A as ChevronRight,
  E as Clock,
  r as Users,
  v as MapPin,
} from "../_libs/lucide-react.mjs";
import { s as Button } from "./router-CuTlj-1m.mjs";
// node_modules/.nitro/vite/services/ssr/assets/EventCard-DRbmkhAL.js
var import_jsx_runtime = require_jsx_runtime();
var typeStyles = {
  partido: "bg-primary-soft text-primary",
  entrenamiento: "bg-success-soft text-success",
  reunion: "bg-warning-soft text-warning-foreground",
  actividad: "bg-accent text-accent-foreground",
};
var statusLabels = {
  confirmado: {
    label: "Confirmado",
    cls: "bg-success-soft text-success",
  },
  pendiente: {
    label: "Pendiente",
    cls: "bg-warning-soft text-warning-foreground",
  },
  "no-asiste": {
    label: "No asiste",
    cls: "bg-destructive-soft text-destructive",
  },
  lesionado: {
    label: "Lesionado",
    cls: "bg-orange-100 text-orange-800",
  },
};
function EventCard({
  dayLabel,
  monthLabel,
  date,
  title,
  time,
  place,
  type = "entrenamiento",
  destinatarios,
  rival,
  status,
  onClick,
  compact,
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
    variant: "ghost",
    onClick,
    className:
      "flex h-auto w-full items-center justify-start whitespace-normal gap-3 rounded-2xl bg-card p-4 text-left font-normal shadow-[var(--shadow-card)] transition-transform active:scale-[0.99]",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: `flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl ${typeStyles[type]}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "text-[10px] font-bold tracking-wider",
            children: date
              ? [
                  "ENE",
                  "FEB",
                  "MAR",
                  "ABR",
                  "MAY",
                  "JUN",
                  "JUL",
                  "AGO",
                  "SEP",
                  "OCT",
                  "NOV",
                  "DIC",
                ][Number(date.split("-")[1]) - 1]
              : monthLabel,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "text-xl font-extrabold leading-none",
            children: dayLabel,
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "min-w-0 flex-1",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: "font-semibold leading-snug text-foreground",
            children: title,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
            className:
              "mt-0.5 flex items-center gap-1 text-xs font-normal text-muted-foreground",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
                className: "h-3.5 w-3.5",
              }),
              " ",
              time,
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
            className:
              "mt-1 flex items-center gap-1 text-xs font-normal text-muted-foreground",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
                className: "h-3.5 w-3.5",
              }),
              " ",
              place,
            ],
          }),
          !compact &&
            (destinatarios || rival || status) &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "mt-2 flex flex-wrap items-center gap-2",
              children: [
                destinatarios &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className:
                      "rounded-full bg-secondary px-2 py-0.5 text-[10px] font-bold text-secondary-foreground",
                    children: destinatarios,
                  }),
                rival &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    className:
                      "inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
                        className: "h-3 w-3",
                      }),
                      " vs ",
                      rival,
                    ],
                  }),
                status &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: `rounded-full px-2 py-0.5 text-xs font-medium ${statusLabels[status].cls}`,
                    children: statusLabels[status].label,
                  }),
              ],
            }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
        className: "h-5 w-5 shrink-0 text-muted-foreground",
      }),
    ],
  });
}
export { EventCard as t };
