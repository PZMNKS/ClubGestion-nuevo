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
import { t as c } from "./megaphone-jV0MBMQZ.js";
var l = t(`user-round`, [
    [`circle`, { cx: `12`, cy: `8`, r: `5`, key: `1hypcn` }],
    [`path`, { d: `M20 21a8 8 0 0 0-16 0`, key: `rfgkzh` }],
  ]),
  u = e(),
  d = [
    { to: `/jugador`, label: `Inicio`, icon: a },
    { to: `/eventos`, label: `Eventos`, icon: n },
    { to: `/pagos`, label: `Mis Pagos`, icon: o },
    { to: `/club`, label: `Club`, icon: r },
    { to: `/avisos`, label: `Avisos`, icon: c },
  ];
function f() {
  let e = i({ select: (e) => e.location.pathname });
  return (0, u.jsx)(`nav`, {
    "aria-label": `Navegación de jugador`,
    className: `app-nav fixed bottom-0 left-1/2 z-40 w-full max-w-[480px] -translate-x-1/2 border-t border-border bg-card/95 backdrop-blur`,
    children: (0, u.jsx)(`ul`, {
      className: `flex items-center justify-around px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2`,
      children: d.map(({ to: t, label: n, icon: r }) => {
        let i = t === `/jugador` ? e === `/jugador` : e.startsWith(t);
        return (0, u.jsx)(
          `li`,
          {
            children: (0, u.jsxs)(s, {
              to: t,
              "aria-current": i ? `page` : void 0,
              className: `flex w-16 flex-col items-center gap-1 text-[11px] font-medium`,
              children: [
                (0, u.jsx)(`span`, {
                  className: `flex h-10 w-12 items-center justify-center rounded-2xl transition-colors ${i ? `bg-success-soft text-success` : `text-muted-foreground`}`,
                  children: (0, u.jsx)(r, {
                    className: `h-5 w-5`,
                    strokeWidth: 2.2,
                  }),
                }),
                (0, u.jsx)(`span`, {
                  className: i ? `text-foreground` : `text-muted-foreground`,
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
function p({ children: e }) {
  return (0, u.jsxs)(`div`, {
    className: `mx-auto flex min-h-screen w-full max-w-[480px] flex-col bg-background`,
    children: [
      (0, u.jsxs)(`header`, {
        className: `sticky top-0 z-30 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 bg-background/90 px-5 pb-2 pt-3 backdrop-blur`,
        children: [
          (0, u.jsx)(s, {
            to: `/jugador`,
            className: `text-2xl font-extrabold tracking-tight text-primary`,
            children: `ClubGestión`,
          }),
          (0, u.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, u.jsx)(s, {
                to: `/dirigente`,
                className: `flex min-h-11 items-center rounded-xl bg-secondary px-2 text-xs font-semibold text-secondary-foreground`,
                children: `Modo dirigente`,
              }),
              (0, u.jsx)(s, {
                to: `/perfil`,
                "aria-label": `Perfil`,
                className: `flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground`,
                children: (0, u.jsx)(l, { className: `h-5 w-5` }),
              }),
            ],
          }),
        ],
      }),
      (0, u.jsx)(`main`, { className: `flex-1 px-5 pb-28 pt-2`, children: e }),
      (0, u.jsx)(f, {}),
    ],
  });
}
function m({ children: e, action: t }) {
  return (0, u.jsxs)(`div`, {
    className: `mb-3 mt-6 flex items-end justify-between`,
    children: [
      (0, u.jsx)(`h2`, {
        className: `text-xl font-bold tracking-tight`,
        children: e,
      }),
      t,
    ],
  });
}
export { m as n, p as t };
