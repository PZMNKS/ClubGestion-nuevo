import { c as e, d as t, l as n } from "./useSelector-7GdJWpjS.js";
import { a as r } from "./wallet-DMaAlgjq.js";
import { i, o as a } from "./index-D8svfn-J.js";
import { t as o } from "./chevron-right-DDnh_dBM.js";
import { t as s } from "./clipboard-list-zvBO2-7R.js";
import { n as c, t as l } from "./DirigenteShell-CNQDzD_J.js";
import { t as u } from "./megaphone-jV0MBMQZ.js";
import { t as d } from "./plus-BwTAco2x.js";
import { t as f } from "./users-CaLeXOoN.js";
import { t as p } from "./x-DCgjeFcw.js";
import {
  c as m,
  d as h,
  f as g,
  l as _,
  t as v,
} from "./dirigente-data-DdiM01PQ.js";
import {
  a as y,
  n as b,
  o as x,
  r as S,
  t as C,
} from "./prototype-state-Cf-JC4Ew.js";
import { t as w } from "./toast-LUA8So3v.js";
import { n as T, t as E } from "./FlowSheet-Dz3nlcrd.js";
import { t as D } from "./DraggableBottomSheet-C0KSt4Ih.js";
import { t as O } from "./EventCard-5iwAZKyp.js";
var k = r(`pencil`, [
    [
      `path`,
      {
        d: `M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,
        key: `1a8usu`,
      },
    ],
    [`path`, { d: `m15 5 4 4`, key: `1mk7zo` }],
  ]),
  A = r(`send`, [
    [
      `path`,
      {
        d: `M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,
        key: `1ffxy3`,
      },
    ],
    [`path`, { d: `m21.854 2.147-10.94 10.939`, key: `12cjpa` }],
  ]),
  j = t(n(), 1),
  M = e(),
  N = [
    {
      key: `presente`,
      label: `Asistieron / Confirmaron`,
      cls: `bg-success-soft text-success`,
    },
    {
      key: `ausente`,
      label: `No asistieron`,
      cls: `bg-destructive-soft text-destructive`,
    },
    {
      key: `lesionado`,
      label: `Lesionados`,
      cls: `bg-orange-100 text-orange-800`,
    },
    {
      key: `sin-respuesta`,
      label: `Sin responder`,
      cls: `bg-warning-soft text-warning-foreground`,
    },
  ],
  P = [
    {
      k: `presente`,
      l: `Asistió`,
      on: `bg-success text-success-foreground hover:bg-success hover:text-success-foreground`,
    },
    {
      k: `ausente`,
      l: `No asistió`,
      on: `bg-destructive text-destructive-foreground hover:bg-destructive hover:text-destructive-foreground`,
    },
    {
      k: `lesionado`,
      l: `Lesionado`,
      on: `bg-orange-600 text-white hover:bg-orange-600 hover:text-white`,
    },
    {
      k: `sin-respuesta`,
      l: `Sin responder`,
      on: `bg-warning text-warning-foreground hover:bg-warning hover:text-warning-foreground`,
    },
  ];
function F({ titulo: e, subtitulo: t, registros: n, onClose: r, onEdit: i }) {
  let o = g();
  return (0, M.jsxs)(D, {
    onClose: r,
    level: `raised`,
    children: [
      (0, M.jsxs)(`div`, {
        className: `flex items-start justify-between gap-3`,
        children: [
          (0, M.jsxs)(`div`, {
            children: [
              (0, M.jsx)(`h2`, {
                className: `text-xl font-extrabold`,
                children: e,
              }),
              t &&
                (0, M.jsx)(`p`, {
                  className: `text-xs text-muted-foreground`,
                  children: t,
                }),
            ],
          }),
          (0, M.jsx)(a, {
            variant: `ghost`,
            onClick: r,
            "aria-label": `Cerrar`,
            children: (0, M.jsx)(p, { className: `h-5 w-5` }),
          }),
        ],
      }),
      i &&
        (0, M.jsxs)(a, {
          onClick: i,
          className: `mt-4 flex w-full items-center justify-center gap-2 text-sm font-bold`,
          children: [
            (0, M.jsx)(k, { className: `h-4 w-4` }),
            ` Editar asistencia`,
          ],
        }),
      N.map((e) => {
        let t = Object.entries(n)
          .filter(([, t]) => t === e.key)
          .map(([e]) => e);
        return (0, M.jsxs)(
          `div`,
          {
            className: `mt-5`,
            children: [
              (0, M.jsxs)(`div`, {
                className: `mb-2 flex items-center justify-between`,
                children: [
                  (0, M.jsx)(`p`, {
                    className: `text-sm font-bold`,
                    children: e.label,
                  }),
                  (0, M.jsx)(`span`, {
                    className: `rounded-full px-2 py-0.5 text-xs font-bold ${e.cls}`,
                    children: t.length,
                  }),
                ],
              }),
              t.length === 0
                ? (0, M.jsx)(`p`, {
                    className: `text-xs text-muted-foreground`,
                    children: `Nadie en este grupo.`,
                  })
                : (0, M.jsx)(`div`, {
                    className: `space-y-2`,
                    children: t.map((e) => {
                      let t = o.find((t) => t.id === e);
                      return t
                        ? (0, M.jsxs)(
                            `div`,
                            {
                              className: `flex items-center gap-3 rounded-2xl bg-secondary p-2.5`,
                              children: [
                                (0, M.jsx)(`div`, {
                                  className: `flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-xs font-bold text-primary`,
                                  children: t.foto,
                                }),
                                (0, M.jsxs)(`div`, {
                                  className: `min-w-0 flex-1`,
                                  children: [
                                    (0, M.jsx)(`p`, {
                                      className: `truncate text-sm font-semibold`,
                                      children: t.nombre,
                                    }),
                                    (0, M.jsx)(`p`, {
                                      className: `text-xs text-muted-foreground`,
                                      children: t.categoria,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e,
                          )
                        : null;
                    }),
                  }),
            ],
          },
          e.key,
        );
      }),
    ],
  });
}
function I({
  titulo: e,
  subtitulo: t,
  registros: n,
  categoria: r = `Todos`,
  onClose: i,
  onSave: o,
}) {
  let s = g(),
    c = Object.keys(n),
    l = s.filter(
      (e) =>
        e.rol === `jugador` &&
        (c.includes(e.id) || r === `Todos` || e.categoria === r),
    ),
    [u, d] = (0, j.useState)(() => {
      let e = {};
      return (
        l.forEach((t) => {
          e[t.id] = n[t.id] ?? `sin-respuesta`;
        }),
        e
      );
    }),
    f = m(u);
  return (0, M.jsxs)(T, {
    title: e,
    description: t,
    onClose: i,
    children: [
      (0, M.jsxs)(`div`, {
        className: `grid grid-cols-4 gap-1.5 text-center text-xs`,
        children: [
          (0, M.jsxs)(`div`, {
            className: `rounded-xl bg-success-soft p-2 text-success`,
            children: [
              (0, M.jsx)(`p`, {
                className: `text-[10px] font-bold`,
                children: `Asistió`,
              }),
              (0, M.jsx)(`p`, {
                className: `text-base font-extrabold`,
                children: f.presentes,
              }),
            ],
          }),
          (0, M.jsxs)(`div`, {
            className: `rounded-xl bg-destructive-soft p-2 text-destructive`,
            children: [
              (0, M.jsx)(`p`, {
                className: `text-[10px] font-bold`,
                children: `No asist.`,
              }),
              (0, M.jsx)(`p`, {
                className: `text-base font-extrabold`,
                children: f.ausentes,
              }),
            ],
          }),
          (0, M.jsxs)(`div`, {
            className: `rounded-xl bg-orange-100 p-2 text-orange-800`,
            children: [
              (0, M.jsx)(`p`, {
                className: `text-[10px] font-bold`,
                children: `Lesionado`,
              }),
              (0, M.jsx)(`p`, {
                className: `text-base font-extrabold`,
                children: f.lesionados,
              }),
            ],
          }),
          (0, M.jsxs)(`div`, {
            className: `rounded-xl bg-warning-soft p-2 text-warning-foreground`,
            children: [
              (0, M.jsx)(`p`, {
                className: `text-[10px] font-bold`,
                children: `Sin resp.`,
              }),
              (0, M.jsx)(`p`, {
                className: `text-base font-extrabold`,
                children: f.sinRespuesta,
              }),
            ],
          }),
        ],
      }),
      (0, M.jsx)(`div`, {
        className: `space-y-2`,
        children: l.map((e) => {
          let t = u[e.id] ?? `sin-respuesta`;
          return (0, M.jsxs)(
            `div`,
            {
              className: `rounded-2xl bg-secondary p-3`,
              children: [
                (0, M.jsxs)(`div`, {
                  className: `flex items-center gap-2.5`,
                  children: [
                    (0, M.jsx)(`div`, {
                      className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-xs font-bold text-primary`,
                      children: e.foto,
                    }),
                    (0, M.jsxs)(`div`, {
                      className: `min-w-0 flex-1`,
                      children: [
                        (0, M.jsx)(`p`, {
                          className: `truncate text-sm font-semibold`,
                          children: e.nombre,
                        }),
                        (0, M.jsx)(`p`, {
                          className: `text-xs text-muted-foreground`,
                          children: e.categoria,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, M.jsx)(`div`, {
                  className: `mt-2.5 grid grid-cols-2 gap-1.5`,
                  children: P.map((n) =>
                    (0, M.jsx)(
                      a,
                      {
                        variant: `ghost`,
                        onClick: () => d((t) => ({ ...t, [e.id]: n.k })),
                        "aria-pressed": t === n.k,
                        className: `rounded-xl px-2 py-1.5 text-xs font-bold transition ${t === n.k ? n.on : `bg-card text-secondary-foreground`}`,
                        children: n.l,
                      },
                      n.k,
                    ),
                  ),
                }),
              ],
            },
            e.id,
          );
        }),
      }),
      (0, M.jsx)(E, {
        onCancel: i,
        label: `Guardar asistencia`,
        onSave: () => o(u),
      }),
    ],
  });
}
var L = [
  `Todos`,
  `Primera Adulta`,
  `Femenino Adulto`,
  `Sub-17`,
  `Socios`,
  `Directiva`,
];
function R(e) {
  return e === `asistencia`
    ? `asistencia`
    : e === `avisos` || e === `comunicacion`
      ? `avisos`
      : `eventos`;
}
function z() {
  let { events: e, convocatorias: t } = x();
  g();
  let [n, r] = (0, j.useState)(null),
    u = e.find((e) => e.id === n),
    p = i.useSearch(),
    h = i.useNavigate(),
    _ = p.tab === `avisos` || p.tab === `comunicacion`,
    v = p.tab === `asistencia`,
    [T, E] = (0, j.useState)(() => R(p.tab)),
    [k, N] = (0, j.useState)(!!p.new && !_ && !v),
    [P, F] = (0, j.useState)(!!p.new && v),
    [L, z] = (0, j.useState)(!!p.new && _),
    [V, W] = (0, j.useState)(`Todos`),
    [K, J] = (0, j.useState)(!1);
  (0, j.useEffect)(() => {
    let e = p.tab === `avisos` || p.tab === `comunicacion`,
      t = p.tab === `asistencia`;
    (p.tab && E(R(p.tab)),
      p.new && (e ? z(!0) : t ? F(!0) : N(!0)),
      (p.new || p.tab) && h({ search: {}, replace: !0 }));
  }, [p.new, p.tab, h]);
  let Y = u ? b(u, t[u.id]) : {},
    X = m(Y);
  return (0, M.jsxs)(c, {
    children: [
      (0, M.jsxs)(`div`, {
        className: `grid grid-cols-[minmax(0,1fr)_auto] items-end gap-2`,
        children: [
          (0, M.jsxs)(`div`, {
            children: [
              (0, M.jsx)(`h1`, {
                className: `text-2xl font-extrabold`,
                children: `Eventos`,
              }),
              (0, M.jsx)(`p`, {
                className: `text-sm text-muted-foreground`,
                children: `Planifica, convoca y comunica al equipo.`,
              }),
            ],
          }),
          T === `eventos` &&
            (0, M.jsxs)(a, {
              onClick: () => N(!0),
              className: `flex items-center gap-1 px-3 font-bold`,
              children: [(0, M.jsx)(d, { className: `h-4 w-4` }), ` Crear`],
            }),
          T === `asistencia` &&
            (0, M.jsxs)(a, {
              onClick: () => F(!0),
              className: `flex items-center gap-1 px-3 font-bold`,
              children: [
                (0, M.jsx)(s, { className: `h-4 w-4` }),
                ` Registrar asistencia`,
              ],
            }),
        ],
      }),
      (0, M.jsx)(`div`, {
        className: `mt-4 inline-flex rounded-full bg-secondary p-1`,
        children: [`eventos`, `asistencia`, `avisos`].map((e) =>
          (0, M.jsx)(
            a,
            {
              variant: `ghost`,
              "aria-pressed": T === e,
              onClick: () => E(e),
              className: `rounded-full px-4 py-1.5 text-sm font-semibold capitalize transition ${T === e ? `bg-card text-foreground shadow-[var(--shadow-card)]` : `text-muted-foreground`}`,
              children: e,
            },
            e,
          ),
        ),
      }),
      T === `eventos` &&
        (0, M.jsxs)(M.Fragment, {
          children: [
            (0, M.jsx)(l, { children: `Próximos` }),
            (0, M.jsx)(`div`, {
              className: `space-y-3`,
              children: e.map((e) =>
                (0, M.jsx)(O, { ...e, onClick: () => r(e.id) }, e.id),
              ),
            }),
          ],
        }),
      T === `asistencia` && (0, M.jsx)(G, { onOpenNew: () => F(!0) }),
      T === `avisos` &&
        (0, M.jsx)(B, {
          openNew: L,
          initialDestinatarios: V,
          onConsumeOpenNew: () => {
            (z(!1), W(`Todos`));
          },
        }),
      u &&
        !K &&
        (0, M.jsxs)(D, {
          onClose: () => {
            (r(null), J(!1));
          },
          children: [
            (0, M.jsxs)(`div`, {
              className: `flex items-center justify-between gap-2`,
              children: [
                (0, M.jsx)(`p`, {
                  className: `text-xs font-semibold uppercase tracking-wider text-primary`,
                  children: u.type,
                }),
                u.destinatarios &&
                  (0, M.jsx)(`span`, {
                    className: `rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-bold text-secondary-foreground`,
                    children: u.destinatarios,
                  }),
              ],
            }),
            (0, M.jsx)(`h2`, {
              className: `mt-1 text-2xl font-extrabold`,
              children: u.title,
            }),
            (0, M.jsxs)(`div`, {
              className: `mt-3 space-y-1 text-sm text-muted-foreground`,
              children: [
                (0, M.jsxs)(`p`, {
                  children: [
                    `📅 `,
                    u.monthLabel,
                    ` `,
                    u.dayLabel,
                    ` · `,
                    u.time,
                  ],
                }),
                (0, M.jsxs)(`p`, { children: [`📍 `, u.place] }),
                u.destinatarios &&
                  (0, M.jsxs)(`p`, {
                    children: [`👥 Destinatarios: `, u.destinatarios],
                  }),
                u.rival && (0, M.jsxs)(`p`, { children: [`🆚 `, u.rival] }),
              ],
            }),
            (0, M.jsx)(l, { children: `Convocatoria` }),
            (0, M.jsxs)(a, {
              variant: `ghost`,
              onClick: () => J(!0),
              className: `block h-auto w-full rounded-2xl bg-secondary p-3 text-left text-sm transition active:scale-[0.98]`,
              children: [
                (0, M.jsxs)(`div`, {
                  className: `flex items-center justify-between`,
                  children: [
                    (0, M.jsxs)(`span`, {
                      className: `flex items-center gap-2 font-semibold`,
                      children: [
                        (0, M.jsx)(f, { className: `h-4 w-4` }),
                        ` Convocados (`,
                        X.presentes,
                        `/`,
                        X.total,
                        `)`,
                      ],
                    }),
                    (0, M.jsxs)(`span`, {
                      className: `flex items-center gap-1 text-xs font-bold text-primary`,
                      children: [
                        `Editar asistencia `,
                        (0, M.jsx)(o, { className: `h-4 w-4` }),
                      ],
                    }),
                  ],
                }),
                (0, M.jsxs)(`div`, {
                  className: `mt-3 grid grid-cols-2 gap-2`,
                  children: [
                    (0, M.jsx)(H, {
                      label: `Confirmados`,
                      value: String(X.presentes),
                      tone: `ok`,
                    }),
                    (0, M.jsx)(H, {
                      label: `No asisten`,
                      value: String(X.ausentes),
                      tone: `bad`,
                    }),
                    (0, M.jsx)(H, {
                      label: `Lesionados`,
                      value: String(X.lesionados),
                      tone: `injured`,
                    }),
                    (0, M.jsx)(H, {
                      label: `Sin responder`,
                      value: String(X.sinRespuesta),
                      tone: `warn`,
                    }),
                  ],
                }),
              ],
            }),
            (0, M.jsxs)(a, {
              onClick: () => {
                let e = u.destinatarios ?? `Todos`;
                (r(null), J(!1), W(e), E(`avisos`), z(!0));
              },
              className: `mt-4 flex w-full items-center justify-center gap-2 text-sm font-bold`,
              children: [
                (0, M.jsx)(A, { className: `h-4 w-4` }),
                ` Enviar aviso a convocados`,
              ],
            }),
          ],
        }),
      u &&
        K &&
        (0, M.jsx)(I, {
          titulo: `Convocatoria · ${u.title}`,
          subtitulo: `${u.monthLabel} ${u.dayLabel} · ${u.time}`,
          registros: Y,
          onClose: () => J(!1),
          onSave: (e) => {
            (S(u.id, e),
              w.success(`Asistencia de la convocatoria actualizada`),
              J(!1));
          },
        }),
      k &&
        (0, M.jsx)(U, {
          onClose: () => N(!1),
          onSave: (e) => {
            (y({ events: [e, ...C().events] }),
              w.success(`Evento creado en esta sesión`),
              N(!1));
          },
        }),
      P && (0, M.jsx)(q, { onClose: () => F(!1) }),
    ],
  });
}
function B({
  openNew: e = !1,
  initialDestinatarios: t = `Todos`,
  onConsumeOpenNew: n,
}) {
  let { avisos: r } = x(),
    i = (e) => y({ avisos: e(C().avisos) }),
    [o, s] = (0, j.useState)(e),
    [c, l] = (0, j.useState)(t);
  return (
    (0, j.useEffect)(() => {
      e && (l(t), s(!0), n?.());
    }, [e, t, n]),
    (0, M.jsxs)(M.Fragment, {
      children: [
        (0, M.jsxs)(`div`, {
          className: `mt-5 flex items-center justify-between`,
          children: [
            (0, M.jsxs)(`p`, {
              className: `text-sm font-semibold text-muted-foreground`,
              children: [r.length, ` avisos publicados`],
            }),
            (0, M.jsxs)(a, {
              onClick: () => {
                (l(`Todos`), s(!0));
              },
              className: `flex items-center gap-1 px-3 font-bold`,
              children: [(0, M.jsx)(d, { className: `h-3.5 w-3.5` }), ` Nuevo`],
            }),
          ],
        }),
        (0, M.jsx)(`div`, {
          className: `mt-3 space-y-3`,
          children: r.map((e) =>
            (0, M.jsxs)(
              `article`,
              {
                className: `rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]`,
                children: [
                  (0, M.jsxs)(`div`, {
                    className: `flex items-center gap-3`,
                    children: [
                      (0, M.jsx)(`div`, {
                        className: `flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground`,
                        children: (0, M.jsx)(u, { className: `h-5 w-5` }),
                      }),
                      (0, M.jsxs)(`div`, {
                        className: `min-w-0 flex-1`,
                        children: [
                          (0, M.jsx)(`p`, {
                            className: `truncate font-semibold`,
                            children: e.titulo,
                          }),
                          (0, M.jsxs)(`p`, {
                            className: `text-xs text-muted-foreground`,
                            children: [e.autor, ` · `, e.fecha],
                          }),
                        ],
                      }),
                      (0, M.jsx)(`span`, {
                        className: `rounded-full bg-secondary px-2 py-0.5 text-[10px] font-bold text-secondary-foreground`,
                        children: e.destinatarios,
                      }),
                    ],
                  }),
                  (0, M.jsx)(`p`, {
                    className: `mt-2 text-sm text-muted-foreground`,
                    children: e.cuerpo,
                  }),
                ],
              },
              e.id,
            ),
          ),
        }),
        o &&
          (0, M.jsx)(V, {
            defaultDestinatarios: c,
            onClose: () => s(!1),
            onSave: (e) => {
              (i((t) => [e, ...t]),
                w.success(`Aviso publicado en esta sesión`),
                s(!1));
            },
          }),
      ],
    })
  );
}
function V({ defaultDestinatarios: e = `Todos`, onClose: t, onSave: n }) {
  let [r, i] = (0, j.useState)(``),
    [a, o] = (0, j.useState)(``),
    [s, c] = (0, j.useState)(e);
  return (0, M.jsxs)(T, {
    title: `Nuevo aviso`,
    onClose: t,
    children: [
      (0, M.jsxs)(`div`, {
        className: `mt-4 space-y-3`,
        children: [
          (0, M.jsxs)(`label`, {
            className: `block`,
            children: [
              (0, M.jsx)(`span`, {
                className: `mb-1 block text-xs font-semibold text-muted-foreground`,
                children: `Título`,
              }),
              (0, M.jsx)(`input`, {
                value: r,
                onChange: (e) => i(e.target.value),
                className: `w-full rounded-xl bg-secondary px-3 py-2.5 text-sm outline-none`,
                placeholder: `Ej: Convocatoria sábado`,
              }),
            ],
          }),
          (0, M.jsxs)(`label`, {
            className: `block`,
            children: [
              (0, M.jsx)(`span`, {
                className: `mb-1 block text-xs font-semibold text-muted-foreground`,
                children: `Destinatarios`,
              }),
              (0, M.jsx)(`select`, {
                value: s,
                onChange: (e) => c(e.target.value),
                className: `w-full rounded-xl bg-secondary px-3 py-2.5 text-sm outline-none`,
                children: L.map((e) =>
                  (0, M.jsx)(`option`, { value: e, children: e }, e),
                ),
              }),
            ],
          }),
          (0, M.jsxs)(`label`, {
            className: `block`,
            children: [
              (0, M.jsx)(`span`, {
                className: `mb-1 block text-xs font-semibold text-muted-foreground`,
                children: `Mensaje`,
              }),
              (0, M.jsx)(`textarea`, {
                value: a,
                onChange: (e) => o(e.target.value),
                rows: 4,
                className: `w-full rounded-xl bg-secondary px-3 py-2.5 text-sm outline-none`,
                placeholder: `Escribe el mensaje...`,
              }),
            ],
          }),
        ],
      }),
      (0, M.jsx)(E, {
        onCancel: t,
        disabled: !r.trim() || !a.trim(),
        label: `Publicar aviso`,
        onSave: () =>
          n({
            id: `av${Date.now()}`,
            titulo: r,
            cuerpo: a,
            destinatarios: s,
            fecha: `ahora`,
            autor: `Tú`,
          }),
      }),
    ],
  });
}
function H({ label: e, value: t, tone: n }) {
  let r = {
    ok: `bg-success-soft text-success`,
    warn: `bg-warning-soft text-warning-foreground`,
    bad: `bg-destructive-soft text-destructive`,
    injured: `bg-orange-100 text-orange-800`,
    default: `bg-card text-foreground`,
  }[n];
  return (0, M.jsxs)(`div`, {
    className: `rounded-xl p-2 ${r}`,
    children: [
      (0, M.jsx)(`p`, {
        className: `text-[10px] font-semibold uppercase tracking-wider opacity-80`,
        children: e,
      }),
      (0, M.jsx)(`p`, { className: `text-lg font-extrabold`, children: t }),
    ],
  });
}
function U({ onClose: e, onSave: t }) {
  let [n, r] = (0, j.useState)(``),
    [i, a] = (0, j.useState)(`entrenamiento`),
    [o, s] = (0, j.useState)(`Todos`),
    [c, l] = (0, j.useState)(``),
    [u, d] = (0, j.useState)(`19:30`),
    [f, p] = (0, j.useState)(``),
    [m, h] = (0, j.useState)(``),
    g = `w-full rounded-xl bg-secondary px-3 py-2.5 text-sm outline-none`;
  return (0, M.jsxs)(T, {
    title: `Nuevo evento`,
    onClose: e,
    children: [
      (0, M.jsxs)(`div`, {
        className: `mt-4 space-y-3`,
        children: [
          (0, M.jsx)(W, {
            label: `Título`,
            children: (0, M.jsx)(`input`, {
              value: n,
              onChange: (e) => r(e.target.value),
              className: g,
              placeholder: `Ej: Entrenamiento`,
            }),
          }),
          (0, M.jsx)(W, {
            label: `Tipo`,
            children: (0, M.jsxs)(`select`, {
              value: i,
              onChange: (e) => a(e.target.value),
              className: g,
              children: [
                (0, M.jsx)(`option`, {
                  value: `entrenamiento`,
                  children: `Entrenamiento`,
                }),
                (0, M.jsx)(`option`, { value: `partido`, children: `Partido` }),
                (0, M.jsx)(`option`, { value: `reunion`, children: `Reunión` }),
                (0, M.jsx)(`option`, {
                  value: `actividad`,
                  children: `Actividad`,
                }),
              ],
            }),
          }),
          (0, M.jsx)(W, {
            label: `Destinatarios`,
            children: (0, M.jsx)(`select`, {
              value: o,
              onChange: (e) => s(e.target.value),
              className: g,
              children: L.map((e) =>
                (0, M.jsx)(`option`, { value: e, children: e }, e),
              ),
            }),
          }),
          (0, M.jsxs)(`div`, {
            className: `grid grid-cols-2 gap-3`,
            children: [
              (0, M.jsx)(W, {
                label: `Fecha`,
                children: (0, M.jsx)(`input`, {
                  type: `date`,
                  value: c,
                  onChange: (e) => l(e.target.value),
                  className: g,
                }),
              }),
              (0, M.jsx)(W, {
                label: `Hora`,
                children: (0, M.jsx)(`input`, {
                  type: `time`,
                  value: u,
                  onChange: (e) => d(e.target.value),
                  className: g,
                }),
              }),
            ],
          }),
          (0, M.jsx)(W, {
            label: `Lugar`,
            children: (0, M.jsx)(`input`, {
              value: f,
              onChange: (e) => p(e.target.value),
              className: g,
              placeholder: `Ej: Cancha municipal`,
            }),
          }),
          (0, M.jsx)(W, {
            label: `Observaciones`,
            children: (0, M.jsx)(`textarea`, {
              value: m,
              onChange: (e) => h(e.target.value),
              rows: 2,
              className: g,
              placeholder: `Notas opcionales...`,
            }),
          }),
        ],
      }),
      (0, M.jsx)(E, {
        onCancel: e,
        disabled: !n.trim() || !c || !u || !f.trim(),
        label: `Crear evento`,
        onSave: () => {
          let e = new Date(c + `T00:00:00`);
          t({
            id: `e${Date.now()}`,
            type: i,
            title: n,
            date: c,
            dayLabel: String(e.getDate()).padStart(2, `0`),
            monthLabel: [
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
            ][e.getMonth()],
            time: `${u} hs`,
            place: f,
            destinatarios: o,
            status: `pendiente`,
            called: !1,
          });
        },
      }),
    ],
  });
}
function W({ label: e, children: t }) {
  return (0, M.jsxs)(`label`, {
    className: `block`,
    children: [
      (0, M.jsx)(`span`, {
        className: `mb-1 block text-xs font-semibold text-muted-foreground`,
        children: e,
      }),
      t,
    ],
  });
}
function G({ onOpenNew: e }) {
  let t = h(),
    [n, r] = (0, j.useState)(null),
    [i, o] = (0, j.useState)(!1),
    c = t.find((e) => e.id === n),
    u = t.map((e) => {
      let t = m(e.registros);
      return t.total ? Math.round((t.presentes / t.total) * 100) : 0;
    }),
    d = u.length ? Math.round(u.reduce((e, t) => e + t, 0) / u.length) : 0;
  return (0, M.jsxs)(M.Fragment, {
    children: [
      (0, M.jsxs)(`div`, {
        className: `mt-5 grid grid-cols-3 gap-2`,
        children: [
          (0, M.jsx)(K, { label: `Promedio`, value: `${d}%` }),
          (0, M.jsx)(K, {
            label: `Mejor`,
            value: `${u.length ? Math.max(...u) : 0}%`,
            cls: `text-success`,
          }),
          (0, M.jsx)(K, {
            label: `Menor`,
            value: `${u.length ? Math.min(...u) : 0}%`,
            cls: `text-destructive`,
          }),
        ],
      }),
      (0, M.jsx)(l, { children: `Sesiones recientes` }),
      (0, M.jsx)(`div`, {
        className: `space-y-2`,
        children: t.map((e) => {
          let t = m(e.registros),
            n = t.total ? Math.round((t.presentes / t.total) * 100) : 0;
          return (0, M.jsxs)(
            a,
            {
              variant: `ghost`,
              onClick: () => {
                (o(!1), r(e.id));
              },
              className: `block h-auto w-full rounded-2xl bg-card p-4 text-left shadow-[var(--shadow-card)] transition active:scale-[0.98]`,
              children: [
                (0, M.jsxs)(`div`, {
                  className: `flex items-center gap-3`,
                  children: [
                    (0, M.jsx)(`div`, {
                      className: `flex h-11 w-11 items-center justify-center rounded-xl bg-success-soft text-success`,
                      children: (0, M.jsx)(s, { className: `h-5 w-5` }),
                    }),
                    (0, M.jsxs)(`div`, {
                      className: `min-w-0 flex-1`,
                      children: [
                        (0, M.jsx)(`p`, {
                          className: `truncate text-sm font-semibold`,
                          children: e.titulo,
                        }),
                        (0, M.jsxs)(`p`, {
                          className: `text-xs text-muted-foreground`,
                          children: [e.categoria, ` · `, e.fecha],
                        }),
                      ],
                    }),
                    (0, M.jsxs)(`div`, {
                      className: `text-right`,
                      children: [
                        (0, M.jsxs)(`p`, {
                          className: `text-base font-extrabold text-success`,
                          children: [n, `%`],
                        }),
                        (0, M.jsxs)(`p`, {
                          className: `text-[10px] text-muted-foreground`,
                          children: [t.presentes, `/`, t.total],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, M.jsx)(`div`, {
                  className: `mt-3 h-1.5 overflow-hidden rounded-full bg-secondary`,
                  children: (0, M.jsx)(`div`, {
                    className: `h-full rounded-full bg-success`,
                    style: { width: `${n}%` },
                  }),
                }),
              ],
            },
            e.id,
          );
        }),
      }),
      (0, M.jsx)(a, {
        onClick: e,
        className: `mt-5 w-full text-sm font-bold`,
        children: `Registrar asistencia`,
      }),
      c &&
        !i &&
        (0, M.jsx)(F, {
          titulo: c.titulo,
          subtitulo: `${c.categoria} · ${c.fecha}`,
          registros: c.registros,
          onEdit: () => o(!0),
          onClose: () => r(null),
        }),
      c &&
        i &&
        (0, M.jsx)(I, {
          titulo: `Editar · ${c.titulo}`,
          subtitulo: `${c.categoria} · ${c.fecha}`,
          registros: c.registros,
          categoria: c.categoria,
          onClose: () => o(!1),
          onSave: (e) => {
            (_(c.id, e), w.success(`Asistencia actualizada`), o(!1));
          },
        }),
    ],
  });
}
function K({ label: e, value: t, cls: n = `text-foreground` }) {
  return (0, M.jsxs)(`div`, {
    className: `rounded-2xl bg-card p-3 text-center shadow-[var(--shadow-card)]`,
    children: [
      (0, M.jsx)(`p`, {
        className: `text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,
        children: e,
      }),
      (0, M.jsx)(`p`, {
        className: `mt-1 text-lg font-extrabold ${n}`,
        children: t,
      }),
    ],
  });
}
function q({ onClose: e }) {
  let t = g().filter((e) => e.rol === `jugador`),
    n = [`Todos`, ...Array.from(new Set(t.map((e) => e.categoria)))],
    [r, i] = (0, j.useState)(``),
    [o, s] = (0, j.useState)(`entrenamiento`),
    [c, u] = (0, j.useState)(() => new Date().toISOString().slice(0, 10)),
    [d, f] = (0, j.useState)(`Todos`),
    [p, h] = (0, j.useState)({}),
    _ = t.filter((e) => d === `Todos` || e.categoria === d),
    y = [
      {
        k: `presente`,
        l: `Asistió`,
        on: `bg-success text-success-foreground hover:bg-success hover:text-success-foreground`,
      },
      {
        k: `ausente`,
        l: `No asistió`,
        on: `bg-destructive text-destructive-foreground hover:bg-destructive hover:text-destructive-foreground`,
      },
      {
        k: `lesionado`,
        l: `Lesionado`,
        on: `bg-orange-600 text-white hover:bg-orange-600 hover:text-white`,
      },
      {
        k: `sin-respuesta`,
        l: `Sin responder`,
        on: `bg-warning text-warning-foreground hover:bg-warning hover:text-warning-foreground`,
      },
    ];
  return (0, M.jsxs)(T, {
    title: `Registrar asistencia`,
    onClose: e,
    children: [
      (0, M.jsxs)(`div`, {
        className: `mt-4 space-y-3`,
        children: [
          (0, M.jsx)(W, {
            label: `Título del evento`,
            children: (0, M.jsx)(`input`, {
              value: r,
              onChange: (e) => i(e.target.value),
              className: `fld`,
              placeholder: `Ej: Entrenamiento martes`,
            }),
          }),
          (0, M.jsxs)(`div`, {
            className: `grid grid-cols-2 gap-3`,
            children: [
              (0, M.jsx)(W, {
                label: `Tipo`,
                children: (0, M.jsxs)(`select`, {
                  value: o,
                  onChange: (e) => s(e.target.value),
                  className: `fld`,
                  children: [
                    (0, M.jsx)(`option`, {
                      value: `entrenamiento`,
                      children: `Entrenamiento`,
                    }),
                    (0, M.jsx)(`option`, {
                      value: `partido`,
                      children: `Partido`,
                    }),
                    (0, M.jsx)(`option`, {
                      value: `reunion`,
                      children: `Reunión`,
                    }),
                    (0, M.jsx)(`option`, {
                      value: `actividad`,
                      children: `Actividad`,
                    }),
                  ],
                }),
              }),
              (0, M.jsx)(W, {
                label: `Fecha`,
                children: (0, M.jsx)(`input`, {
                  type: `date`,
                  value: c,
                  onChange: (e) => u(e.target.value),
                  className: `fld`,
                }),
              }),
            ],
          }),
          (0, M.jsx)(W, {
            label: `Categoría`,
            children: (0, M.jsx)(`select`, {
              value: d,
              onChange: (e) => f(e.target.value),
              className: `fld`,
              children: n.map((e) =>
                (0, M.jsx)(`option`, { value: e, children: e }, e),
              ),
            }),
          }),
        ],
      }),
      (0, M.jsxs)(l, { children: [`Jugadores (`, _.length, `)`] }),
      (0, M.jsx)(`div`, {
        className: `space-y-2`,
        children: _.map((e) => {
          let t = p[e.id] ?? `sin-respuesta`;
          return (0, M.jsxs)(
            `div`,
            {
              className: `rounded-2xl bg-secondary p-3`,
              children: [
                (0, M.jsx)(`p`, {
                  className: `text-sm font-semibold`,
                  children: e.nombre,
                }),
                (0, M.jsx)(`p`, {
                  className: `text-xs text-muted-foreground`,
                  children: e.categoria,
                }),
                (0, M.jsx)(`div`, {
                  className: `mt-2 grid grid-cols-2 gap-1.5`,
                  children: y.map((n) =>
                    (0, M.jsx)(
                      a,
                      {
                        variant: `ghost`,
                        onClick: () => h((t) => ({ ...t, [e.id]: n.k })),
                        "aria-pressed": t === n.k,
                        className: `rounded-xl px-2 py-1.5 text-xs font-bold transition ${t === n.k ? n.on : `bg-card text-secondary-foreground`}`,
                        children: n.l,
                      },
                      n.k,
                    ),
                  ),
                }),
              ],
            },
            e.id,
          );
        }),
      }),
      (0, M.jsx)(E, {
        onCancel: e,
        disabled: !r.trim() || !c || _.length === 0,
        label: `Guardar asistencia`,
        onSave: () => {
          let [t, n, i] = c.split(`-`),
            a = {};
          _.forEach((e) => (a[e.id] = p[e.id] ?? `sin-respuesta`));
          let s = m(a),
            l = {
              id: `as${Date.now()}`,
              titulo: r.trim(),
              tipo: o,
              fecha: `${i}-${n}-${t}`,
              categoria: d,
              presentes: s.presentes,
              total: s.total,
              registros: a,
            };
          (v(l), w.success(`Asistencia registrada`), e());
        },
      }),
    ],
  });
}
export { z as component };
