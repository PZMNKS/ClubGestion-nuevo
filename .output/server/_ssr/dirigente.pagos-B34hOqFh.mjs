import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import {
  c as TrendingUp,
  k as CircleCheck,
  n as Wallet,
  s as TriangleAlert,
} from "../_libs/lucide-react.mjs";
import { f as useSocios } from "./dirigente-data-CBIkTrPW.mjs";
import {
  a as updatePrototype,
  o as usePrototype,
  t as getPrototype,
} from "./prototype-state-BkJ0Cljr.mjs";
import { s as Button } from "./router-CuTlj-1m.mjs";
import { t as toast$1 } from "./toast-kixGVRDj.mjs";
import { n as FlowSheet, t as FlowActions } from "./FlowSheet-CwbRCL9q.mjs";
import {
  n as DirigenteShell,
  t as DSectionTitle,
} from "./DirigenteShell-KjK-l_0e.mjs";
// node_modules/.nitro/vite/services/ssr/assets/dirigente.pagos-B34hOqFh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filtros = ["todos", "pendiente", "vencido", "pagado"];
function PagosDirigente() {
  const { pagosClub: pagos } = usePrototype();
  const socios = useSocios();
  const [confirm, setConfirm] = (0, import_react.useState)(null);
  const [f, setF] = (0, import_react.useState)("todos");
  const filtered = (0, import_react.useMemo)(
    () => (f === "todos" ? pagos : pagos.filter((p) => p.estado === f)),
    [pagos, f],
  );
  const totalIngresos = pagos
    .filter((p) => p.estado === "pagado")
    .reduce((s, p) => s + p.monto, 0);
  const totalPendiente = pagos
    .filter((p) => p.estado !== "pagado")
    .reduce((s, p) => s + p.monto, 0);
  const morosos = new Set(
    pagos.filter((p) => p.estado === "vencido").map((p) => p.socioId),
  ).size;
  const markPaid = (id) => {
    const before = getPrototype().pagosClub;
    updatePrototype({
      pagosClub: before.map((p) =>
        p.id === id
          ? {
              ...p,
              estado: "pagado",
              pagadoEl: hoy(),
            }
          : p,
      ),
    });
    setConfirm(null);
    toast$1.success("Pago registrado en esta sesión", {
      action: {
        label: "Deshacer",
        onClick: () => updatePrototype({ pagosClub: before }),
      },
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DirigenteShell, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
        className: "text-2xl font-extrabold",
        children: "Pagos",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: "text-sm text-muted-foreground",
        children: "Control de cuotas y aportes del club.",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mt-4 grid grid-cols-1 gap-2 min-[380px]:grid-cols-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sum, {
            label: "Ingresos registrados",
            value: fmt(totalIngresos),
            tone: "ok",
            icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, {
              className: "h-4 w-4",
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sum, {
            label: "Por cobrar",
            value: fmt(totalPendiente),
            tone: "warn",
            icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
              className: "h-4 w-4",
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sum, {
            label: "Morosos",
            value: String(morosos),
            tone: morosos ? "bad" : "default",
            icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
              className: "h-4 w-4",
            }),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "mt-4 inline-flex rounded-full bg-secondary p-1",
        children: filtros.map((it) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Button,
            {
              variant: "ghost",
              onClick: () => setF(it),
              className: `rounded-full px-3 py-1.5 text-xs font-semibold capitalize transition ${f === it ? "bg-card text-foreground shadow-[var(--shadow-card)]" : "text-muted-foreground"}`,
              children: it,
            },
            it,
          ),
        ),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DSectionTitle, {
        children: [filtered.length, " pagos"],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "space-y-2",
        children: filtered.map((p) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "div",
            {
              className: "rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex items-start gap-3",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: `flex h-11 w-11 items-center justify-center rounded-xl ${p.estado === "pagado" ? "bg-success-soft text-success" : p.estado === "vencido" ? "bg-destructive-soft text-destructive" : "bg-warning-soft text-warning-foreground"}`,
                      children:
                        p.estado === "pagado"
                          ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              CircleCheck,
                              { className: "h-5 w-5" },
                            )
                          : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              Wallet,
                              { className: "h-5 w-5" },
                            ),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "min-w-0 flex-1",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "break-words text-sm font-semibold",
                          children: p.socio,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                          className:
                            "mt-0.5 break-words text-xs text-muted-foreground",
                          children: [
                            p.concepto,
                            " ·",
                            " ",
                            p.estado === "pagado"
                              ? `Pagado ${p.pagadoEl}`
                              : `Vence ${p.vencimiento}`,
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "shrink-0 text-right text-sm font-bold",
                      children: fmt(p.monto),
                    }),
                  ],
                }),
                p.estado !== "pagado" &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "mt-3 grid grid-cols-[minmax(0,1fr)_auto] gap-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                        onClick: () => setConfirm(p),
                        className: "w-full whitespace-normal px-3 font-bold",
                        children: "Registrar pago",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                        variant: "secondary",
                        size: "icon",
                        title: "Preparar recordatorio por WhatsApp",
                        "aria-label": `Recordar pago a ${p.socio}`,
                        onClick: () => {
                          const tel = socios
                            .find((s) => s.id === p.socioId)
                            ?.telefono.replace(/\D/g, "");
                          if (!tel) {
                            toast$1.error(
                              "Agrega un teléfono en el perfil del socio.",
                            );
                            return;
                          }
                          window.open(
                            `https://wa.me/${tel}?text=${encodeURIComponent(`Hola ${p.socio}, tienes pendiente ${p.concepto} por ${fmt(p.monto)}. Gracias.`)}`,
                            "_blank",
                            "noopener,noreferrer",
                          );
                        },
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          Wallet,
                          { className: "h-4 w-4" },
                        ),
                      }),
                    ],
                  }),
              ],
            },
            p.id,
          ),
        ),
      }),
      confirm &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FlowSheet, {
          title: "Registrar pago",
          description: "Revisa el pago antes de guardarlo",
          onClose: () => setConfirm(null),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "font-bold",
              children: confirm.socio,
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
              children: [confirm.concepto, " · ", fmt(confirm.monto)],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "text-sm text-muted-foreground",
              children:
                "Confirma solo si el club ya recibió este pago. Este registro es de prueba y permanece en esta sesión.",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowActions, {
              onCancel: () => setConfirm(null),
              onSave: () => markPaid(confirm.id),
              label: "Confirmar pago",
            }),
          ],
        }),
    ],
  });
}
function Sum({ label, value, tone, icon }) {
  const cls = {
    ok: "text-success",
    warn: "text-warning-foreground",
    bad: "text-destructive",
    default: "text-foreground",
  }[tone];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "rounded-2xl bg-card p-3 shadow-[var(--shadow-card)]",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className:
          "flex items-start gap-1 text-[10px] font-semibold uppercase leading-snug text-muted-foreground",
        children: [icon, label],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: `mt-1 break-words text-base font-extrabold leading-tight ${cls}`,
        children: value,
      }),
    ],
  });
}
function fmt(n) {
  return `$${n.toLocaleString("es-CL")}`;
}
function hoy() {
  const d = /* @__PURE__ */ new Date();
  return `${String(d.getDate()).padStart(2, "0")}-${String(d.getMonth() + 1).padStart(2, "0")}-${d.getFullYear()}`;
}
export { PagosDirigente as component };
