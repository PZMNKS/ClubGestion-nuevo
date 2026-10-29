import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as SectionTitle, t as AppShell } from "./AppShell-B_EBrAVz.mjs";
import {
  o as player,
  r as club,
  t as achievements,
} from "./mock-data-6dlC7T92.mjs";
import { c as cn } from "./router-CuTlj-1m.mjs";
import { t as toast$1 } from "./toast-kixGVRDj.mjs";
import {
  n as SwitchThumb,
  t as Switch$1,
} from "../_libs/@radix-ui/react-switch+[...].mjs";
// node_modules/.nitro/vite/services/ssr/assets/perfil-DNiH_OMu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Switch = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className,
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, {
      className: cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
      ),
    }),
  }),
);
Switch.displayName = Switch$1.displayName;
function PerfilPage() {
  const [prefs, setPrefs] = (0, import_react.useState)({});
  const xpPct = Math.round((player.xp / player.xpToNext) * 100);
  const unlocked = achievements.filter((a) => a.unlocked);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
        className: "text-2xl font-extrabold",
        children: "Mi Perfil",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
        className: "mt-4 rounded-3xl bg-card p-5 shadow-[var(--shadow-card)]",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-center gap-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "relative",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className:
                      "absolute -inset-1 rounded-full bg-gradient-to-tr from-warning to-primary",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className:
                      "relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft text-3xl",
                    children: player.name[0],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    className:
                      "absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground",
                    children: ["Nv ", player.level],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "min-w-0 flex-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className:
                      "text-xs font-semibold uppercase tracking-wider text-primary",
                    children: player.title,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                    className: "truncate text-xl font-extrabold",
                    children: player.name,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                    className: "text-sm text-muted-foreground",
                    children: ["#", player.number, " · ", player.position],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                    className: "text-xs text-muted-foreground",
                    children: [club.name, " · ", player.category],
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "mt-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex justify-between text-xs font-semibold",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    children: ["Nivel ", player.level],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    className: "text-muted-foreground",
                    children: [player.xp, "/", player.xpToNext, " XP"],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className:
                  "mt-1 h-2.5 overflow-hidden rounded-full bg-secondary",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "h-full rounded-full bg-primary",
                  style: { width: `${xpPct}%` },
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                className: "mt-1 text-xs text-muted-foreground",
                children: [
                  player.xpToNext - player.xp,
                  " XP para subir a Nivel",
                  " ",
                  player.level + 1,
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
            className: "mt-3 text-xs text-muted-foreground",
            children: ["Socio desde ", player.memberSince],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
        children: "Estadísticas",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "grid grid-cols-2 gap-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
            label: "Entrenamientos",
            value: player.stats.trainingsAttended,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
            label: "Partidos jugados",
            value: player.stats.matchesPlayed,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
            label: "Asistencia mes",
            value: `${player.stats.monthlyAttendance}%`,
            tone: "ok",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
            label: "Asistencia año",
            value: `${player.stats.yearlyAttendance}%`,
            tone: "ok",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
            label: "Goles",
            value: player.stats.goals,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
            label: "Racha actual",
            value: `${player.stats.streak} 🔥`,
            tone: "warn",
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
        children: "Logros",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "grid grid-cols-4 gap-3",
        children: achievements.map((a) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "div",
            {
              className: `flex flex-col items-center gap-1 rounded-2xl p-3 text-center ${a.unlocked ? "bg-card shadow-[var(--shadow-card)]" : "bg-secondary/60 opacity-60"}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: `text-2xl ${a.unlocked ? "" : "grayscale"}`,
                  children: a.icon,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "text-[10px] font-medium leading-tight",
                  children: a.name,
                }),
              ],
            },
            a.id,
          ),
        ),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        className: "mt-2 text-xs text-muted-foreground",
        children: [
          unlocked.length,
          " de ",
          achievements.length,
          " logros desbloqueados",
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
        children: "Insignias y títulos",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "flex flex-wrap gap-2",
        children: [
          "Capitán",
          "Goleador",
          "Constante",
          "Puntual",
          "Compañero",
        ].map((b) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "span",
            {
              className:
                "rounded-full bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary",
              children: ["🏅 ", b],
            },
            b,
          ),
        ),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
        children: "Notificaciones",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className:
          "space-y-2 rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]",
        children: [
          ["Recordatorio de entrenamientos", true],
          ["Recordatorio de partidos", true],
          ["Convocatorias publicadas", true],
          ["Pagos por vencer", true],
          ["Avisos del club", false],
        ].map(([label, on]) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "div",
            {
              className: "flex items-center justify-between py-1",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "text-sm",
                  children: label,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
                  "aria-label": label,
                  checked: prefs[label] ?? Boolean(on),
                  onCheckedChange: (value) => {
                    setPrefs((p) => ({
                      ...p,
                      [label]: value,
                    }));
                    toast$1.success("Preferencia actualizada en esta sesión");
                  },
                }),
              ],
            },
            label,
          ),
        ),
      }),
    ],
  });
}
function StatCard({ label, value, tone = "default" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: "text-xs text-muted-foreground",
        children: label,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: `mt-1 text-2xl font-extrabold ${tone === "ok" ? "text-success" : tone === "warn" ? "text-warning-foreground" : "text-primary"}`,
        children: value,
      }),
    ],
  });
}
export { PerfilPage as component };
