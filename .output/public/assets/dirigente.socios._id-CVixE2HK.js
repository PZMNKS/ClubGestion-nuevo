import { c as e, d as t, l as n } from "./useSelector-7GdJWpjS.js";
import { n as r } from "./not-found-i5RsCZif.js";
import { a as i, i as a, t as o } from "./wallet-DMaAlgjq.js";
import { a as s, f as c, o as l, s as u, t as d } from "./index-D8svfn-J.js";
import { t as f } from "./circle-check-BEBAv1Rw.js";
import { n as p, t as m } from "./DirigenteShell-CNQDzD_J.js";
import { t as h } from "./heart-pulse-21iF3qLd.js";
import { d as g, f as _, u as v } from "./dirigente-data-DdiM01PQ.js";
import { o as y } from "./prototype-state-Cf-JC4Ew.js";
import { t as b } from "./toast-LUA8So3v.js";
import {
  a as x,
  n as S,
  o as C,
  r as w,
  s as T,
  t as E,
} from "./dialog-EtL9Ta1h.js";
var D = i(`arrow-left`, [
    [`path`, { d: `m12 19-7-7 7-7`, key: `1l729n` }],
    [`path`, { d: `M19 12H5`, key: `x3x0zl` }],
  ]),
  O = i(`circle-x`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `m15 9-6 6`, key: `1uzhvr` }],
    [`path`, { d: `m9 9 6 6`, key: `z0biqf` }],
  ]),
  k = i(`mail`, [
    [`path`, { d: `m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`, key: `132q7q` }],
    [
      `rect`,
      { x: `2`, y: `4`, width: `20`, height: `16`, rx: `2`, key: `izxlao` },
    ],
  ]),
  A = i(`phone`, [
    [
      `path`,
      {
        d: `M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,
        key: `9njp5v`,
      },
    ],
  ]),
  j = t(n(), 1),
  M = e(),
  N = j.forwardRef(({ className: e, type: t, ...n }, r) =>
    (0, M.jsx)(`input`, {
      type: t,
      className: u(
        `flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`,
        e,
      ),
      ref: r,
      ...n,
    }),
  );
N.displayName = `Input`;
var P = [
  `Ene`,
  `Feb`,
  `Mar`,
  `Abr`,
  `May`,
  `Jun`,
  `Jul`,
  `Ago`,
  `Sep`,
  `Oct`,
  `Nov`,
  `Dic`,
];
function F(e) {
  let [, t, n] = e.split(`-`),
    r = parseInt(t, 10) - 1;
  return isNaN(r) || !P[r] ? e : `${P[r]} ${n}`;
}
function I() {
  let { id: e } = d.useParams(),
    t = _(),
    { pagosClub: n } = y(),
    i = g(),
    u = t.find((t) => t.id === e);
  if (!u) throw r();
  let v = n.filter((e) => e.socioId === u.id),
    b = (0, j.useMemo)(
      () =>
        i
          .filter((e) => e.registros[u.id] !== void 0)
          .map((e) => ({
            ...e,
            presente: e.registros[u.id] === `presente`,
            lesionado: e.registros[u.id] === `lesionado`,
            sinRespuesta: e.registros[u.id] === `sin-respuesta`,
          })),
      [i, u.id],
    ),
    x = (0, j.useMemo)(
      () => Array.from(new Set(v.map((e) => F(e.vencimiento)))),
      [v],
    ),
    S = (0, j.useMemo)(
      () => Array.from(new Set(b.map((e) => F(e.fecha)))),
      [b],
    ),
    C = (0, j.useMemo)(() => Array.from(new Set(b.map((e) => e.titulo))), [b]),
    [w, T] = (0, j.useState)(`Todos`),
    [E, N] = (0, j.useState)(`Todos`),
    [P, I] = (0, j.useState)(`Todos`),
    [B, V] = (0, j.useState)(!1),
    H = v.filter((e) => w === `Todos` || F(e.vencimiento) === w),
    U = b.filter(
      (e) =>
        (E === `Todos` || F(e.fecha) === E) &&
        (P === `Todos` || e.titulo === P),
    ),
    W = U.filter((e) => e.presente).length,
    G = U.filter((e) => e.lesionado).length,
    K = U.length - W - G;
  return (0, M.jsxs)(p, {
    children: [
      (0, M.jsxs)(c, {
        to: `/dirigente/socios`,
        className: `inline-flex items-center gap-1 text-sm font-semibold text-primary`,
        children: [(0, M.jsx)(D, { className: `h-4 w-4` }), ` Socios`],
      }),
      (0, M.jsxs)(`section`, {
        className: `mt-3 rounded-3xl bg-card p-5 shadow-[var(--shadow-card)]`,
        children: [
          (0, M.jsxs)(`div`, {
            className: `flex items-center gap-4`,
            children: [
              (0, M.jsx)(`div`, {
                className: `flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft text-2xl font-extrabold text-primary`,
                children: u.foto,
              }),
              (0, M.jsxs)(`div`, {
                className: `min-w-0 flex-1`,
                children: [
                  (0, M.jsx)(`h1`, {
                    className: `truncate text-xl font-extrabold`,
                    children: u.nombre,
                  }),
                  (0, M.jsxs)(`p`, {
                    className: `text-sm text-muted-foreground`,
                    children: [u.categoria, u.numero ? ` · #${u.numero}` : ``],
                  }),
                  (0, M.jsx)(`p`, {
                    className: `text-xs capitalize text-primary`,
                    children: u.rol.replace(`-`, ` `),
                  }),
                ],
              }),
            ],
          }),
          (0, M.jsxs)(`div`, {
            className: `mt-4 grid grid-cols-3 gap-2 text-center`,
            children: [
              (0, M.jsx)(R, {
                label: `Pago`,
                value: (0, M.jsx)(s, { estado: u.pago }),
              }),
              (0, M.jsx)(R, {
                label: `Asistencia`,
                value: (0, M.jsxs)(`span`, {
                  className: `text-base font-bold`,
                  children: [u.asistenciaPct, `%`],
                }),
              }),
              (0, M.jsx)(R, {
                label: `Desde`,
                value: (0, M.jsx)(`span`, {
                  className: `text-xs font-semibold`,
                  children: u.desde,
                }),
              }),
            ],
          }),
          (0, M.jsxs)(`div`, {
            className: `mt-4 space-y-1 text-sm`,
            children: [
              (0, M.jsxs)(`p`, {
                className: `flex items-center gap-2 text-muted-foreground`,
                children: [
                  (0, M.jsx)(A, { className: `h-4 w-4` }),
                  ` `,
                  u.telefono,
                ],
              }),
              (0, M.jsxs)(`p`, {
                className: `flex items-center gap-2 text-muted-foreground`,
                children: [
                  (0, M.jsx)(k, { className: `h-4 w-4` }),
                  ` `,
                  u.contacto,
                ],
              }),
              u.posicion &&
                (0, M.jsxs)(`p`, {
                  className: `text-muted-foreground`,
                  children: [
                    `Posición: `,
                    (0, M.jsx)(`span`, {
                      className: `text-foreground`,
                      children: u.posicion,
                    }),
                  ],
                }),
            ],
          }),
          u.observaciones &&
            (0, M.jsxs)(`div`, {
              className: `mt-4 rounded-xl bg-warning-soft p-3 text-sm text-warning-foreground`,
              children: [
                (0, M.jsx)(`span`, {
                  className: `font-bold`,
                  children: `Observación: `,
                }),
                u.observaciones,
              ],
            }),
        ],
      }),
      (0, M.jsxs)(`div`, {
        className: `mt-4 grid grid-cols-2 gap-3`,
        children: [
          (0, M.jsx)(l, {
            onClick: () => V(!0),
            className: `font-bold`,
            children: `Editar datos`,
          }),
          (0, M.jsx)(l, {
            asChild: !0,
            variant: `secondary`,
            children: (0, M.jsx)(c, {
              to: `/dirigente/eventos`,
              search: { tab: `avisos`, new: 1 },
              children: `Publicar aviso`,
            }),
          }),
        ],
      }),
      (0, M.jsx)(z, { open: B, onOpenChange: V, socio: u }),
      (0, M.jsx)(m, { children: `Historial de pagos` }),
      (0, M.jsx)(L, {
        label: `Mes`,
        options: [`Todos`, ...x],
        value: w,
        onChange: T,
      }),
      (0, M.jsxs)(`div`, {
        className: `mt-2 mb-3 flex gap-2 text-[11px] font-semibold`,
        children: [
          (0, M.jsxs)(`span`, {
            className: `rounded-full bg-secondary px-2 py-1`,
            children: [H.length, ` pago(s)`],
          }),
          (0, M.jsxs)(`span`, {
            className: `rounded-full bg-success-soft px-2 py-1 text-success`,
            children: [
              H.filter((e) => e.estado === `pagado`).length,
              ` pagados`,
            ],
          }),
          (0, M.jsxs)(`span`, {
            className: `rounded-full bg-destructive/10 px-2 py-1 text-destructive`,
            children: [
              H.filter((e) => e.estado !== `pagado`).length,
              ` `,
              `pendientes`,
            ],
          }),
        ],
      }),
      H.length === 0
        ? (0, M.jsx)(`p`, {
            className: `rounded-2xl bg-secondary p-4 text-center text-sm text-muted-foreground`,
            children: `Sin pagos para ese filtro.`,
          })
        : (0, M.jsx)(`div`, {
            className: `space-y-2`,
            children: H.map((e) =>
              (0, M.jsxs)(
                `div`,
                {
                  className: `flex items-center gap-3 rounded-2xl bg-card p-3 shadow-[var(--shadow-card)]`,
                  children: [
                    (0, M.jsx)(`div`, {
                      className: `flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary`,
                      children: (0, M.jsx)(o, { className: `h-5 w-5` }),
                    }),
                    (0, M.jsxs)(`div`, {
                      className: `min-w-0 flex-1`,
                      children: [
                        (0, M.jsx)(`p`, {
                          className: `truncate text-sm font-semibold`,
                          children: e.concepto,
                        }),
                        (0, M.jsxs)(`p`, {
                          className: `text-xs text-muted-foreground`,
                          children: [
                            `Vence `,
                            e.vencimiento,
                            e.pagadoEl ? ` · Pagado ${e.pagadoEl}` : ``,
                          ],
                        }),
                      ],
                    }),
                    (0, M.jsxs)(`div`, {
                      className: `text-right`,
                      children: [
                        (0, M.jsxs)(`p`, {
                          className: `text-sm font-bold`,
                          children: [`$`, e.monto.toLocaleString(`es-CL`)],
                        }),
                        (0, M.jsx)(`p`, {
                          className: `text-[10px] font-bold uppercase ${e.estado === `pagado` ? `text-success` : e.estado === `vencido` ? `text-destructive` : `text-warning-foreground`}`,
                          children: e.estado,
                        }),
                      ],
                    }),
                  ],
                },
                e.id,
              ),
            ),
          }),
      (0, M.jsx)(m, { children: `Historial de asistencia` }),
      (0, M.jsx)(L, {
        label: `Mes`,
        options: [`Todos`, ...S],
        value: E,
        onChange: N,
      }),
      (0, M.jsx)(`div`, {
        className: `mt-2`,
        children: (0, M.jsx)(L, {
          label: `Evento`,
          options: [`Todos`, ...C],
          value: P,
          onChange: I,
        }),
      }),
      (0, M.jsxs)(`div`, {
        className: `mt-2 mb-3 flex flex-wrap gap-2 text-[11px] font-semibold`,
        children: [
          (0, M.jsxs)(`span`, {
            className: `rounded-full bg-secondary px-2 py-1`,
            children: [U.length, ` sesión(es)`],
          }),
          (0, M.jsxs)(`span`, {
            className: `rounded-full bg-success-soft px-2 py-1 text-success`,
            children: [W, ` presente(s)`],
          }),
          (0, M.jsxs)(`span`, {
            className: `rounded-full bg-destructive/10 px-2 py-1 text-destructive`,
            children: [K, ` ausente(s)`],
          }),
          G > 0 &&
            (0, M.jsxs)(`span`, {
              className: `rounded-full bg-orange-100 px-2 py-1 text-orange-800`,
              children: [G, ` lesionado(s)`],
            }),
        ],
      }),
      U.length === 0
        ? (0, M.jsx)(`p`, {
            className: `rounded-2xl bg-secondary p-4 text-center text-sm text-muted-foreground`,
            children: `Sin asistencias para ese filtro.`,
          })
        : (0, M.jsx)(`div`, {
            className: `space-y-2`,
            children: U.map((e) =>
              (0, M.jsxs)(
                `div`,
                {
                  className: `flex items-center gap-3 rounded-2xl bg-card p-3 shadow-[var(--shadow-card)]`,
                  children: [
                    (0, M.jsx)(`div`, {
                      className: `flex h-10 w-10 items-center justify-center rounded-xl ${e.presente ? `bg-success-soft text-success` : e.lesionado ? `bg-orange-100 text-orange-800` : `bg-destructive/10 text-destructive`}`,
                      children: e.presente
                        ? (0, M.jsx)(f, { className: `h-5 w-5` })
                        : e.lesionado
                          ? (0, M.jsx)(h, { className: `h-5 w-5` })
                          : (0, M.jsx)(O, { className: `h-5 w-5` }),
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
                          children: [
                            (0, M.jsx)(a, { className: `mr-1 inline h-3 w-3` }),
                            e.fecha,
                            ` · `,
                            e.categoria,
                          ],
                        }),
                      ],
                    }),
                    (0, M.jsx)(`p`, {
                      className: `text-xs font-bold ${e.presente ? `text-success` : e.lesionado ? `text-orange-700` : `text-destructive`}`,
                      children: e.sinRespuesta
                        ? `Sin responder`
                        : e.presente
                          ? `Presente`
                          : e.lesionado
                            ? `Lesionado`
                            : `Ausente`,
                    }),
                  ],
                },
                e.id,
              ),
            ),
          }),
    ],
  });
}
function L({ label: e, options: t, value: n, onChange: r }) {
  return (0, M.jsxs)(`div`, {
    className: `flex items-center gap-2`,
    children: [
      (0, M.jsx)(`span`, {
        className: `shrink-0 text-[10px] font-bold uppercase tracking-wider text-muted-foreground`,
        children: e,
      }),
      (0, M.jsx)(`div`, {
        className: `flex gap-2 overflow-x-auto pb-1`,
        children: t.map((e) =>
          (0, M.jsx)(
            l,
            {
              variant: `ghost`,
              onClick: () => r(e),
              className: `shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold transition ${n === e ? `bg-primary text-primary-foreground` : `bg-secondary text-secondary-foreground`}`,
              children: e,
            },
            e,
          ),
        ),
      }),
    ],
  });
}
function R({ label: e, value: t }) {
  return (0, M.jsxs)(`div`, {
    className: `rounded-xl bg-secondary p-2`,
    children: [
      (0, M.jsx)(`p`, {
        className: `text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,
        children: e,
      }),
      (0, M.jsx)(`div`, {
        className: `mt-1 flex items-center justify-center`,
        children: t,
      }),
    ],
  });
}
function z({ open: e, onOpenChange: t, socio: n }) {
  let [r, i] = (0, j.useState)({
    nombre: n.nombre,
    categoria: n.categoria,
    rol: n.rol,
    numero: n.numero?.toString() ?? ``,
    posicion: n.posicion ?? ``,
    contacto: n.contacto,
    telefono: n.telefono,
    pago: n.pago,
    asistenciaPct: n.asistenciaPct.toString(),
    observaciones: n.observaciones ?? ``,
  });
  function a(e, t) {
    i((n) => ({ ...n, [e]: t }));
  }
  function o() {
    (v(n.id, {
      nombre: r.nombre.trim() || n.nombre,
      categoria: r.categoria.trim() || n.categoria,
      rol: r.rol,
      numero: (r.numero && parseInt(r.numero, 10)) || void 0,
      posicion: r.posicion.trim() || void 0,
      contacto: r.contacto.trim(),
      telefono: r.telefono.trim(),
      pago: r.pago,
      asistenciaPct: Math.max(
        0,
        Math.min(100, parseInt(r.asistenciaPct, 10) || 0),
      ),
      observaciones: r.observaciones.trim() || void 0,
    }),
      b.success(`Datos del socio actualizados`),
      t(!1));
  }
  return (0, M.jsx)(E, {
    open: e,
    onOpenChange: t,
    children: (0, M.jsxs)(w, {
      className: `max-h-[90vh] overflow-y-auto rounded-2xl`,
      children: [
        (0, M.jsx)(C, {
          children: (0, M.jsx)(T, { children: `Editar socio` }),
        }),
        (0, M.jsxs)(`div`, {
          className: `space-y-3`,
          children: [
            (0, M.jsx)(B, {
              label: `Nombre`,
              children: (0, M.jsx)(N, {
                placeholder: `Ej: Matías Rojas`,
                value: r.nombre,
                onChange: (e) => a(`nombre`, e.target.value),
              }),
            }),
            (0, M.jsxs)(`div`, {
              className: `grid grid-cols-2 gap-2`,
              children: [
                (0, M.jsx)(B, {
                  label: `Rol`,
                  children: (0, M.jsxs)(`select`, {
                    value: r.rol,
                    onChange: (e) => a(`rol`, e.target.value),
                    className: `h-9 w-full rounded-md border bg-transparent px-2 text-sm`,
                    children: [
                      (0, M.jsx)(`option`, {
                        value: `jugador`,
                        children: `Jugador`,
                      }),
                      (0, M.jsx)(`option`, {
                        value: `cuerpo-tecnico`,
                        children: `Cuerpo técnico`,
                      }),
                      (0, M.jsx)(`option`, {
                        value: `dirigente`,
                        children: `Dirigente`,
                      }),
                      (0, M.jsx)(`option`, {
                        value: `socio`,
                        children: `Socio`,
                      }),
                    ],
                  }),
                }),
                (0, M.jsx)(B, {
                  label: `Categoría`,
                  children: (0, M.jsx)(N, {
                    placeholder: `Ej: Primera Adulta`,
                    value: r.categoria,
                    onChange: (e) => a(`categoria`, e.target.value),
                  }),
                }),
              ],
            }),
            (0, M.jsxs)(`div`, {
              className: `grid grid-cols-2 gap-2`,
              children: [
                (0, M.jsx)(B, {
                  label: `N°`,
                  children: (0, M.jsx)(N, {
                    placeholder: `Ej: 8`,
                    value: r.numero,
                    onChange: (e) => a(`numero`, e.target.value),
                    inputMode: `numeric`,
                  }),
                }),
                (0, M.jsx)(B, {
                  label: `Posición`,
                  children: (0, M.jsx)(N, {
                    placeholder: `Ej: Mediocampista`,
                    value: r.posicion,
                    onChange: (e) => a(`posicion`, e.target.value),
                  }),
                }),
              ],
            }),
            (0, M.jsx)(B, {
              label: `Email`,
              children: (0, M.jsx)(N, {
                placeholder: `Ej: socio@correo.cl`,
                value: r.contacto,
                onChange: (e) => a(`contacto`, e.target.value),
              }),
            }),
            (0, M.jsx)(B, {
              label: `Teléfono`,
              children: (0, M.jsx)(N, {
                placeholder: `Ej: +56 9 1234 5678`,
                value: r.telefono,
                onChange: (e) => a(`telefono`, e.target.value),
              }),
            }),
            (0, M.jsxs)(`div`, {
              className: `grid grid-cols-2 gap-2`,
              children: [
                (0, M.jsx)(B, {
                  label: `Estado pago`,
                  children: (0, M.jsxs)(`select`, {
                    value: r.pago,
                    onChange: (e) => a(`pago`, e.target.value),
                    className: `h-9 w-full rounded-md border bg-transparent px-2 text-sm`,
                    children: [
                      (0, M.jsx)(`option`, {
                        value: `al-dia`,
                        children: `Al día`,
                      }),
                      (0, M.jsx)(`option`, {
                        value: `pendiente`,
                        children: `Pendiente`,
                      }),
                      (0, M.jsx)(`option`, {
                        value: `vencido`,
                        children: `Vencido`,
                      }),
                    ],
                  }),
                }),
                (0, M.jsx)(B, {
                  label: `Asistencia %`,
                  children: (0, M.jsx)(N, {
                    placeholder: `Ej: 80`,
                    value: r.asistenciaPct,
                    onChange: (e) => a(`asistenciaPct`, e.target.value),
                    inputMode: `numeric`,
                  }),
                }),
              ],
            }),
            (0, M.jsx)(B, {
              label: `Observaciones`,
              children: (0, M.jsx)(`textarea`, {
                placeholder: `Ej: Capitán del equipo`,
                value: r.observaciones,
                onChange: (e) => a(`observaciones`, e.target.value),
                rows: 3,
                className: `w-full rounded-md border bg-transparent p-2 text-sm`,
              }),
            }),
          ],
        }),
        (0, M.jsxs)(x, {
          className: `gap-2`,
          children: [
            (0, M.jsx)(S, {
              className: `rounded-xl bg-secondary px-4 py-2 text-sm font-semibold`,
              children: `Cancelar`,
            }),
            (0, M.jsx)(l, {
              disabled: !r.nombre.trim() || !r.categoria.trim(),
              onClick: o,
              className: `rounded-xl  px-4  text-sm font-bold `,
              children: `Guardar`,
            }),
          ],
        }),
      ],
    }),
  });
}
function B({ label: e, children: t }) {
  return (0, M.jsxs)(`label`, {
    className: `block`,
    children: [
      (0, M.jsx)(`span`, {
        className: `mb-1 block text-[10px] font-bold uppercase tracking-wider text-muted-foreground`,
        children: e,
      }),
      t,
    ],
  });
}
export { I as component };
