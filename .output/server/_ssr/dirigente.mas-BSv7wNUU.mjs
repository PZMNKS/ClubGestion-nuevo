import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import {
  E as Clock,
  k as CircleCheck,
  l as Sparkles,
  o as Upload,
  s as TriangleAlert,
  t as X,
  w as FileText,
} from "../_libs/lucide-react.mjs";
import {
  a as updatePrototype,
  o as usePrototype,
  t as getPrototype,
} from "./prototype-state-BkJ0Cljr.mjs";
import { i as Route$4, s as Button } from "./router-CuTlj-1m.mjs";
import { t as toast$1 } from "./toast-kixGVRDj.mjs";
import { n as FlowSheet, t as FlowActions } from "./FlowSheet-CwbRCL9q.mjs";
import {
  n as DirigenteShell,
  t as DSectionTitle,
} from "./DirigenteShell-KjK-l_0e.mjs";
// node_modules/.nitro/vite/services/ssr/assets/dirigente.mas-BSv7wNUU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tabs = ["Resumen", "Documentos"];
function MasPage() {
  const search = Route$4.useSearch();
  const navigate = Route$4.useNavigate();
  const initialTab = search.tab === "documentos" ? "Documentos" : "Resumen";
  const [tab, setTab] = (0, import_react.useState)(initialTab);
  (0, import_react.useEffect)(() => {
    if (search.tab === "comunicacion" || search.tab === "avisos") {
      navigate({
        to: "/dirigente/eventos",
        search: {
          tab: "avisos",
          ...(search.new ? { new: 1 } : {}),
        },
        replace: true,
      });
      return;
    }
    if (search.tab === "documentos") setTab("Documentos");
    if (search.tab || search.new)
      navigate({
        search: {},
        replace: true,
      });
  }, [search.tab, search.new, navigate]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DirigenteShell, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
        className: "text-2xl font-extrabold",
        children: "Mi Club",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: "text-sm text-muted-foreground",
        children: "Administración financiera y documentación legal.",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "mt-4 flex gap-2 overflow-x-auto pb-1",
        children: tabs.map((t) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Button,
            {
              variant: "ghost",
              "aria-pressed": tab === t,
              onClick: () => setTab(t),
              className: `shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold transition ${tab === t ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`,
              children: t,
            },
            t,
          ),
        ),
      }),
      tab === "Resumen" &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminResumen, {}),
      tab === "Documentos" &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentosTab, {}),
    ],
  });
}
function DocumentosTab() {
  const { documentos: docs } = usePrototype();
  const setDocs = (fn) =>
    updatePrototype({ documentos: fn(getPrototype().documentos) });
  const [upload, setUpload] = (0, import_react.useState)(false);
  const [showAI, setShowAI] = (0, import_react.useState)(false);
  function setEstado(d, next, mensaje) {
    const prev = d.estado;
    setDocs((p) =>
      p.map((x) =>
        x.id === d.id
          ? {
              ...x,
              estado: next,
            }
          : x,
      ),
    );
    toast$1.success(`"${d.nombre}" ${mensaje}`, {
      action: {
        label: "Deshacer",
        onClick: () => {
          setDocs((p) =>
            p.map((x) =>
              x.id === d.id
                ? {
                    ...x,
                    estado: prev,
                  }
                : x,
            ),
          );
          toast$1.info("Cambio deshecho");
        },
      },
    });
  }
  const vigentes = docs.filter((d) => d.estado === "vigente").length;
  const alertas = docs.filter((d) => d.estado !== "vigente");
  const formalizacion = Math.round((vigentes / docs.length) * 100);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_jsx_runtime.Fragment,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "mt-5 rounded-3xl bg-primary-soft p-5",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className:
                "text-xs font-semibold uppercase tracking-wider text-primary",
              children: "Estado del club",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
              className: "mt-1 text-2xl font-extrabold",
              children: [formalizacion, "% al día"],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
              className: "text-xs text-muted-foreground",
              children: [vigentes, " de ", docs.length, " documentos vigentes"],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "mt-3 h-2 overflow-hidden rounded-full bg-card/70",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "h-full rounded-full bg-primary",
                style: { width: `${formalizacion}%` },
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
              variant: "ghost",
              onClick: () => setShowAI(true),
              className:
                "mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-card py-2.5 text-sm font-bold text-primary shadow-[var(--shadow-card)]",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
                  className: "h-4 w-4",
                }),
                " Guía de documentos",
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "mt-4 flex items-center justify-between",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
              className: "text-sm font-semibold text-muted-foreground",
              children: [alertas.length, " requieren atención"],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
              onClick: () => setUpload(true),
              className: "flex items-center gap-1 px-3 font-bold",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {
                  className: "h-3.5 w-3.5",
                }),
                " Subir",
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DSectionTitle, {
          children: "Por revisar",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "space-y-2",
          children: alertas.map((d) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              DocItem,
              {
                d,
                onMark: () => setEstado(d, "vigente", "marcado al día"),
              },
              d.id,
            ),
          ),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DSectionTitle, {
          children: "Vigentes",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "space-y-2",
          children: docs
            .filter((d) => d.estado === "vigente")
            .map((d) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                DocItem,
                {
                  d,
                  onUnmark: () =>
                    setEstado(d, "pendiente", "marcado como pendiente"),
                },
                d.id,
              ),
            ),
        }),
        upload &&
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UploadDocument, {
            onClose: () => setUpload(false),
          }),
        showAI &&
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AIHelper, {
            onClose: () => setShowAI(false),
          }),
      ],
    },
  );
}
function DocItem({ d, onMark, onUnmark }) {
  const e = {
    vigente: {
      cls: "bg-success-soft text-success",
      label: "Vigente",
      icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
        className: "h-4 w-4",
      }),
    },
    "por-vencer": {
      cls: "bg-warning-soft text-warning-foreground",
      label: "Por vencer",
      icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
        className: "h-4 w-4",
      }),
    },
    vencido: {
      cls: "bg-destructive-soft text-destructive",
      label: "Vencido",
      icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
        className: "h-4 w-4",
      }),
    },
    pendiente: {
      cls: "bg-secondary text-secondary-foreground",
      label: "Pendiente",
      icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
        className: "h-4 w-4",
      }),
    },
  }[d.estado];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className:
      "flex items-center gap-3 rounded-2xl bg-card p-3 shadow-[var(--shadow-card)]",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: `flex h-10 w-10 items-center justify-center rounded-xl ${e.cls}`,
        children: e.icon,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "min-w-0 flex-1",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: "text-sm font-semibold leading-snug",
            children: d.nombre,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: "text-xs text-muted-foreground",
            children: d.vencimiento
              ? `Vence ${d.vencimiento}`
              : d.fechaSubida
                ? `Subido ${d.fechaSubida}`
                : "Sin subir",
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex flex-col items-end gap-1",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: `rounded-full px-2 py-0.5 text-[10px] font-bold ${e.cls}`,
            children: e.label,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
            variant: "ghost",
            size: "icon",
            "aria-label": `Abrir ${d.nombre}`,
            title: "Abrir documento",
            onClick: () => {
              const file = getPrototype().files[d.id];
              if (!file) {
                toast$1.info(
                  "Este documento de ejemplo no tiene un archivo adjunto. Sube uno para consultarlo.",
                );
                return;
              }
              const url = URL.createObjectURL(file);
              window.open(url, "_blank", "noopener,noreferrer");
              setTimeout(() => URL.revokeObjectURL(url), 6e4);
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
              className: "h-4 w-4",
            }),
          }),
          onMark &&
            d.estado !== "vigente" &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
              variant: "ghost",
              onClick: onMark,
              className: "text-[10px] font-bold text-primary",
              children: "Marcar al día",
            }),
          onUnmark &&
            d.estado === "vigente" &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
              variant: "ghost",
              onClick: onUnmark,
              className: "text-[10px] font-bold text-warning-foreground",
              children: "Marcar pendiente",
            }),
        ],
      }),
    ],
  });
}
function AIHelper({ onClose }) {
  const [q, setQ] = (0, import_react.useState)("");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "fixed inset-0 z-50 flex items-end bg-foreground/40",
    onClick: onClose,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      onClick: (e) => e.stopPropagation(),
      className: "mx-auto w-full max-w-[480px] rounded-t-3xl bg-card p-5 pb-8",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "mx-auto mb-3 h-1.5 w-12 rounded-full bg-border",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className:
                    "flex h-9 w-9 items-center justify-center rounded-xl bg-primary-soft text-primary",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    Sparkles,
                    { className: "h-5 w-5" },
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                      className: "text-base font-extrabold",
                      children: "Guía de documentos",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "text-[11px] text-muted-foreground",
                      children: "Guía simple sobre formalización",
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
              variant: "ghost",
              onClick: onClose,
              "aria-label": "Cerrar",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                className: "h-5 w-5",
              }),
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "mt-4 space-y-2",
          children: [
            "¿Cómo renuevo la directiva?",
            "¿Qué documentos pide la municipalidad?",
            "¿Cómo redacto un acta?",
          ].map((s) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              Button,
              {
                variant: "ghost",
                onClick: () => setQ(s),
                className:
                  "w-full rounded-2xl bg-secondary p-3 text-left text-sm font-medium",
                children: s,
              },
              s,
            ),
          ),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className:
            "mt-4 flex items-center gap-2 rounded-full bg-secondary px-4 py-2",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
            value: q,
            onChange: (e) => setQ(e.target.value),
            "aria-label": "Consultar guía",
            placeholder: "Ej: ¿Cómo renuevo la directiva?",
            className: "w-full bg-transparent text-sm outline-none",
          }),
        }),
        q &&
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "mt-4 rounded-2xl bg-primary-soft p-4 text-sm text-foreground",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "font-semibold text-primary",
                children: "Orientación general",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                className: "mt-1 text-muted-foreground",
                children: [
                  'Para "',
                  q,
                  '" te recomendamos revisar el módulo de Documentos y mantener el acta de directiva vigente. Si necesitas ayuda detallada, contacta a tu municipalidad o consulta el Registro Civil de Organizaciones Comunitarias.',
                ],
              }),
            ],
          }),
      ],
    }),
  });
}
function AdminResumen() {
  const { pagosClub, documentos } = usePrototype();
  const cobrado = pagosClub
    .filter((p) => p.estado === "pagado")
    .reduce((s, p) => s + p.monto, 0);
  const pendiente = pagosClub
    .filter((p) => p.estado !== "pagado")
    .reduce((s, p) => s + p.monto, 0);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "mt-5",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
        className: "text-lg font-bold",
        children: "Estado financiero global",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mt-3 grid grid-cols-2 gap-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "rounded-2xl bg-success-soft p-4 text-success",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-xs font-semibold",
                children: "Ingresos registrados",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                className: "mt-1 text-xl font-bold",
                children: ["$", cobrado.toLocaleString("es-CL")],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "rounded-2xl bg-destructive-soft p-4 text-destructive",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-xs font-semibold",
                children: "Por cobrar",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                className: "mt-1 text-xl font-bold",
                children: ["$", pendiente.toLocaleString("es-CL")],
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        asChild: true,
        className: "mt-4 w-full",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
          to: "/dirigente/pagos",
          children: "Gestionar pagos",
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DSectionTitle, {
        children: "Documentación legal",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        className: "text-sm text-muted-foreground",
        children: [
          documentos.filter((d) => d.estado === "vigente").length,
          " de",
          " ",
          documentos.length,
          " documentos vigentes",
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        asChild: true,
        variant: "secondary",
        className: "mt-3 w-full",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
          to: "/dirigente/mas",
          search: { tab: "documentos" },
          children: "Ver documentos y estatutos",
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DSectionTitle, {
        children: "Equipo de gestión",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: "text-sm text-muted-foreground",
        children: "Dirigentes y cuerpo técnico registrados en el club.",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        asChild: true,
        variant: "secondary",
        className: "mt-3 w-full",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
          to: "/dirigente/socios",
          children: "Ver socios y dirigentes",
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: "mt-5 text-xs text-warning-foreground",
        children:
          "Prototipo de gestión: los permisos de acceso y el envío al club aún no están habilitados.",
      }),
    ],
  });
}
function UploadDocument({ onClose }) {
  const [nombre, setNombre] = (0, import_react.useState)("");
  const [file, setFile] = (0, import_react.useState)(null);
  const [error, setError] = (0, import_react.useState)("");
  const [tipo, setTipo] = (0, import_react.useState)("estatuto");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FlowSheet, {
    title: "Subir documento legal",
    description: "Registro de documento · Prototipo de esta sesión",
    onClose,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
        className: "block text-sm font-semibold",
        children: [
          "Nombre del documento",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
            className: "field mt-1",
            value: nombre,
            onChange: (e) => setNombre(e.target.value),
            placeholder: "Ej: Estatutos del club 2026",
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
        className: "block text-sm font-semibold",
        children: [
          "Tipo",
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
            className: "field mt-1",
            value: tipo,
            onChange: (e) => setTipo(e.target.value),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                value: "estatuto",
                children: "Estatutos",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                value: "acta",
                children: "Acta",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                value: "certificado",
                children: "Certificado",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                value: "directiva",
                children: "Directiva",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                value: "otro",
                children: "Otro",
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: "text-sm font-semibold",
            children: "Archivo PDF o imagen",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
            className:
              "mt-2 flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border border-primary bg-primary-soft px-4 py-3 text-sm font-bold text-primary",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {
                className: "h-4 w-4",
              }),
              file ? "Cambiar archivo" : "Seleccionar PDF o imagen",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                className: "sr-only",
                type: "file",
                accept: "application/pdf,image/jpeg,image/png",
                onChange: (e) => {
                  const f = e.target.files?.[0];
                  if (
                    f &&
                    (!["application/pdf", "image/jpeg", "image/png"].includes(
                      f.type,
                    ) ||
                      f.size > 10485760)
                  ) {
                    setFile(null);
                    setError("Elige un PDF, JPG o PNG de hasta 10 MB.");
                  } else {
                    setFile(f ?? null);
                    setError("");
                  }
                },
              }),
            ],
          }),
          file &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className:
                "mt-2 break-all rounded-lg bg-secondary p-2 text-xs font-medium",
              children: file.name,
            }),
        ],
      }),
      error &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          role: "alert",
          className: "text-sm text-destructive",
          children: error,
        }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: "text-xs text-muted-foreground",
        children:
          "El archivo quedará disponible en esta sesión, sin subirse a un servidor.",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowActions, {
        onCancel: onClose,
        disabled: !nombre.trim() || !file,
        label: "Subir documento",
        onSave: () => {
          if (!file) return;
          const id = `doc${Date.now()}`;
          updatePrototype({
            documentos: [
              {
                id,
                nombre: nombre.trim(),
                tipo,
                estado: "vigente",
                fechaSubida: /* @__PURE__ */ new Date()
                  .toISOString()
                  .slice(0, 10),
                subidoPor: "Tú",
              },
              ...getPrototype().documentos,
            ],
            files: {
              ...getPrototype().files,
              [id]: file,
            },
          });
          toast$1.success("Documento registrado en esta sesión");
          onClose();
        },
      }),
    ],
  });
}
export { MasPage as component };
