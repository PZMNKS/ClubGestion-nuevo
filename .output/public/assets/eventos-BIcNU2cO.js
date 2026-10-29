import { c as e, d as t, l as n } from "./useSelector-7GdJWpjS.js";
import { o as r } from "./index-D8svfn-J.js";
import { t as i } from "./AttendanceActions-CVY7Qg_8.js";
import { n as a, t as o } from "./AppShell-DK6djA2j.js";
import { o as s } from "./prototype-state-Cf-JC4Ew.js";
import { t as c } from "./DraggableBottomSheet-C0KSt4Ih.js";
import { t as l } from "./EventCard-5iwAZKyp.js";
var u = t(n()),
  d = e();
function f() {
  let [e, t] = (0, u.useState)(`lista`),
    { events: n } = s(),
    [f, m] = (0, u.useState)(null),
    h = n.find((e) => e.id === f);
  return (0, d.jsxs)(o, {
    children: [
      (0, d.jsx)(`h1`, {
        className: `text-2xl font-extrabold`,
        children: `Eventos`,
      }),
      (0, d.jsx)(`p`, {
        className: `text-sm text-muted-foreground`,
        children: `Partidos, entrenamientos y actividades.`,
      }),
      (0, d.jsx)(`div`, {
        className: `mt-4 inline-flex rounded-full bg-secondary p-1`,
        children: [`lista`, `calendario`].map((n) =>
          (0, d.jsx)(
            r,
            {
              variant: `ghost`,
              "aria-pressed": e === n,
              onClick: () => t(n),
              className: `rounded-full px-4 py-1.5 text-sm font-semibold capitalize transition ${e === n ? `bg-card text-foreground shadow-[var(--shadow-card)]` : `text-muted-foreground`}`,
              children: n,
            },
            n,
          ),
        ),
      }),
      e === `lista`
        ? (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)(a, { children: `Próximos` }),
              (0, d.jsx)(`div`, {
                className: `space-y-3`,
                children: n.map((e) =>
                  (0, d.jsx)(l, { ...e, onClick: () => m(e.id) }, e.id),
                ),
              }),
            ],
          })
        : (0, d.jsx)(p, { events: n, onPick: m }),
      h &&
        (0, d.jsxs)(c, {
          onClose: () => m(null),
          children: [
            (0, d.jsx)(`p`, {
              className: `text-xs font-semibold uppercase tracking-wider text-primary`,
              children: h.type,
            }),
            (0, d.jsx)(`h2`, {
              className: `mt-1 text-2xl font-extrabold`,
              children: h.title,
            }),
            (0, d.jsxs)(`div`, {
              className: `mt-3 space-y-1 text-sm text-muted-foreground`,
              children: [
                (0, d.jsxs)(`p`, {
                  children: [
                    `📅 `,
                    h.monthLabel,
                    ` `,
                    h.dayLabel,
                    ` · `,
                    h.time,
                  ],
                }),
                (0, d.jsxs)(`p`, { children: [`📍 `, h.place] }),
                h.rival && (0, d.jsxs)(`p`, { children: [`🆚 `, h.rival] }),
                (0, d.jsxs)(`p`, {
                  children: [
                    `👥 Convocatoria: `,
                    h.called ? `Publicada` : `Pendiente`,
                  ],
                }),
              ],
            }),
            (0, d.jsx)(`p`, {
              className: `mt-5 text-sm font-semibold`,
              children: `Tu asistencia`,
            }),
            (0, d.jsx)(`div`, {
              className: `mt-2`,
              children: (0, d.jsx)(i, { id: h.id, status: h.status }),
            }),
            (0, d.jsx)(r, {
              variant: `secondary`,
              className: `mt-3 w-full`,
              onClick: () => m(null),
              children: `Volver a eventos`,
            }),
          ],
        }),
    ],
  });
}
function p({ events: e, onPick: t }) {
  let n = new Date(2026, 5, 18),
    r = n.getFullYear(),
    i = n.getMonth(),
    o = new Date(r, i, 1).getDay(),
    s = new Date(r, i + 1, 0).getDate(),
    c = [...Array(o).fill(null), ...Array.from({ length: s }, (e, t) => t + 1)],
    u = (t) =>
      e.some(
        (e) =>
          new Date(e.date).getDate() === t && new Date(e.date).getMonth() === i,
      );
  return (0, d.jsxs)(d.Fragment, {
    children: [
      (0, d.jsx)(a, { children: `Junio 2026` }),
      (0, d.jsxs)(`div`, {
        className: `rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]`,
        children: [
          (0, d.jsx)(`div`, {
            className: `grid grid-cols-7 gap-1 text-center text-[10px] font-bold uppercase text-muted-foreground`,
            children: [`D`, `L`, `M`, `M`, `J`, `V`, `S`].map((e, t) =>
              (0, d.jsx)(`div`, { children: e }, t),
            ),
          }),
          (0, d.jsx)(`div`, {
            className: `mt-2 grid grid-cols-7 gap-1 text-center text-sm`,
            children: c.map((e, t) =>
              (0, d.jsxs)(
                `div`,
                {
                  className: `relative flex aspect-square items-center justify-center rounded-lg ${e === n.getDate() ? `bg-primary font-bold text-primary-foreground` : `text-foreground`}`,
                  children: [
                    e ?? ``,
                    e &&
                      u(e) &&
                      e !== n.getDate() &&
                      (0, d.jsx)(`span`, {
                        className: `absolute bottom-1 h-1 w-1 rounded-full bg-primary`,
                      }),
                  ],
                },
                t,
              ),
            ),
          }),
        ],
      }),
      (0, d.jsx)(a, { children: `Eventos del mes` }),
      (0, d.jsx)(`div`, {
        className: `space-y-3`,
        children: e
          .filter((e) => new Date(e.date).getMonth() === i)
          .map((e) => (0, d.jsx)(l, { ...e, onClick: () => t(e.id) }, e.id)),
      }),
    ],
  });
}
export { f as component };
