import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { s as Button } from "./router-CuTlj-1m.mjs";
// node_modules/.nitro/vite/services/ssr/assets/DraggableBottomSheet-C1poPEKI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DraggableBottomSheet({ onClose, children, level = "default" }) {
  const panelRef = (0, import_react.useRef)(null);
  const startY = (0, import_react.useRef)(null);
  const offsetRef = (0, import_react.useRef)(0);
  const [offset, setOffset] = (0, import_react.useState)(0);
  const [dragging, setDragging] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    panelRef.current?.focus();
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);
  const startDrag = (event) => {
    startY.current = event.clientY;
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const moveDrag = (event) => {
    if (startY.current === null) return;
    const nextOffset = Math.max(0, event.clientY - startY.current);
    offsetRef.current = nextOffset;
    setOffset(nextOffset);
  };
  const endDrag = () => {
    startY.current = null;
    setDragging(false);
    if (offsetRef.current > 88) {
      onClose();
      return;
    }
    offsetRef.current = 0;
    setOffset(0);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: `fixed inset-0 ${level === "raised" ? "z-[60]" : "z-50"} flex items-end bg-foreground/40`,
    onClick: onClose,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      ref: panelRef,
      role: "dialog",
      "aria-modal": "true",
      tabIndex: -1,
      onClick: (event) => event.stopPropagation(),
      className: `mx-auto max-h-[85vh] w-full max-w-[480px] overflow-y-auto rounded-t-3xl bg-card p-5 pb-8 outline-none ${dragging ? "" : "transition-transform duration-200"}`,
      style: { transform: `translateY(${offset}px)` },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
          type: "button",
          variant: "ghost",
          "aria-label": "Cerrar panel",
          className:
            "mx-auto mb-3 flex h-8 w-20 touch-none items-center justify-center p-0",
          onClick: onClose,
          onPointerDown: startDrag,
          onPointerMove: moveDrag,
          onPointerUp: endDrag,
          onPointerCancel: endDrag,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "h-1.5 w-12 rounded-full bg-border",
          }),
        }),
        children,
      ],
    }),
  });
}
export { DraggableBottomSheet as t };
