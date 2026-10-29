import { c as e } from "./useSelector-7GdJWpjS.js";
import { o as t } from "./index-D8svfn-J.js";
import { n, t as r } from "./AppShell-DK6djA2j.js";
import { c as i, r as a, s as o } from "./mock-data-C0pVxE4X.js";
import { o as s, t as c } from "./prototype-state-Cf-JC4Ew.js";
import { t as l } from "./toast-LUA8So3v.js";
var u = e();
function d() {
  let { documentos: e } = s();
  return (0, u.jsxs)(r, {
    children: [
      (0, u.jsxs)(`section`, {
        className: `rounded-3xl bg-primary p-6 text-primary-foreground`,
        children: [
          (0, u.jsx)(`div`, {
            className: `flex h-20 w-20 items-center justify-center rounded-full bg-card text-4xl shadow-lg`,
            children: a.shield,
          }),
          (0, u.jsx)(`h1`, {
            className: `mt-4 text-2xl font-extrabold`,
            children: a.name,
          }),
          (0, u.jsxs)(`p`, {
            className: `text-sm opacity-80`,
            children: [a.city, ` · Fundado en `, a.founded],
          }),
          (0, u.jsxs)(`div`, {
            className: `mt-4 grid grid-cols-3 gap-2 text-center`,
            children: [
              (0, u.jsx)(f, { label: `Miembros`, value: String(a.members) }),
              (0, u.jsx)(f, { label: `Años`, value: String(2026 - a.founded) }),
              (0, u.jsx)(f, {
                label: `Colores`,
                value: a.colors.split(` `)[0],
              }),
            ],
          }),
        ],
      }),
      (0, u.jsx)(n, { children: `Documentos del club` }),
      (0, u.jsx)(`div`, {
        className: `space-y-2`,
        children: e
          .filter((e) => e.tipo === `estatuto` || e.tipo === `acta`)
          .map((e) =>
            (0, u.jsxs)(
              `article`,
              {
                className: `grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-2xl bg-card p-3`,
                children: [
                  (0, u.jsxs)(`div`, {
                    className: `min-w-0`,
                    children: [
                      (0, u.jsx)(`p`, {
                        className: `text-sm font-bold`,
                        children: e.nombre,
                      }),
                      (0, u.jsx)(`p`, {
                        className: `text-xs text-muted-foreground`,
                        children: e.estado,
                      }),
                    ],
                  }),
                  (0, u.jsx)(t, {
                    variant: `secondary`,
                    size: `sm`,
                    onClick: () => {
                      let t = c().files[e.id];
                      if (!t) {
                        l.info(`Documento de ejemplo sin archivo adjunto.`);
                        return;
                      }
                      let n = URL.createObjectURL(t);
                      (window.open(n, `_blank`, `noopener,noreferrer`),
                        setTimeout(() => URL.revokeObjectURL(n), 6e4));
                    },
                    children: `Abrir`,
                  }),
                ],
              },
              e.id,
            ),
          ),
      }),
      (0, u.jsx)(n, { children: `Historia` }),
      (0, u.jsx)(`p`, {
        className: `rounded-2xl bg-card p-4 text-sm leading-relaxed text-muted-foreground shadow-[var(--shadow-card)]`,
        children: a.history,
      }),
      (0, u.jsx)(n, { children: `Tabla de posiciones` }),
      (0, u.jsxs)(`div`, {
        className: `overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)]`,
        children: [
          (0, u.jsxs)(`div`, {
            className: `grid grid-cols-[28px_1fr_40px_40px] gap-2 border-b border-border px-4 py-2 text-[11px] font-bold uppercase text-muted-foreground`,
            children: [
              (0, u.jsx)(`span`, { children: `#` }),
              (0, u.jsx)(`span`, { children: `Equipo` }),
              (0, u.jsx)(`span`, { className: `text-right`, children: `PJ` }),
              (0, u.jsx)(`span`, { className: `text-right`, children: `Pts` }),
            ],
          }),
          i.map((e) => {
            let t = e.team === a.name;
            return (0, u.jsxs)(
              `div`,
              {
                className: `grid grid-cols-[28px_1fr_40px_40px] gap-2 px-4 py-2.5 text-sm ${t ? `bg-primary-soft font-bold text-foreground` : ``}`,
                children: [
                  (0, u.jsx)(`span`, {
                    className: `text-muted-foreground`,
                    children: e.pos,
                  }),
                  (0, u.jsx)(`span`, {
                    className: `truncate`,
                    children: e.team,
                  }),
                  (0, u.jsx)(`span`, {
                    className: `text-right`,
                    children: e.pj,
                  }),
                  (0, u.jsx)(`span`, {
                    className: `text-right`,
                    children: e.pts,
                  }),
                ],
              },
              e.pos,
            );
          }),
        ],
      }),
      (0, u.jsx)(n, { children: `Resultados recientes` }),
      (0, u.jsx)(`div`, {
        className: `space-y-2`,
        children: o.map((e) =>
          (0, u.jsxs)(
            `div`,
            {
              className: `flex items-center justify-between rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]`,
              children: [
                (0, u.jsxs)(`div`, {
                  children: [
                    (0, u.jsxs)(`p`, {
                      className: `font-semibold`,
                      children: [
                        e.local ? `Local` : `Visita`,
                        ` · vs `,
                        e.rival,
                      ],
                    }),
                    (0, u.jsx)(`p`, {
                      className: `text-xs text-muted-foreground`,
                      children: e.date,
                    }),
                  ],
                }),
                (0, u.jsx)(`p`, {
                  className: `text-xl font-extrabold text-primary`,
                  children: e.result,
                }),
              ],
            },
            e.id,
          ),
        ),
      }),
      (0, u.jsx)(n, { children: `Plantel y categorías` }),
      (0, u.jsx)(`div`, {
        className: `grid grid-cols-2 gap-3`,
        children: [`Primera Adulta`, `Sub-20`, `Sub-17`, `Femenino`].map((e) =>
          (0, u.jsxs)(
            `div`,
            {
              className: `rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]`,
              children: [
                (0, u.jsx)(`p`, { className: `text-2xl`, children: `👥` }),
                (0, u.jsx)(`p`, {
                  className: `mt-1 font-semibold`,
                  children: e,
                }),
                (0, u.jsxs)(`p`, {
                  className: `text-xs text-muted-foreground`,
                  children: [
                    [22, 18, 16, 20][
                      [
                        `Primera Adulta`,
                        `Sub-20`,
                        `Sub-17`,
                        `Femenino`,
                      ].indexOf(e)
                    ],
                    ` `,
                    `jugadores`,
                  ],
                }),
              ],
            },
            e,
          ),
        ),
      }),
      (0, u.jsx)(n, { children: `Galería` }),
      (0, u.jsx)(`div`, {
        className: `grid grid-cols-3 gap-2`,
        children: [`🏆`, `⚽`, `🎽`, `🏟️`, `🥇`, `📸`].map((e, t) =>
          (0, u.jsx)(
            `div`,
            {
              className: `flex aspect-square items-center justify-center rounded-xl bg-accent text-3xl`,
              children: e,
            },
            t,
          ),
        ),
      }),
    ],
  });
}
function f({ label: e, value: t }) {
  return (0, u.jsxs)(`div`, {
    className: `rounded-2xl bg-card/15 p-2 backdrop-blur`,
    children: [
      (0, u.jsx)(`p`, { className: `text-lg font-extrabold`, children: t }),
      (0, u.jsx)(`p`, { className: `text-[11px] opacity-80`, children: e }),
    ],
  });
}
export { d as component };
