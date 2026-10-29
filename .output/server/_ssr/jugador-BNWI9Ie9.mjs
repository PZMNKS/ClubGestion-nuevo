import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import {
  A as ChevronRight,
  E as Clock,
  M as Calendar,
  T as FileClock,
  _ as Megaphone,
  b as ListTodo,
  k as CircleCheck,
  n as Wallet,
  v as MapPin,
} from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-B_EBrAVz.mjs";
import { o as player, r as club } from "./mock-data-6dlC7T92.mjs";
import { o as usePrototype } from "./prototype-state-BkJ0Cljr.mjs";
import { s as Button } from "./router-CuTlj-1m.mjs";
import { t as AttendanceActions } from "./AttendanceActions-Dwp9UKk8.mjs";
// node_modules/.nitro/vite/services/ssr/assets/jugador-BNWI9Ie9.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
  const { events, payments, avisos, receipts } = usePrototype();
  const next = events.find((e) => e.type === "partido") ?? events[0];
  const pending = payments.filter((p) => p.status !== "pagado");
  const total = pending.reduce((s, p) => s + p.amount, 0);
  const notice = avisos.find(
    (a) => a.destinatarios === "Todos" || a.destinatarios === player.category,
  );
  const xpPct = Math.round((player.xp / player.xpToNext) * 100);
  const unanswered = events.filter((e) => e.status === "pendiente").length;
  const reviewing = pending.filter((p) => receipts[p.id]).length;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
        className: "rounded-2xl bg-primary-soft p-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-start justify-between gap-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "min-w-0",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "text-xs font-semibold text-primary",
                    children: club.name,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                    className: "mt-1 break-words text-xl font-extrabold",
                    children: player.name,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                    className: "text-xs text-muted-foreground",
                    children: [player.category, " · ", player.position],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className:
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-card text-xl shadow-card",
                children: club.shield,
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "mt-4 rounded-xl bg-card/80 p-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "flex items-center justify-between gap-2 text-xs font-semibold",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    children: ["Nivel ", player.level, " · ", player.title],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    className: "shrink-0 text-muted-foreground",
                    children: [player.xp, "/", player.xpToNext, " XP"],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "mt-2 h-2 overflow-hidden rounded-full bg-secondary",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "h-full rounded-full bg-primary transition-all",
                  style: { width: `${xpPct}%` },
                }),
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
        "aria-labelledby": "pending-title",
        className: "mt-3 border-y border-border py-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
            id: "pending-title",
            className: "flex items-center gap-2 text-sm font-bold",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListTodo, {
                className: "h-4 w-4 text-primary",
              }),
              " Pendientes por resolver",
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            "aria-live": "polite",
            className: "mt-1",
            children: [
              unanswered > 0 &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                  asChild: true,
                  variant: "ghost",
                  className:
                    "h-auto min-h-11 w-full justify-between whitespace-normal px-0 text-left text-xs",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                    to: "/eventos",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                        className: "flex min-w-0 items-center gap-2",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            Calendar,
                            { className: "h-4 w-4 shrink-0 text-primary" },
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                            children: [
                              unanswered,
                              " ",
                              unanswered === 1
                                ? "evento sin respuesta"
                                : "eventos sin respuesta",
                            ],
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        ChevronRight,
                        { className: "h-4 w-4 shrink-0" },
                      ),
                    ],
                  }),
                }),
              reviewing > 0 &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                  asChild: true,
                  variant: "ghost",
                  className:
                    "h-auto min-h-11 w-full justify-between whitespace-normal px-0 text-left text-xs",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                    to: "/pagos",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                        className: "flex min-w-0 items-center gap-2",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            FileClock,
                            {
                              className:
                                "h-4 w-4 shrink-0 text-warning-foreground",
                            },
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                            children: [
                              reviewing,
                              " ",
                              reviewing === 1
                                ? "comprobante en revisión"
                                : "comprobantes en revisión",
                            ],
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        ChevronRight,
                        { className: "h-4 w-4 shrink-0" },
                      ),
                    ],
                  }),
                }),
              unanswered === 0 &&
                reviewing === 0 &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                  className:
                    "flex min-h-11 items-center gap-2 text-xs text-success",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "h-4 w-4 shrink-0",
                    }),
                    " No tienes respuestas ni revisiones pendientes.",
                  ],
                }),
            ],
          }),
        ],
      }),
      next &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className:
            "mt-3 rounded-2xl border border-border bg-card p-3 shadow-card",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex items-center justify-between gap-2 text-xs",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                  className: "flex items-center gap-1 font-bold text-primary",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
                      className: "h-4 w-4",
                    }),
                    " Próximo partido",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                  to: "/eventos",
                  "aria-label": "Ver eventos",
                  className:
                    "flex h-8 w-8 items-center justify-center text-primary",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    ChevronRight,
                    { className: "h-4 w-4" },
                  ),
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
              className: "mt-1 text-base font-bold",
              children: next.title,
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
              className:
                "mt-1 flex items-center gap-2 text-xs text-muted-foreground",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
                  className: "h-3.5 w-3.5 shrink-0",
                }),
                next.date.split("-").reverse().join("/"),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
                  className: "h-3.5 w-3.5 shrink-0",
                }),
                next.time,
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
              className:
                "mt-1 flex items-center gap-2 text-xs text-muted-foreground",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
                  className: "h-3.5 w-3.5 shrink-0",
                }),
                next.place,
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              role: "status",
              className: `my-2 text-xs font-semibold ${next.status === "confirmado" ? "text-success" : next.status === "no-asiste" ? "text-destructive" : next.status === "lesionado" ? "text-orange-700" : "text-muted-foreground"}`,
              children:
                next.status === "confirmado"
                  ? "Confirmaste que vas"
                  : next.status === "no-asiste"
                    ? "Confirmaste que no vas"
                    : next.status === "lesionado"
                      ? "Reportaste baja por lesión"
                      : "Tu asistencia está sin confirmar",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttendanceActions, {
              id: next.id,
              status: next.status,
            }),
          ],
        }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
        className: `mt-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-2xl p-3 ${total ? "bg-destructive-soft text-destructive" : "bg-success-soft text-success"}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "min-w-0",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
                className: "flex items-center gap-1 text-xs font-bold",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
                    className: "h-4 w-4",
                  }),
                  total ? "Pagos pendientes" : "Pagos al día",
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                className: "mt-1 text-lg font-extrabold",
                children: ["$", total.toLocaleString("es-CL")],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-xs",
                children: pending.length
                  ? `${pending.length} cuota por regularizar`
                  : "Sin deuda pendiente",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
            asChild: true,
            size: "sm",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
              to: "/pagos",
              children: total ? "Registrar pago" : "Historial",
            }),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
        className: "mt-3 border-t border-border pt-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-center justify-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
                className: "flex items-center gap-2 text-sm font-bold",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, {
                    className: "h-4 w-4 text-primary",
                  }),
                  " Avisos del club",
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                to: "/avisos",
                className: "text-xs font-semibold text-primary",
                children: "Ver todos",
              }),
            ],
          }),
          notice
            ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                to: "/avisos",
                className: "mt-2 block rounded-xl bg-card p-3",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "truncate text-sm font-semibold",
                    children: notice.titulo,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className:
                      "mt-1 line-clamp-1 text-xs text-muted-foreground",
                    children: notice.cuerpo,
                  }),
                ],
              })
            : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "mt-2 text-sm text-muted-foreground",
                children: "No tienes avisos nuevos.",
              }),
        ],
      }),
    ],
  });
}
export { Home as component };
