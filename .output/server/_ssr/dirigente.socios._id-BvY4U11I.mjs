import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import {
  b as Link,
  q as notFound,
} from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import {
  M as Calendar,
  N as ArrowLeft,
  O as CircleX,
  S as HeartPulse,
  h as Phone,
  k as CircleCheck,
  n as Wallet,
  y as Mail,
} from "../_libs/lucide-react.mjs";
import {
  d as useAsistencias,
  f as useSocios,
  u as updateSocio,
} from "./dirigente-data-CBIkTrPW.mjs";
import { o as usePrototype } from "./prototype-state-BkJ0Cljr.mjs";
import {
  c as cn,
  n as Route,
  o as PagoBadge,
  s as Button,
} from "./router-CuTlj-1m.mjs";
import { t as toast$1 } from "./toast-kixGVRDj.mjs";
import {
  a as DialogFooter,
  n as DialogClose,
  o as DialogHeader,
  r as DialogContent,
  s as DialogTitle,
  t as Dialog,
} from "./dialog-B4BrQgSK.mjs";
import {
  n as DirigenteShell,
  t as DSectionTitle,
} from "./DirigenteShell-KjK-l_0e.mjs";
// node_modules/.nitro/vite/services/ssr/assets/dirigente.socios._id-BvY4U11I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
    type,
    className: cn(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      className,
    ),
    ref,
    ...props,
  });
});
Input.displayName = "Input";
var MESES = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];
function mesDe(fechaDDMMYYYY) {
  const [, mm, yyyy] = fechaDDMMYYYY.split("-");
  const idx = parseInt(mm, 10) - 1;
  if (isNaN(idx) || !MESES[idx]) return fechaDDMMYYYY;
  return `${MESES[idx]} ${yyyy}`;
}
function SocioDetail() {
  const { id } = Route.useParams();
  const socios = useSocios();
  const { pagosClub } = usePrototype();
  const sesiones = useAsistencias();
  const s = socios.find((x) => x.id === id);
  if (!s) throw notFound();
  const pagosSocio = pagosClub.filter((p) => p.socioId === s.id);
  const asistenciasSocio = (0, import_react.useMemo)(
    () =>
      sesiones
        .filter((a) => a.registros[s.id] !== void 0)
        .map((a) => ({
          ...a,
          presente: a.registros[s.id] === "presente",
          lesionado: a.registros[s.id] === "lesionado",
          sinRespuesta: a.registros[s.id] === "sin-respuesta",
        })),
    [sesiones, s.id],
  );
  const mesesPagos = (0, import_react.useMemo)(
    () => Array.from(new Set(pagosSocio.map((p) => mesDe(p.vencimiento)))),
    [pagosSocio],
  );
  const mesesAsist = (0, import_react.useMemo)(
    () => Array.from(new Set(asistenciasSocio.map((a) => mesDe(a.fecha)))),
    [asistenciasSocio],
  );
  const eventos = (0, import_react.useMemo)(
    () => Array.from(new Set(asistenciasSocio.map((a) => a.titulo))),
    [asistenciasSocio],
  );
  const [filtroMesPago, setFiltroMesPago] = (0, import_react.useState)("Todos");
  const [filtroMesAsist, setFiltroMesAsist] = (0, import_react.useState)(
    "Todos",
  );
  const [filtroEvento, setFiltroEvento] = (0, import_react.useState)("Todos");
  const [editOpen, setEditOpen] = (0, import_react.useState)(false);
  const pagosFiltrados = pagosSocio.filter(
    (p) => filtroMesPago === "Todos" || mesDe(p.vencimiento) === filtroMesPago,
  );
  const asistFiltradas = asistenciasSocio.filter(
    (a) =>
      (filtroMesAsist === "Todos" || mesDe(a.fecha) === filtroMesAsist) &&
      (filtroEvento === "Todos" || a.titulo === filtroEvento),
  );
  const presentes = asistFiltradas.filter((a) => a.presente).length;
  const lesionados = asistFiltradas.filter((a) => a.lesionado).length;
  const ausentes = asistFiltradas.length - presentes - lesionados;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DirigenteShell, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
        to: "/dirigente/socios",
        className:
          "inline-flex items-center gap-1 text-sm font-semibold text-primary",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
            className: "h-4 w-4",
          }),
          " Socios",
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
        className: "mt-3 rounded-3xl bg-card p-5 shadow-[var(--shadow-card)]",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-center gap-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className:
                  "flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft text-2xl font-extrabold text-primary",
                children: s.foto,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "min-w-0 flex-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                    className: "truncate text-xl font-extrabold",
                    children: s.nombre,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                    className: "text-sm text-muted-foreground",
                    children: [s.categoria, s.numero ? ` · #${s.numero}` : ""],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "text-xs capitalize text-primary",
                    children: s.rol.replace("-", " "),
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "mt-4 grid grid-cols-3 gap-2 text-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
                label: "Pago",
                value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PagoBadge, {
                  estado: s.pago,
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
                label: "Asistencia",
                value: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                  className: "text-base font-bold",
                  children: [s.asistenciaPct, "%"],
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
                label: "Desde",
                value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "text-xs font-semibold",
                  children: s.desde,
                }),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "mt-4 space-y-1 text-sm",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                className: "flex items-center gap-2 text-muted-foreground",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
                    className: "h-4 w-4",
                  }),
                  " ",
                  s.telefono,
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                className: "flex items-center gap-2 text-muted-foreground",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
                    className: "h-4 w-4",
                  }),
                  " ",
                  s.contacto,
                ],
              }),
              s.posicion &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                  className: "text-muted-foreground",
                  children: [
                    "Posición: ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "text-foreground",
                      children: s.posicion,
                    }),
                  ],
                }),
            ],
          }),
          s.observaciones &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className:
                "mt-4 rounded-xl bg-warning-soft p-3 text-sm text-warning-foreground",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "font-bold",
                  children: "Observación: ",
                }),
                s.observaciones,
              ],
            }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mt-4 grid grid-cols-2 gap-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
            onClick: () => setEditOpen(true),
            className: "font-bold",
            children: "Editar datos",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
            asChild: true,
            variant: "secondary",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
              to: "/dirigente/eventos",
              search: {
                tab: "avisos",
                new: 1,
              },
              children: "Publicar aviso",
            }),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditSocioDialog, {
        open: editOpen,
        onOpenChange: setEditOpen,
        socio: s,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DSectionTitle, {
        children: "Historial de pagos",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
        label: "Mes",
        options: ["Todos", ...mesesPagos],
        value: filtroMesPago,
        onChange: setFiltroMesPago,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mt-2 mb-3 flex gap-2 text-[11px] font-semibold",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
            className: "rounded-full bg-secondary px-2 py-1",
            children: [pagosFiltrados.length, " pago(s)"],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
            className: "rounded-full bg-success-soft px-2 py-1 text-success",
            children: [
              pagosFiltrados.filter((p) => p.estado === "pagado").length,
              " pagados",
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
            className:
              "rounded-full bg-destructive/10 px-2 py-1 text-destructive",
            children: [
              pagosFiltrados.filter((p) => p.estado !== "pagado").length,
              " ",
              "pendientes",
            ],
          }),
        ],
      }),
      pagosFiltrados.length === 0
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className:
              "rounded-2xl bg-secondary p-4 text-center text-sm text-muted-foreground",
            children: "Sin pagos para ese filtro.",
          })
        : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "space-y-2",
            children: pagosFiltrados.map((p) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "div",
                {
                  className:
                    "flex items-center gap-3 rounded-2xl bg-card p-3 shadow-[var(--shadow-card)]",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className:
                        "flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        Wallet,
                        { className: "h-5 w-5" },
                      ),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "min-w-0 flex-1",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "truncate text-sm font-semibold",
                          children: p.concepto,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                          className: "text-xs text-muted-foreground",
                          children: [
                            "Vence ",
                            p.vencimiento,
                            p.pagadoEl ? ` · Pagado ${p.pagadoEl}` : "",
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "text-right",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                          className: "text-sm font-bold",
                          children: ["$", p.monto.toLocaleString("es-CL")],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: `text-[10px] font-bold uppercase ${p.estado === "pagado" ? "text-success" : p.estado === "vencido" ? "text-destructive" : "text-warning-foreground"}`,
                          children: p.estado,
                        }),
                      ],
                    }),
                  ],
                },
                p.id,
              ),
            ),
          }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DSectionTitle, {
        children: "Historial de asistencia",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
        label: "Mes",
        options: ["Todos", ...mesesAsist],
        value: filtroMesAsist,
        onChange: setFiltroMesAsist,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "mt-2",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
          label: "Evento",
          options: ["Todos", ...eventos],
          value: filtroEvento,
          onChange: setFiltroEvento,
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mt-2 mb-3 flex flex-wrap gap-2 text-[11px] font-semibold",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
            className: "rounded-full bg-secondary px-2 py-1",
            children: [asistFiltradas.length, " sesión(es)"],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
            className: "rounded-full bg-success-soft px-2 py-1 text-success",
            children: [presentes, " presente(s)"],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
            className:
              "rounded-full bg-destructive/10 px-2 py-1 text-destructive",
            children: [ausentes, " ausente(s)"],
          }),
          lesionados > 0 &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
              className: "rounded-full bg-orange-100 px-2 py-1 text-orange-800",
              children: [lesionados, " lesionado(s)"],
            }),
        ],
      }),
      asistFiltradas.length === 0
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className:
              "rounded-2xl bg-secondary p-4 text-center text-sm text-muted-foreground",
            children: "Sin asistencias para ese filtro.",
          })
        : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "space-y-2",
            children: asistFiltradas.map((a) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "div",
                {
                  className:
                    "flex items-center gap-3 rounded-2xl bg-card p-3 shadow-[var(--shadow-card)]",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: `flex h-10 w-10 items-center justify-center rounded-xl ${a.presente ? "bg-success-soft text-success" : a.lesionado ? "bg-orange-100 text-orange-800" : "bg-destructive/10 text-destructive"}`,
                      children: a.presente
                        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            CircleCheck,
                            { className: "h-5 w-5" },
                          )
                        : a.lesionado
                          ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              HeartPulse,
                              { className: "h-5 w-5" },
                            )
                          : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              CircleX,
                              { className: "h-5 w-5" },
                            ),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "min-w-0 flex-1",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "truncate text-sm font-semibold",
                          children: a.titulo,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                          className: "text-xs text-muted-foreground",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              Calendar,
                              { className: "mr-1 inline h-3 w-3" },
                            ),
                            a.fecha,
                            " · ",
                            a.categoria,
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: `text-xs font-bold ${a.presente ? "text-success" : a.lesionado ? "text-orange-700" : "text-destructive"}`,
                      children: a.sinRespuesta
                        ? "Sin responder"
                        : a.presente
                          ? "Presente"
                          : a.lesionado
                            ? "Lesionado"
                            : "Ausente",
                    }),
                  ],
                },
                a.id,
              ),
            ),
          }),
    ],
  });
}
function FilterRow({ label, options, value, onChange }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "flex items-center gap-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className:
          "shrink-0 text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
        children: label,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "flex gap-2 overflow-x-auto pb-1",
        children: options.map((o) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Button,
            {
              variant: "ghost",
              onClick: () => onChange(o),
              className: `shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold transition ${value === o ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`,
              children: o,
            },
            o,
          ),
        ),
      }),
    ],
  });
}
function Stat({ label, value }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "rounded-xl bg-secondary p-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className:
          "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
        children: label,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "mt-1 flex items-center justify-center",
        children: value,
      }),
    ],
  });
}
function EditSocioDialog({ open, onOpenChange, socio }) {
  const [form, setForm] = (0, import_react.useState)({
    nombre: socio.nombre,
    categoria: socio.categoria,
    rol: socio.rol,
    numero: socio.numero?.toString() ?? "",
    posicion: socio.posicion ?? "",
    contacto: socio.contacto,
    telefono: socio.telefono,
    pago: socio.pago,
    asistenciaPct: socio.asistenciaPct.toString(),
    observaciones: socio.observaciones ?? "",
  });
  function set(k, v) {
    setForm((f) => ({
      ...f,
      [k]: v,
    }));
  }
  function onSave() {
    updateSocio(socio.id, {
      nombre: form.nombre.trim() || socio.nombre,
      categoria: form.categoria.trim() || socio.categoria,
      rol: form.rol,
      numero: form.numero ? parseInt(form.numero, 10) || void 0 : void 0,
      posicion: form.posicion.trim() || void 0,
      contacto: form.contacto.trim(),
      telefono: form.telefono.trim(),
      pago: form.pago,
      asistenciaPct: Math.max(
        0,
        Math.min(100, parseInt(form.asistenciaPct, 10) || 0),
      ),
      observaciones: form.observaciones.trim() || void 0,
    });
    toast$1.success("Datos del socio actualizados");
    onOpenChange(false);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
    open,
    onOpenChange,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
      className: "max-h-[90vh] overflow-y-auto rounded-2xl",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
            children: "Editar socio",
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "space-y-3",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
              label: "Nombre",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                placeholder: "Ej: Matías Rojas",
                value: form.nombre,
                onChange: (e) => set("nombre", e.target.value),
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "grid grid-cols-2 gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
                  label: "Rol",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "select",
                    {
                      value: form.rol,
                      onChange: (e) => set("rol", e.target.value),
                      className:
                        "h-9 w-full rounded-md border bg-transparent px-2 text-sm",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                          value: "jugador",
                          children: "Jugador",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                          value: "cuerpo-tecnico",
                          children: "Cuerpo técnico",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                          value: "dirigente",
                          children: "Dirigente",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                          value: "socio",
                          children: "Socio",
                        }),
                      ],
                    },
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
                  label: "Categoría",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                    placeholder: "Ej: Primera Adulta",
                    value: form.categoria,
                    onChange: (e) => set("categoria", e.target.value),
                  }),
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "grid grid-cols-2 gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
                  label: "N°",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                    placeholder: "Ej: 8",
                    value: form.numero,
                    onChange: (e) => set("numero", e.target.value),
                    inputMode: "numeric",
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
                  label: "Posición",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                    placeholder: "Ej: Mediocampista",
                    value: form.posicion,
                    onChange: (e) => set("posicion", e.target.value),
                  }),
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
              label: "Email",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                placeholder: "Ej: socio@correo.cl",
                value: form.contacto,
                onChange: (e) => set("contacto", e.target.value),
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
              label: "Teléfono",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                placeholder: "Ej: +56 9 1234 5678",
                value: form.telefono,
                onChange: (e) => set("telefono", e.target.value),
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "grid grid-cols-2 gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
                  label: "Estado pago",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "select",
                    {
                      value: form.pago,
                      onChange: (e) => set("pago", e.target.value),
                      className:
                        "h-9 w-full rounded-md border bg-transparent px-2 text-sm",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                          value: "al-dia",
                          children: "Al día",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                          value: "pendiente",
                          children: "Pendiente",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                          value: "vencido",
                          children: "Vencido",
                        }),
                      ],
                    },
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
                  label: "Asistencia %",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                    placeholder: "Ej: 80",
                    value: form.asistenciaPct,
                    onChange: (e) => set("asistenciaPct", e.target.value),
                    inputMode: "numeric",
                  }),
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
              label: "Observaciones",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "textarea",
                {
                  placeholder: "Ej: Capitán del equipo",
                  value: form.observaciones,
                  onChange: (e) => set("observaciones", e.target.value),
                  rows: 3,
                  className:
                    "w-full rounded-md border bg-transparent p-2 text-sm",
                },
              ),
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
          className: "gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
              className:
                "rounded-xl bg-secondary px-4 py-2 text-sm font-semibold",
              children: "Cancelar",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
              disabled: !form.nombre.trim() || !form.categoria.trim(),
              onClick: onSave,
              className: "rounded-xl  px-4  text-sm font-bold ",
              children: "Guardar",
            }),
          ],
        }),
      ],
    }),
  });
}
function Field({ label, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
    className: "block",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className:
          "mb-1 block text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
        children: label,
      }),
      children,
    ],
  });
}
export { SocioDetail as component };
