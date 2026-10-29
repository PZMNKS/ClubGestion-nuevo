import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as SectionTitle, t as AppShell } from "./AppShell-B_EBrAVz.mjs";
import { o as usePrototype } from "./prototype-state-BkJ0Cljr.mjs";
import { s as Button } from "./router-CuTlj-1m.mjs";
import { t as DraggableBottomSheet } from "./DraggableBottomSheet-C1poPEKI.mjs";
import { t as EventCard } from "./EventCard-DRbmkhAL.mjs";
import { t as AttendanceActions } from "./AttendanceActions-Dwp9UKk8.mjs";
// node_modules/.nitro/vite/services/ssr/assets/eventos-FbACqTZ0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EventosPage() {
  const [view, setView] = (0, import_react.useState)("lista");
  const { events } = usePrototype();
  const [selectedId, setSelectedId] = (0, import_react.useState)(null);
  const selected = events.find((e) => e.id === selectedId);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
        className: "text-2xl font-extrabold",
        children: "Eventos",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: "text-sm text-muted-foreground",
        children: "Partidos, entrenamientos y actividades.",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "mt-4 inline-flex rounded-full bg-secondary p-1",
        children: ["lista", "calendario"].map((v) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Button,
            {
              variant: "ghost",
              "aria-pressed": view === v,
              onClick: () => setView(v),
              className: `rounded-full px-4 py-1.5 text-sm font-semibold capitalize transition ${view === v ? "bg-card text-foreground shadow-[var(--shadow-card)]" : "text-muted-foreground"}`,
              children: v,
            },
            v,
          ),
        ),
      }),
      view === "lista"
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            import_jsx_runtime.Fragment,
            {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
                  children: "Próximos",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "space-y-3",
                  children: events.map((e) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      EventCard,
                      {
                        ...e,
                        onClick: () => setSelectedId(e.id),
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            },
          )
        : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarView, {
            events,
            onPick: setSelectedId,
          }),
      selected &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DraggableBottomSheet, {
          onClose: () => setSelectedId(null),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className:
                "text-xs font-semibold uppercase tracking-wider text-primary",
              children: selected.type,
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
              className: "mt-1 text-2xl font-extrabold",
              children: selected.title,
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "mt-3 space-y-1 text-sm text-muted-foreground",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                  children: [
                    "📅 ",
                    selected.monthLabel,
                    " ",
                    selected.dayLabel,
                    " · ",
                    selected.time,
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                  children: ["📍 ", selected.place],
                }),
                selected.rival &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                    children: ["🆚 ", selected.rival],
                  }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                  children: [
                    "👥 Convocatoria: ",
                    selected.called ? "Publicada" : "Pendiente",
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "mt-5 text-sm font-semibold",
              children: "Tu asistencia",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "mt-2",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                AttendanceActions,
                {
                  id: selected.id,
                  status: selected.status,
                },
              ),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
              variant: "secondary",
              className: "mt-3 w-full",
              onClick: () => setSelectedId(null),
              children: "Volver a eventos",
            }),
          ],
        }),
    ],
  });
}
function CalendarView({ events, onPick }) {
  const today = new Date(2026, 5, 18);
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  const dayHasEvent = (d) =>
    events.some(
      (e) =>
        new Date(e.date).getDate() === d &&
        new Date(e.date).getMonth() === month,
    );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_jsx_runtime.Fragment,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
          children: "Junio 2026",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className:
                "grid grid-cols-7 gap-1 text-center text-[10px] font-bold uppercase text-muted-foreground",
              children: ["D", "L", "M", "M", "J", "V", "S"].map((d, i) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "div",
                  { children: d },
                  i,
                ),
              ),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "mt-2 grid grid-cols-7 gap-1 text-center text-sm",
              children: cells.map((d, i) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "div",
                  {
                    className: `relative flex aspect-square items-center justify-center rounded-lg ${d === today.getDate() ? "bg-primary font-bold text-primary-foreground" : "text-foreground"}`,
                    children: [
                      d ?? "",
                      d &&
                        dayHasEvent(d) &&
                        d !== today.getDate() &&
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className:
                            "absolute bottom-1 h-1 w-1 rounded-full bg-primary",
                        }),
                    ],
                  },
                  i,
                ),
              ),
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
          children: "Eventos del mes",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "space-y-3",
          children: events
            .filter((e) => new Date(e.date).getMonth() === month)
            .map((e) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                EventCard,
                {
                  ...e,
                  onClick: () => onPick(e.id),
                },
                e.id,
              ),
            ),
        }),
      ],
    },
  );
}
export { EventosPage as component };
