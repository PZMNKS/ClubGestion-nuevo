import { c as e, d as t, l as n } from "./useSelector-7GdJWpjS.js";
import { l as r, s as i } from "./index-D8svfn-J.js";
import { n as a, t as o } from "./AppShell-DK6djA2j.js";
import { o as s, r as c, t as l } from "./mock-data-C0pVxE4X.js";
import { t as u } from "./toast-LUA8So3v.js";
import { a as d, i as f, o as p, r as m, t as h } from "./dist-BlEsai3z.js";
var g = t(n(), 1),
  _ = Object.defineProperty,
  v = (e, t) => _(e, `name`, { value: t, configurable: !0 });
function y(e) {
  let [t, n] = g.useState(void 0);
  return (
    f(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        let t = 0,
          r = new ResizeObserver((r) => {
            if (!Array.isArray(r) || !r.length) return;
            let i = r[0];
            (window.cancelAnimationFrame(t),
              (t = window.requestAnimationFrame(() => {
                let t, r;
                if (`borderBoxSize` in i) {
                  let e = i.borderBoxSize,
                    n = Array.isArray(e) ? e[0] : e;
                  ((t = n.inlineSize), (r = n.blockSize));
                } else ((t = e.offsetWidth), (r = e.offsetHeight));
                n({ width: t, height: r });
              })));
          });
        return (
          r.observe(e, { box: `border-box` }),
          () => {
            (window.cancelAnimationFrame(t), r.unobserve(e));
          }
        );
      }
      n(void 0);
    }, [e]),
    t
  );
}
v(y, `useSize`);
var b = e(),
  x = Object.defineProperty,
  S = (e, t) => x(e, `name`, { value: t, configurable: !0 }),
  C = `Switch`,
  [w, T] = d(C),
  [E, D] = w(C);
function O(e) {
  let {
      __scopeSwitch: t,
      checked: n,
      children: r,
      defaultChecked: i,
      disabled: a,
      form: o,
      name: s,
      onCheckedChange: c,
      required: l,
      value: u = `on`,
      internal_do_not_use_render: d,
    } = e,
    [f, p] = m({ prop: n, defaultProp: i ?? !1, onChange: c, caller: C }),
    [h, _] = g.useState(null),
    [v, y] = g.useState(null),
    [x, S] = g.useState(null),
    w = {
      checked: f,
      setChecked: p,
      disabled: a,
      control: h,
      setControl: _,
      name: s,
      form: o,
      value: u,
      userClick: x,
      onUserClick: S,
      required: l,
      defaultChecked: i,
      isFormControl: !h || !!o || !!h.closest(`form`),
      bubbleInput: v,
      setBubbleInput: y,
    };
  return (0, b.jsx)(E, { scope: t, ...w, children: I(d) ? d(w) : r });
}
S(O, `SwitchProvider`);
var k = `SwitchTrigger`,
  A = g.forwardRef(
    S(function ({ __scopeSwitch: e, onClick: t, ...n }, i) {
      let {
          control: a,
          form: o,
          value: s,
          disabled: c,
          checked: l,
          required: u,
          setControl: d,
          setChecked: f,
          onUserClick: m,
          isFormControl: _,
          bubbleInput: v,
        } = D(k, e),
        y = r(i, d),
        x = g.useRef(l);
      return (
        g.useEffect(() => {
          let e = o ? a?.ownerDocument.getElementById(o) : a?.form;
          if (e instanceof HTMLFormElement) {
            let t = S(() => f(x.current), `reset`);
            return (
              e.addEventListener(`reset`, t),
              () => e.removeEventListener(`reset`, t)
            );
          }
        }, [a, o, f]),
        (0, b.jsx)(h.button, {
          type: `button`,
          role: `switch`,
          "aria-checked": l,
          "aria-required": u,
          "data-state": L(l),
          "data-disabled": c ? `` : void 0,
          disabled: c,
          value: s,
          ...n,
          ref: y,
          onClick: p(t, (e) => {
            let t = e.isPropagationStopped();
            (m({ requestedChecked: !l, hasConsumerStoppedPropagation: t }),
              f((e) => !e),
              v && _ && (t || e.stopPropagation()));
          }),
        })
      );
    }, `SwitchTrigger`),
  ),
  j = g.forwardRef(
    S(function (e, t) {
      let {
        __scopeSwitch: n,
        name: r,
        checked: i,
        defaultChecked: a,
        required: o,
        disabled: s,
        value: c,
        onCheckedChange: l,
        form: u,
        ...d
      } = e;
      return (0, b.jsx)(O, {
        __scopeSwitch: n,
        checked: i,
        defaultChecked: a,
        disabled: s,
        required: o,
        onCheckedChange: l,
        name: r,
        form: u,
        value: c,
        internal_do_not_use_render: ({ isFormControl: e }) =>
          (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsx)(A, { ...d, ref: t, __scopeSwitch: n }),
              e && (0, b.jsx)(F, { __scopeSwitch: n }),
            ],
          }),
      });
    }, `Switch`),
  ),
  M = `SwitchThumb`,
  N = g.forwardRef(
    S(function (e, t) {
      let { __scopeSwitch: n, ...r } = e,
        i = D(M, n);
      return (0, b.jsx)(h.span, {
        "data-state": L(i.checked),
        "data-disabled": i.disabled ? `` : void 0,
        ...r,
        ref: t,
      });
    }, `SwitchThumb`),
  ),
  P = `SwitchBubbleInput`,
  F = g.forwardRef(
    S(function ({ __scopeSwitch: e, onClick: t, ...n }, i) {
      let {
          control: a,
          userClick: o,
          checked: s,
          defaultChecked: c,
          required: l,
          disabled: u,
          name: d,
          value: f,
          form: m,
          bubbleInput: _,
          setBubbleInput: v,
        } = D(P, e),
        x = r(i, v),
        S = y(a),
        C = g.useRef(!1),
        w = g.useRef(s),
        T = g.useRef(o),
        E = g.useRef(null);
      g.useEffect(() => {
        let e = _;
        if (!e) return;
        let t = window.HTMLInputElement.prototype,
          n = Object.getOwnPropertyDescriptor(t, `checked`).set;
        if (!n) return;
        let r = w.current !== s;
        w.current = s;
        let i = o !== null && o !== T.current;
        if (((T.current = o), i))
          ((E.current = r ? null : o),
            r && n.call(e, s),
            e.dispatchEvent(
              new Event(`click`, { bubbles: !o.hasConsumerStoppedPropagation }),
            ));
        else if (r) {
          let t = E.current;
          E.current = null;
          let r = t?.requestedChecked === s;
          ((C.current = !0),
            n.call(e, s),
            e.dispatchEvent(
              new Event(`click`, {
                bubbles: !(r && t.hasConsumerStoppedPropagation),
              }),
            ),
            (C.current = !1));
        }
      }, [_, s, o]);
      let O = g.useRef(s);
      return (0, b.jsx)(h.input, {
        type: `checkbox`,
        "aria-hidden": !0,
        defaultChecked: c ?? O.current,
        required: l,
        disabled: u,
        name: d,
        value: f,
        form: m,
        ...n,
        tabIndex: -1,
        ref: x,
        onClick: p(t, (e) => {
          C.current && e.stopPropagation();
        }),
        style: {
          ...n.style,
          ...S,
          position: `absolute`,
          pointerEvents: `none`,
          opacity: 0,
          margin: 0,
          transform: `translateX(-100%)`,
        },
      });
    }, `SwitchBubbleInput`),
  );
function I(e) {
  return typeof e == `function`;
}
S(I, `isFunction`);
function L(e) {
  return e ? `checked` : `unchecked`;
}
S(L, `getState`);
var R = g.forwardRef(({ className: e, ...t }, n) =>
  (0, b.jsx)(j, {
    className: i(
      `peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input`,
      e,
    ),
    ...t,
    ref: n,
    children: (0, b.jsx)(N, {
      className: i(
        `pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0`,
      ),
    }),
  }),
);
R.displayName = j.displayName;
function z() {
  let [e, t] = (0, g.useState)({}),
    n = Math.round((s.xp / s.xpToNext) * 100),
    r = l.filter((e) => e.unlocked);
  return (0, b.jsxs)(o, {
    children: [
      (0, b.jsx)(`h1`, {
        className: `text-2xl font-extrabold`,
        children: `Mi Perfil`,
      }),
      (0, b.jsxs)(`section`, {
        className: `mt-4 rounded-3xl bg-card p-5 shadow-[var(--shadow-card)]`,
        children: [
          (0, b.jsxs)(`div`, {
            className: `flex items-center gap-4`,
            children: [
              (0, b.jsxs)(`div`, {
                className: `relative`,
                children: [
                  (0, b.jsx)(`div`, {
                    className: `absolute -inset-1 rounded-full bg-gradient-to-tr from-warning to-primary`,
                  }),
                  (0, b.jsx)(`div`, {
                    className: `relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft text-3xl`,
                    children: s.name[0],
                  }),
                  (0, b.jsxs)(`span`, {
                    className: `absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground`,
                    children: [`Nv `, s.level],
                  }),
                ],
              }),
              (0, b.jsxs)(`div`, {
                className: `min-w-0 flex-1`,
                children: [
                  (0, b.jsx)(`p`, {
                    className: `text-xs font-semibold uppercase tracking-wider text-primary`,
                    children: s.title,
                  }),
                  (0, b.jsx)(`h2`, {
                    className: `truncate text-xl font-extrabold`,
                    children: s.name,
                  }),
                  (0, b.jsxs)(`p`, {
                    className: `text-sm text-muted-foreground`,
                    children: [`#`, s.number, ` · `, s.position],
                  }),
                  (0, b.jsxs)(`p`, {
                    className: `text-xs text-muted-foreground`,
                    children: [c.name, ` · `, s.category],
                  }),
                ],
              }),
            ],
          }),
          (0, b.jsxs)(`div`, {
            className: `mt-4`,
            children: [
              (0, b.jsxs)(`div`, {
                className: `flex justify-between text-xs font-semibold`,
                children: [
                  (0, b.jsxs)(`span`, { children: [`Nivel `, s.level] }),
                  (0, b.jsxs)(`span`, {
                    className: `text-muted-foreground`,
                    children: [s.xp, `/`, s.xpToNext, ` XP`],
                  }),
                ],
              }),
              (0, b.jsx)(`div`, {
                className: `mt-1 h-2.5 overflow-hidden rounded-full bg-secondary`,
                children: (0, b.jsx)(`div`, {
                  className: `h-full rounded-full bg-primary`,
                  style: { width: `${n}%` },
                }),
              }),
              (0, b.jsxs)(`p`, {
                className: `mt-1 text-xs text-muted-foreground`,
                children: [
                  s.xpToNext - s.xp,
                  ` XP para subir a Nivel`,
                  ` `,
                  s.level + 1,
                ],
              }),
            ],
          }),
          (0, b.jsxs)(`p`, {
            className: `mt-3 text-xs text-muted-foreground`,
            children: [`Socio desde `, s.memberSince],
          }),
        ],
      }),
      (0, b.jsx)(a, { children: `Estadísticas` }),
      (0, b.jsxs)(`div`, {
        className: `grid grid-cols-2 gap-3`,
        children: [
          (0, b.jsx)(B, {
            label: `Entrenamientos`,
            value: s.stats.trainingsAttended,
          }),
          (0, b.jsx)(B, {
            label: `Partidos jugados`,
            value: s.stats.matchesPlayed,
          }),
          (0, b.jsx)(B, {
            label: `Asistencia mes`,
            value: `${s.stats.monthlyAttendance}%`,
            tone: `ok`,
          }),
          (0, b.jsx)(B, {
            label: `Asistencia año`,
            value: `${s.stats.yearlyAttendance}%`,
            tone: `ok`,
          }),
          (0, b.jsx)(B, { label: `Goles`, value: s.stats.goals }),
          (0, b.jsx)(B, {
            label: `Racha actual`,
            value: `${s.stats.streak} 🔥`,
            tone: `warn`,
          }),
        ],
      }),
      (0, b.jsx)(a, { children: `Logros` }),
      (0, b.jsx)(`div`, {
        className: `grid grid-cols-4 gap-3`,
        children: l.map((e) =>
          (0, b.jsxs)(
            `div`,
            {
              className: `flex flex-col items-center gap-1 rounded-2xl p-3 text-center ${e.unlocked ? `bg-card shadow-[var(--shadow-card)]` : `bg-secondary/60 opacity-60`}`,
              children: [
                (0, b.jsx)(`span`, {
                  className: `text-2xl ${e.unlocked ? `` : `grayscale`}`,
                  children: e.icon,
                }),
                (0, b.jsx)(`span`, {
                  className: `text-[10px] font-medium leading-tight`,
                  children: e.name,
                }),
              ],
            },
            e.id,
          ),
        ),
      }),
      (0, b.jsxs)(`p`, {
        className: `mt-2 text-xs text-muted-foreground`,
        children: [r.length, ` de `, l.length, ` logros desbloqueados`],
      }),
      (0, b.jsx)(a, { children: `Insignias y títulos` }),
      (0, b.jsx)(`div`, {
        className: `flex flex-wrap gap-2`,
        children: [
          `Capitán`,
          `Goleador`,
          `Constante`,
          `Puntual`,
          `Compañero`,
        ].map((e) =>
          (0, b.jsxs)(
            `span`,
            {
              className: `rounded-full bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary`,
              children: [`🏅 `, e],
            },
            e,
          ),
        ),
      }),
      (0, b.jsx)(a, { children: `Notificaciones` }),
      (0, b.jsx)(`div`, {
        className: `space-y-2 rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]`,
        children: [
          [`Recordatorio de entrenamientos`, !0],
          [`Recordatorio de partidos`, !0],
          [`Convocatorias publicadas`, !0],
          [`Pagos por vencer`, !0],
          [`Avisos del club`, !1],
        ].map(([n, r]) =>
          (0, b.jsxs)(
            `div`,
            {
              className: `flex items-center justify-between py-1`,
              children: [
                (0, b.jsx)(`span`, { className: `text-sm`, children: n }),
                (0, b.jsx)(R, {
                  "aria-label": n,
                  checked: e[n] ?? !!r,
                  onCheckedChange: (e) => {
                    (t((t) => ({ ...t, [n]: e })),
                      u.success(`Preferencia actualizada en esta sesión`));
                  },
                }),
              ],
            },
            n,
          ),
        ),
      }),
    ],
  });
}
function B({ label: e, value: t, tone: n = `default` }) {
  return (0, b.jsxs)(`div`, {
    className: `rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]`,
    children: [
      (0, b.jsx)(`p`, {
        className: `text-xs text-muted-foreground`,
        children: e,
      }),
      (0, b.jsx)(`p`, {
        className: `mt-1 text-2xl font-extrabold ${n === `ok` ? `text-success` : n === `warn` ? `text-warning-foreground` : `text-primary`}`,
        children: t,
      }),
    ],
  });
}
export { z as component };
