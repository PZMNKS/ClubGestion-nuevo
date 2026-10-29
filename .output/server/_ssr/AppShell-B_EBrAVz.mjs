import {
  b as Link,
  p as useRouterState,
} from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import {
  M as Calendar,
  _ as Megaphone,
  i as UserRound,
  n as Wallet,
  u as Shield,
  x as House,
} from "../_libs/lucide-react.mjs";
// node_modules/.nitro/vite/services/ssr/assets/AppShell-B_EBrAVz.js
var import_jsx_runtime = require_jsx_runtime();
var items = [
  {
    to: "/jugador",
    label: "Inicio",
    icon: House,
  },
  {
    to: "/eventos",
    label: "Eventos",
    icon: Calendar,
  },
  {
    to: "/pagos",
    label: "Mis Pagos",
    icon: Wallet,
  },
  {
    to: "/club",
    label: "Club",
    icon: Shield,
  },
  {
    to: "/avisos",
    label: "Avisos",
    icon: Megaphone,
  },
];
function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
    "aria-label": "Navegación de jugador",
    className:
      "app-nav fixed bottom-0 left-1/2 z-40 w-full max-w-[480px] -translate-x-1/2 border-t border-border bg-card/95 backdrop-blur",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
      className:
        "flex items-center justify-around px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2",
      children: items.map(({ to, label, icon: Icon }) => {
        const active =
          to === "/jugador" ? pathname === "/jugador" : pathname.startsWith(to);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "li",
          {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
              to,
              "aria-current": active ? "page" : void 0,
              className:
                "flex w-16 flex-col items-center gap-1 text-[11px] font-medium",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: `flex h-10 w-12 items-center justify-center rounded-2xl transition-colors ${active ? "bg-success-soft text-success" : "text-muted-foreground"}`,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
                    className: "h-5 w-5",
                    strokeWidth: 2.2,
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: active
                    ? "text-foreground"
                    : "text-muted-foreground",
                  children: label,
                }),
              ],
            }),
          },
          to,
        );
      }),
    }),
  });
}
function AppShell({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className:
      "mx-auto flex min-h-screen w-full max-w-[480px] flex-col bg-background",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
        className:
          "sticky top-0 z-30 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 bg-background/90 px-5 pb-2 pt-3 backdrop-blur",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
            to: "/jugador",
            className: "text-2xl font-extrabold tracking-tight text-primary",
            children: "ClubGestión",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                to: "/dirigente",
                className:
                  "flex min-h-11 items-center rounded-xl bg-secondary px-2 text-xs font-semibold text-secondary-foreground",
                children: "Modo dirigente",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                to: "/perfil",
                "aria-label": "Perfil",
                className:
                  "flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  UserRound,
                  { className: "h-5 w-5" },
                ),
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
        className: "flex-1 px-5 pb-28 pt-2",
        children,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {}),
    ],
  });
}
function SectionTitle({ children, action }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "mb-3 mt-6 flex items-end justify-between",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
        className: "text-xl font-bold tracking-tight",
        children,
      }),
      action,
    ],
  });
}
export { SectionTitle as n, AppShell as t };
