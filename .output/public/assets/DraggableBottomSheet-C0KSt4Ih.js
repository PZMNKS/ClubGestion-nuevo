import { c as e, d as t, l as n } from "./useSelector-7GdJWpjS.js";
import { o as r } from "./index-D8svfn-J.js";
var i = t(n(), 1),
  a = e();
function o({ onClose: e, children: t, level: n = `default` }) {
  let o = (0, i.useRef)(null),
    s = (0, i.useRef)(null),
    c = (0, i.useRef)(0),
    [l, u] = (0, i.useState)(0),
    [d, f] = (0, i.useState)(!1);
  (0, i.useEffect)(() => {
    o.current?.focus();
    let t = (t) => {
      t.key === `Escape` && e();
    };
    return (
      window.addEventListener(`keydown`, t),
      () => window.removeEventListener(`keydown`, t)
    );
  }, [e]);
  let p = (e) => {
      ((s.current = e.clientY),
        f(!0),
        e.currentTarget.setPointerCapture(e.pointerId));
    },
    m = (e) => {
      if (s.current === null) return;
      let t = Math.max(0, e.clientY - s.current);
      ((c.current = t), u(t));
    },
    h = () => {
      ((s.current = null),
        f(!1),
        c.current > 88 ? e() : ((c.current = 0), u(0)));
    };
  return (0, a.jsx)(`div`, {
    className: `fixed inset-0 ${n === `raised` ? `z-[60]` : `z-50`} flex items-end bg-foreground/40`,
    onClick: e,
    children: (0, a.jsxs)(`div`, {
      ref: o,
      role: `dialog`,
      "aria-modal": `true`,
      tabIndex: -1,
      onClick: (e) => e.stopPropagation(),
      className: `mx-auto max-h-[85vh] w-full max-w-[480px] overflow-y-auto rounded-t-3xl bg-card p-5 pb-8 outline-none ${d ? `` : `transition-transform duration-200`}`,
      style: { transform: `translateY(${l}px)` },
      children: [
        (0, a.jsx)(r, {
          type: `button`,
          variant: `ghost`,
          "aria-label": `Cerrar panel`,
          className: `mx-auto mb-3 flex h-8 w-20 touch-none items-center justify-center p-0`,
          onClick: e,
          onPointerDown: p,
          onPointerMove: m,
          onPointerUp: h,
          onPointerCancel: h,
          children: (0, a.jsx)(`span`, {
            className: `h-1.5 w-12 rounded-full bg-border`,
          }),
        }),
        t,
      ],
    }),
  });
}
export { o as t };
