import { c as e } from "./useSelector-7GdJWpjS.js";
import { o as t } from "./index-D8svfn-J.js";
import { t as n } from "./chevron-right-DDnh_dBM.js";
import { t as r } from "./clock-CYatqPbE.js";
import { t as i } from "./map-pin-BpEe5s3y.js";
import { t as a } from "./users-CaLeXOoN.js";
var o = e(),
  s = {
    partido: `bg-primary-soft text-primary`,
    entrenamiento: `bg-success-soft text-success`,
    reunion: `bg-warning-soft text-warning-foreground`,
    actividad: `bg-accent text-accent-foreground`,
  },
  c = {
    confirmado: { label: `Confirmado`, cls: `bg-success-soft text-success` },
    pendiente: {
      label: `Pendiente`,
      cls: `bg-warning-soft text-warning-foreground`,
    },
    "no-asiste": {
      label: `No asiste`,
      cls: `bg-destructive-soft text-destructive`,
    },
    lesionado: { label: `Lesionado`, cls: `bg-orange-100 text-orange-800` },
  };
function l({
  dayLabel: e,
  monthLabel: l,
  date: u,
  title: d,
  time: f,
  place: p,
  type: m = `entrenamiento`,
  destinatarios: h,
  rival: g,
  status: _,
  onClick: v,
  compact: y,
}) {
  return (0, o.jsxs)(t, {
    variant: `ghost`,
    onClick: v,
    className: `flex h-auto w-full items-center justify-start whitespace-normal gap-3 rounded-2xl bg-card p-4 text-left font-normal shadow-[var(--shadow-card)] transition-transform active:scale-[0.99]`,
    children: [
      (0, o.jsxs)(`div`, {
        className: `flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl ${s[m]}`,
        children: [
          (0, o.jsx)(`span`, {
            className: `text-[10px] font-bold tracking-wider`,
            children: u
              ? [
                  `ENE`,
                  `FEB`,
                  `MAR`,
                  `ABR`,
                  `MAY`,
                  `JUN`,
                  `JUL`,
                  `AGO`,
                  `SEP`,
                  `OCT`,
                  `NOV`,
                  `DIC`,
                ][Number(u.split(`-`)[1]) - 1]
              : l,
          }),
          (0, o.jsx)(`span`, {
            className: `text-xl font-extrabold leading-none`,
            children: e,
          }),
        ],
      }),
      (0, o.jsxs)(`div`, {
        className: `min-w-0 flex-1`,
        children: [
          (0, o.jsx)(`p`, {
            className: `font-semibold leading-snug text-foreground`,
            children: d,
          }),
          (0, o.jsxs)(`p`, {
            className: `mt-0.5 flex items-center gap-1 text-xs font-normal text-muted-foreground`,
            children: [(0, o.jsx)(r, { className: `h-3.5 w-3.5` }), ` `, f],
          }),
          (0, o.jsxs)(`p`, {
            className: `mt-1 flex items-center gap-1 text-xs font-normal text-muted-foreground`,
            children: [(0, o.jsx)(i, { className: `h-3.5 w-3.5` }), ` `, p],
          }),
          !y &&
            (h || g || _) &&
            (0, o.jsxs)(`div`, {
              className: `mt-2 flex flex-wrap items-center gap-2`,
              children: [
                h &&
                  (0, o.jsx)(`span`, {
                    className: `rounded-full bg-secondary px-2 py-0.5 text-[10px] font-bold text-secondary-foreground`,
                    children: h,
                  }),
                g &&
                  (0, o.jsxs)(`span`, {
                    className: `inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground`,
                    children: [
                      (0, o.jsx)(a, { className: `h-3 w-3` }),
                      ` vs `,
                      g,
                    ],
                  }),
                _ &&
                  (0, o.jsx)(`span`, {
                    className: `rounded-full px-2 py-0.5 text-xs font-medium ${c[_].cls}`,
                    children: c[_].label,
                  }),
              ],
            }),
        ],
      }),
      (0, o.jsx)(n, { className: `h-5 w-5 shrink-0 text-muted-foreground` }),
    ],
  });
}
export { l as t };
