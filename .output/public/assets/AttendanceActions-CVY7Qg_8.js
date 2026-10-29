import { c as e } from "./useSelector-7GdJWpjS.js";
import { a as t } from "./wallet-DMaAlgjq.js";
import { o as n } from "./index-D8svfn-J.js";
import { t as r } from "./heart-pulse-21iF3qLd.js";
import { t as i } from "./x-DCgjeFcw.js";
import { i as a } from "./prototype-state-Cf-JC4Ew.js";
import { t as o } from "./toast-LUA8So3v.js";
var s = t(`check`, [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]]),
  c = e(),
  l = `rounded-xl border px-2 text-xs transition-all duration-150 active:scale-[0.97] active:shadow-none`,
  u = `border-input bg-card text-foreground shadow-card hover:bg-secondary`;
function d({ id: e, status: t }) {
  function d(n) {
    (a(e, n),
      o.success(
        n === `confirmado`
          ? `Asistencia confirmada`
          : n === `lesionado`
            ? `Registrado: baja por lesión`
            : `Registrado: no vas a asistir`,
        { action: { label: `Deshacer`, onClick: () => a(e, t) } },
      ));
  }
  return (0, c.jsxs)(`div`, {
    className: `grid grid-cols-3 gap-2`,
    children: [
      (0, c.jsxs)(n, {
        "aria-pressed": t === `confirmado`,
        onClick: () => d(`confirmado`),
        className: `${l} ${t === `confirmado` ? `border-transparent bg-success text-success-foreground shadow-sm hover:bg-success hover:text-success-foreground` : u}`,
        children: [(0, c.jsx)(s, {}), ` Sí voy`],
      }),
      (0, c.jsxs)(n, {
        "aria-pressed": t === `no-asiste`,
        onClick: () => d(`no-asiste`),
        className: `${l} ${t === `no-asiste` ? `border-transparent bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive hover:text-destructive-foreground` : u}`,
        children: [(0, c.jsx)(i, {}), ` No voy`],
      }),
      (0, c.jsxs)(n, {
        "aria-pressed": t === `lesionado`,
        onClick: () => d(`lesionado`),
        className: `${l} ${t === `lesionado` ? `border-transparent bg-orange-600 text-white shadow-sm hover:bg-orange-600 hover:text-white` : u}`,
        children: [(0, c.jsx)(r, {}), ` Lesionado`],
      }),
    ],
  });
}
export { d as t };
