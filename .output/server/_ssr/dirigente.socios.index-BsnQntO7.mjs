import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import {
  A as ChevronRight,
  f as Search,
  p as Plus,
} from "../_libs/lucide-react.mjs";
import { f as useSocios, n as addSocio } from "./dirigente-data-CBIkTrPW.mjs";
import {
  o as PagoBadge,
  r as Route$1,
  s as Button,
} from "./router-CuTlj-1m.mjs";
import { t as toast$1 } from "./toast-kixGVRDj.mjs";
import { n as FlowSheet } from "./FlowSheet-CwbRCL9q.mjs";
import {
  n as DirigenteShell,
  t as DSectionTitle,
} from "./DirigenteShell-KjK-l_0e.mjs";
// node_modules/.nitro/vite/services/ssr/assets/dirigente.socios.index-BsnQntO7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categorias = [
  "Todas",
  "Primera Adulta",
  "Femenino Adulto",
  "Sub-17",
  "Directiva",
  "Otros",
];
var filtros = ["todos", "al-dia", "pendiente", "vencido"];
function SociosPage() {
  const socios = useSocios();
  const search = Route$1.useSearch();
  const navigate = Route$1.useNavigate();
  const [q, setQ] = (0, import_react.useState)("");
  const [cat, setCat] = (0, import_react.useState)("Todas");
  const [estado, setEstado] = (0, import_react.useState)("todos");
  const [showForm, setShowForm] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if (search.new) {
      setShowForm(true);
      navigate({
        search: {},
        replace: true,
      });
    }
  }, [search.new, navigate]);
  const filtered = (0, import_react.useMemo)(() => {
    return socios.filter((s) => {
      if (q && !s.nombre.toLowerCase().includes(q.toLowerCase())) return false;
      if (cat !== "Todas") {
        if (cat === "Otros") {
          if (
            [
              "Primera Adulta",
              "Femenino Adulto",
              "Sub-17",
              "Directiva",
            ].includes(s.categoria)
          )
            return false;
        } else if (s.categoria !== cat) return false;
      }
      if (estado !== "todos" && s.pago !== estado) return false;
      return true;
    });
  }, [socios, q, cat, estado]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DirigenteShell, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex items-end justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                className: "text-2xl font-extrabold",
                children: "Socios",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                className: "text-sm text-muted-foreground",
                children: [socios.length, " registrados"],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
            onClick: () => setShowForm(true),
            className: "flex items-center gap-1 px-3 font-bold",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
                className: "h-4 w-4",
              }),
              " Registrar",
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
        htmlFor: "socios-search",
        className: "mt-4 block text-xs font-semibold text-muted-foreground",
        children: "Buscar socio",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className:
          "mt-4 flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-[var(--shadow-card)]",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
            className: "h-4 w-4 text-muted-foreground",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
            id: "socios-search",
            value: q,
            onChange: (e) => setQ(e.target.value),
            placeholder: "Buscar por nombre...",
            className:
              "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground",
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "mt-3 flex gap-2 overflow-x-auto pb-1",
        children: categorias.map((c) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Button,
            {
              variant: "ghost",
              onClick: () => setCat(c),
              className: `shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition ${cat === c ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`,
              children: c,
            },
            c,
          ),
        ),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "mt-2 inline-flex rounded-full bg-secondary p-1",
        children: filtros.map((f) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Button,
            {
              variant: "ghost",
              onClick: () => setEstado(f),
              className: `rounded-full px-3 py-1 text-[11px] font-semibold capitalize transition ${estado === f ? "bg-card text-foreground shadow-[var(--shadow-card)]" : "text-muted-foreground"}`,
              children: f === "todos" ? "Todos" : f === "al-dia" ? "Al día" : f,
            },
            f,
          ),
        ),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DSectionTitle, {
        children: [filtered.length, " resultado(s)"],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "space-y-2",
        children: [
          filtered.map((s) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              Link,
              {
                to: "/dirigente/socios/$id",
                params: { id: s.id },
                className:
                  "flex items-center gap-3 rounded-2xl bg-card p-3 shadow-[var(--shadow-card)]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className:
                      "flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-primary",
                    children: s.foto,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "min-w-0 flex-1",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "truncate text-sm font-semibold",
                        children: s.nombre,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                        className: "truncate text-xs text-muted-foreground",
                        children: [
                          s.categoria,
                          s.numero ? ` · #${s.numero}` : "",
                          " · Asist ",
                          s.asistenciaPct,
                          "%",
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PagoBadge, {
                    estado: s.pago,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
                    className: "h-4 w-4 shrink-0 text-muted-foreground",
                  }),
                ],
              },
              s.id,
            ),
          ),
          filtered.length === 0 &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className:
                "rounded-2xl bg-secondary p-4 text-center text-sm text-muted-foreground",
              children: "No hay socios con esos filtros.",
            }),
        ],
      }),
      showForm &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewSocioSheet, {
          onClose: () => setShowForm(false),
          onSave: (s) => {
            addSocio(s);
            toast$1.success("Socio registrado");
            setShowForm(false);
          },
        }),
    ],
  });
}
function NewSocioSheet({ onClose, onSave }) {
  const [nombre, setNombre] = (0, import_react.useState)("");
  const [categoria, setCategoria] = (0, import_react.useState)(
    "Primera Adulta",
  );
  const [rol, setRol] = (0, import_react.useState)("jugador");
  const [telefono, setTelefono] = (0, import_react.useState)("");
  const [contacto, setContacto] = (0, import_react.useState)("");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FlowSheet, {
    title: "Nuevo socio",
    onClose,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mt-4 space-y-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
            label: "Nombre completo",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
              value: nombre,
              onChange: (e) => setNombre(e.target.value),
              className: "field",
              placeholder: "Ej: Juan Pérez",
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
            label: "Categoría",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
              value: categoria,
              onChange: (e) => setCategoria(e.target.value),
              className: "field",
              children: [
                "Primera Adulta",
                "Femenino Adulto",
                "Sub-17",
                "Directiva",
                "Cuerpo Técnico",
                "Socio colaborador",
              ].map((c) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "option",
                  { children: c },
                  c,
                ),
              ),
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
            label: "Rol",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
              value: rol,
              onChange: (e) => setRol(e.target.value),
              className: "field",
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
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
            label: "Teléfono",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
              value: telefono,
              onChange: (e) => setTelefono(e.target.value),
              className: "field",
              placeholder: "+56 9 ...",
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
            label: "Correo (opcional)",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
              value: contacto,
              onChange: (e) => setContacto(e.target.value),
              type: "email",
              className: "field",
              placeholder: "Ej: socio@correo.cl",
            }),
          }),
        ],
      }),
      contacto &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contacto) &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          role: "alert",
          className: "text-xs text-destructive",
          children:
            "El correo debe incluir @ y un dominio, por ejemplo socio@correo.cl.",
        }),
      telefono &&
        telefono.replace(/\D/g, "").length < 9 &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          role: "alert",
          className: "text-xs text-destructive",
          children:
            "Ingresa un teléfono con al menos 9 dígitos o deja el campo vacío.",
        }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flow-actions",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
            variant: "secondary",
            className: "w-full",
            onClick: onClose,
            children: "Cancelar",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
            disabled:
              !nombre.trim() ||
              (Boolean(contacto.trim()) &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contacto)) ||
              (Boolean(telefono.trim()) &&
                telefono.replace(/\D/g, "").length < 9),
            onClick: () =>
              onSave({
                id: `s${Date.now()}`,
                nombre: nombre.trim(),
                rol,
                categoria,
                contacto: contacto || "—",
                telefono: telefono || "—",
                pago: "al-dia",
                asistenciaPct: 0,
                desde: "Hoy",
                foto: nombre
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")
                  .toUpperCase(),
              }),
            className: "w-full text-sm font-bold disabled:opacity-50",
            children: "Guardar socio",
          }),
        ],
      }),
    ],
  });
}
function Field({ label, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
    className: "block",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: "mb-1 block text-xs font-semibold text-muted-foreground",
        children: label,
      }),
      children,
    ],
  });
}
export { SociosPage as component };
