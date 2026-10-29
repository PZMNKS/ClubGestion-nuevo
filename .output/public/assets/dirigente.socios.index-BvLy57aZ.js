import { c as e, d as t, l as n } from "./useSelector-7GdJWpjS.js";
import { a as r } from "./wallet-DMaAlgjq.js";
import { a as i, f as a, n as o, o as s } from "./index-D8svfn-J.js";
import { t as c } from "./chevron-right-DDnh_dBM.js";
import { n as l, t as u } from "./DirigenteShell-CNQDzD_J.js";
import { t as d } from "./plus-BwTAco2x.js";
import { f, n as p } from "./dirigente-data-DdiM01PQ.js";
import { t as m } from "./toast-LUA8So3v.js";
import { n as h } from "./FlowSheet-Dz3nlcrd.js";
var g = r(`search`, [
    [`path`, { d: `m21 21-4.34-4.34`, key: `14j7rj` }],
    [`circle`, { cx: `11`, cy: `11`, r: `8`, key: `4ej97u` }],
  ]),
  _ = t(n()),
  v = e(),
  y = [
    `Todas`,
    `Primera Adulta`,
    `Femenino Adulto`,
    `Sub-17`,
    `Directiva`,
    `Otros`,
  ],
  b = [`todos`, `al-dia`, `pendiente`, `vencido`];
function x() {
  let e = f(),
    t = o.useSearch(),
    n = o.useNavigate(),
    [r, h] = (0, _.useState)(``),
    [x, C] = (0, _.useState)(`Todas`),
    [w, T] = (0, _.useState)(`todos`),
    [E, D] = (0, _.useState)(!1);
  (0, _.useEffect)(() => {
    t.new && (D(!0), n({ search: {}, replace: !0 }));
  }, [t.new, n]);
  let O = (0, _.useMemo)(
    () =>
      e.filter((e) => {
        if (r && !e.nombre.toLowerCase().includes(r.toLowerCase())) return !1;
        if (x !== `Todas`) {
          if (x === `Otros`) {
            if (
              [
                `Primera Adulta`,
                `Femenino Adulto`,
                `Sub-17`,
                `Directiva`,
              ].includes(e.categoria)
            )
              return !1;
          } else if (e.categoria !== x) return !1;
        }
        return w === `todos` || e.pago === w;
      }),
    [e, r, x, w],
  );
  return (0, v.jsxs)(l, {
    children: [
      (0, v.jsxs)(`div`, {
        className: `flex items-end justify-between`,
        children: [
          (0, v.jsxs)(`div`, {
            children: [
              (0, v.jsx)(`h1`, {
                className: `text-2xl font-extrabold`,
                children: `Socios`,
              }),
              (0, v.jsxs)(`p`, {
                className: `text-sm text-muted-foreground`,
                children: [e.length, ` registrados`],
              }),
            ],
          }),
          (0, v.jsxs)(s, {
            onClick: () => D(!0),
            className: `flex items-center gap-1 px-3 font-bold`,
            children: [(0, v.jsx)(d, { className: `h-4 w-4` }), ` Registrar`],
          }),
        ],
      }),
      (0, v.jsx)(`label`, {
        htmlFor: `socios-search`,
        className: `mt-4 block text-xs font-semibold text-muted-foreground`,
        children: `Buscar socio`,
      }),
      (0, v.jsxs)(`div`, {
        className: `mt-4 flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-[var(--shadow-card)]`,
        children: [
          (0, v.jsx)(g, { className: `h-4 w-4 text-muted-foreground` }),
          (0, v.jsx)(`input`, {
            id: `socios-search`,
            value: r,
            onChange: (e) => h(e.target.value),
            placeholder: `Buscar por nombre...`,
            className: `w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground`,
          }),
        ],
      }),
      (0, v.jsx)(`div`, {
        className: `mt-3 flex gap-2 overflow-x-auto pb-1`,
        children: y.map((e) =>
          (0, v.jsx)(
            s,
            {
              variant: `ghost`,
              onClick: () => C(e),
              className: `shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition ${x === e ? `bg-primary text-primary-foreground` : `bg-secondary text-secondary-foreground`}`,
              children: e,
            },
            e,
          ),
        ),
      }),
      (0, v.jsx)(`div`, {
        className: `mt-2 inline-flex rounded-full bg-secondary p-1`,
        children: b.map((e) =>
          (0, v.jsx)(
            s,
            {
              variant: `ghost`,
              onClick: () => T(e),
              className: `rounded-full px-3 py-1 text-[11px] font-semibold capitalize transition ${w === e ? `bg-card text-foreground shadow-[var(--shadow-card)]` : `text-muted-foreground`}`,
              children: e === `todos` ? `Todos` : e === `al-dia` ? `Al día` : e,
            },
            e,
          ),
        ),
      }),
      (0, v.jsxs)(u, { children: [O.length, ` resultado(s)`] }),
      (0, v.jsxs)(`div`, {
        className: `space-y-2`,
        children: [
          O.map((e) =>
            (0, v.jsxs)(
              a,
              {
                to: `/dirigente/socios/$id`,
                params: { id: e.id },
                className: `flex items-center gap-3 rounded-2xl bg-card p-3 shadow-[var(--shadow-card)]`,
                children: [
                  (0, v.jsx)(`div`, {
                    className: `flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-primary`,
                    children: e.foto,
                  }),
                  (0, v.jsxs)(`div`, {
                    className: `min-w-0 flex-1`,
                    children: [
                      (0, v.jsx)(`p`, {
                        className: `truncate text-sm font-semibold`,
                        children: e.nombre,
                      }),
                      (0, v.jsxs)(`p`, {
                        className: `truncate text-xs text-muted-foreground`,
                        children: [
                          e.categoria,
                          e.numero ? ` · #${e.numero}` : ``,
                          ` · Asist `,
                          e.asistenciaPct,
                          `%`,
                        ],
                      }),
                    ],
                  }),
                  (0, v.jsx)(i, { estado: e.pago }),
                  (0, v.jsx)(c, {
                    className: `h-4 w-4 shrink-0 text-muted-foreground`,
                  }),
                ],
              },
              e.id,
            ),
          ),
          O.length === 0 &&
            (0, v.jsx)(`p`, {
              className: `rounded-2xl bg-secondary p-4 text-center text-sm text-muted-foreground`,
              children: `No hay socios con esos filtros.`,
            }),
        ],
      }),
      E &&
        (0, v.jsx)(S, {
          onClose: () => D(!1),
          onSave: (e) => {
            (p(e), m.success(`Socio registrado`), D(!1));
          },
        }),
    ],
  });
}
function S({ onClose: e, onSave: t }) {
  let [n, r] = (0, _.useState)(``),
    [i, a] = (0, _.useState)(`Primera Adulta`),
    [o, c] = (0, _.useState)(`jugador`),
    [l, u] = (0, _.useState)(``),
    [d, f] = (0, _.useState)(``);
  return (0, v.jsxs)(h, {
    title: `Nuevo socio`,
    onClose: e,
    children: [
      (0, v.jsxs)(`div`, {
        className: `mt-4 space-y-3`,
        children: [
          (0, v.jsx)(C, {
            label: `Nombre completo`,
            children: (0, v.jsx)(`input`, {
              value: n,
              onChange: (e) => r(e.target.value),
              className: `field`,
              placeholder: `Ej: Juan Pérez`,
            }),
          }),
          (0, v.jsx)(C, {
            label: `Categoría`,
            children: (0, v.jsx)(`select`, {
              value: i,
              onChange: (e) => a(e.target.value),
              className: `field`,
              children: [
                `Primera Adulta`,
                `Femenino Adulto`,
                `Sub-17`,
                `Directiva`,
                `Cuerpo Técnico`,
                `Socio colaborador`,
              ].map((e) => (0, v.jsx)(`option`, { children: e }, e)),
            }),
          }),
          (0, v.jsx)(C, {
            label: `Rol`,
            children: (0, v.jsxs)(`select`, {
              value: o,
              onChange: (e) => c(e.target.value),
              className: `field`,
              children: [
                (0, v.jsx)(`option`, { value: `jugador`, children: `Jugador` }),
                (0, v.jsx)(`option`, {
                  value: `cuerpo-tecnico`,
                  children: `Cuerpo técnico`,
                }),
                (0, v.jsx)(`option`, {
                  value: `dirigente`,
                  children: `Dirigente`,
                }),
                (0, v.jsx)(`option`, { value: `socio`, children: `Socio` }),
              ],
            }),
          }),
          (0, v.jsx)(C, {
            label: `Teléfono`,
            children: (0, v.jsx)(`input`, {
              value: l,
              onChange: (e) => u(e.target.value),
              className: `field`,
              placeholder: `+56 9 ...`,
            }),
          }),
          (0, v.jsx)(C, {
            label: `Correo (opcional)`,
            children: (0, v.jsx)(`input`, {
              value: d,
              onChange: (e) => f(e.target.value),
              type: `email`,
              className: `field`,
              placeholder: `Ej: socio@correo.cl`,
            }),
          }),
        ],
      }),
      d &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d) &&
        (0, v.jsx)(`p`, {
          role: `alert`,
          className: `text-xs text-destructive`,
          children: `El correo debe incluir @ y un dominio, por ejemplo socio@correo.cl.`,
        }),
      l &&
        l.replace(/\D/g, ``).length < 9 &&
        (0, v.jsx)(`p`, {
          role: `alert`,
          className: `text-xs text-destructive`,
          children: `Ingresa un teléfono con al menos 9 dígitos o deja el campo vacío.`,
        }),
      (0, v.jsxs)(`div`, {
        className: `flow-actions`,
        children: [
          (0, v.jsx)(s, {
            variant: `secondary`,
            className: `w-full`,
            onClick: e,
            children: `Cancelar`,
          }),
          (0, v.jsx)(s, {
            disabled:
              !n.trim() ||
              (!!d.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d)) ||
              (!!l.trim() && l.replace(/\D/g, ``).length < 9),
            onClick: () =>
              t({
                id: `s${Date.now()}`,
                nombre: n.trim(),
                rol: o,
                categoria: i,
                contacto: d || `—`,
                telefono: l || `—`,
                pago: `al-dia`,
                asistenciaPct: 0,
                desde: `Hoy`,
                foto: n
                  .split(` `)
                  .map((e) => e[0])
                  .slice(0, 2)
                  .join(``)
                  .toUpperCase(),
              }),
            className: `w-full text-sm font-bold disabled:opacity-50`,
            children: `Guardar socio`,
          }),
        ],
      }),
    ],
  });
}
function C({ label: e, children: t }) {
  return (0, v.jsxs)(`label`, {
    className: `block`,
    children: [
      (0, v.jsx)(`span`, {
        className: `mb-1 block text-xs font-semibold text-muted-foreground`,
        children: e,
      }),
      t,
    ],
  });
}
export { x as component };
