import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import {
  k as CircleCheck,
  o as Upload,
  s as TriangleAlert,
} from "../_libs/lucide-react.mjs";
import { n as SectionTitle, t as AppShell } from "./AppShell-B_EBrAVz.mjs";
import {
  a as updatePrototype,
  o as usePrototype,
  t as getPrototype,
} from "./prototype-state-BkJ0Cljr.mjs";
import { s as Button } from "./router-CuTlj-1m.mjs";
import { t as toast$1 } from "./toast-kixGVRDj.mjs";
import { n as FlowSheet, t as FlowActions } from "./FlowSheet-CwbRCL9q.mjs";
// node_modules/.nitro/vite/services/ssr/assets/pagos-RyBNQcqX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fmt = (n) => `$${n.toLocaleString("es-CL")}`;
function PagosPage() {
  const { payments, receipts } = usePrototype();
  const [selected, setSelected] = (0, import_react.useState)(null);
  const [step, setStep] = (0, import_react.useState)(1);
  const [file, setFile] = (0, import_react.useState)(null);
  const [error, setError] = (0, import_react.useState)("");
  const pending = payments.filter((p) => p.status !== "pagado");
  const payment = payments.find((p) => p.id === selected);
  const total = pending.reduce((s, p) => s + p.amount, 0);
  function open(id) {
    setSelected(id);
    setStep(1);
    setFile(null);
    setError("");
  }
  function save() {
    if (!payment || !file) return;
    updatePrototype({
      receipts: {
        ...getPrototype().receipts,
        [payment.id]: file.name,
      },
    });
    setSelected(null);
    toast$1.success(
      "Comprobante registrado en esta sesión. Pendiente de revisión.",
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
        className: "text-2xl font-extrabold",
        children: "Mis pagos",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
        className: `mt-4 rounded-2xl p-4 ${total ? "bg-destructive-soft text-destructive" : "bg-success-soft text-success"}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
            className: "flex items-center gap-2 font-bold",
            children: [
              total
                ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
                    className: "h-5 w-5",
                  })
                : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                    className: "h-5 w-5",
                  }),
              total ? "Tienes cuotas pendientes" : "Estás al día",
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: "mt-2 text-3xl font-extrabold",
            children: fmt(total),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
            className: "mt-1 text-sm",
            children: [pending.length, " cuotas por regularizar"],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
        children: "Pendientes",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "space-y-3",
        children: pending.map((p) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "article",
            {
              className: "rounded-2xl bg-card p-4 shadow-card",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "grid grid-cols-[minmax(0,1fr)_auto] gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "min-w-0",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                          className: "font-bold",
                          children: p.concept,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                          className: "text-xs text-muted-foreground",
                          children: [
                            "Vence ",
                            p.dueDate.split("-").reverse().join("/"),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "font-bold",
                      children: fmt(p.amount),
                    }),
                  ],
                }),
                receipts[p.id]
                  ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                      className:
                        "mt-3 rounded-lg bg-warning-soft p-3 text-sm font-semibold text-warning-foreground",
                      children: ["Comprobante en revisión · ", receipts[p.id]],
                    })
                  : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
                      className: "mt-3 w-full",
                      onClick: () => open(p.id),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {}),
                        " Registrar comprobante",
                      ],
                    }),
              ],
            },
            p.id,
          ),
        ),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
        children: "Historial",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "space-y-2",
        children: payments
          .filter((p) => p.status === "pagado")
          .map((p) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "article",
              {
                className:
                  "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl bg-card p-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "min-w-0",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "font-semibold",
                        children: p.concept,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                        className: "text-xs text-success",
                        children: ["Pagado · ", p.paidAt],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "font-bold",
                    children: fmt(p.amount),
                  }),
                ],
              },
              p.id,
            ),
          ),
      }),
      payment &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowSheet, {
          title: "Registrar comprobante",
          description: `Paso ${step} de 2 · ${payment.concept}`,
          onClose: () => setSelected(null),
          children:
            step === 1
              ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  import_jsx_runtime.Fragment,
                  {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "text-xl font-bold",
                        children: fmt(payment.amount),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "text-sm text-muted-foreground",
                        children:
                          "Adjunta el comprobante de una transferencia ya realizada. No se realizará ningún cobro.",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className: "text-sm font-semibold",
                            children: "Comprobante (PDF o imagen)",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                            "label",
                            {
                              className:
                                "group mt-2 flex min-h-12 w-full cursor-pointer select-none items-center justify-center gap-2 rounded-xl border border-primary bg-primary-soft px-4 py-3 text-sm font-bold text-primary shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-md active:translate-y-0 active:scale-[0.98] focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  Upload,
                                  {
                                    className:
                                      "h-4 w-4 shrink-0 transition-transform duration-150 group-hover:-translate-y-0.5",
                                  },
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "span",
                                  {
                                    children: file
                                      ? "Cambiar comprobante"
                                      : "Adjuntar comprobante",
                                  },
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "input",
                                  {
                                    className: "sr-only",
                                    type: "file",
                                    accept:
                                      "application/pdf,image/jpeg,image/png",
                                    onChange: (e) => {
                                      const f = e.target.files?.[0];
                                      if (
                                        f &&
                                        (![
                                          "application/pdf",
                                          "image/jpeg",
                                          "image/png",
                                        ].includes(f.type) ||
                                          f.size > 10485760)
                                      ) {
                                        setFile(null);
                                        setError(
                                          "Elige un PDF, JPG o PNG de hasta 10 MB.",
                                        );
                                      } else {
                                        setFile(f ?? null);
                                        setError("");
                                      }
                                    },
                                  },
                                ),
                              ],
                            },
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className: "mt-1.5 text-xs text-muted-foreground",
                            children: "PDF, JPG o PNG de hasta 10 MB",
                          }),
                          file &&
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className:
                                  "mt-2 flex items-center gap-2 rounded-xl bg-success-soft px-3 py-2.5 text-xs font-semibold text-success",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    CircleCheck,
                                    { className: "h-4 w-4 shrink-0" },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "span",
                                    {
                                      className: "min-w-0 flex-1 truncate",
                                      children: file.name,
                                    },
                                  ),
                                ],
                              },
                            ),
                        ],
                      }),
                      error &&
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          role: "alert",
                          className: "text-sm text-destructive",
                          children: error,
                        }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowActions, {
                        onCancel: () => setSelected(null),
                        onSave: () => setStep(2),
                        disabled: !file,
                        label: "Continuar",
                      }),
                    ],
                  },
                )
              : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  import_jsx_runtime.Fragment,
                  {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "font-semibold",
                        children: "Revisa antes de registrar",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                        children: [payment.concept, " · ", fmt(payment.amount)],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "break-all text-sm",
                        children: file?.name,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "text-sm text-warning-foreground",
                        children:
                          "Prototipo: el comprobante se registra solo en esta sesión, sin enviarse al club. Tu deuda no cambia hasta su revisión.",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowActions, {
                        cancelLabel: "Atrás",
                        onCancel: () => setStep(1),
                        onSave: save,
                        label: "Registrar",
                      }),
                    ],
                  },
                ),
        }),
    ],
  });
}
export { PagosPage as component };
