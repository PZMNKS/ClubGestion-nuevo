import { c as e } from "./useSelector-7GdJWpjS.js";
import { a as t, i as n, t as r } from "./wallet-DMaAlgjq.js";
import { f as i } from "./index-D8svfn-J.js";
import { t as a } from "./chevron-right-DDnh_dBM.js";
import { t as o } from "./circle-check-BEBAv1Rw.js";
import { t as s } from "./clipboard-list-zvBO2-7R.js";
import { t as c } from "./file-text-BIXubBAc.js";
import { n as l, t as u } from "./DirigenteShell-CNQDzD_J.js";
import { t as d } from "./megaphone-jV0MBMQZ.js";
import { t as f } from "./triangle-alert-CNF4t4fR.js";
import { t as p } from "./users-CaLeXOoN.js";
import { c as m, d as h, f as g, i as _ } from "./dirigente-data-DdiM01PQ.js";
import { o as v } from "./prototype-state-Cf-JC4Ew.js";
var y = t(`user-plus`, [
    [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
    [`line`, { x1: `19`, x2: `19`, y1: `8`, y2: `14`, key: `1bvyxn` }],
    [`line`, { x1: `22`, x2: `16`, y1: `11`, y2: `11`, key: `1shjgl` }],
  ]),
  b = e();
function x() {
  let { pagosClub: e, documentos: t, avisos: x, events: E } = v(),
    D = g(),
    O = h(),
    k = e.filter((e) => e.estado !== `pagado`),
    A = t.filter(
      (e) =>
        e.estado === `por-vencer` ||
        e.estado === `vencido` ||
        e.estado === `pendiente`,
    ),
    j = t.filter((e) => e.estado === `vigente`).length,
    M = t.length ? Math.round((j / t.length) * 100) : 0,
    N = E.slice(0, 2),
    P = O[0];
  return (0, b.jsxs)(l, {
    children: [
      (0, b.jsxs)(`section`, {
        className: `rounded-3xl bg-primary-soft p-5`,
        children: [
          (0, b.jsxs)(`div`, {
            className: `flex items-center gap-4`,
            children: [
              (0, b.jsx)(`div`, {
                className: `flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-card text-2xl shadow-[var(--shadow-card)]`,
                children: _.escudo,
              }),
              (0, b.jsxs)(`div`, {
                className: `min-w-0 flex-1`,
                children: [
                  (0, b.jsx)(`h1`, {
                    className: `truncate text-lg font-extrabold text-foreground`,
                    children: _.nombre,
                  }),
                  (0, b.jsxs)(`p`, {
                    className: `mt-0.5 flex items-center gap-2 text-xs text-muted-foreground`,
                    children: [
                      (0, b.jsx)(`span`, {
                        className: `h-2 w-2 rounded-full bg-success`,
                      }),
                      D.length,
                      ` socios registrados ·`,
                      ` `,
                      D.filter((e) => e.rol === `jugador`).length,
                      ` jugadores`,
                    ],
                  }),
                  (0, b.jsx)(`p`, {
                    className: `mt-1 text-xs font-semibold text-primary`,
                    children: `Panel de dirigente`,
                  }),
                ],
              }),
            ],
          }),
          (0, b.jsxs)(`div`, {
            className: `mt-4 rounded-2xl bg-card/80 p-3`,
            children: [
              (0, b.jsxs)(`div`, {
                className: `flex items-center justify-between text-xs font-semibold`,
                children: [
                  (0, b.jsx)(`span`, {
                    className: `text-foreground`,
                    children: `Estado de formalización`,
                  }),
                  (0, b.jsxs)(`span`, {
                    className: `text-muted-foreground`,
                    children: [M, `%`],
                  }),
                ],
              }),
              (0, b.jsx)(`div`, {
                className: `mt-2 h-2 overflow-hidden rounded-full bg-secondary`,
                children: (0, b.jsx)(`div`, {
                  className: `h-full rounded-full bg-primary`,
                  style: { width: `${M}%` },
                }),
              }),
              (0, b.jsxs)(`p`, {
                className: `mt-2 text-[11px] text-muted-foreground`,
                children: [A.length, ` documento(s) requieren tu atención.`],
              }),
            ],
          }),
        ],
      }),
      (0, b.jsxs)(`p`, {
        className: `mt-3 flex items-center gap-2 text-sm`,
        children: [
          (0, b.jsx)(o, { className: `h-4 w-4 text-success` }),
          (0, b.jsxs)(`span`, {
            className: `font-semibold text-success`,
            children: [D.filter((e) => e.pago === `al-dia`).length, ` al día`],
          }),
          (0, b.jsx)(`span`, {
            className: `text-muted-foreground`,
            children: `·`,
          }),
          (0, b.jsxs)(`span`, {
            className: `font-semibold text-destructive`,
            children: [
              D.filter((e) => e.pago !== `al-dia`).length,
              ` con pagos pendientes`,
            ],
          }),
        ],
      }),
      (0, b.jsxs)(`div`, {
        className: `mt-5 grid grid-cols-2 gap-3`,
        children: [
          (0, b.jsx)(i, {
            to: `/dirigente/socios`,
            "aria-label": `Ver miembros activos`,
            children: (0, b.jsx)(S, {
              label: `Miembros activos`,
              value: String(D.length),
              sub: `${D.filter((e) => e.rol === `jugador`).length} jugadores`,
              icon: (0, b.jsx)(p, { className: `h-4 w-4` }),
            }),
          }),
          (0, b.jsx)(i, {
            to: `/dirigente/pagos`,
            "aria-label": `Ver pagos pendientes`,
            children: (0, b.jsx)(S, {
              label: `Pagos pendientes`,
              value: String(k.length),
              sub: k.length ? `Revisar ahora` : `Al día`,
              tone: k.length ? `warn` : `ok`,
              icon: (0, b.jsx)(r, { className: `h-4 w-4` }),
            }),
          }),
          (0, b.jsx)(i, {
            to: `/dirigente/eventos`,
            "aria-label": `Ver próximo evento`,
            children: (0, b.jsx)(S, {
              label: `Próximo evento`,
              value: `Sáb 20`,
              sub: `vs Unión Centro`,
              icon: (0, b.jsx)(n, { className: `h-4 w-4` }),
            }),
          }),
          (0, b.jsx)(i, {
            to: `/dirigente/eventos`,
            search: { tab: `asistencia` },
            "aria-label": `Ver asistencia del mes`,
            children: (0, b.jsx)(S, {
              label: `Asistencia mes`,
              value: `${_.asistenciaPromedio}%`,
              sub: `Promedio del club`,
              tone: `ok`,
              icon: (0, b.jsx)(o, { className: `h-4 w-4` }),
            }),
          }),
        ],
      }),
      (k.length > 0 || A.length > 0) &&
        (0, b.jsxs)(b.Fragment, {
          children: [
            (0, b.jsx)(u, { children: `Alertas importantes` }),
            (0, b.jsxs)(`div`, {
              className: `space-y-3`,
              children: [
                k.length > 0 &&
                  (0, b.jsxs)(i, {
                    to: `/dirigente/pagos`,
                    className: `flex items-center gap-3 rounded-2xl bg-destructive-soft p-4 text-destructive`,
                    children: [
                      (0, b.jsx)(f, { className: `h-6 w-6 shrink-0` }),
                      (0, b.jsxs)(`div`, {
                        className: `min-w-0 flex-1`,
                        children: [
                          (0, b.jsxs)(`p`, {
                            className: `font-semibold leading-tight`,
                            children: [k.length, ` pago(s) sin regularizar`],
                          }),
                          (0, b.jsxs)(`p`, {
                            className: `text-sm opacity-80`,
                            children: [
                              ((e) => `$${e.toLocaleString(`es-CL`)}`)(
                                k.reduce((e, t) => e + t.monto, 0),
                              ),
                              ` por cobrar`,
                            ],
                          }),
                        ],
                      }),
                      (0, b.jsx)(a, { className: `h-5 w-5` }),
                    ],
                  }),
                A.length > 0 &&
                  (0, b.jsxs)(i, {
                    to: `/dirigente/mas`,
                    search: { tab: `documentos` },
                    className: `flex items-center gap-3 rounded-2xl bg-warning-soft p-4 text-warning-foreground`,
                    children: [
                      (0, b.jsx)(c, { className: `h-6 w-6 shrink-0` }),
                      (0, b.jsxs)(`div`, {
                        className: `min-w-0 flex-1`,
                        children: [
                          (0, b.jsxs)(`p`, {
                            className: `font-semibold leading-tight`,
                            children: [A.length, ` documento(s) por revisar`],
                          }),
                          (0, b.jsx)(`p`, {
                            className: `text-sm opacity-80`,
                            children: `Vencidos, por vencer o pendientes`,
                          }),
                        ],
                      }),
                      (0, b.jsx)(a, { className: `h-5 w-5` }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      (0, b.jsx)(u, { children: `Acciones rápidas` }),
      (0, b.jsxs)(`div`, {
        className: `grid grid-cols-2 gap-3`,
        children: [
          (0, b.jsx)(C, {
            to: `/dirigente/socios`,
            search: { new: 1 },
            icon: (0, b.jsx)(y, { className: `h-5 w-5` }),
            label: `Registrar socio`,
          }),
          (0, b.jsx)(C, {
            to: `/dirigente/eventos`,
            search: { new: 1 },
            icon: (0, b.jsx)(n, { className: `h-5 w-5` }),
            label: `Crear evento`,
          }),
          (0, b.jsx)(C, {
            to: `/dirigente/pagos`,
            icon: (0, b.jsx)(r, { className: `h-5 w-5` }),
            label: `Revisar pagos`,
          }),
          (0, b.jsx)(C, {
            to: `/dirigente/eventos`,
            search: { tab: `avisos`, new: 1 },
            icon: (0, b.jsx)(d, { className: `h-5 w-5` }),
            label: `Publicar aviso`,
          }),
        ],
      }),
      (0, b.jsx)(u, {
        action: (0, b.jsx)(w, {
          to: `/dirigente/eventos`,
          children: `Ver todos`,
        }),
        children: `Próximos eventos`,
      }),
      (0, b.jsx)(`div`, {
        className: `space-y-3`,
        children: N.map((e) =>
          (0, b.jsxs)(
            i,
            {
              to: `/dirigente/eventos`,
              className: `flex items-center gap-4 rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]`,
              children: [
                (0, b.jsxs)(`div`, {
                  className: `flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-primary-soft text-primary`,
                  children: [
                    (0, b.jsx)(`span`, {
                      className: `text-[10px] font-bold tracking-wider`,
                      children: e.monthLabel,
                    }),
                    (0, b.jsx)(`span`, {
                      className: `text-xl font-extrabold leading-none`,
                      children: e.dayLabel,
                    }),
                  ],
                }),
                (0, b.jsxs)(`div`, {
                  className: `min-w-0 flex-1`,
                  children: [
                    (0, b.jsx)(`p`, {
                      className: `truncate font-semibold`,
                      children: e.title,
                    }),
                    (0, b.jsxs)(`p`, {
                      className: `text-xs text-muted-foreground`,
                      children: [e.time, ` · `, e.place],
                    }),
                    (0, b.jsx)(`p`, {
                      className: `mt-1 text-[11px] font-semibold text-primary`,
                      children: e.called
                        ? `Convocatoria publicada`
                        : `Sin convocar`,
                    }),
                  ],
                }),
                (0, b.jsx)(a, { className: `h-5 w-5 text-muted-foreground` }),
              ],
            },
            e.id,
          ),
        ),
      }),
      (0, b.jsx)(u, {
        action: (0, b.jsxs)(i, {
          to: `/dirigente/eventos`,
          search: { tab: `asistencia` },
          className: `flex items-center gap-0.5 text-sm font-semibold text-primary`,
          children: [`Detalle `, (0, b.jsx)(a, { className: `h-4 w-4` })],
        }),
        children: `Asistencia reciente`,
      }),
      (0, b.jsx)(i, {
        to: `/dirigente/eventos`,
        search: { tab: `asistencia` },
        className: `block rounded-2xl bg-card p-4 shadow-[var(--shadow-card)] transition active:scale-[0.98]`,
        children: (0, b.jsxs)(`div`, {
          className: `flex items-center gap-3`,
          children: [
            (0, b.jsx)(`div`, {
              className: `flex h-12 w-12 items-center justify-center rounded-xl bg-success-soft text-success`,
              children: (0, b.jsx)(s, { className: `h-5 w-5` }),
            }),
            (0, b.jsxs)(`div`, {
              className: `min-w-0 flex-1`,
              children: [
                (0, b.jsx)(`p`, {
                  className: `font-semibold`,
                  children: P.titulo,
                }),
                (0, b.jsxs)(`p`, {
                  className: `text-xs text-muted-foreground`,
                  children: [P.categoria, ` · `, P.fecha],
                }),
              ],
            }),
            (0, b.jsxs)(`div`, {
              className: `text-right`,
              children: [
                (0, b.jsxs)(`p`, {
                  className: `text-lg font-extrabold text-success`,
                  children: [
                    Math.round(
                      (m(P.registros).presentes / (m(P.registros).total || 1)) *
                        100,
                    ),
                    `%`,
                  ],
                }),
                (0, b.jsxs)(`p`, {
                  className: `text-[10px] text-muted-foreground`,
                  children: [
                    m(P.registros).presentes,
                    `/`,
                    m(P.registros).total,
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, b.jsx)(u, {
        action: (0, b.jsx)(i, {
          to: `/dirigente/eventos`,
          search: { tab: `avisos` },
          className: `text-sm font-semibold text-primary`,
          children: `Ver todos`,
        }),
        children: `Últimos avisos`,
      }),
      (0, b.jsx)(`div`, {
        className: `space-y-3`,
        children: x
          .slice(0, 2)
          .map((e) =>
            (0, b.jsxs)(
              `article`,
              {
                className: `flex gap-3 rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]`,
                children: [
                  (0, b.jsx)(`div`, {
                    className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground`,
                    children: (0, b.jsx)(d, { className: `h-5 w-5` }),
                  }),
                  (0, b.jsxs)(`div`, {
                    className: `min-w-0 flex-1`,
                    children: [
                      (0, b.jsxs)(`div`, {
                        className: `flex items-center justify-between gap-2`,
                        children: [
                          (0, b.jsx)(`p`, {
                            className: `truncate font-semibold`,
                            children: e.titulo,
                          }),
                          (0, b.jsx)(`span`, {
                            className: `shrink-0 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-bold text-secondary-foreground`,
                            children: e.destinatarios,
                          }),
                        ],
                      }),
                      (0, b.jsx)(`p`, {
                        className: `line-clamp-2 text-sm text-muted-foreground`,
                        children: e.cuerpo,
                      }),
                      (0, b.jsxs)(`p`, {
                        className: `mt-1 text-xs text-muted-foreground`,
                        children: [e.autor, ` · `, e.fecha],
                      }),
                    ],
                  }),
                ],
              },
              e.id,
            ),
          ),
      }),
      (0, b.jsx)(u, {
        action: (0, b.jsx)(w, {
          to: `/dirigente/socios`,
          children: `Ver todos`,
        }),
        children: `Socios recientes`,
      }),
      (0, b.jsx)(`div`, {
        className: `space-y-2`,
        children: D.slice(0, 3).map((e) =>
          (0, b.jsxs)(
            i,
            {
              to: `/dirigente/socios/$id`,
              params: { id: e.id },
              className: `flex items-center gap-3 rounded-2xl bg-card p-3 shadow-[var(--shadow-card)]`,
              children: [
                (0, b.jsx)(`div`, {
                  className: `flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-primary`,
                  children: e.foto,
                }),
                (0, b.jsxs)(`div`, {
                  className: `min-w-0 flex-1`,
                  children: [
                    (0, b.jsx)(`p`, {
                      className: `truncate text-sm font-semibold`,
                      children: e.nombre,
                    }),
                    (0, b.jsx)(`p`, {
                      className: `text-xs text-muted-foreground`,
                      children: e.categoria,
                    }),
                  ],
                }),
                (0, b.jsx)(T, { estado: e.pago }),
              ],
            },
            e.id,
          ),
        ),
      }),
      (0, b.jsxs)(`section`, {
        className: `mt-6 rounded-3xl bg-primary-soft p-5`,
        children: [
          (0, b.jsx)(`p`, {
            className: `text-xs font-semibold uppercase tracking-wider text-primary`,
            children: `Estado del club`,
          }),
          (0, b.jsxs)(`p`, {
            className: `mt-1 text-2xl font-extrabold`,
            children: [M, `% al día`],
          }),
          (0, b.jsxs)(`p`, {
            className: `text-xs text-muted-foreground`,
            children: [j, ` de `, t.length, ` documentos vigentes`],
          }),
          (0, b.jsx)(`div`, {
            className: `mt-3 h-2 overflow-hidden rounded-full bg-card/70`,
            children: (0, b.jsx)(`div`, {
              className: `h-full rounded-full bg-primary`,
              style: { width: `${M}%` },
            }),
          }),
          (0, b.jsxs)(i, {
            to: `/dirigente/mas`,
            search: { tab: `documentos` },
            className: `mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-card py-2.5 text-sm font-bold text-primary shadow-[var(--shadow-card)] transition active:scale-[0.98]`,
            children: [`Documentos `, (0, b.jsx)(a, { className: `h-4 w-4` })],
          }),
        ],
      }),
    ],
  });
}
function S({ label: e, value: t, sub: n, tone: r = `default`, icon: i }) {
  return (0, b.jsxs)(`div`, {
    className: `h-full rounded-2xl bg-card p-4 shadow-[var(--shadow-card)] transition active:scale-[0.98]`,
    children: [
      (0, b.jsxs)(`div`, {
        className: `flex items-center gap-1.5 text-xs font-medium text-muted-foreground`,
        children: [i, e],
      }),
      (0, b.jsx)(`p`, {
        className: `mt-1 text-2xl font-extrabold ${r === `warn` ? `text-destructive` : r === `ok` ? `text-success` : `text-primary`}`,
        children: t,
      }),
      (0, b.jsxs)(`div`, {
        className: `flex items-end justify-between gap-2`,
        children: [
          (0, b.jsx)(`p`, {
            className: `text-xs text-muted-foreground`,
            children: n,
          }),
          (0, b.jsx)(a, {
            className: `h-4 w-4 shrink-0 text-muted-foreground`,
          }),
        ],
      }),
    ],
  });
}
function C({ to: e, search: t, icon: n, label: r }) {
  return (0, b.jsxs)(i, {
    to: e,
    search: t,
    className: `flex items-center gap-3 rounded-2xl bg-card p-4 shadow-[var(--shadow-card)] transition active:scale-[0.98]`,
    children: [
      (0, b.jsx)(`span`, {
        className: `flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary`,
        children: n,
      }),
      (0, b.jsx)(`span`, {
        className: `text-sm font-semibold text-foreground`,
        children: r,
      }),
    ],
  });
}
function w({ to: e, children: t }) {
  return (0, b.jsxs)(i, {
    to: e,
    className: `flex items-center gap-0.5 text-sm font-semibold text-primary`,
    children: [t, ` `, (0, b.jsx)(a, { className: `h-4 w-4` })],
  });
}
function T({ estado: e }) {
  let t = {
    "al-dia": { label: `Al día`, cls: `bg-success-soft text-success` },
    pendiente: {
      label: `Pendiente`,
      cls: `bg-warning-soft text-warning-foreground`,
    },
    vencido: { label: `Vencido`, cls: `bg-destructive-soft text-destructive` },
  }[e];
  return (0, b.jsx)(`span`, {
    className: `rounded-full px-2 py-0.5 text-[10px] font-bold ${t.cls}`,
    children: t.label,
  });
}
export { T as PagoBadge, x as component };
