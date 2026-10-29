import { c as e } from "./useSelector-7GdJWpjS.js";
import { o as t } from "./index-D8svfn-J.js";
import { i as n, r, s as i, t as a } from "./dialog-EtL9Ta1h.js";
var o = e();
function s({ title: e, description: t, onClose: s, children: c }) {
  return (0, o.jsx)(a, {
    open: !0,
    onOpenChange: (e) => {
      e || s();
    },
    children: (0, o.jsxs)(r, {
      className: `flow-sheet`,
      "aria-describedby": void 0,
      children: [
        (0, o.jsxs)(`div`, {
          className: `pr-8`,
          children: [
            (0, o.jsx)(i, { children: e }),
            t && (0, o.jsx)(n, { className: `mt-1`, children: t }),
          ],
        }),
        c,
      ],
    }),
  });
}
function c({
  onCancel: e,
  onSave: n,
  disabled: r,
  label: i = `Guardar`,
  cancelLabel: a = `Cancelar`,
}) {
  return (0, o.jsxs)(`div`, {
    className: `flow-actions`,
    children: [
      (0, o.jsx)(t, { variant: `secondary`, onClick: e, children: a }),
      (0, o.jsx)(t, { onClick: n, disabled: r, children: i }),
    ],
  });
}
export { s as n, c as t };
