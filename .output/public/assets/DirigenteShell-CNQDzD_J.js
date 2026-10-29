import { c as e } from "./useSelector-7GdJWpjS.js";
import {
  a as t,
  i as n,
  n as r,
  o as i,
  r as a,
  t as o,
} from "./wallet-DMaAlgjq.js";
import { f as s } from "./index-D8svfn-J.js";
import { t as c } from "./users-CaLeXOoN.js";
var l = t(`folder-open`, [
    [
      `path`,
      {
        d: `m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2`,
        key: `usdka0`,
      },
    ],
  ]),
  u = e(),
  d = [
    { to: `/dirigente`, label: `Inicio`, icon: a, exact: !0 },
    { to: `/dirigente/socios`, label: `Socios`, icon: c },
    { to: `/dirigente/eventos`, label: `Eventos`, icon: n },
    { to: `/dirigente/pagos`, label: `Pagos`, icon: o },
    { to: `/dirigente/mas`, label: `Mi Club`, icon: l },
  ];
function f({ children: e }) {
  return (0, u.jsxs)(`div`, {
    className: `mx-auto flex min-h-screen w-full max-w-[480px] flex-col bg-background`,
    children: [
      (0, u.jsxs)(`header`, {
        className: `sticky top-0 z-30 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 bg-background/90 px-5 pb-2 pt-3 backdrop-blur`,
        children: [
          (0, u.jsxs)(s, {
            to: `/dirigente`,
            className: `flex items-center gap-2`,
            children: [
              (0, u.jsx)(`span`, {
                className: `flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground`,
                children: (0, u.jsx)(r, {
                  className: `h-5 w-5`,
                  strokeWidth: 2.4,
                }),
              }),
              (0, u.jsxs)(`div`, {
                className: `leading-tight`,
                children: [
                  (0, u.jsx)(`p`, {
                    className: `text-base font-extrabold tracking-tight text-foreground`,
                    children: `ClubGestión`,
                  }),
                  (0, u.jsx)(`p`, {
                    className: `text-[10px] font-bold uppercase tracking-wider text-primary`,
                    children: `Dirigente`,
                  }),
                ],
              }),
            ],
          }),
          (0, u.jsx)(s, {
            to: `/jugador`,
            "aria-label": `Ver como jugador`,
            className: `flex min-h-11 items-center rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground`,
            children: `Modo jugador`,
          }),
        ],
      }),
      (0, u.jsx)(`main`, { className: `flex-1 px-5 pb-28 pt-2`, children: e }),
      (0, u.jsx)(p, {}),
    ],
  });
}
function p() {
  let e = i({ select: (e) => e.location.pathname });
  return (0, u.jsx)(`nav`, {
    "aria-label": `Navegación de dirigente`,
    className: `app-nav fixed bottom-0 left-1/2 z-40 w-full max-w-[480px] -translate-x-1/2 border-t border-border bg-card/95 backdrop-blur`,
    children: (0, u.jsx)(`ul`, {
      className: `flex items-center justify-around px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2`,
      children: d.map(({ to: t, label: n, icon: r, exact: i }) => {
        let a = i ? e === t : e.startsWith(t);
        return (0, u.jsx)(
          `li`,
          {
            children: (0, u.jsxs)(s, {
              to: t,
              "aria-current": a ? `page` : void 0,
              className: `flex w-16 flex-col items-center gap-1 text-[11px] font-medium`,
              children: [
                (0, u.jsx)(`span`, {
                  className: `flex h-10 w-12 items-center justify-center rounded-2xl transition-colors ${a ? `bg-primary-soft text-primary` : `text-muted-foreground`}`,
                  children: (0, u.jsx)(r, {
                    className: `h-5 w-5`,
                    strokeWidth: 2.2,
                  }),
                }),
                (0, u.jsx)(`span`, {
                  className: a ? `text-foreground` : `text-muted-foreground`,
                  children: n,
                }),
              ],
            }),
          },
          t,
        );
      }),
    }),
  });
}
function m({ children: e, action: t }) {
  return (0, u.jsxs)(`div`, {
    className: `mb-3 mt-6 flex items-end justify-between`,
    children: [
      (0, u.jsx)(`h2`, {
        className: `text-lg font-bold tracking-tight`,
        children: e,
      }),
      t,
    ],
  });
}
export { f as n, m as t };
