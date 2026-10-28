import { b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as Calendar, b as House, n as Wallet, r as Users, u as Shield, x as FolderOpen } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DirigenteShell-Z01acKMg.js
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		to: "/dirigente",
		label: "Inicio",
		icon: House,
		exact: true
	},
	{
		to: "/dirigente/socios",
		label: "Socios",
		icon: Users
	},
	{
		to: "/dirigente/eventos",
		label: "Eventos",
		icon: Calendar
	},
	{
		to: "/dirigente/pagos",
		label: "Pagos",
		icon: Wallet
	},
	{
		to: "/dirigente/mas",
		label: "Mi Club",
		icon: FolderOpen
	}
];
function DirigenteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-screen w-full max-w-[480px] flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 bg-background/90 px-5 pb-2 pt-3 backdrop-blur",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/dirigente",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
							className: "h-5 w-5",
							strokeWidth: 2.4
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base font-extrabold tracking-tight text-foreground",
							children: "ClubGestión"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-bold uppercase tracking-wider text-primary",
							children: "Dirigente"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/jugador",
					"aria-label": "Ver como jugador",
					className: "flex min-h-11 items-center rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground",
					children: "Modo jugador"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 px-5 pb-28 pt-2",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirigenteBottomNav, {})
		]
	});
}
function DirigenteBottomNav() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Navegación de dirigente",
		className: "app-nav fixed bottom-0 left-1/2 z-40 w-full max-w-[480px] -translate-x-1/2 border-t border-border bg-card/95 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex items-center justify-around px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2",
			children: items.map(({ to, label, icon: Icon, exact }) => {
				const active = exact ? pathname === to : pathname.startsWith(to);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to,
					"aria-current": active ? "page" : void 0,
					className: "flex w-16 flex-col items-center gap-1 text-[11px] font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `flex h-10 w-12 items-center justify-center rounded-2xl transition-colors ${active ? "bg-primary-soft text-primary" : "text-muted-foreground"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-5 w-5",
							strokeWidth: 2.2
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: active ? "text-foreground" : "text-muted-foreground",
						children: label
					})]
				}) }, to);
			})
		})
	});
}
function DSectionTitle({ children, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3 mt-6 flex items-end justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-lg font-bold tracking-tight",
			children
		}), action]
	});
}
//#endregion
export { DirigenteShell as n, DSectionTitle as t };
