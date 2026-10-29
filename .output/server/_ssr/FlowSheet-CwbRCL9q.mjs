import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { s as Button } from "./router-CuTlj-1m.mjs";
import {
  i as DialogDescription,
  r as DialogContent,
  s as DialogTitle,
  t as Dialog,
} from "./dialog-B4BrQgSK.mjs";
// node_modules/.nitro/vite/services/ssr/assets/FlowSheet-CwbRCL9q.js
var import_jsx_runtime = require_jsx_runtime();
function FlowSheet({ title, description, onClose, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
    open: true,
    onOpenChange: (open) => {
      if (!open) onClose();
    },
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
      className: "flow-sheet",
      "aria-describedby": void 0,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "pr-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
              children: title,
            }),
            description &&
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
                className: "mt-1",
                children: description,
              }),
          ],
        }),
        children,
      ],
    }),
  });
}
function FlowActions({
  onCancel,
  onSave,
  disabled,
  label = "Guardar",
  cancelLabel = "Cancelar",
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "flow-actions",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        variant: "secondary",
        onClick: onCancel,
        children: cancelLabel,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        onClick: onSave,
        disabled,
        children: label,
      }),
    ],
  });
}
export { FlowSheet as n, FlowActions as t };
