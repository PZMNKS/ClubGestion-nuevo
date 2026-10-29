import { c as e, d as t, l as n } from "./useSelector-7GdJWpjS.js";
import { c as r, l as i, m as a, s as o } from "./index-D8svfn-J.js";
import { t as s } from "./x-DCgjeFcw.js";
import {
  a as c,
  i as l,
  n as u,
  o as d,
  r as f,
  t as p,
} from "./dist-BlEsai3z.js";
var m = t(n(), 1),
  h = Object.defineProperty,
  g = (e, t) => h(e, `name`, { value: t, configurable: !0 }),
  _ = m.useId || (() => void 0),
  v = 0;
function y(e) {
  let [t, n] = m.useState(_());
  return (
    l(() => {
      e || n((e) => e ?? String(v++));
    }, [e]),
    e || (t ? `radix-${t}` : ``)
  );
}
g(y, `useId`);
var b = Object.defineProperty,
  x = (e, t) => b(e, `name`, { value: t, configurable: !0 }),
  S = m.useInsertionEffect;
function C(e) {
  let t = m.useRef(e);
  return (
    typeof S == `function`
      ? S(() => {
          t.current = e;
        })
      : l(() => {
          t.current = e;
        }),
    m.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      [],
    )
  );
}
x(C, `useCallbackRef`);
var w = e(),
  ee = Object.defineProperty,
  T = (e, t) => ee(e, `name`, { value: t, configurable: !0 }),
  te = `dismissableLayer.update`,
  ne = `dismissableLayer.pointerDownOutside`,
  E = `dismissableLayer.focusOutside`,
  re,
  ie = m.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
    dismissableSurfaces: new Set(),
  }),
  ae = m.forwardRef(
    T(function (e, t) {
      let {
          disableOutsidePointerEvents: n = !1,
          deferPointerDownOutside: r = !1,
          onEscapeKeyDown: a,
          onPointerDownOutside: o,
          onFocusOutside: s,
          onInteractOutside: c,
          onDismiss: l,
          ...u
        } = e,
        f = m.useContext(ie),
        [h, g] = m.useState(null),
        _ = h?.ownerDocument ?? globalThis?.document,
        [, v] = m.useState({}),
        y = i(t, g),
        b = Array.from(f.layers),
        [x] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1),
        S = x ? b.indexOf(x) : -1,
        ee = h ? b.indexOf(h) : -1,
        ne = f.layersWithOutsidePointerEventsDisabled.size > 0,
        E = ee >= S,
        ae = m.useRef(!1),
        oe = ce(
          (e) => {
            (o?.(e), c?.(e), e.defaultPrevented || l?.());
          },
          {
            ownerDocument: _,
            deferPointerDownOutside: r,
            isDeferredPointerDownOutsideRef: ae,
            dismissableSurfaces: f.dismissableSurfaces,
            shouldHandlePointerDownOutside: m.useCallback(
              (e) => {
                if (!(e instanceof Node)) return !1;
                let t = [...f.branches].some((t) => t.contains(e));
                return E && !t;
              },
              [f.branches, E],
            ),
          },
        ),
        se = le((e) => {
          if (r && ae.current) return;
          let t = e.target;
          [...f.branches].some((e) => e.contains(t)) ||
            (s?.(e), c?.(e), e.defaultPrevented || l?.());
        }, _),
        D = h ? ee === b.length - 1 : !1,
        O = C((e) => {
          e.key === `Escape` &&
            (a?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()));
        });
      return (
        m.useEffect(() => {
          if (D)
            return (
              _.addEventListener(`keydown`, O, { capture: !0 }),
              () => _.removeEventListener(`keydown`, O, { capture: !0 })
            );
        }, [_, D, O]),
        m.useEffect(() => {
          if (h)
            return (
              n &&
                (f.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  ((re = _.body.style.pointerEvents),
                  (_.body.style.pointerEvents = `none`)),
                f.layersWithOutsidePointerEventsDisabled.add(h)),
              f.layers.add(h),
              ue(),
              () => {
                n &&
                  (f.layersWithOutsidePointerEventsDisabled.delete(h),
                  f.layersWithOutsidePointerEventsDisabled.size === 0 &&
                    (_.body.style.pointerEvents = re));
              }
            );
        }, [h, _, n, f]),
        m.useEffect(
          () => () => {
            h &&
              (f.layers.delete(h),
              f.layersWithOutsidePointerEventsDisabled.delete(h),
              ue());
          },
          [h, f],
        ),
        m.useEffect(() => {
          let e = T(() => v({}), `handleUpdate`);
          return (
            document.addEventListener(te, e),
            () => document.removeEventListener(te, e)
          );
        }, []),
        (0, w.jsx)(p.div, {
          ...u,
          ref: y,
          style: {
            pointerEvents: ne ? (E ? `auto` : `none`) : void 0,
            ...e.style,
          },
          onFocusCapture: d(e.onFocusCapture, se.onFocusCapture),
          onBlurCapture: d(e.onBlurCapture, se.onBlurCapture),
          onPointerDownCapture: d(
            e.onPointerDownCapture,
            oe.onPointerDownCapture,
          ),
        })
      );
    }, `DismissableLayer`),
  );
function oe() {
  let e = m.useContext(ie),
    [t, n] = m.useState(null);
  return (
    m.useEffect(() => {
      if (t)
        return (
          e.dismissableSurfaces.add(t),
          () => {
            e.dismissableSurfaces.delete(t);
          }
        );
    }, [t, e.dismissableSurfaces]),
    n
  );
}
T(oe, `useDismissableLayerSurface`);
var se = T(() => !0, `IS_TRUE`);
function ce(e, t) {
  let {
      ownerDocument: n = globalThis?.document,
      deferPointerDownOutside: r = !1,
      isDeferredPointerDownOutsideRef: i,
      dismissableSurfaces: a,
      shouldHandlePointerDownOutside: o = se,
    } = t,
    s = C(e),
    c = m.useRef(!1),
    l = m.useRef(!1),
    u = m.useRef(new Map()),
    d = m.useRef(() => {});
  return (
    m.useEffect(() => {
      function e() {
        ((l.current = !1), (i.current = !1), u.current.clear());
      }
      T(e, `resetOutsideInteraction`);
      function t() {
        return Array.from(u.current.values()).some(Boolean);
      }
      T(t, `isOutsideInteractionIntercepted`);
      function f(e) {
        if (!l.current) return;
        let t = e.target;
        ((t instanceof Node && [...a].some((e) => e.contains(t))) ||
          u.current.set(e.type, !0),
          e.type === `click` &&
            window.setTimeout(() => {
              l.current && d.current();
            }, 0));
      }
      T(f, `handleInteractionCapture`);
      function p(e) {
        l.current && u.current.set(e.type, !1);
      }
      T(p, `handleInteractionBubble`);
      let m = T((a) => {
          if (a.target && !c.current) {
            let f = function () {
              n.removeEventListener(`click`, d.current);
              let r = t();
              (e(), r || D(ne, s, p, { discrete: !0 }));
            };
            if (
              (T(f, `handleAndDispatchPointerDownOutsideEvent`), !o(a.target))
            ) {
              (n.removeEventListener(`click`, d.current),
                e(),
                (c.current = !1));
              return;
            }
            let p = { originalEvent: a };
            ((l.current = !0),
              (i.current = r && a.button === 0),
              u.current.clear(),
              !r || a.button !== 0
                ? f()
                : (n.removeEventListener(`click`, d.current),
                  (d.current = f),
                  n.addEventListener(`click`, d.current, { once: !0 })));
          } else (n.removeEventListener(`click`, d.current), e());
          c.current = !1;
        }, `handlePointerDown`),
        h = [
          `pointerup`,
          `mousedown`,
          `mouseup`,
          `touchstart`,
          `touchend`,
          `click`,
        ];
      for (let e of h) (n.addEventListener(e, f, !0), n.addEventListener(e, p));
      let g = window.setTimeout(() => {
        n.addEventListener(`pointerdown`, m);
      }, 0);
      return () => {
        (window.clearTimeout(g),
          n.removeEventListener(`pointerdown`, m),
          n.removeEventListener(`click`, d.current));
        for (let e of h)
          (n.removeEventListener(e, f, !0), n.removeEventListener(e, p));
      };
    }, [n, s, r, i, a, o]),
    { onPointerDownCapture: T(() => (c.current = !0), `onPointerDownCapture`) }
  );
}
T(ce, `usePointerDownOutside`);
function le(e, t = globalThis?.document) {
  let n = C(e),
    r = m.useRef(!1);
  return (
    m.useEffect(() => {
      let e = T((e) => {
        e.target &&
          !r.current &&
          D(E, n, { originalEvent: e }, { discrete: !1 });
      }, `handleFocus`);
      return (
        t.addEventListener(`focusin`, e),
        () => t.removeEventListener(`focusin`, e)
      );
    }, [t, n]),
    {
      onFocusCapture: T(() => (r.current = !0), `onFocusCapture`),
      onBlurCapture: T(() => (r.current = !1), `onBlurCapture`),
    }
  );
}
T(le, `useFocusOutside`);
function ue() {
  let e = new CustomEvent(te);
  document.dispatchEvent(e);
}
T(ue, `dispatchUpdate`);
function D(e, t, n, { discrete: r }) {
  let i = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && i.addEventListener(e, t, { once: !0 }),
    r ? u(i, a) : i.dispatchEvent(a));
}
T(D, `handleAndDispatchCustomEvent`);
var O = Object.defineProperty,
  k = (e, t) => O(e, `name`, { value: t, configurable: !0 }),
  de = `focusScope.autoFocusOnMount`,
  fe = `focusScope.autoFocusOnUnmount`,
  pe = { bubbles: !1, cancelable: !0 },
  me = m.forwardRef(
    k(function (e, t) {
      let {
          loop: n = !1,
          trapped: r = !1,
          branches: a,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          ...c
        } = e,
        [l, u] = m.useState(null),
        d = C(o),
        f = C(s),
        h = m.useRef(null),
        g = i(t, u),
        _ = m.useRef(a);
      m.useEffect(() => {
        _.current = a;
      });
      let v = m.useCallback(
          (e) =>
            e
              ? l?.contains(e)
                ? !0
                : !!_.current?.some((t) => t.contains(e))
              : !1,
          [l],
        ),
        y = m.useRef({
          paused: !1,
          pause() {
            this.paused = !0;
          },
          resume() {
            this.paused = !1;
          },
        }).current;
      (m.useEffect(() => {
        if (r) {
          let e = function (e) {
              if (y.paused || !l) return;
              let t = e.target;
              v(t) ? (h.current = t) : A(h.current, { select: !0 });
            },
            t = function (e) {
              if (y.paused || !l) return;
              let t = e.relatedTarget;
              t !== null && (v(t) || A(h.current, { select: !0 }));
            },
            n = function (e) {
              if (document.activeElement === document.body)
                for (let t of e) t.removedNodes.length > 0 && A(l);
            };
          (k(e, `handleFocusIn`),
            k(t, `handleFocusOut`),
            k(n, `handleMutations`),
            document.addEventListener(`focusin`, e),
            document.addEventListener(`focusout`, t));
          let r = new MutationObserver(n);
          return (
            l && r.observe(l, { childList: !0, subtree: !0 }),
            () => {
              (document.removeEventListener(`focusin`, e),
                document.removeEventListener(`focusout`, t),
                r.disconnect());
            }
          );
        }
      }, [r, l, y.paused, v]),
        m.useEffect(() => {
          if (l) {
            Te.add(y);
            let e = document.activeElement;
            if (!l.contains(e)) {
              let t = new CustomEvent(de, pe);
              (l.addEventListener(de, d),
                l.dispatchEvent(t),
                t.defaultPrevented ||
                  (ye(De(xe(l)), { select: !0 }),
                  document.activeElement === e && A(l)));
            }
            return () => {
              l.removeEventListener(de, d);
              let t = l.ownerDocument,
                n = CustomEvent;
              setTimeout(() => {
                let r = new n(fe, pe);
                (l.addEventListener(fe, f),
                  l.dispatchEvent(r),
                  r.defaultPrevented || A(e ?? t.body, { select: !0 }),
                  l.removeEventListener(fe, f),
                  Te.remove(y));
              }, 0);
            };
          }
        }, [l, d, f, y]));
      let b = m.useCallback(
        (e) => {
          if ((!n && !r) || y.paused) return;
          let t = e.key === `Tab` && !e.altKey && !e.ctrlKey && !e.metaKey,
            i = document.activeElement;
          if (t && i) {
            let t = e.currentTarget,
              [r, a] = be(t);
            r && a
              ? !e.shiftKey && i === a
                ? (e.preventDefault(), n && A(r, { select: !0 }))
                : e.shiftKey &&
                  i === r &&
                  (e.preventDefault(), n && A(a, { select: !0 }))
              : i === t && e.preventDefault();
          }
        },
        [n, r, y.paused],
      );
      return (0, w.jsx)(p.div, { tabIndex: -1, ...c, ref: g, onKeyDown: b });
    }, `FocusScope`),
  ),
  he = m.createContext(null);
function ge({ registry: e, children: t }) {
  return e ? (0, w.jsx)(he.Provider, { value: e, children: t }) : t;
}
k(ge, `FocusScopeBranchProvider`);
function _e() {
  let [e, t] = m.useState([]);
  return {
    nodes: e,
    registry: m.useMemo(
      () => ({
        add: k((e) => t((t) => (t.includes(e) ? t : [...t, e])), `add`),
        remove: k((e) => t((t) => t.filter((t) => t !== e)), `remove`),
      }),
      [],
    ),
  };
}
k(_e, `useFocusScopeBranchRegistry`);
function ve(e) {
  let t = m.useContext(he);
  m.useEffect(() => {
    if (e && t) return (t.add(e), () => t.remove(e));
  }, [e, t]);
}
k(ve, `useFocusScopeBranch`);
function ye(e, { select: t = !1 } = {}) {
  let n = document.activeElement;
  for (let r of e)
    if ((A(r, { select: t }), document.activeElement !== n)) return;
}
k(ye, `focusFirst`);
function be(e) {
  let t = xe(e);
  return [Se(t, e), Se(t.reverse(), e)];
}
k(be, `getTabbableEdges`);
function xe(e) {
  let t = [],
    n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: k((e) => {
        let t = e.tagName === `INPUT` && e.type === `hidden`;
        return e.disabled || e.hidden || t
          ? NodeFilter.FILTER_SKIP
          : e.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      }, `acceptNode`),
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t;
}
k(xe, `getTabbableCandidates`);
function Se(e, t) {
  let n =
    typeof t.checkVisibility == `function` &&
    t.checkVisibility({ checkVisibilityCSS: !0 });
  for (let r of e)
    if (
      !(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Ce(r, { upTo: t }))
    )
      return r;
}
k(Se, `findVisible`);
function Ce(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === `hidden`) return !0;
  for (; e;) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === `none`) return !0;
    e = e.parentElement;
  }
  return !1;
}
k(Ce, `isHidden`);
function we(e) {
  return e.tagName === `INPUT` && typeof e.select == `function`;
}
k(we, `isSelectableInput`);
function A(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    let n = (e.ownerDocument ?? document).activeElement;
    (e.focus({ preventScroll: !0 }), e !== n && we(e) && t && e.select());
  }
}
k(A, `focus`);
var Te = Ee();
function Ee() {
  let e = [];
  return {
    add(t) {
      let n = e[0];
      (t !== n && n?.pause(), (e = j(e, t)), e.unshift(t));
    },
    remove(t) {
      ((e = j(e, t)), e[0]?.resume());
    },
  };
}
k(Ee, `createFocusScopesStack`);
function j(e, t) {
  let n = [...e],
    r = n.indexOf(t);
  return (r !== -1 && n.splice(r, 1), n);
}
k(j, `arrayRemove`);
function De(e) {
  return e.filter((e) => e.tagName !== `A`);
}
k(De, `removeLinks`);
var Oe = t(a(), 1),
  ke = Object.defineProperty,
  Ae = m.forwardRef(
    ((e, t) => ke(e, `name`, { value: t, configurable: !0 }))(function (e, t) {
      let { container: n, ...r } = e,
        [i, a] = m.useState(!1);
      l(() => a(!0), []);
      let o = n || (i && globalThis?.document?.body);
      return o ? Oe.createPortal((0, w.jsx)(p.div, { ...r, ref: t }), o) : null;
    }, `Portal`),
  ),
  je = Object.defineProperty,
  M = (e, t) => je(e, `name`, { value: t, configurable: !0 });
function Me(e, t) {
  return m.useReducer((e, n) => t[e][n] ?? e, e);
}
M(Me, `useStateMachine`);
var Ne = M((e) => {
  let { present: t, children: n } = e,
    r = Pe(t),
    i =
      typeof n == `function` ? n({ present: r.isPresent }) : m.Children.only(n),
    a = Ie(r.ref, Le(i));
  return typeof n == `function` || r.isPresent
    ? m.cloneElement(i, { ref: a })
    : null;
}, `Presence`);
function Pe(e) {
  let [t, n] = m.useState(),
    r = m.useRef(null),
    i = m.useRef(e),
    a = m.useRef(`none`),
    o = m.useRef(void 0),
    [s, c] = Me(e ? `mounted` : `unmounted`, {
      mounted: { UNMOUNT: `unmounted`, ANIMATION_OUT: `unmountSuspended` },
      unmountSuspended: { MOUNT: `mounted`, ANIMATION_END: `unmounted` },
      unmounted: { MOUNT: `mounted` },
    });
  return (
    m.useEffect(() => {
      s === `mounted`
        ? ((a.current = o.current ?? N(r.current)), (o.current = void 0))
        : (a.current = `none`);
    }, [s]),
    l(() => {
      let t = r.current,
        n = i.current;
      if (n !== e) {
        let r = a.current,
          s = N(t);
        (e
          ? ((o.current = s), c(`MOUNT`))
          : s === `none` || t?.display === `none`
            ? c(`UNMOUNT`)
            : c(n && r !== s ? `ANIMATION_OUT` : `UNMOUNT`),
          (i.current = e));
      }
    }, [e, c]),
    l(() => {
      if (t) {
        let e,
          n = t.ownerDocument.defaultView ?? window,
          o = M((a) => {
            let o = N(r.current).includes(CSS.escape(a.animationName));
            if (a.target === t && o && (c(`ANIMATION_END`), !i.current)) {
              let r = t.style.animationFillMode;
              ((t.style.animationFillMode = `forwards`),
                (e = n.setTimeout(() => {
                  t.style.animationFillMode === `forwards` &&
                    (t.style.animationFillMode = r);
                })));
            }
          }, `handleAnimationEnd`),
          s = M((e) => {
            e.target === t && (a.current = N(r.current));
          }, `handleAnimationStart`);
        return (
          t.addEventListener(`animationstart`, s),
          t.addEventListener(`animationcancel`, o),
          t.addEventListener(`animationend`, o),
          () => {
            (n.clearTimeout(e),
              t.removeEventListener(`animationstart`, s),
              t.removeEventListener(`animationcancel`, o),
              t.removeEventListener(`animationend`, o));
          }
        );
      }
      c(`ANIMATION_END`);
    }, [t, c]),
    {
      isPresent: [`mounted`, `unmountSuspended`].includes(s),
      ref: m.useCallback((e) => {
        if (e) {
          let t = getComputedStyle(e);
          ((r.current = t), (o.current = N(t)));
        } else r.current = null;
        n(e);
      }, []),
    }
  );
}
M(Pe, `usePresence`);
function Fe(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
M(Fe, `setRef`);
function Ie(...e) {
  let t = m.useRef(e);
  return (
    (t.current = e),
    m.useCallback((e) => {
      let n = t.current,
        r = !1,
        i = n.map((t) => {
          let n = Fe(t, e);
          return (!r && typeof n == `function` && (r = !0), n);
        });
      if (r)
        return () => {
          for (let e = 0; e < i.length; e++) {
            let t = i[e];
            typeof t == `function` ? t() : Fe(n[e], null);
          }
        };
    }, [])
  );
}
M(Ie, `useStableComposedRefs`);
function N(e) {
  return e?.animationName || `none`;
}
M(N, `getAnimationName`);
function Le(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
M(Le, `getElementRef`);
var Re = Object.defineProperty,
  ze = (e, t) => Re(e, `name`, { value: t, configurable: !0 }),
  P = 0,
  F = null;
function Be(e) {
  return (Ve(), e.children);
}
ze(Be, `FocusGuards`);
function Ve() {
  m.useEffect(() => {
    F ||= { start: He(), end: He() };
    let { start: e, end: t } = F;
    return (
      document.body.firstElementChild !== e &&
        document.body.insertAdjacentElement(`afterbegin`, e),
      document.body.lastElementChild !== t &&
        document.body.insertAdjacentElement(`beforeend`, t),
      P++,
      () => {
        (P === 1 && (F?.start.remove(), F?.end.remove(), (F = null)),
          (P = Math.max(0, P - 1)));
      }
    );
  }, []);
}
ze(Ve, `useFocusGuards`);
function He() {
  let e = document.createElement(`span`);
  return (
    e.setAttribute(`data-radix-focus-guard`, ``),
    (e.tabIndex = 0),
    (e.style.outline = `none`),
    (e.style.opacity = `0`),
    (e.style.position = `fixed`),
    (e.style.pointerEvents = `none`),
    e
  );
}
ze(He, `createFocusGuard`);
var I = function () {
  return (
    (I =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var i in ((t = arguments[n]), t))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }),
    I.apply(this, arguments)
  );
};
function Ue(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`)
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function We(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) &&
        ((a ||= Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var L = `right-scroll-bar-position`,
  R = `width-before-scroll-bar`,
  Ge = `with-scroll-bars-hidden`,
  Ke = `--removed-body-scroll-bar-size`;
function z(e, t) {
  return (typeof e == `function` ? e(t) : e && (e.current = t), e);
}
function qe(e, t) {
  var n = (0, m.useState)(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(e) {
          var t = n.value;
          t !== e && ((n.value = e), n.callback(e, t));
        },
      },
    };
  })[0];
  return ((n.callback = t), n.facade);
}
var Je = typeof window < `u` ? m.useLayoutEffect : m.useEffect,
  Ye = new WeakMap();
function Xe(e, t) {
  var n = qe(t || null, function (t) {
    return e.forEach(function (e) {
      return z(e, t);
    });
  });
  return (
    Je(
      function () {
        var t = Ye.get(n);
        if (t) {
          var r = new Set(t),
            i = new Set(e),
            a = n.current;
          (r.forEach(function (e) {
            i.has(e) || z(e, null);
          }),
            i.forEach(function (e) {
              r.has(e) || z(e, a);
            }));
        }
        Ye.set(n, e);
      },
      [e],
    ),
    n
  );
}
function Ze(e) {
  return e;
}
function Qe(e, t) {
  t === void 0 && (t = Ze);
  var n = [],
    r = !1;
  return {
    read: function () {
      if (r)
        throw Error(
          "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
        );
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function (e) {
      var i = t(e, r);
      return (
        n.push(i),
        function () {
          n = n.filter(function (e) {
            return e !== i;
          });
        }
      );
    },
    assignSyncMedium: function (e) {
      for (r = !0; n.length;) {
        var t = n;
        ((n = []), t.forEach(e));
      }
      n = {
        push: function (t) {
          return e(t);
        },
        filter: function () {
          return n;
        },
      };
    },
    assignMedium: function (e) {
      r = !0;
      var t = [];
      if (n.length) {
        var i = n;
        ((n = []), i.forEach(e), (t = n));
      }
      var a = function () {
          var n = t;
          ((t = []), n.forEach(e));
        },
        o = function () {
          return Promise.resolve().then(a);
        };
      (o(),
        (n = {
          push: function (e) {
            (t.push(e), o());
          },
          filter: function (e) {
            return ((t = t.filter(e)), n);
          },
        }));
    },
  };
}
function $e(e) {
  e === void 0 && (e = {});
  var t = Qe(null);
  return ((t.options = I({ async: !0, ssr: !1 }, e)), t);
}
var et = function (e) {
  var t = e.sideCar,
    n = Ue(e, [`sideCar`]);
  if (!t)
    throw Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = t.read();
  if (!r) throw Error(`Sidecar medium not found`);
  return m.createElement(r, I({}, n));
};
et.isSideCarExport = !0;
function tt(e, t) {
  return (e.useMedium(t), et);
}
var nt = $e(),
  B = function () {},
  V = m.forwardRef(function (e, t) {
    var n = m.useRef(null),
      r = m.useState({
        onScrollCapture: B,
        onWheelCapture: B,
        onTouchMoveCapture: B,
      }),
      i = r[0],
      a = r[1],
      o = e.forwardProps,
      s = e.children,
      c = e.className,
      l = e.removeScrollBar,
      u = e.enabled,
      d = e.shards,
      f = e.sideCar,
      p = e.noRelative,
      h = e.noIsolation,
      g = e.inert,
      _ = e.allowPinchZoom,
      v = e.as,
      y = v === void 0 ? `div` : v,
      b = e.gapMode,
      x = Ue(e, [
        `forwardProps`,
        `children`,
        `className`,
        `removeScrollBar`,
        `enabled`,
        `shards`,
        `sideCar`,
        `noRelative`,
        `noIsolation`,
        `inert`,
        `allowPinchZoom`,
        `as`,
        `gapMode`,
      ]),
      S = f,
      C = Xe([n, t]),
      w = I(I({}, x), i);
    return m.createElement(
      m.Fragment,
      null,
      u &&
        m.createElement(S, {
          sideCar: nt,
          removeScrollBar: l,
          shards: d,
          noRelative: p,
          noIsolation: h,
          inert: g,
          setCallbacks: a,
          allowPinchZoom: !!_,
          lockRef: n,
          gapMode: b,
        }),
      o
        ? m.cloneElement(m.Children.only(s), I(I({}, w), { ref: C }))
        : m.createElement(y, I({}, w, { className: c, ref: C }), s),
    );
  });
((V.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
  (V.classNames = { fullWidth: R, zeroRight: L }));
var rt = function () {
  if (typeof __webpack_nonce__ < `u`) return __webpack_nonce__;
};
function it() {
  if (!document) return null;
  var e = document.createElement(`style`);
  e.type = `text/css`;
  var t = rt();
  return (t && e.setAttribute(`nonce`, t), e);
}
function at(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function ot(e) {
  (document.head || document.getElementsByTagName(`head`)[0]).appendChild(e);
}
var st = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        (e == 0 && (t = it()) && (at(t, n), ot(t)), e++);
      },
      remove: function () {
        (e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
      },
    };
  },
  ct = function () {
    var e = st();
    return function (t, n) {
      m.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  lt = function () {
    var e = ct();
    return function (t) {
      var n = t.styles,
        r = t.dynamic;
      return (e(n, r), null);
    };
  },
  ut = { left: 0, top: 0, right: 0, gap: 0 },
  dt = function (e) {
    return parseInt(e || ``, 10) || 0;
  },
  ft = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === `padding` ? `paddingLeft` : `marginLeft`],
      r = t[e === `padding` ? `paddingTop` : `marginTop`],
      i = t[e === `padding` ? `paddingRight` : `marginRight`];
    return [dt(n), dt(r), dt(i)];
  },
  pt = function (e) {
    if ((e === void 0 && (e = `margin`), typeof window > `u`)) return ut;
    var t = ft(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  mt = lt(),
  H = `data-scroll-locked`,
  ht = function (e, t, n, r) {
    var i = e.left,
      a = e.top,
      o = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = `margin`),
      `
  .${Ge} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${H}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
      t && `position: relative ${r};`,
      n === `margin` &&
        `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
      n === `padding` && `padding-right: ${s}px ${r};`,
    ]
      .filter(Boolean)
      .join(``)}
  }
  
  .${L} {
    right: ${s}px ${r};
  }
  
  .${R} {
    margin-right: ${s}px ${r};
  }
  
  .${L} .${L} {
    right: 0 ${r};
  }
  
  .${R} .${R} {
    margin-right: 0 ${r};
  }
  
  body[${H}] {
    ${Ke}: ${s}px;
  }
`
    );
  },
  gt = function () {
    var e = parseInt(
      document.body.getAttribute(`data-scroll-locked`) || `0`,
      10,
    );
    return isFinite(e) ? e : 0;
  },
  _t = function () {
    m.useEffect(function () {
      return (
        document.body.setAttribute(H, (gt() + 1).toString()),
        function () {
          var e = gt() - 1;
          e <= 0
            ? document.body.removeAttribute(H)
            : document.body.setAttribute(H, e.toString());
        }
      );
    }, []);
  },
  vt = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      i = r === void 0 ? `margin` : r;
    _t();
    var a = m.useMemo(
      function () {
        return pt(i);
      },
      [i],
    );
    return m.createElement(mt, { styles: ht(a, !t, i, n ? `` : `!important`) });
  },
  yt = !1;
if (typeof window < `u`)
  try {
    var U = Object.defineProperty({}, "passive", {
      get: function () {
        return ((yt = !0), !0);
      },
    });
    (window.addEventListener(`test`, U, U),
      window.removeEventListener(`test`, U, U));
  } catch {
    yt = !1;
  }
var W = yt ? { passive: !1 } : !1,
  bt = function (e) {
    return e.tagName === `TEXTAREA`;
  },
  xt = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== `hidden` &&
      !(n.overflowY === n.overflowX && !bt(e) && n[t] === `visible`)
    );
  },
  St = function (e) {
    return xt(e, `overflowY`);
  },
  Ct = function (e) {
    return xt(e, `overflowX`);
  },
  wt = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      if (
        (typeof ShadowRoot < `u` && r instanceof ShadowRoot && (r = r.host),
        Dt(e, r))
      ) {
        var i = Ot(e, r);
        if (i[1] > i[2]) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  Tt = function (e) {
    return [e.scrollTop, e.scrollHeight, e.clientHeight];
  },
  Et = function (e) {
    return [e.scrollLeft, e.scrollWidth, e.clientWidth];
  },
  Dt = function (e, t) {
    return e === `v` ? St(t) : Ct(t);
  },
  Ot = function (e, t) {
    return e === `v` ? Tt(t) : Et(t);
  },
  kt = function (e, t) {
    return e === `h` && t === `rtl` ? -1 : 1;
  },
  At = function (e, t, n, r, i) {
    var a = kt(e, window.getComputedStyle(t).direction),
      o = a * r,
      s = n.target,
      c = t.contains(s),
      l = !1,
      u = o > 0,
      d = 0,
      f = 0;
    do {
      if (!s) break;
      var p = Ot(e, s),
        m = p[0],
        h = p[1] - p[2] - a * m;
      (m || h) && Dt(e, s) && ((d += h), (f += m));
      var g = s.parentNode;
      s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
    } while ((!c && s !== document.body) || (c && (t.contains(s) || t === s)));
    return (
      ((u && ((i && Math.abs(d) < 1) || (!i && o > d))) ||
        (!u && ((i && Math.abs(f) < 1) || (!i && -o > f)))) &&
        (l = !0),
      l
    );
  },
  G = function (e) {
    return `changedTouches` in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  jt = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Mt = function (e) {
    return e && `current` in e ? e.current : e;
  },
  Nt = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Pt = function (e) {
    return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
  },
  Ft = 0,
  K = [];
function It(e) {
  var t = m.useRef([]),
    n = m.useRef([0, 0]),
    r = m.useRef(),
    i = m.useState(Ft++)[0],
    a = m.useState(lt)[0],
    o = m.useRef(e);
  (m.useEffect(
    function () {
      o.current = e;
    },
    [e],
  ),
    m.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add(`block-interactivity-${i}`);
          var t = We([e.lockRef.current], (e.shards || []).map(Mt), !0).filter(
            Boolean,
          );
          return (
            t.forEach(function (e) {
              return e.classList.add(`allow-interactivity-${i}`);
            }),
            function () {
              (document.body.classList.remove(`block-interactivity-${i}`),
                t.forEach(function (e) {
                  return e.classList.remove(`allow-interactivity-${i}`);
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    ));
  var s = m.useCallback(function (e, t) {
      if (
        (`touches` in e && e.touches.length === 2) ||
        (e.type === `wheel` && e.ctrlKey)
      )
        return !o.current.allowPinchZoom;
      var i = G(e),
        a = n.current,
        s = `deltaX` in e ? e.deltaX : a[0] - i[0],
        c = `deltaY` in e ? e.deltaY : a[1] - i[1],
        l,
        u = e.target,
        d = Math.abs(s) > Math.abs(c) ? `h` : `v`;
      if (`touches` in e && d === `h` && u.type === `range`) return !1;
      var f = window.getSelection(),
        p = f && f.anchorNode;
      if (p && (p === u || p.contains(u))) return !1;
      var m = wt(d, u);
      if (!m) return !0;
      if ((m ? (l = d) : ((l = d === `v` ? `h` : `v`), (m = wt(d, u))), !m))
        return !1;
      if (
        (!r.current && `changedTouches` in e && (s || c) && (r.current = l), !l)
      )
        return !0;
      var h = r.current || l;
      return At(h, t, e, h === `h` ? s : c, !0);
    }, []),
    c = m.useCallback(function (e) {
      var n = e;
      if (K.length && K[K.length - 1] === a) {
        var r = `deltaY` in n ? jt(n) : G(n),
          i = t.current.filter(function (e) {
            return (
              e.name === n.type &&
              (e.target === n.target || n.target === e.shadowParent) &&
              Nt(e.delta, r)
            );
          })[0];
        if (i && i.should) n.cancelable && n.preventDefault();
        else if (!i) {
          var c = (o.current.shards || [])
            .map(Mt)
            .filter(Boolean)
            .filter(function (e) {
              return e.contains(n.target);
            });
          (c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) &&
            n.cancelable &&
            n.preventDefault();
        }
      }
    }, []),
    l = m.useCallback(function (e, n, r, i) {
      var a = { name: e, delta: n, target: r, should: i, shadowParent: Lt(r) };
      (t.current.push(a),
        setTimeout(function () {
          t.current = t.current.filter(function (e) {
            return e !== a;
          });
        }, 1));
    }, []),
    u = m.useCallback(function (e) {
      ((n.current = G(e)), (r.current = void 0));
    }, []),
    d = m.useCallback(function (t) {
      l(t.type, jt(t), t.target, s(t, e.lockRef.current));
    }, []),
    f = m.useCallback(function (t) {
      l(t.type, G(t), t.target, s(t, e.lockRef.current));
    }, []);
  m.useEffect(function () {
    return (
      K.push(a),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener(`wheel`, c, W),
      document.addEventListener(`touchmove`, c, W),
      document.addEventListener(`touchstart`, u, W),
      function () {
        ((K = K.filter(function (e) {
          return e !== a;
        })),
          document.removeEventListener(`wheel`, c, W),
          document.removeEventListener(`touchmove`, c, W),
          document.removeEventListener(`touchstart`, u, W));
      }
    );
  }, []);
  var p = e.removeScrollBar,
    h = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    h ? m.createElement(a, { styles: Pt(i) }) : null,
    p
      ? m.createElement(vt, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null,
  );
}
function Lt(e) {
  for (var t = null; e !== null;)
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
      (e = e.parentNode));
  return t;
}
var Rt = tt(nt, It),
  zt = m.forwardRef(function (e, t) {
    return m.createElement(V, I({}, e, { ref: t, sideCar: Rt }));
  });
zt.classNames = V.classNames;
var Bt = function (e) {
    return typeof document > `u`
      ? null
      : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
  },
  q = new WeakMap(),
  J = new WeakMap(),
  Y = {},
  X = 0,
  Vt = function (e) {
    return e && (e.host || Vt(e.parentNode));
  },
  Ht = function (e, t) {
    return t
      .map(function (t) {
        if (e.contains(t)) return t;
        var n = Vt(t);
        return n && e.contains(n)
          ? n
          : (console.error(
              `aria-hidden`,
              t,
              `in not contained inside`,
              e,
              `. Doing nothing`,
            ),
            null);
      })
      .filter(function (e) {
        return !!e;
      });
  },
  Ut = function (e, t, n, r) {
    var i = Ht(t, Array.isArray(e) ? e : [e]);
    Y[n] || (Y[n] = new WeakMap());
    var a = Y[n],
      o = [],
      s = new Set(),
      c = new Set(i),
      l = function (e) {
        e && !s.has(e) && (s.add(e), l(e.parentNode));
      };
    i.forEach(l);
    var u = function (e) {
      e &&
        !c.has(e) &&
        Array.prototype.forEach.call(e.children, function (e) {
          if (s.has(e)) u(e);
          else
            try {
              var t = e.getAttribute(r),
                i = t !== null && t !== `false`,
                c = (q.get(e) || 0) + 1,
                l = (a.get(e) || 0) + 1;
              (q.set(e, c),
                a.set(e, l),
                o.push(e),
                c === 1 && i && J.set(e, !0),
                l === 1 && e.setAttribute(n, `true`),
                i || e.setAttribute(r, `true`));
            } catch (t) {
              console.error(`aria-hidden: cannot operate on `, e, t);
            }
        });
    };
    return (
      u(t),
      s.clear(),
      X++,
      function () {
        (o.forEach(function (e) {
          var t = q.get(e) - 1,
            i = a.get(e) - 1;
          (q.set(e, t),
            a.set(e, i),
            t || (J.has(e) || e.removeAttribute(r), J.delete(e)),
            i || e.removeAttribute(n));
        }),
          X--,
          X ||
            ((q = new WeakMap()),
            (q = new WeakMap()),
            (J = new WeakMap()),
            (Y = {})));
      }
    );
  },
  Wt = function (e, t, n) {
    n === void 0 && (n = `data-aria-hidden`);
    var r = Array.from(Array.isArray(e) ? e : [e]),
      i = t || Bt(e);
    return i
      ? (r.push.apply(r, Array.from(i.querySelectorAll(`[aria-live], script`))),
        Ut(r, i, n, `aria-hidden`))
      : function () {
          return null;
        };
  },
  Gt = Object.defineProperty,
  Z = (e, t) => Gt(e, `name`, { value: t, configurable: !0 }),
  Kt = `Dialog`,
  [qt, Jt] = c(Kt),
  [Yt, Q] = qt(Kt),
  Xt = Z((e) => {
    let {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: i,
        onOpenChange: a,
        modal: o = !0,
      } = e,
      s = m.useRef(null),
      c = m.useRef(null),
      { nodes: l, registry: u } = _e(),
      [d, p] = f({ prop: r, defaultProp: i ?? !1, onChange: a, caller: Kt }),
      [h, g] = m.useState(0),
      [_, v] = m.useState(0);
    return (0, w.jsx)(Yt, {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: y(),
      titleId: y(),
      descriptionId: y(),
      titlePresent: h > 0,
      descriptionPresent: _ > 0,
      setTitleCount: g,
      setDescriptionCount: v,
      open: d,
      onOpenChange: p,
      onOpenToggle: m.useCallback(() => p((e) => !e), [p]),
      modal: o,
      branchNodes: l,
      branchRegistry: u,
      children: n,
    });
  }, `Dialog`),
  Zt = `DialogPortal`,
  [Qt, $t] = qt(Zt, { forceMount: void 0 }),
  en = Z((e) => {
    let { __scopeDialog: t, forceMount: n, children: r, container: i } = e,
      a = Q(Zt, t);
    return (0, w.jsx)(Qt, {
      scope: t,
      forceMount: n,
      children: m.Children.map(r, (e) =>
        (0, w.jsx)(Ne, {
          present: n || a.open,
          children: (0, w.jsx)(Ae, { asChild: !0, container: i, children: e }),
        }),
      ),
    });
  }, `DialogPortal`),
  tn = `DialogOverlay`,
  nn = m.forwardRef(
    Z(function (e, t) {
      let n = $t(tn, e.__scopeDialog),
        { forceMount: r = n.forceMount, ...i } = e,
        a = Q(tn, e.__scopeDialog);
      return a.modal
        ? (0, w.jsx)(Ne, {
            present: r || a.open,
            children: (0, w.jsx)(an, { ...i, ref: t }),
          })
        : null;
    }, `DialogOverlay`),
  ),
  rn = r(`DialogOverlay.RemoveScroll`),
  an = m.forwardRef(
    Z(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        a = Q(tn, n),
        o = oe(),
        s = i(t, o);
      return (0, w.jsx)(zt, {
        as: rn,
        allowPinchZoom: !0,
        shards: m.useMemo(
          () => [a.contentRef, ...a.branchNodes.map((e) => ({ current: e }))],
          [a.contentRef, a.branchNodes],
        ),
        children: (0, w.jsx)(p.div, {
          "data-state": hn(a.open),
          ...r,
          ref: s,
          style: { pointerEvents: `auto`, ...r.style },
        }),
      });
    }, `DialogOverlayImpl`),
  ),
  $ = `DialogContent`,
  on = m.forwardRef(
    Z(function (e, t) {
      let n = $t($, e.__scopeDialog),
        { forceMount: r = n.forceMount, ...i } = e,
        a = Q($, e.__scopeDialog);
      return (0, w.jsx)(Ne, {
        present: r || a.open,
        children: a.modal
          ? (0, w.jsx)(sn, { ...i, ref: t })
          : (0, w.jsx)(cn, { ...i, ref: t }),
      });
    }, `DialogContent`),
  ),
  sn = m.forwardRef(
    Z(function (e, t) {
      let n = Q($, e.__scopeDialog),
        r = m.useRef(null),
        a = i(t, n.contentRef, r);
      return (
        m.useEffect(() => {
          let e = r.current;
          if (e) return Wt(e);
        }, []),
        (0, w.jsx)(ln, {
          ...e,
          ref: a,
          trapFocus: n.open,
          disableOutsidePointerEvents: n.open,
          onCloseAutoFocus: d(e.onCloseAutoFocus, (e) => {
            (e.preventDefault(), n.triggerRef.current?.focus());
          }),
          onPointerDownOutside: d(e.onPointerDownOutside, (e) => {
            let t = e.detail.originalEvent,
              n = t.button === 0 && t.ctrlKey === !0;
            (t.button === 2 || n) && e.preventDefault();
          }),
          onFocusOutside: d(e.onFocusOutside, (e) => e.preventDefault()),
        })
      );
    }, `DialogContentModal`),
  ),
  cn = m.forwardRef(
    Z(function (e, t) {
      let n = Q($, e.__scopeDialog),
        r = m.useRef(!1),
        i = m.useRef(!1);
      return (0, w.jsx)(ln, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (t) => {
          (e.onCloseAutoFocus?.(t),
            t.defaultPrevented ||
              (r.current || n.triggerRef.current?.focus(), t.preventDefault()),
            (r.current = !1),
            (i.current = !1));
        },
        onInteractOutside: (t) => {
          (e.onInteractOutside?.(t),
            t.defaultPrevented ||
              ((r.current = !0),
              t.detail.originalEvent.type === `pointerdown` &&
                (i.current = !0)));
          let a = t.target;
          (n.triggerRef.current?.contains(a) && t.preventDefault(),
            t.detail.originalEvent.type === `focusin` &&
              i.current &&
              t.preventDefault());
        },
      });
    }, `DialogContentNonModal`),
  ),
  ln = m.forwardRef(
    Z(function (e, t) {
      let {
          __scopeDialog: n,
          trapFocus: r,
          onOpenAutoFocus: i,
          onCloseAutoFocus: a,
          "aria-describedby": o,
          children: s,
          ...c
        } = e,
        l = Q($, n);
      return (
        Ve(),
        (0, w.jsx)(ge, {
          registry: l.branchRegistry,
          children: (0, w.jsx)(me, {
            asChild: !0,
            loop: !0,
            trapped: r,
            branches: l.branchNodes,
            onMountAutoFocus: i,
            onUnmountAutoFocus: a,
            children: (0, w.jsx)(ae, {
              role: `dialog`,
              id: l.contentId,
              "aria-labelledby": l.titlePresent ? l.titleId : void 0,
              "aria-describedby": l.descriptionPresent
                ? mn(o, l.descriptionId)
                : o,
              "data-state": hn(l.open),
              ...c,
              ref: t,
              deferPointerDownOutside: !0,
              onDismiss: () => l.onOpenChange(!1),
              children: s,
            }),
          }),
        })
      );
    }, `DialogContentImpl`),
  ),
  un = m.forwardRef(
    Z(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = Q(`DialogTitle`, n),
        { setTitleCount: a } = i;
      return (
        l(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]),
        (0, w.jsx)(p.h2, { id: i.titleId, ...r, ref: t })
      );
    }, `DialogTitle`),
  ),
  dn = m.forwardRef(
    Z(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = Q(`DialogDescription`, n),
        { setDescriptionCount: a } = i;
      return (
        l(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]),
        (0, w.jsx)(p.p, { id: i.descriptionId, ...r, ref: t })
      );
    }, `DialogDescription`),
  ),
  fn = `DialogClose`,
  pn = m.forwardRef(
    Z(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = Q(fn, n);
      return (0, w.jsx)(p.button, {
        type: `button`,
        ...r,
        ref: t,
        onClick: d(e.onClick, () => i.onOpenChange(!1)),
      });
    }, `DialogClose`),
  );
function mn(...e) {
  let t = new Set();
  for (let n of e)
    if (typeof n == `string`)
      for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
  return t.size > 0 ? Array.from(t).join(` `) : void 0;
}
Z(mn, `concatAriaDescribedby`);
function hn(e) {
  return e ? `open` : `closed`;
}
Z(hn, `getState`);
var gn = Xt,
  _n = en,
  vn = pn,
  yn = m.forwardRef(({ className: e, ...t }, n) =>
    (0, w.jsx)(nn, {
      ref: n,
      className: o(
        `fixed inset-x-0 top-0 bottom-[80px] z-50 bg-foreground/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`,
        e,
      ),
      ...t,
    }),
  );
yn.displayName = nn.displayName;
var bn = m.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, w.jsxs)(_n, {
    children: [
      (0, w.jsx)(yn, {}),
      (0, w.jsxs)(on, {
        ref: r,
        className: o(
          `fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg`,
          e,
        ),
        ...n,
        children: [
          t,
          (0, w.jsxs)(pn, {
            className: `absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground`,
            children: [
              (0, w.jsx)(s, { className: `h-4 w-4` }),
              (0, w.jsx)(`span`, { className: `sr-only`, children: `Cerrar` }),
            ],
          }),
        ],
      }),
    ],
  }),
);
bn.displayName = on.displayName;
var xn = ({ className: e, ...t }) =>
  (0, w.jsx)(`div`, {
    className: o(`flex flex-col space-y-1.5 text-center sm:text-left`, e),
    ...t,
  });
xn.displayName = `DialogHeader`;
var Sn = ({ className: e, ...t }) =>
  (0, w.jsx)(`div`, {
    className: o(
      `flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2`,
      e,
    ),
    ...t,
  });
Sn.displayName = `DialogFooter`;
var Cn = m.forwardRef(({ className: e, ...t }, n) =>
  (0, w.jsx)(un, {
    ref: n,
    className: o(`text-lg font-semibold leading-none tracking-tight`, e),
    ...t,
  }),
);
Cn.displayName = un.displayName;
var wn = m.forwardRef(({ className: e, ...t }, n) =>
  (0, w.jsx)(dn, {
    ref: n,
    className: o(`text-sm text-muted-foreground`, e),
    ...t,
  }),
);
wn.displayName = dn.displayName;
export { Sn as a, wn as i, vn as n, xn as o, bn as r, Cn as s, gn as t };
