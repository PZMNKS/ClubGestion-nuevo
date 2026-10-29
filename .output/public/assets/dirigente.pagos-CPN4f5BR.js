import { c as e, d as t, l as n } from "./useSelector-7GdJWpjS.js";
import { a as r, t as i } from "./wallet-DMaAlgjq.js";
import { o as a } from "./index-D8svfn-J.js";
import { t as o } from "./circle-check-BEBAv1Rw.js";
import { n as s, t as c } from "./DirigenteShell-CNQDzD_J.js";
import { t as l } from "./triangle-alert-CNF4t4fR.js";
import { f as u } from "./dirigente-data-DdiM01PQ.js";
import { a as d, o as f, t as p } from "./prototype-state-Cf-JC4Ew.js";
import { t as m } from "./toast-LUA8So3v.js";
import { n as h, t as g } from "./FlowSheet-Dz3nlcrd.js";
var _ = r(`trending-up`, [
    [`path`, { d: `M16 7h6v6`, key: `box55l` }],
    [`path`, { d: `m22 7-8.5 8.5-5-5L2 17`, key: `1t1m79` }],
  ]),
  v = t(n()),
  y = e(),
  b = [`todos`, `pendiente`, `vencido`, `pagado`];
function x() {
  let { pagosClub: e } = f(),
    t = u(),
    [n, r] = (0, v.useState)(null),
    [x, T] = (0, v.useState)(`todos`),
    E = (0, v.useMemo)(
      () => (x === `todos` ? e : e.filter((e) => e.estado === x)),
      [e, x],
    ),
    D = e.filter((e) => e.estado === `pagado`).reduce((e, t) => e + t.monto, 0),
    O = e.filter((e) => e.estado !== `pagado`).reduce((e, t) => e + t.monto, 0),
    k = new Set(e.filter((e) => e.estado === `vencido`).map((e) => e.socioId))
      .size,
    A = (e) => {
      let t = p().pagosClub;
      (d({
        pagosClub: t.map((t) =>
          t.id === e ? { ...t, estado: `pagado`, pagadoEl: w() } : t,
        ),
      }),
        r(null),
        m.success(`Pago registrado en esta sesión`, {
          action: { label: `Deshacer`, onClick: () => d({ pagosClub: t }) },
        }));
    };
  return (0, y.jsxs)(s, {
    children: [
      (0, y.jsx)(`h1`, {
        className: `text-2xl font-extrabold`,
        children: `Pagos`,
      }),
      (0, y.jsx)(`p`, {
        className: `text-sm text-muted-foreground`,
        children: `Control de cuotas y aportes del club.`,
      }),
      (0, y.jsxs)(`div`, {
        className: `mt-4 grid grid-cols-1 gap-2 min-[380px]:grid-cols-3`,
        children: [
          (0, y.jsx)(S, {
            label: `Ingresos registrados`,
            value: C(D),
            tone: `ok`,
            icon: (0, y.jsx)(_, { className: `h-4 w-4` }),
          }),
          (0, y.jsx)(S, {
            label: `Por cobrar`,
            value: C(O),
            tone: `warn`,
            icon: (0, y.jsx)(i, { className: `h-4 w-4` }),
          }),
          (0, y.jsx)(S, {
            label: `Morosos`,
            value: String(k),
            tone: k ? `bad` : `default`,
            icon: (0, y.jsx)(l, { className: `h-4 w-4` }),
          }),
        ],
      }),
      (0, y.jsx)(`div`, {
        className: `mt-4 inline-flex rounded-full bg-secondary p-1`,
        children: b.map((e) =>
          (0, y.jsx)(
            a,
            {
              variant: `ghost`,
              onClick: () => T(e),
              className: `rounded-full px-3 py-1.5 text-xs font-semibold capitalize transition ${x === e ? `bg-card text-foreground shadow-[var(--shadow-card)]` : `text-muted-foreground`}`,
              children: e,
            },
            e,
          ),
        ),
      }),
      (0, y.jsxs)(c, { children: [E.length, ` pagos`] }),
      (0, y.jsx)(`div`, {
        className: `space-y-2`,
        children: E.map((e) =>
          (0, y.jsxs)(
            `div`,
            {
              className: `rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]`,
              children: [
                (0, y.jsxs)(`div`, {
                  className: `flex items-start gap-3`,
                  children: [
                    (0, y.jsx)(`div`, {
                      className: `flex h-11 w-11 items-center justify-center rounded-xl ${e.estado === `pagado` ? `bg-success-soft text-success` : e.estado === `vencido` ? `bg-destructive-soft text-destructive` : `bg-warning-soft text-warning-foreground`}`,
                      children:
                        e.estado === `pagado`
                          ? (0, y.jsx)(o, { className: `h-5 w-5` })
                          : (0, y.jsx)(i, { className: `h-5 w-5` }),
                    }),
                    (0, y.jsxs)(`div`, {
                      className: `min-w-0 flex-1`,
                      children: [
                        (0, y.jsx)(`p`, {
                          className: `break-words text-sm font-semibold`,
                          children: e.socio,
                        }),
                        (0, y.jsxs)(`p`, {
                          className: `mt-0.5 break-words text-xs text-muted-foreground`,
                          children: [
                            e.concepto,
                            ` ·`,
                            ` `,
                            e.estado === `pagado`
                              ? `Pagado ${e.pagadoEl}`
                              : `Vence ${e.vencimiento}`,
                          ],
                        }),
                      ],
                    }),
                    (0, y.jsx)(`p`, {
                      className: `shrink-0 text-right text-sm font-bold`,
                      children: C(e.monto),
                    }),
                  ],
                }),
                e.estado !== `pagado` &&
                  (0, y.jsxs)(`div`, {
                    className: `mt-3 grid grid-cols-[minmax(0,1fr)_auto] gap-2`,
                    children: [
                      (0, y.jsx)(a, {
                        onClick: () => r(e),
                        className: `w-full whitespace-normal px-3 font-bold`,
                        children: `Registrar pago`,
                      }),
                      (0, y.jsx)(a, {
                        variant: `secondary`,
                        size: `icon`,
                        title: `Preparar recordatorio por WhatsApp`,
                        "aria-label": `Recordar pago a ${e.socio}`,
                        onClick: () => {
                          let n = t
                            .find((t) => t.id === e.socioId)
                            ?.telefono.replace(/\D/g, ``);
                          n
                            ? window.open(
                                `https://wa.me/${n}?text=${encodeURIComponent(`Hola ${e.socio}, tienes pendiente ${e.concepto} por ${C(e.monto)}. Gracias.`)}`,
                                `_blank`,
                                `noopener,noreferrer`,
                              )
                            : m.error(
                                `Agrega un teléfono en el perfil del socio.`,
                              );
                        },
                        children: (0, y.jsx)(i, { className: `h-4 w-4` }),
                      }),
                    ],
                  }),
              ],
            },
            e.id,
          ),
        ),
      }),
      n &&
        (0, y.jsxs)(h, {
          title: `Registrar pago`,
          description: `Revisa el pago antes de guardarlo`,
          onClose: () => r(null),
          children: [
            (0, y.jsx)(`p`, { className: `font-bold`, children: n.socio }),
            (0, y.jsxs)(`p`, { children: [n.concepto, ` · `, C(n.monto)] }),
            (0, y.jsx)(`p`, {
              className: `text-sm text-muted-foreground`,
              children: `Confirma solo si el club ya recibió este pago. Este registro es de prueba y permanece en esta sesión.`,
            }),
            (0, y.jsx)(g, {
              onCancel: () => r(null),
              onSave: () => A(n.id),
              label: `Confirmar pago`,
            }),
          ],
        }),
    ],
  });
}
function S({ label: e, value: t, tone: n, icon: r }) {
  let i = {
    ok: `text-success`,
    warn: `text-warning-foreground`,
    bad: `text-destructive`,
    default: `text-foreground`,
  }[n];
  return (0, y.jsxs)(`div`, {
    className: `rounded-2xl bg-card p-3 shadow-[var(--shadow-card)]`,
    children: [
      (0, y.jsxs)(`div`, {
        className: `flex items-start gap-1 text-[10px] font-semibold uppercase leading-snug text-muted-foreground`,
        children: [r, e],
      }),
      (0, y.jsx)(`p`, {
        className: `mt-1 break-words text-base font-extrabold leading-tight ${i}`,
        children: t,
      }),
    ],
  });
}
function C(e) {
  return `$${e.toLocaleString(`es-CL`)}`;
}
function w() {
  let e = new Date();
  return `${String(e.getDate()).padStart(2, `0`)}-${String(e.getMonth() + 1).padStart(2, `0`)}-${e.getFullYear()}`;
}
export { x as component };
