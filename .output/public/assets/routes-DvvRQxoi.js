import { c as e, d as t, l as n } from "./useSelector-7GdJWpjS.js";
import { a as r } from "./wallet-DMaAlgjq.js";
import { f as i } from "./index-D8svfn-J.js";
import { t as a } from "./chevron-right-DDnh_dBM.js";
import { t as o } from "./megaphone-jV0MBMQZ.js";
import { t as s } from "./triangle-alert-CNF4t4fR.js";
import { n as c, t as l } from "./AppShell-DK6djA2j.js";
import {
  a as u,
  i as d,
  n as f,
  o as p,
  r as m,
} from "./mock-data-C0pVxE4X.js";
import { t as h } from "./EventCard-5iwAZKyp.js";
var g = r(`pin`, [
    [`path`, { d: `M12 17v5`, key: `bb1du9` }],
    [
      `path`,
      {
        d: `M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z`,
        key: `1nkz8b`,
      },
    ],
  ]),
  _ = t(n()),
  v = e();
function y() {
  let [e, t] = (0, _.useState)(d),
    n = [...e].slice(0, 2),
    r = u.filter((e) => e.status === `pendiente`),
    a = f.filter((e) => e.pinned),
    o = f.filter((e) => !e.pinned),
    g = Math.round((p.xp / p.xpToNext) * 100);
  return (0, v.jsxs)(l, {
    children: [
      (0, v.jsxs)(`section`, {
        className: `rounded-3xl bg-primary-soft p-5`,
        children: [
          (0, v.jsxs)(`div`, {
            className: `flex items-center gap-4`,
            children: [
              (0, v.jsxs)(`div`, {
                className: `min-w-0 flex-1`,
                children: [
                  (0, v.jsx)(`h1`, {
                    className: `truncate text-xl font-extrabold text-foreground`,
                    children: m.name,
                  }),
                  (0, v.jsxs)(`p`, {
                    className: `mt-1 flex items-center gap-2 text-sm text-muted-foreground`,
                    children: [
                      (0, v.jsx)(`span`, {
                        className: `h-2 w-2 rounded-full bg-success`,
                      }),
                      `Miembros activos: `,
                      m.members,
                    ],
                  }),
                  (0, v.jsxs)(`p`, {
                    className: `mt-1 text-xs font-medium text-primary`,
                    children: [p.category, ` · Membresía `, p.membership],
                  }),
                ],
              }),
              (0, v.jsx)(`div`, {
                className: `flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-card text-2xl shadow-[var(--shadow-card)]`,
                children: m.shield,
              }),
            ],
          }),
          (0, v.jsxs)(`div`, {
            className: `mt-4 rounded-2xl bg-card/70 p-3`,
            children: [
              (0, v.jsxs)(`div`, {
                className: `flex items-center justify-between text-xs font-semibold`,
                children: [
                  (0, v.jsxs)(`span`, {
                    className: `text-foreground`,
                    children: [`Nivel `, p.level, ` · `, p.title],
                  }),
                  (0, v.jsxs)(`span`, {
                    className: `text-muted-foreground`,
                    children: [p.xp, `/`, p.xpToNext, ` XP`],
                  }),
                ],
              }),
              (0, v.jsx)(`div`, {
                className: `mt-2 h-2 overflow-hidden rounded-full bg-secondary`,
                children: (0, v.jsx)(`div`, {
                  className: `h-full rounded-full bg-primary transition-all`,
                  style: { width: `${g}%` },
                }),
              }),
            ],
          }),
          (0, v.jsx)(i, {
            to: `/dirigente`,
            className: `mt-3 flex items-center justify-center gap-1 rounded-xl bg-card/70 py-2 text-xs font-bold text-primary`,
            children: `Cambiar a modo dirigente →`,
          }),
        ],
      }),
      (0, v.jsxs)(`div`, {
        className: `mt-5 grid grid-cols-2 gap-3`,
        children: [
          (0, v.jsx)(b, {
            label: `Próximo partido`,
            value: `Sáb 20`,
            sub: `vs Unión Centro`,
          }),
          (0, v.jsx)(b, {
            label: `Próximo entreno`,
            value: `Jue 18`,
            sub: `19:30 hs`,
          }),
          (0, v.jsx)(b, {
            label: `Pagos pendientes`,
            value: String(r.length),
            sub: r.length ? `Revisar ahora` : `Al día`,
            tone: r.length ? `warn` : `ok`,
          }),
          (0, v.jsx)(b, {
            label: `Asistencia mes`,
            value: `${p.stats.monthlyAttendance}%`,
            sub: `Racha ${p.stats.streak}`,
            tone: `ok`,
          }),
        ],
      }),
      (0, v.jsx)(c, {
        action: (0, v.jsx)(S, { to: `/eventos`, children: `Ver todos` }),
        children: `Próximos eventos`,
      }),
      (0, v.jsx)(`div`, {
        className: `space-y-3`,
        children: n.map((e) => (0, v.jsx)(h, { ...e }, e.id)),
      }),
      (0, v.jsx)(c, {
        action: (0, v.jsx)(S, { to: `/pagos`, children: `Historial` }),
        children: `Pagos pendientes`,
      }),
      r.length === 0
        ? (0, v.jsx)(`div`, {
            className: `rounded-2xl bg-success-soft p-4 text-success`,
            children: `Estás al día. ¡Gracias!`,
          })
        : r.map((e) =>
            (0, v.jsxs)(
              `div`,
              {
                className: `flex items-center gap-3 rounded-2xl bg-destructive-soft p-4 text-destructive`,
                children: [
                  (0, v.jsx)(s, { className: `h-6 w-6 shrink-0` }),
                  (0, v.jsxs)(`div`, {
                    className: `min-w-0 flex-1`,
                    children: [
                      (0, v.jsxs)(`p`, {
                        className: `font-semibold leading-tight`,
                        children: [`Tienes `, r.length, ` pago pendiente`],
                      }),
                      (0, v.jsxs)(`p`, {
                        className: `text-sm opacity-80`,
                        children: [e.concept, ` · vence `, C(e.dueDate)],
                      }),
                    ],
                  }),
                  (0, v.jsx)(i, {
                    to: `/pagos`,
                    className: `rounded-xl bg-destructive px-3 py-2 text-xs font-bold uppercase tracking-wide text-destructive-foreground`,
                    children: `Pagar ahora`,
                  }),
                ],
              },
              e.id,
            ),
          ),
      (0, v.jsx)(c, { children: `Últimos avisos` }),
      (0, v.jsxs)(`div`, {
        className: `space-y-3`,
        children: [
          a.map((e) => (0, v.jsx)(x, { a: e, pinned: !0 }, e.id)),
          o.map((e) => (0, v.jsx)(x, { a: e }, e.id)),
        ],
      }),
      (0, v.jsx)(c, { children: `Confirma tu asistencia` }),
      (0, v.jsxs)(`div`, {
        className: `rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]`,
        children: [
          (0, v.jsx)(`p`, {
            className: `font-semibold`,
            children: n[0]?.title,
          }),
          (0, v.jsxs)(`p`, {
            className: `text-sm text-muted-foreground`,
            children: [
              n[0]?.monthLabel,
              ` `,
              n[0]?.dayLabel,
              ` ·`,
              ` `,
              n[0]?.time,
            ],
          }),
          (0, v.jsx)(`div`, {
            className: `mt-3 grid grid-cols-2 gap-2`,
            children: [`confirmado`, `no-asiste`, `lesionado`, `pendiente`].map(
              (n) =>
                (0, v.jsx)(
                  `button`,
                  {
                    onClick: () =>
                      t((e) =>
                        e.map((e, t) => (t === 0 ? { ...e, status: n } : e)),
                      ),
                    className: `rounded-xl px-2 py-2 text-xs font-semibold transition ${e[0]?.status === n ? (n === `confirmado` ? `bg-success text-success-foreground` : n === `no-asiste` ? `bg-destructive text-destructive-foreground` : n === `lesionado` ? `bg-orange-600 text-white` : `bg-warning text-warning-foreground`) : `bg-secondary text-secondary-foreground`}`,
                    children:
                      n === `confirmado`
                        ? `Asistiré`
                        : n === `no-asiste`
                          ? `No asisto`
                          : n === `lesionado`
                            ? `Lesionado`
                            : `Pendiente`,
                  },
                  n,
                ),
            ),
          }),
        ],
      }),
    ],
  });
}
function b({ label: e, value: t, sub: n, tone: r = `default` }) {
  return (0, v.jsxs)(`div`, {
    className: `rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]`,
    children: [
      (0, v.jsx)(`p`, {
        className: `text-xs font-medium text-muted-foreground`,
        children: e,
      }),
      (0, v.jsx)(`p`, {
        className: `mt-1 text-2xl font-extrabold ${r === `warn` ? `text-destructive` : r === `ok` ? `text-success` : `text-primary`}`,
        children: t,
      }),
      (0, v.jsx)(`p`, {
        className: `text-xs text-muted-foreground`,
        children: n,
      }),
    ],
  });
}
function x({ a: e, pinned: t }) {
  return (0, v.jsxs)(`article`, {
    className: `flex gap-3 rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]`,
    children: [
      (0, v.jsx)(`div`, {
        className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg text-primary-foreground`,
        children: (0, v.jsx)(o, { className: `h-5 w-5` }),
      }),
      (0, v.jsxs)(`div`, {
        className: `min-w-0 flex-1`,
        children: [
          (0, v.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, v.jsx)(`p`, {
                className: `font-semibold`,
                children: e.title,
              }),
              t &&
                (0, v.jsxs)(`span`, {
                  className: `inline-flex items-center gap-1 rounded-full bg-warning-soft px-2 py-0.5 text-[10px] font-bold uppercase text-warning-foreground`,
                  children: [
                    (0, v.jsx)(g, { className: `h-3 w-3` }),
                    ` Fijado`,
                  ],
                }),
            ],
          }),
          (0, v.jsx)(`p`, {
            className: `text-sm text-muted-foreground`,
            children: e.body,
          }),
          (0, v.jsx)(`p`, {
            className: `mt-1 text-xs text-muted-foreground`,
            children: e.time,
          }),
        ],
      }),
    ],
  });
}
function S({ to: e, children: t }) {
  return (0, v.jsxs)(i, {
    to: e,
    className: `flex items-center gap-0.5 text-sm font-semibold text-primary`,
    children: [t, ` `, (0, v.jsx)(a, { className: `h-4 w-4` })],
  });
}
function C(e) {
  let t = [
      `ene`,
      `feb`,
      `mar`,
      `abr`,
      `may`,
      `jun`,
      `jul`,
      `ago`,
      `sep`,
      `oct`,
      `nov`,
      `dic`,
    ],
    [n, r, i] = e.split(`-`).map(Number);
  return `${String(i).padStart(2, `0`)}-${t[r - 1]}`;
}
export { y as component };
