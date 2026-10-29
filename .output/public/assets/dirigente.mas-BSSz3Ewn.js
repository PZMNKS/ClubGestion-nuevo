import { c as e, d as t, l as n } from "./useSelector-7GdJWpjS.js";
import { a as r } from "./wallet-DMaAlgjq.js";
import { f as i, o as a, r as o } from "./index-D8svfn-J.js";
import { t as s } from "./circle-check-BEBAv1Rw.js";
import { t as c } from "./clock-CYatqPbE.js";
import { t as l } from "./file-text-BIXubBAc.js";
import { n as u, t as d } from "./DirigenteShell-CNQDzD_J.js";
import { t as f } from "./triangle-alert-CNF4t4fR.js";
import { t as p } from "./upload-FmX4e9Mw.js";
import { t as m } from "./x-DCgjeFcw.js";
import { a as h, o as g, t as _ } from "./prototype-state-Cf-JC4Ew.js";
import { t as v } from "./toast-LUA8So3v.js";
import { n as y, t as b } from "./FlowSheet-Dz3nlcrd.js";
var x = r(`sparkles`, [
    [
      `path`,
      {
        d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,
        key: `1s2grr`,
      },
    ],
    [`path`, { d: `M20 2v4`, key: `1rf3ol` }],
    [`path`, { d: `M22 4h-4`, key: `gwowj6` }],
    [`circle`, { cx: `4`, cy: `20`, r: `2`, key: `6kqj1y` }],
  ]),
  S = t(n()),
  C = e(),
  w = [`Resumen`, `Documentos`];
function T() {
  let e = o.useSearch(),
    t = o.useNavigate(),
    n = e.tab === `documentos` ? `Documentos` : `Resumen`,
    [r, i] = (0, S.useState)(n);
  return (
    (0, S.useEffect)(() => {
      e.tab === `comunicacion` || e.tab === `avisos`
        ? t({
            to: `/dirigente/eventos`,
            search: { tab: `avisos`, ...(e.new ? { new: 1 } : {}) },
            replace: !0,
          })
        : (e.tab === `documentos` && i(`Documentos`),
          (e.tab || e.new) && t({ search: {}, replace: !0 }));
    }, [e.tab, e.new, t]),
    (0, C.jsxs)(u, {
      children: [
        (0, C.jsx)(`h1`, {
          className: `text-2xl font-extrabold`,
          children: `Mi Club`,
        }),
        (0, C.jsx)(`p`, {
          className: `text-sm text-muted-foreground`,
          children: `Administración financiera y documentación legal.`,
        }),
        (0, C.jsx)(`div`, {
          className: `mt-4 flex gap-2 overflow-x-auto pb-1`,
          children: w.map((e) =>
            (0, C.jsx)(
              a,
              {
                variant: `ghost`,
                "aria-pressed": r === e,
                onClick: () => i(e),
                className: `shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold transition ${r === e ? `bg-primary text-primary-foreground` : `bg-secondary text-secondary-foreground`}`,
                children: e,
              },
              e,
            ),
          ),
        }),
        r === `Resumen` && (0, C.jsx)(k, {}),
        r === `Documentos` && (0, C.jsx)(E, {}),
      ],
    })
  );
}
function E() {
  let { documentos: e } = g(),
    t = (e) => h({ documentos: e(_().documentos) }),
    [n, r] = (0, S.useState)(!1),
    [i, o] = (0, S.useState)(!1);
  function s(e, n, r) {
    let i = e.estado;
    (t((t) => t.map((t) => (t.id === e.id ? { ...t, estado: n } : t))),
      v.success(`"${e.nombre}" ${r}`, {
        action: {
          label: `Deshacer`,
          onClick: () => {
            (t((t) => t.map((t) => (t.id === e.id ? { ...t, estado: i } : t))),
              v.info(`Cambio deshecho`));
          },
        },
      }));
  }
  let c = e.filter((e) => e.estado === `vigente`).length,
    l = e.filter((e) => e.estado !== `vigente`),
    u = Math.round((c / e.length) * 100);
  return (0, C.jsxs)(C.Fragment, {
    children: [
      (0, C.jsxs)(`section`, {
        className: `mt-5 rounded-3xl bg-primary-soft p-5`,
        children: [
          (0, C.jsx)(`p`, {
            className: `text-xs font-semibold uppercase tracking-wider text-primary`,
            children: `Estado del club`,
          }),
          (0, C.jsxs)(`p`, {
            className: `mt-1 text-2xl font-extrabold`,
            children: [u, `% al día`],
          }),
          (0, C.jsxs)(`p`, {
            className: `text-xs text-muted-foreground`,
            children: [c, ` de `, e.length, ` documentos vigentes`],
          }),
          (0, C.jsx)(`div`, {
            className: `mt-3 h-2 overflow-hidden rounded-full bg-card/70`,
            children: (0, C.jsx)(`div`, {
              className: `h-full rounded-full bg-primary`,
              style: { width: `${u}%` },
            }),
          }),
          (0, C.jsxs)(a, {
            variant: `ghost`,
            onClick: () => o(!0),
            className: `mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-card py-2.5 text-sm font-bold text-primary shadow-[var(--shadow-card)]`,
            children: [
              (0, C.jsx)(x, { className: `h-4 w-4` }),
              ` Guía de documentos`,
            ],
          }),
        ],
      }),
      (0, C.jsxs)(`div`, {
        className: `mt-4 flex items-center justify-between`,
        children: [
          (0, C.jsxs)(`p`, {
            className: `text-sm font-semibold text-muted-foreground`,
            children: [l.length, ` requieren atención`],
          }),
          (0, C.jsxs)(a, {
            onClick: () => r(!0),
            className: `flex items-center gap-1 px-3 font-bold`,
            children: [(0, C.jsx)(p, { className: `h-3.5 w-3.5` }), ` Subir`],
          }),
        ],
      }),
      (0, C.jsx)(d, { children: `Por revisar` }),
      (0, C.jsx)(`div`, {
        className: `space-y-2`,
        children: l.map((e) =>
          (0, C.jsx)(
            D,
            { d: e, onMark: () => s(e, `vigente`, `marcado al día`) },
            e.id,
          ),
        ),
      }),
      (0, C.jsx)(d, { children: `Vigentes` }),
      (0, C.jsx)(`div`, {
        className: `space-y-2`,
        children: e
          .filter((e) => e.estado === `vigente`)
          .map((e) =>
            (0, C.jsx)(
              D,
              {
                d: e,
                onUnmark: () => s(e, `pendiente`, `marcado como pendiente`),
              },
              e.id,
            ),
          ),
      }),
      n && (0, C.jsx)(A, { onClose: () => r(!1) }),
      i && (0, C.jsx)(O, { onClose: () => o(!1) }),
    ],
  });
}
function D({ d: e, onMark: t, onUnmark: n }) {
  let r = {
    vigente: {
      cls: `bg-success-soft text-success`,
      label: `Vigente`,
      icon: (0, C.jsx)(s, { className: `h-4 w-4` }),
    },
    "por-vencer": {
      cls: `bg-warning-soft text-warning-foreground`,
      label: `Por vencer`,
      icon: (0, C.jsx)(c, { className: `h-4 w-4` }),
    },
    vencido: {
      cls: `bg-destructive-soft text-destructive`,
      label: `Vencido`,
      icon: (0, C.jsx)(f, { className: `h-4 w-4` }),
    },
    pendiente: {
      cls: `bg-secondary text-secondary-foreground`,
      label: `Pendiente`,
      icon: (0, C.jsx)(l, { className: `h-4 w-4` }),
    },
  }[e.estado];
  return (0, C.jsxs)(`div`, {
    className: `flex items-center gap-3 rounded-2xl bg-card p-3 shadow-[var(--shadow-card)]`,
    children: [
      (0, C.jsx)(`div`, {
        className: `flex h-10 w-10 items-center justify-center rounded-xl ${r.cls}`,
        children: r.icon,
      }),
      (0, C.jsxs)(`div`, {
        className: `min-w-0 flex-1`,
        children: [
          (0, C.jsx)(`p`, {
            className: `text-sm font-semibold leading-snug`,
            children: e.nombre,
          }),
          (0, C.jsx)(`p`, {
            className: `text-xs text-muted-foreground`,
            children: e.vencimiento
              ? `Vence ${e.vencimiento}`
              : e.fechaSubida
                ? `Subido ${e.fechaSubida}`
                : `Sin subir`,
          }),
        ],
      }),
      (0, C.jsxs)(`div`, {
        className: `flex flex-col items-end gap-1`,
        children: [
          (0, C.jsx)(`span`, {
            className: `rounded-full px-2 py-0.5 text-[10px] font-bold ${r.cls}`,
            children: r.label,
          }),
          (0, C.jsx)(a, {
            variant: `ghost`,
            size: `icon`,
            "aria-label": `Abrir ${e.nombre}`,
            title: `Abrir documento`,
            onClick: () => {
              let t = _().files[e.id];
              if (!t) {
                v.info(
                  `Este documento de ejemplo no tiene un archivo adjunto. Sube uno para consultarlo.`,
                );
                return;
              }
              let n = URL.createObjectURL(t);
              (window.open(n, `_blank`, `noopener,noreferrer`),
                setTimeout(() => URL.revokeObjectURL(n), 6e4));
            },
            children: (0, C.jsx)(l, { className: `h-4 w-4` }),
          }),
          t &&
            e.estado !== `vigente` &&
            (0, C.jsx)(a, {
              variant: `ghost`,
              onClick: t,
              className: `text-[10px] font-bold text-primary`,
              children: `Marcar al día`,
            }),
          n &&
            e.estado === `vigente` &&
            (0, C.jsx)(a, {
              variant: `ghost`,
              onClick: n,
              className: `text-[10px] font-bold text-warning-foreground`,
              children: `Marcar pendiente`,
            }),
        ],
      }),
    ],
  });
}
function O({ onClose: e }) {
  let [t, n] = (0, S.useState)(``);
  return (0, C.jsx)(`div`, {
    className: `fixed inset-0 z-50 flex items-end bg-foreground/40`,
    onClick: e,
    children: (0, C.jsxs)(`div`, {
      onClick: (e) => e.stopPropagation(),
      className: `mx-auto w-full max-w-[480px] rounded-t-3xl bg-card p-5 pb-8`,
      children: [
        (0, C.jsx)(`div`, {
          className: `mx-auto mb-3 h-1.5 w-12 rounded-full bg-border`,
        }),
        (0, C.jsxs)(`div`, {
          className: `flex items-center justify-between`,
          children: [
            (0, C.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, C.jsx)(`span`, {
                  className: `flex h-9 w-9 items-center justify-center rounded-xl bg-primary-soft text-primary`,
                  children: (0, C.jsx)(x, { className: `h-5 w-5` }),
                }),
                (0, C.jsxs)(`div`, {
                  children: [
                    (0, C.jsx)(`h2`, {
                      className: `text-base font-extrabold`,
                      children: `Guía de documentos`,
                    }),
                    (0, C.jsx)(`p`, {
                      className: `text-[11px] text-muted-foreground`,
                      children: `Guía simple sobre formalización`,
                    }),
                  ],
                }),
              ],
            }),
            (0, C.jsx)(a, {
              variant: `ghost`,
              onClick: e,
              "aria-label": `Cerrar`,
              children: (0, C.jsx)(m, { className: `h-5 w-5` }),
            }),
          ],
        }),
        (0, C.jsx)(`div`, {
          className: `mt-4 space-y-2`,
          children: [
            `¿Cómo renuevo la directiva?`,
            `¿Qué documentos pide la municipalidad?`,
            `¿Cómo redacto un acta?`,
          ].map((e) =>
            (0, C.jsx)(
              a,
              {
                variant: `ghost`,
                onClick: () => n(e),
                className: `w-full rounded-2xl bg-secondary p-3 text-left text-sm font-medium`,
                children: e,
              },
              e,
            ),
          ),
        }),
        (0, C.jsx)(`div`, {
          className: `mt-4 flex items-center gap-2 rounded-full bg-secondary px-4 py-2`,
          children: (0, C.jsx)(`input`, {
            value: t,
            onChange: (e) => n(e.target.value),
            "aria-label": `Consultar guía`,
            placeholder: `Ej: ¿Cómo renuevo la directiva?`,
            className: `w-full bg-transparent text-sm outline-none`,
          }),
        }),
        t &&
          (0, C.jsxs)(`div`, {
            className: `mt-4 rounded-2xl bg-primary-soft p-4 text-sm text-foreground`,
            children: [
              (0, C.jsx)(`p`, {
                className: `font-semibold text-primary`,
                children: `Orientación general`,
              }),
              (0, C.jsxs)(`p`, {
                className: `mt-1 text-muted-foreground`,
                children: [
                  `Para "`,
                  t,
                  `" te recomendamos revisar el módulo de Documentos y mantener el acta de directiva vigente. Si necesitas ayuda detallada, contacta a tu municipalidad o consulta el Registro Civil de Organizaciones Comunitarias.`,
                ],
              }),
            ],
          }),
      ],
    }),
  });
}
function k() {
  let { pagosClub: e, documentos: t } = g(),
    n = e.filter((e) => e.estado === `pagado`).reduce((e, t) => e + t.monto, 0),
    r = e.filter((e) => e.estado !== `pagado`).reduce((e, t) => e + t.monto, 0);
  return (0, C.jsxs)(`div`, {
    className: `mt-5`,
    children: [
      (0, C.jsx)(`h2`, {
        className: `text-lg font-bold`,
        children: `Estado financiero global`,
      }),
      (0, C.jsxs)(`div`, {
        className: `mt-3 grid grid-cols-2 gap-3`,
        children: [
          (0, C.jsxs)(`div`, {
            className: `rounded-2xl bg-success-soft p-4 text-success`,
            children: [
              (0, C.jsx)(`p`, {
                className: `text-xs font-semibold`,
                children: `Ingresos registrados`,
              }),
              (0, C.jsxs)(`p`, {
                className: `mt-1 text-xl font-bold`,
                children: [`$`, n.toLocaleString(`es-CL`)],
              }),
            ],
          }),
          (0, C.jsxs)(`div`, {
            className: `rounded-2xl bg-destructive-soft p-4 text-destructive`,
            children: [
              (0, C.jsx)(`p`, {
                className: `text-xs font-semibold`,
                children: `Por cobrar`,
              }),
              (0, C.jsxs)(`p`, {
                className: `mt-1 text-xl font-bold`,
                children: [`$`, r.toLocaleString(`es-CL`)],
              }),
            ],
          }),
        ],
      }),
      (0, C.jsx)(a, {
        asChild: !0,
        className: `mt-4 w-full`,
        children: (0, C.jsx)(i, {
          to: `/dirigente/pagos`,
          children: `Gestionar pagos`,
        }),
      }),
      (0, C.jsx)(d, { children: `Documentación legal` }),
      (0, C.jsxs)(`p`, {
        className: `text-sm text-muted-foreground`,
        children: [
          t.filter((e) => e.estado === `vigente`).length,
          ` de`,
          ` `,
          t.length,
          ` documentos vigentes`,
        ],
      }),
      (0, C.jsx)(a, {
        asChild: !0,
        variant: `secondary`,
        className: `mt-3 w-full`,
        children: (0, C.jsx)(i, {
          to: `/dirigente/mas`,
          search: { tab: `documentos` },
          children: `Ver documentos y estatutos`,
        }),
      }),
      (0, C.jsx)(d, { children: `Equipo de gestión` }),
      (0, C.jsx)(`p`, {
        className: `text-sm text-muted-foreground`,
        children: `Dirigentes y cuerpo técnico registrados en el club.`,
      }),
      (0, C.jsx)(a, {
        asChild: !0,
        variant: `secondary`,
        className: `mt-3 w-full`,
        children: (0, C.jsx)(i, {
          to: `/dirigente/socios`,
          children: `Ver socios y dirigentes`,
        }),
      }),
      (0, C.jsx)(`p`, {
        className: `mt-5 text-xs text-warning-foreground`,
        children: `Prototipo de gestión: los permisos de acceso y el envío al club aún no están habilitados.`,
      }),
    ],
  });
}
function A({ onClose: e }) {
  let [t, n] = (0, S.useState)(``),
    [r, i] = (0, S.useState)(null),
    [a, o] = (0, S.useState)(``),
    [s, c] = (0, S.useState)(`estatuto`);
  return (0, C.jsxs)(y, {
    title: `Subir documento legal`,
    description: `Registro de documento · Prototipo de esta sesión`,
    onClose: e,
    children: [
      (0, C.jsxs)(`label`, {
        className: `block text-sm font-semibold`,
        children: [
          `Nombre del documento`,
          (0, C.jsx)(`input`, {
            className: `field mt-1`,
            value: t,
            onChange: (e) => n(e.target.value),
            placeholder: `Ej: Estatutos del club 2026`,
          }),
        ],
      }),
      (0, C.jsxs)(`label`, {
        className: `block text-sm font-semibold`,
        children: [
          `Tipo`,
          (0, C.jsxs)(`select`, {
            className: `field mt-1`,
            value: s,
            onChange: (e) => c(e.target.value),
            children: [
              (0, C.jsx)(`option`, {
                value: `estatuto`,
                children: `Estatutos`,
              }),
              (0, C.jsx)(`option`, { value: `acta`, children: `Acta` }),
              (0, C.jsx)(`option`, {
                value: `certificado`,
                children: `Certificado`,
              }),
              (0, C.jsx)(`option`, {
                value: `directiva`,
                children: `Directiva`,
              }),
              (0, C.jsx)(`option`, { value: `otro`, children: `Otro` }),
            ],
          }),
        ],
      }),
      (0, C.jsxs)(`div`, {
        children: [
          (0, C.jsx)(`p`, {
            className: `text-sm font-semibold`,
            children: `Archivo PDF o imagen`,
          }),
          (0, C.jsxs)(`label`, {
            className: `mt-2 flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border border-primary bg-primary-soft px-4 py-3 text-sm font-bold text-primary`,
            children: [
              (0, C.jsx)(p, { className: `h-4 w-4` }),
              r ? `Cambiar archivo` : `Seleccionar PDF o imagen`,
              (0, C.jsx)(`input`, {
                className: `sr-only`,
                type: `file`,
                accept: `application/pdf,image/jpeg,image/png`,
                onChange: (e) => {
                  let t = e.target.files?.[0];
                  t &&
                  (![`application/pdf`, `image/jpeg`, `image/png`].includes(
                    t.type,
                  ) ||
                    t.size > 10485760)
                    ? (i(null), o(`Elige un PDF, JPG o PNG de hasta 10 MB.`))
                    : (i(t ?? null), o(``));
                },
              }),
            ],
          }),
          r &&
            (0, C.jsx)(`p`, {
              className: `mt-2 break-all rounded-lg bg-secondary p-2 text-xs font-medium`,
              children: r.name,
            }),
        ],
      }),
      a &&
        (0, C.jsx)(`p`, {
          role: `alert`,
          className: `text-sm text-destructive`,
          children: a,
        }),
      (0, C.jsx)(`p`, {
        className: `text-xs text-muted-foreground`,
        children: `El archivo quedará disponible en esta sesión, sin subirse a un servidor.`,
      }),
      (0, C.jsx)(b, {
        onCancel: e,
        disabled: !t.trim() || !r,
        label: `Subir documento`,
        onSave: () => {
          if (!r) return;
          let n = `doc${Date.now()}`;
          (h({
            documentos: [
              {
                id: n,
                nombre: t.trim(),
                tipo: s,
                estado: `vigente`,
                fechaSubida: new Date().toISOString().slice(0, 10),
                subidoPor: `Tú`,
              },
              ..._().documentos,
            ],
            files: { ..._().files, [n]: r },
          }),
            v.success(`Documento registrado en esta sesión`),
            e());
        },
      }),
    ],
  });
}
export { T as component };
