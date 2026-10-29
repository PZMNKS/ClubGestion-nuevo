import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as SectionTitle, t as AppShell } from "./AppShell-B_EBrAVz.mjs";
import {
  c as standings,
  r as club,
  s as recentResults,
} from "./mock-data-6dlC7T92.mjs";
import {
  o as usePrototype,
  t as getPrototype,
} from "./prototype-state-BkJ0Cljr.mjs";
import { s as Button } from "./router-CuTlj-1m.mjs";
import { t as toast$1 } from "./toast-kixGVRDj.mjs";
// node_modules/.nitro/vite/services/ssr/assets/club-sjBSqV9P.js
var import_jsx_runtime = require_jsx_runtime();
function ClubPage() {
  const { documentos } = usePrototype();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
        className: "rounded-3xl bg-primary p-6 text-primary-foreground",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className:
              "flex h-20 w-20 items-center justify-center rounded-full bg-card text-4xl shadow-lg",
            children: club.shield,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
            className: "mt-4 text-2xl font-extrabold",
            children: club.name,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
            className: "text-sm opacity-80",
            children: [club.city, " · Fundado en ", club.founded],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "mt-4 grid grid-cols-3 gap-2 text-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
                label: "Miembros",
                value: String(club.members),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
                label: "Años",
                value: String(2026 - club.founded),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
                label: "Colores",
                value: club.colors.split(" ")[0],
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
        children: "Documentos del club",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "space-y-2",
        children: documentos
          .filter((d) => d.tipo === "estatuto" || d.tipo === "acta")
          .map((d) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "article",
              {
                className:
                  "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-2xl bg-card p-3",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "min-w-0",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "text-sm font-bold",
                        children: d.nombre,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "text-xs text-muted-foreground",
                        children: d.estado,
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                    variant: "secondary",
                    size: "sm",
                    onClick: () => {
                      const file = getPrototype().files[d.id];
                      if (!file) {
                        toast$1.info(
                          "Documento de ejemplo sin archivo adjunto.",
                        );
                        return;
                      }
                      const url = URL.createObjectURL(file);
                      window.open(url, "_blank", "noopener,noreferrer");
                      setTimeout(() => URL.revokeObjectURL(url), 6e4);
                    },
                    children: "Abrir",
                  }),
                ],
              },
              d.id,
            ),
          ),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
        children: "Historia",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className:
          "rounded-2xl bg-card p-4 text-sm leading-relaxed text-muted-foreground shadow-[var(--shadow-card)]",
        children: club.history,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
        children: "Tabla de posiciones",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className:
          "overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)]",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "grid grid-cols-[28px_1fr_40px_40px] gap-2 border-b border-border px-4 py-2 text-[11px] font-bold uppercase text-muted-foreground",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                children: "#",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                children: "Equipo",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: "text-right",
                children: "PJ",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: "text-right",
                children: "Pts",
              }),
            ],
          }),
          standings.map((s) => {
            const me = s.team === club.name;
            return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "div",
              {
                className: `grid grid-cols-[28px_1fr_40px_40px] gap-2 px-4 py-2.5 text-sm ${me ? "bg-primary-soft font-bold text-foreground" : ""}`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "text-muted-foreground",
                    children: s.pos,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "truncate",
                    children: s.team,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "text-right",
                    children: s.pj,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "text-right",
                    children: s.pts,
                  }),
                ],
              },
              s.pos,
            );
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
        children: "Resultados recientes",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "space-y-2",
        children: recentResults.map((r) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "div",
            {
              className:
                "flex items-center justify-between rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                      className: "font-semibold",
                      children: [
                        r.local ? "Local" : "Visita",
                        " · vs ",
                        r.rival,
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "text-xs text-muted-foreground",
                      children: r.date,
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-xl font-extrabold text-primary",
                  children: r.result,
                }),
              ],
            },
            r.id,
          ),
        ),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
        children: "Plantel y categorías",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "grid grid-cols-2 gap-3",
        children: ["Primera Adulta", "Sub-20", "Sub-17", "Femenino"].map((c) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "div",
            {
              className: "rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-2xl",
                  children: "👥",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "mt-1 font-semibold",
                  children: c,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                  className: "text-xs text-muted-foreground",
                  children: [
                    [22, 18, 16, 20][
                      [
                        "Primera Adulta",
                        "Sub-20",
                        "Sub-17",
                        "Femenino",
                      ].indexOf(c)
                    ],
                    " ",
                    "jugadores",
                  ],
                }),
              ],
            },
            c,
          ),
        ),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
        children: "Galería",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "grid grid-cols-3 gap-2",
        children: ["🏆", "⚽", "🎽", "🏟️", "🥇", "📸"].map((emoji, i) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              className:
                "flex aspect-square items-center justify-center rounded-xl bg-accent text-3xl",
              children: emoji,
            },
            i,
          ),
        ),
      }),
    ],
  });
}
function Stat({ label, value }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "rounded-2xl bg-card/15 p-2 backdrop-blur",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: "text-lg font-extrabold",
        children: value,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: "text-[11px] opacity-80",
        children: label,
      }),
    ],
  });
}
export { ClubPage as component };
