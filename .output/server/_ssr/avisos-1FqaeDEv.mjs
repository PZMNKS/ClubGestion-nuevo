import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { g as Megaphone } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-DFRHCvJm.mjs";
import { o as player } from "./mock-data-CqGgOLXS.mjs";
import { r as usePrototype } from "./prototype-state-C9Ig4_P9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/avisos-1FqaeDEv.js
var import_jsx_runtime = require_jsx_runtime();
function AvisosPage() {
	const { avisos } = usePrototype();
	const list = avisos.filter((a) => a.destinatarios === "Todos" || a.destinatarios === player.category || a.destinatarios === "Socios");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-extrabold",
			children: "Avisos"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: [player.category, " · Comunicados del club"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 space-y-3",
			children: list.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-2xl bg-card p-4 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "min-w-0 text-base font-bold",
							children: a.titulo
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm",
						children: a.cuerpo
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: [
							a.destinatarios,
							" · ",
							a.autor,
							" · ",
							a.fecha
						]
					})
				]
			}, a.id))
		})
	] });
}
//#endregion
export { AvisosPage as component };
