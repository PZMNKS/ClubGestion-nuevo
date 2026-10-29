import { c as e, d as t, l as n } from "./useSelector-7GdJWpjS.js";
import { o as r } from "./index-D8svfn-J.js";
import { t as i } from "./circle-check-BEBAv1Rw.js";
import { t as a } from "./triangle-alert-CNF4t4fR.js";
import { t as o } from "./upload-FmX4e9Mw.js";
import { n as s, t as c } from "./AppShell-DK6djA2j.js";
import { a as l, o as u, t as d } from "./prototype-state-Cf-JC4Ew.js";
import { t as f } from "./toast-LUA8So3v.js";
import { n as p, t as m } from "./FlowSheet-Dz3nlcrd.js";
var h = t(n()),
  g = e(),
  _ = (e) => `$${e.toLocaleString(`es-CL`)}`;
function v() {
  let { payments: e, receipts: t } = u(),
    [n, v] = (0, h.useState)(null),
    [y, b] = (0, h.useState)(1),
    [x, S] = (0, h.useState)(null),
    [C, w] = (0, h.useState)(``),
    T = e.filter((e) => e.status !== `pagado`),
    E = e.find((e) => e.id === n),
    D = T.reduce((e, t) => e + t.amount, 0);
  function O(e) {
    (v(e), b(1), S(null), w(``));
  }
  function k() {
    E &&
      x &&
      (l({ receipts: { ...d().receipts, [E.id]: x.name } }),
      v(null),
      f.success(
        `Comprobante registrado en esta sesión. Pendiente de revisión.`,
      ));
  }
  return (0, g.jsxs)(c, {
    children: [
      (0, g.jsx)(`h1`, {
        className: `text-2xl font-extrabold`,
        children: `Mis pagos`,
      }),
      (0, g.jsxs)(`section`, {
        className: `mt-4 rounded-2xl p-4 ${D ? `bg-destructive-soft text-destructive` : `bg-success-soft text-success`}`,
        children: [
          (0, g.jsxs)(`p`, {
            className: `flex items-center gap-2 font-bold`,
            children: [
              D
                ? (0, g.jsx)(a, { className: `h-5 w-5` })
                : (0, g.jsx)(i, { className: `h-5 w-5` }),
              D ? `Tienes cuotas pendientes` : `Estás al día`,
            ],
          }),
          (0, g.jsx)(`p`, {
            className: `mt-2 text-3xl font-extrabold`,
            children: _(D),
          }),
          (0, g.jsxs)(`p`, {
            className: `mt-1 text-sm`,
            children: [T.length, ` cuotas por regularizar`],
          }),
        ],
      }),
      (0, g.jsx)(s, { children: `Pendientes` }),
      (0, g.jsx)(`div`, {
        className: `space-y-3`,
        children: T.map((e) =>
          (0, g.jsxs)(
            `article`,
            {
              className: `rounded-2xl bg-card p-4 shadow-card`,
              children: [
                (0, g.jsxs)(`div`, {
                  className: `grid grid-cols-[minmax(0,1fr)_auto] gap-2`,
                  children: [
                    (0, g.jsxs)(`div`, {
                      className: `min-w-0`,
                      children: [
                        (0, g.jsx)(`h2`, {
                          className: `font-bold`,
                          children: e.concept,
                        }),
                        (0, g.jsxs)(`p`, {
                          className: `text-xs text-muted-foreground`,
                          children: [
                            `Vence `,
                            e.dueDate.split(`-`).reverse().join(`/`),
                          ],
                        }),
                      ],
                    }),
                    (0, g.jsx)(`p`, {
                      className: `font-bold`,
                      children: _(e.amount),
                    }),
                  ],
                }),
                t[e.id]
                  ? (0, g.jsxs)(`p`, {
                      className: `mt-3 rounded-lg bg-warning-soft p-3 text-sm font-semibold text-warning-foreground`,
                      children: [`Comprobante en revisión · `, t[e.id]],
                    })
                  : (0, g.jsxs)(r, {
                      className: `mt-3 w-full`,
                      onClick: () => O(e.id),
                      children: [(0, g.jsx)(o, {}), ` Registrar comprobante`],
                    }),
              ],
            },
            e.id,
          ),
        ),
      }),
      (0, g.jsx)(s, { children: `Historial` }),
      (0, g.jsx)(`div`, {
        className: `space-y-2`,
        children: e
          .filter((e) => e.status === `pagado`)
          .map((e) =>
            (0, g.jsxs)(
              `article`,
              {
                className: `grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl bg-card p-4`,
                children: [
                  (0, g.jsxs)(`div`, {
                    className: `min-w-0`,
                    children: [
                      (0, g.jsx)(`p`, {
                        className: `font-semibold`,
                        children: e.concept,
                      }),
                      (0, g.jsxs)(`p`, {
                        className: `text-xs text-success`,
                        children: [`Pagado · `, e.paidAt],
                      }),
                    ],
                  }),
                  (0, g.jsx)(`p`, {
                    className: `font-bold`,
                    children: _(e.amount),
                  }),
                ],
              },
              e.id,
            ),
          ),
      }),
      E &&
        (0, g.jsx)(p, {
          title: `Registrar comprobante`,
          description: `Paso ${y} de 2 · ${E.concept}`,
          onClose: () => v(null),
          children:
            y === 1
              ? (0, g.jsxs)(g.Fragment, {
                  children: [
                    (0, g.jsx)(`p`, {
                      className: `text-xl font-bold`,
                      children: _(E.amount),
                    }),
                    (0, g.jsx)(`p`, {
                      className: `text-sm text-muted-foreground`,
                      children: `Adjunta el comprobante de una transferencia ya realizada. No se realizará ningún cobro.`,
                    }),
                    (0, g.jsxs)(`div`, {
                      children: [
                        (0, g.jsx)(`p`, {
                          className: `text-sm font-semibold`,
                          children: `Comprobante (PDF o imagen)`,
                        }),
                        (0, g.jsxs)(`label`, {
                          className: `group mt-2 flex min-h-12 w-full cursor-pointer select-none items-center justify-center gap-2 rounded-xl border border-primary bg-primary-soft px-4 py-3 text-sm font-bold text-primary shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-md active:translate-y-0 active:scale-[0.98] focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2`,
                          children: [
                            (0, g.jsx)(o, {
                              className: `h-4 w-4 shrink-0 transition-transform duration-150 group-hover:-translate-y-0.5`,
                            }),
                            (0, g.jsx)(`span`, {
                              children: x
                                ? `Cambiar comprobante`
                                : `Adjuntar comprobante`,
                            }),
                            (0, g.jsx)(`input`, {
                              className: `sr-only`,
                              type: `file`,
                              accept: `application/pdf,image/jpeg,image/png`,
                              onChange: (e) => {
                                let t = e.target.files?.[0];
                                t &&
                                (![
                                  `application/pdf`,
                                  `image/jpeg`,
                                  `image/png`,
                                ].includes(t.type) ||
                                  t.size > 10485760)
                                  ? (S(null),
                                    w(
                                      `Elige un PDF, JPG o PNG de hasta 10 MB.`,
                                    ))
                                  : (S(t ?? null), w(``));
                              },
                            }),
                          ],
                        }),
                        (0, g.jsx)(`p`, {
                          className: `mt-1.5 text-xs text-muted-foreground`,
                          children: `PDF, JPG o PNG de hasta 10 MB`,
                        }),
                        x &&
                          (0, g.jsxs)(`div`, {
                            className: `mt-2 flex items-center gap-2 rounded-xl bg-success-soft px-3 py-2.5 text-xs font-semibold text-success`,
                            children: [
                              (0, g.jsx)(i, { className: `h-4 w-4 shrink-0` }),
                              (0, g.jsx)(`span`, {
                                className: `min-w-0 flex-1 truncate`,
                                children: x.name,
                              }),
                            ],
                          }),
                      ],
                    }),
                    C &&
                      (0, g.jsx)(`p`, {
                        role: `alert`,
                        className: `text-sm text-destructive`,
                        children: C,
                      }),
                    (0, g.jsx)(m, {
                      onCancel: () => v(null),
                      onSave: () => b(2),
                      disabled: !x,
                      label: `Continuar`,
                    }),
                  ],
                })
              : (0, g.jsxs)(g.Fragment, {
                  children: [
                    (0, g.jsx)(`p`, {
                      className: `font-semibold`,
                      children: `Revisa antes de registrar`,
                    }),
                    (0, g.jsxs)(`p`, {
                      children: [E.concept, ` · `, _(E.amount)],
                    }),
                    (0, g.jsx)(`p`, {
                      className: `break-all text-sm`,
                      children: x?.name,
                    }),
                    (0, g.jsx)(`p`, {
                      className: `text-sm text-warning-foreground`,
                      children: `Prototipo: el comprobante se registra solo en esta sesión, sin enviarse al club. Tu deuda no cambia hasta su revisión.`,
                    }),
                    (0, g.jsx)(m, {
                      cancelLabel: `Atrás`,
                      onCancel: () => b(1),
                      onSave: k,
                      label: `Registrar`,
                    }),
                  ],
                }),
        }),
    ],
  });
}
export { v as component };
