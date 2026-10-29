import { d as e, i as t, l as n, t as r } from "./useSelector-7GdJWpjS.js";
import { p as i } from "./index-D8svfn-J.js";
function a(e) {
  let n = t({ warn: e?.router === void 0 }),
    a = e?.router || n;
  return r(a.stores.__store, i(e, a));
}
var o = e(n()),
  s = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  c = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  l = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
      n ? n.toUpperCase() : t.toLowerCase(),
    ),
  u = (e) => {
    let t = l(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  d = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  f = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  p = (0, o.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: c,
        ...l
      },
      u,
    ) =>
      (0, o.createElement)(
        `svg`,
        {
          ref: u,
          ...d,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: s(`lucide`, i),
          ...(!a && !f(l) && { "aria-hidden": `true` }),
          ...l,
        },
        [
          ...c.map(([e, t]) => (0, o.createElement)(e, t)),
          ...(Array.isArray(a) ? a : [a]),
        ],
      ),
  ),
  m = (e, t) => {
    let n = (0, o.forwardRef)(({ className: n, ...r }, i) =>
      (0, o.createElement)(p, {
        ref: i,
        iconNode: t,
        className: s(`lucide-${c(u(e))}`, `lucide-${e}`, n),
        ...r,
      }),
    );
    return ((n.displayName = u(e)), n);
  },
  h = m(`calendar`, [
    [`path`, { d: `M8 2v4`, key: `1cmpym` }],
    [`path`, { d: `M16 2v4`, key: `4m81vk` }],
    [
      `rect`,
      { width: `18`, height: `18`, x: `3`, y: `4`, rx: `2`, key: `1hopcy` },
    ],
    [`path`, { d: `M3 10h18`, key: `8toen8` }],
  ]),
  g = m(`house`, [
    [
      `path`,
      { d: `M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`, key: `5wwlr5` },
    ],
    [
      `path`,
      {
        d: `M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,
        key: `r6nss1`,
      },
    ],
  ]),
  _ = m(`shield`, [
    [
      `path`,
      {
        d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
        key: `oel41y`,
      },
    ],
  ]),
  v = m(`wallet`, [
    [
      `path`,
      {
        d: `M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1`,
        key: `18etb6`,
      },
    ],
    [`path`, { d: `M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4`, key: `xoc0q4` }],
  ]);
export { m as a, h as i, _ as n, a as o, g as r, v as t };
