import { d as e, l as t } from "./useSelector-7GdJWpjS.js";
import { a as n, i as r } from "./mock-data-C0pVxE4X.js";
import { a as i, o as a, r as o, s } from "./dirigente-data-DdiM01PQ.js";
var c = e(t(), 1),
  l = {
    events: r,
    payments: n,
    avisos: o,
    documentos: a,
    pagosClub: s,
    convocatorias: {},
    receipts: {},
    files: {},
  },
  u = l,
  d = new Set();
function f(e) {
  return (
    d.add(e),
    () => {
      d.delete(e);
    }
  );
}
function p() {
  return (0, c.useSyncExternalStore)(
    f,
    () => u,
    () => l,
  );
}
function m(e) {
  ((u = { ...u, ...e }), d.forEach((e) => e()));
}
function h() {
  return u;
}
function g(e) {
  return e === `confirmado`
    ? `presente`
    : e === `no-asiste`
      ? `ausente`
      : e === `lesionado`
        ? `lesionado`
        : `sin-respuesta`;
}
function _(e) {
  return e === `presente`
    ? `confirmado`
    : e === `ausente`
      ? `no-asiste`
      : e === `lesionado`
        ? `lesionado`
        : `pendiente`;
}
function v(e, t) {
  let n = i(e.id, e.called);
  return ((n.s1 = g(e.status)), t ? { ...n, ...t } : n);
}
function y(e, t) {
  let n = h(),
    r = n.convocatorias[e];
  m({
    events: n.events.map((n) => (n.id === e ? { ...n, status: t } : n)),
    ...(r
      ? { convocatorias: { ...n.convocatorias, [e]: { ...r, s1: g(t) } } }
      : {}),
  });
}
function b(e, t) {
  let n = h(),
    r = t.s1 ? _(t.s1) : void 0;
  m({
    convocatorias: { ...n.convocatorias, [e]: t },
    events: n.events.map((t) =>
      t.id === e ? { ...t, called: !0, ...(r ? { status: r } : {}) } : t,
    ),
  });
}
export { m as a, y as i, v as n, p as o, b as r, h as t };
