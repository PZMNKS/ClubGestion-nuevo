import { c as e } from "./useSelector-7GdJWpjS.js";
import { a as t, i as n, t as r } from "./wallet-DMaAlgjq.js";
import { f as i, o as a } from "./index-D8svfn-J.js";
import { t as o } from "./AttendanceActions-CVY7Qg_8.js";
import { t as s } from "./chevron-right-DDnh_dBM.js";
import { t as c } from "./circle-check-BEBAv1Rw.js";
import { t as l } from "./clock-CYatqPbE.js";
import { t as u } from "./map-pin-BpEe5s3y.js";
import { t as d } from "./megaphone-jV0MBMQZ.js";
import { t as f } from "./AppShell-DK6djA2j.js";
import { o as p, r as m } from "./mock-data-C0pVxE4X.js";
import { o as h } from "./prototype-state-Cf-JC4Ew.js";
var g = t(`file-clock`, [
    [
      `path`,
      {
        d: `M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85`,
        key: `ryk6xj`,
      },
    ],
    [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }],
    [`path`, { d: `M8 14v2.2l1.6 1`, key: `6m4bie` }],
    [`circle`, { cx: `8`, cy: `16`, r: `6`, key: `10v15b` }],
  ]),
  _ = t(`list-todo`, [
    [`path`, { d: `M13 5h8`, key: `a7qcls` }],
    [`path`, { d: `M13 12h8`, key: `h98zly` }],
    [`path`, { d: `M13 19h8`, key: `c3s6r1` }],
    [`path`, { d: `m3 17 2 2 4-4`, key: `1jhpwq` }],
    [
      `rect`,
      { x: `3`, y: `4`, width: `6`, height: `6`, rx: `1`, key: `cif1o7` },
    ],
  ]),
  v = e();
function y() {
  let { events: e, payments: t, avisos: y, receipts: b } = h(),
    x = e.find((e) => e.type === `partido`) ?? e[0],
    S = t.filter((e) => e.status !== `pagado`),
    C = S.reduce((e, t) => e + t.amount, 0),
    w = y.find(
      (e) => e.destinatarios === `Todos` || e.destinatarios === p.category,
    ),
    T = Math.round((p.xp / p.xpToNext) * 100),
    E = e.filter((e) => e.status === `pendiente`).length,
    D = S.filter((e) => b[e.id]).length;
  return (0, v.jsxs)(f, {
    children: [
      (0, v.jsxs)(`section`, {
        className: `rounded-2xl bg-primary-soft p-4`,
        children: [
          (0, v.jsxs)(`div`, {
            className: `flex items-start justify-between gap-3`,
            children: [
              (0, v.jsxs)(`div`, {
                className: `min-w-0`,
                children: [
                  (0, v.jsx)(`p`, {
                    className: `text-xs font-semibold text-primary`,
                    children: m.name,
                  }),
                  (0, v.jsx)(`h1`, {
                    className: `mt-1 break-words text-xl font-extrabold`,
                    children: p.name,
                  }),
                  (0, v.jsxs)(`p`, {
                    className: `text-xs text-muted-foreground`,
                    children: [p.category, ` · `, p.position],
                  }),
                ],
              }),
              (0, v.jsx)(`span`, {
                className: `flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-card text-xl shadow-card`,
                children: m.shield,
              }),
            ],
          }),
          (0, v.jsxs)(`div`, {
            className: `mt-4 rounded-xl bg-card/80 p-3`,
            children: [
              (0, v.jsxs)(`div`, {
                className: `flex items-center justify-between gap-2 text-xs font-semibold`,
                children: [
                  (0, v.jsxs)(`span`, {
                    children: [`Nivel `, p.level, ` · `, p.title],
                  }),
                  (0, v.jsxs)(`span`, {
                    className: `shrink-0 text-muted-foreground`,
                    children: [p.xp, `/`, p.xpToNext, ` XP`],
                  }),
                ],
              }),
              (0, v.jsx)(`div`, {
                className: `mt-2 h-2 overflow-hidden rounded-full bg-secondary`,
                children: (0, v.jsx)(`div`, {
                  className: `h-full rounded-full bg-primary transition-all`,
                  style: { width: `${T}%` },
                }),
              }),
            ],
          }),
        ],
      }),
      (0, v.jsxs)(`section`, {
        "aria-labelledby": `pending-title`,
        className: `mt-3 border-y border-border py-2`,
        children: [
          (0, v.jsxs)(`h2`, {
            id: `pending-title`,
            className: `flex items-center gap-2 text-sm font-bold`,
            children: [
              (0, v.jsx)(_, { className: `h-4 w-4 text-primary` }),
              ` Pendientes por resolver`,
            ],
          }),
          (0, v.jsxs)(`div`, {
            "aria-live": `polite`,
            className: `mt-1`,
            children: [
              E > 0 &&
                (0, v.jsx)(a, {
                  asChild: !0,
                  variant: `ghost`,
                  className: `h-auto min-h-11 w-full justify-between whitespace-normal px-0 text-left text-xs`,
                  children: (0, v.jsxs)(i, {
                    to: `/eventos`,
                    children: [
                      (0, v.jsxs)(`span`, {
                        className: `flex min-w-0 items-center gap-2`,
                        children: [
                          (0, v.jsx)(n, {
                            className: `h-4 w-4 shrink-0 text-primary`,
                          }),
                          (0, v.jsxs)(`span`, {
                            children: [
                              E,
                              ` `,
                              E === 1
                                ? `evento sin respuesta`
                                : `eventos sin respuesta`,
                            ],
                          }),
                        ],
                      }),
                      (0, v.jsx)(s, { className: `h-4 w-4 shrink-0` }),
                    ],
                  }),
                }),
              D > 0 &&
                (0, v.jsx)(a, {
                  asChild: !0,
                  variant: `ghost`,
                  className: `h-auto min-h-11 w-full justify-between whitespace-normal px-0 text-left text-xs`,
                  children: (0, v.jsxs)(i, {
                    to: `/pagos`,
                    children: [
                      (0, v.jsxs)(`span`, {
                        className: `flex min-w-0 items-center gap-2`,
                        children: [
                          (0, v.jsx)(g, {
                            className: `h-4 w-4 shrink-0 text-warning-foreground`,
                          }),
                          (0, v.jsxs)(`span`, {
                            children: [
                              D,
                              ` `,
                              D === 1
                                ? `comprobante en revisión`
                                : `comprobantes en revisión`,
                            ],
                          }),
                        ],
                      }),
                      (0, v.jsx)(s, { className: `h-4 w-4 shrink-0` }),
                    ],
                  }),
                }),
              E === 0 &&
                D === 0 &&
                (0, v.jsxs)(`p`, {
                  className: `flex min-h-11 items-center gap-2 text-xs text-success`,
                  children: [
                    (0, v.jsx)(c, { className: `h-4 w-4 shrink-0` }),
                    ` No tienes respuestas ni revisiones pendientes.`,
                  ],
                }),
            ],
          }),
        ],
      }),
      x &&
        (0, v.jsxs)(`section`, {
          className: `mt-3 rounded-2xl border border-border bg-card p-3 shadow-card`,
          children: [
            (0, v.jsxs)(`div`, {
              className: `flex items-center justify-between gap-2 text-xs`,
              children: [
                (0, v.jsxs)(`p`, {
                  className: `flex items-center gap-1 font-bold text-primary`,
                  children: [
                    (0, v.jsx)(n, { className: `h-4 w-4` }),
                    ` Próximo partido`,
                  ],
                }),
                (0, v.jsx)(i, {
                  to: `/eventos`,
                  "aria-label": `Ver eventos`,
                  className: `flex h-8 w-8 items-center justify-center text-primary`,
                  children: (0, v.jsx)(s, { className: `h-4 w-4` }),
                }),
              ],
            }),
            (0, v.jsx)(`h2`, {
              className: `mt-1 text-base font-bold`,
              children: x.title,
            }),
            (0, v.jsxs)(`p`, {
              className: `mt-1 flex items-center gap-2 text-xs text-muted-foreground`,
              children: [
                (0, v.jsx)(n, { className: `h-3.5 w-3.5 shrink-0` }),
                x.date.split(`-`).reverse().join(`/`),
                ` `,
                (0, v.jsx)(l, { className: `h-3.5 w-3.5 shrink-0` }),
                x.time,
              ],
            }),
            (0, v.jsxs)(`p`, {
              className: `mt-1 flex items-center gap-2 text-xs text-muted-foreground`,
              children: [
                (0, v.jsx)(u, { className: `h-3.5 w-3.5 shrink-0` }),
                x.place,
              ],
            }),
            (0, v.jsx)(`p`, {
              role: `status`,
              className: `my-2 text-xs font-semibold ${x.status === `confirmado` ? `text-success` : x.status === `no-asiste` ? `text-destructive` : x.status === `lesionado` ? `text-orange-700` : `text-muted-foreground`}`,
              children:
                x.status === `confirmado`
                  ? `Confirmaste que vas`
                  : x.status === `no-asiste`
                    ? `Confirmaste que no vas`
                    : x.status === `lesionado`
                      ? `Reportaste baja por lesión`
                      : `Tu asistencia está sin confirmar`,
            }),
            (0, v.jsx)(o, { id: x.id, status: x.status }),
          ],
        }),
      (0, v.jsxs)(`section`, {
        className: `mt-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-2xl p-3 ${C ? `bg-destructive-soft text-destructive` : `bg-success-soft text-success`}`,
        children: [
          (0, v.jsxs)(`div`, {
            className: `min-w-0`,
            children: [
              (0, v.jsxs)(`h2`, {
                className: `flex items-center gap-1 text-xs font-bold`,
                children: [
                  (0, v.jsx)(r, { className: `h-4 w-4` }),
                  C ? `Pagos pendientes` : `Pagos al día`,
                ],
              }),
              (0, v.jsxs)(`p`, {
                className: `mt-1 text-lg font-extrabold`,
                children: [`$`, C.toLocaleString(`es-CL`)],
              }),
              (0, v.jsx)(`p`, {
                className: `text-xs`,
                children: S.length
                  ? `${S.length} cuota por regularizar`
                  : `Sin deuda pendiente`,
              }),
            ],
          }),
          (0, v.jsx)(a, {
            asChild: !0,
            size: `sm`,
            children: (0, v.jsx)(i, {
              to: `/pagos`,
              children: C ? `Registrar pago` : `Historial`,
            }),
          }),
        ],
      }),
      (0, v.jsxs)(`section`, {
        className: `mt-3 border-t border-border pt-3`,
        children: [
          (0, v.jsxs)(`div`, {
            className: `flex items-center justify-between`,
            children: [
              (0, v.jsxs)(`h2`, {
                className: `flex items-center gap-2 text-sm font-bold`,
                children: [
                  (0, v.jsx)(d, { className: `h-4 w-4 text-primary` }),
                  ` Avisos del club`,
                ],
              }),
              (0, v.jsx)(i, {
                to: `/avisos`,
                className: `text-xs font-semibold text-primary`,
                children: `Ver todos`,
              }),
            ],
          }),
          w
            ? (0, v.jsxs)(i, {
                to: `/avisos`,
                className: `mt-2 block rounded-xl bg-card p-3`,
                children: [
                  (0, v.jsx)(`p`, {
                    className: `truncate text-sm font-semibold`,
                    children: w.titulo,
                  }),
                  (0, v.jsx)(`p`, {
                    className: `mt-1 line-clamp-1 text-xs text-muted-foreground`,
                    children: w.cuerpo,
                  }),
                ],
              })
            : (0, v.jsx)(`p`, {
                className: `mt-2 text-sm text-muted-foreground`,
                children: `No tienes avisos nuevos.`,
              }),
        ],
      }),
    ],
  });
}
export { y as component };
