globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { i as toEventHandler, n as defineHandler, o as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/AppShell-CLIta-JQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5a-I1pwqQ/9eRQyntuyupd97LTyI9A\"",
		"mtime": "2026-10-20T22:22:10.901Z",
		"size": 2650,
		"path": "../public/assets/AppShell-CLIta-JQ.js"
	},
	"/assets/AttendanceActions-DMNYevem.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"559-x7izlBjarHhETeR2JtviwR3ptQ0\"",
		"mtime": "2026-10-20T22:22:10.901Z",
		"size": 1369,
		"path": "../public/assets/AttendanceActions-DMNYevem.js"
	},
	"/assets/DirigenteShell-6oQN0OXf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ba3-/6OlRbhsbMah7gorkacItb0aHBc\"",
		"mtime": "2026-10-20T22:22:10.901Z",
		"size": 2979,
		"path": "../public/assets/DirigenteShell-6oQN0OXf.js"
	},
	"/assets/EventCard-DaNEGq72.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"94c-Zh1jXWj/IpDmayMkWbWdbV6+AGg\"",
		"mtime": "2026-10-20T22:22:10.901Z",
		"size": 2380,
		"path": "../public/assets/EventCard-DaNEGq72.js"
	},
	"/assets/FlowSheet-DDxLSmi5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ea-YzP/WIHzO7Ob1dweuD2+R4ox2gk\"",
		"mtime": "2026-10-20T22:22:10.902Z",
		"size": 746,
		"path": "../public/assets/FlowSheet-DDxLSmi5.js"
	},
	"/assets/avisos-CHV-0qqc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"473-/d+jw7vCASqvXE3C+iOJjAXwTdU\"",
		"mtime": "2026-10-20T22:22:10.902Z",
		"size": 1139,
		"path": "../public/assets/avisos-CHV-0qqc.js"
	},
	"/assets/chevron-right-Bkyt3U_Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"78-n+WYW9CHafawH5sMINN/xzUsmo8\"",
		"mtime": "2026-10-20T22:22:10.902Z",
		"size": 120,
		"path": "../public/assets/chevron-right-Bkyt3U_Z.js"
	},
	"/assets/circle-check-C4zx24_H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a8-sSVFALK6FhcE601hldkr3+UzYzc\"",
		"mtime": "2026-10-20T22:22:10.902Z",
		"size": 168,
		"path": "../public/assets/circle-check-C4zx24_H.js"
	},
	"/assets/clipboard-list-pTWPQ4zk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"191-gEs7bwSX2IbS9BM63vbIZa4TKqw\"",
		"mtime": "2026-10-20T22:22:10.902Z",
		"size": 401,
		"path": "../public/assets/clipboard-list-pTWPQ4zk.js"
	},
	"/assets/clock-CVTxvbcX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f-18b4lDQFWckrjMKE3rdZoTZFuYc\"",
		"mtime": "2026-10-20T22:22:10.902Z",
		"size": 159,
		"path": "../public/assets/clock-CVTxvbcX.js"
	},
	"/assets/dirigente-Dclh1Mao.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-NWHgvWeRKTDUuxA5C5YGbdIo5f4\"",
		"mtime": "2026-10-20T22:22:10.902Z",
		"size": 141,
		"path": "../public/assets/dirigente-Dclh1Mao.js"
	},
	"/assets/dirigente-data-BIk1Aiby.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1950-cMCYWXuVtZJ4SiQYFh6cJigjwFg\"",
		"mtime": "2026-10-20T22:22:10.902Z",
		"size": 6480,
		"path": "../public/assets/dirigente-data-BIk1Aiby.js"
	},
	"/assets/dirigente.eventos-DJDSl_g6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3885-9Ix44fsjEiaAajdB3BQtFYyX9z0\"",
		"mtime": "2026-10-20T22:22:10.902Z",
		"size": 14469,
		"path": "../public/assets/dirigente.eventos-DJDSl_g6.js"
	},
	"/assets/dirigente.index-pN5chhg8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"30f1-rxvQJiWp6ZyXdlVf+H4ghfifB/E\"",
		"mtime": "2026-10-20T22:22:10.902Z",
		"size": 12529,
		"path": "../public/assets/dirigente.index-pN5chhg8.js"
	},
	"/assets/dirigente.mas-E9XGk3pK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3e68-MUs92VIaHAcr1X21t01SmTYjWro\"",
		"mtime": "2026-10-20T22:22:10.902Z",
		"size": 15976,
		"path": "../public/assets/dirigente.mas-E9XGk3pK.js"
	},
	"/assets/dirigente.pagos-C9KT25dN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13c2-xqGc8Ld6vbB2hE6bNFCR0YsVxPM\"",
		"mtime": "2026-10-20T22:22:10.902Z",
		"size": 5058,
		"path": "../public/assets/dirigente.pagos-C9KT25dN.js"
	},
	"/assets/dirigente.socios-Dclh1Mao.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-NWHgvWeRKTDUuxA5C5YGbdIo5f4\"",
		"mtime": "2026-10-20T22:22:10.902Z",
		"size": 141,
		"path": "../public/assets/dirigente.socios-Dclh1Mao.js"
	},
	"/assets/dirigente.socios._id-Ck1E_fhR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3306-Y/6mox+6dV+mDGmhPDA3+b43l54\"",
		"mtime": "2026-10-20T22:22:10.902Z",
		"size": 13062,
		"path": "../public/assets/dirigente.socios._id-Ck1E_fhR.js"
	},
	"/assets/dirigente.socios._id-a9ryPpDJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10c-psQZDTfeSG6phUqTGMzg8MHTMOs\"",
		"mtime": "2026-10-20T22:22:10.903Z",
		"size": 268,
		"path": "../public/assets/dirigente.socios._id-a9ryPpDJ.js"
	},
	"/assets/dirigente.socios.index-CFvgooh3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1952-y7kQ8wyI/qJ4MGiU74psZ4iNPqo\"",
		"mtime": "2026-10-20T22:22:10.903Z",
		"size": 6482,
		"path": "../public/assets/dirigente.socios.index-CFvgooh3.js"
	},
	"/assets/dist-DHebJWBL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"134b-Z/fy4xXpwSyw/eyQCN6zanLIPJg\"",
		"mtime": "2026-10-20T22:22:10.903Z",
		"size": 4939,
		"path": "../public/assets/dist-DHebJWBL.js"
	},
	"/assets/eventos-Br8ArSCh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d69-oT0dvEnGO0Jo2Ei6fI/xW+AuX6w\"",
		"mtime": "2026-10-20T22:22:10.903Z",
		"size": 3433,
		"path": "../public/assets/eventos-Br8ArSCh.js"
	},
	"/assets/club-C_KabGkT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1190-UBnMPBi0n6Pi1YoW16/OXIFkxH0\"",
		"mtime": "2026-10-20T22:22:10.902Z",
		"size": 4496,
		"path": "../public/assets/club-C_KabGkT.js"
	},
	"/assets/dialog-CfEpfNSi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8065-vVR6g9BlLT+Un9zl56kjGPCbAYI\"",
		"mtime": "2026-10-20T22:22:10.902Z",
		"size": 32869,
		"path": "../public/assets/dialog-CfEpfNSi.js"
	},
	"/assets/DraggableBottomSheet-ajI7irjv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b2-v4wWjzIu7+iqeeOel/HEOg/DDA0\"",
		"mtime": "2026-10-20T22:22:10.901Z",
		"size": 1458,
		"path": "../public/assets/DraggableBottomSheet-ajI7irjv.js"
	},
	"/assets/file-text-DjzPPV5z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"177-A9Lmpgd+NqRB+NfmX3qSuGV9MaA\"",
		"mtime": "2026-10-20T22:22:10.903Z",
		"size": 375,
		"path": "../public/assets/file-text-DjzPPV5z.js"
	},
	"/assets/index-BPlQsjrt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"69654-TIMN0EYLdTms0TnTWwEPeDbphag\"",
		"mtime": "2026-10-20T22:22:10.901Z",
		"size": 431700,
		"path": "../public/assets/index-BPlQsjrt.js"
	},
	"/assets/jugador-CXlvWW8W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b4e-ECG5/PmmalWIr+wm+fvznLz+GV8\"",
		"mtime": "2026-10-20T22:22:10.903Z",
		"size": 6990,
		"path": "../public/assets/jugador-CXlvWW8W.js"
	},
	"/assets/map-pin-XeG6MnY3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f9-zhKrFjeHLY1TkBNWiq4Wi36Y7M4\"",
		"mtime": "2026-10-20T22:22:10.903Z",
		"size": 249,
		"path": "../public/assets/map-pin-XeG6MnY3.js"
	},
	"/assets/megaphone-Sn8bXfEL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"150-9M9VGHRXutiQKr7QW1GWqR93wEU\"",
		"mtime": "2026-10-20T22:22:10.903Z",
		"size": 336,
		"path": "../public/assets/megaphone-Sn8bXfEL.js"
	},
	"/assets/mock-data-BK67iVzU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e42-jZQZCsEE80h1J54netvHsQGom5o\"",
		"mtime": "2026-10-20T22:22:10.903Z",
		"size": 3650,
		"path": "../public/assets/mock-data-BK67iVzU.js"
	},
	"/assets/not-found-i5RsCZif.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-Trmr7GZIBZuvfg4uM18tBiRtOXg\"",
		"mtime": "2026-10-20T22:22:10.903Z",
		"size": 118,
		"path": "../public/assets/not-found-i5RsCZif.js"
	},
	"/assets/pagos-nOax44ad.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"110a-MRAhoQVAbNOMkcDSW+s8X8m/+tQ\"",
		"mtime": "2026-10-20T22:22:10.903Z",
		"size": 4362,
		"path": "../public/assets/pagos-nOax44ad.js"
	},
	"/assets/perfil-CF8aepcq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"251f-NdOgGfM6RKpgEssjXlpYkKRTpJk\"",
		"mtime": "2026-10-20T22:22:10.903Z",
		"size": 9503,
		"path": "../public/assets/perfil-CF8aepcq.js"
	},
	"/assets/plus-yVZQZYi-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8f-E9Yd4a8Q+e9X15l2rjd1+MZ+p3Y\"",
		"mtime": "2026-10-20T22:22:10.903Z",
		"size": 143,
		"path": "../public/assets/plus-yVZQZYi-.js"
	},
	"/assets/prototype-state-0qkyhhC5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e1-jKd2/aX7fgARRjc1pretIkceuC8\"",
		"mtime": "2026-10-20T22:22:10.903Z",
		"size": 481,
		"path": "../public/assets/prototype-state-0qkyhhC5.js"
	},
	"/assets/routes-2FocvA1g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a43-KYAX2nKxuBJwTsQerXjc1SQaiME\"",
		"mtime": "2026-10-20T22:22:10.903Z",
		"size": 6723,
		"path": "../public/assets/routes-2FocvA1g.js"
	},
	"/assets/upload-CeJVgjPy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dc-X5lFWdnaaobPOQkTWVXL7Qy0Qao\"",
		"mtime": "2026-10-20T22:22:10.903Z",
		"size": 220,
		"path": "../public/assets/upload-CeJVgjPy.js"
	},
	"/assets/useSelector-7GdJWpjS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2acb-Kkm1972nTSRPJb9iPMa8iY3jDf4\"",
		"mtime": "2026-10-20T22:22:10.903Z",
		"size": 10955,
		"path": "../public/assets/useSelector-7GdJWpjS.js"
	},
	"/assets/users-WnStq89L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"128-OTE7sBWTlaEKX0IFbsQvaFPuurY\"",
		"mtime": "2026-10-20T22:22:10.903Z",
		"size": 296,
		"path": "../public/assets/users-WnStq89L.js"
	},
	"/assets/wallet-CXrEEid4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8aa-tpfH+R0/8H2hEtP0wqeYxAS1b5M\"",
		"mtime": "2026-10-20T22:22:10.904Z",
		"size": 2218,
		"path": "../public/assets/wallet-CXrEEid4.js"
	},
	"/assets/x-FcHjH_0t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90-IQOaaDOzPpZKFuHTMe4aXK8q/aY\"",
		"mtime": "2026-10-20T22:22:10.904Z",
		"size": 144,
		"path": "../public/assets/x-FcHjH_0t.js"
	},
	"/assets/triangle-alert-Dj15MhgO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ff-3ZC0JPzcuWgd4TIG9b5p+4wolKw\"",
		"mtime": "2026-10-20T22:22:10.903Z",
		"size": 255,
		"path": "../public/assets/triangle-alert-Dj15MhgO.js"
	},
	"/assets/styles-BnbL2z2e.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"13542-tWxmNgZPCQVj9tyxH2QGxq7wPuQ\"",
		"mtime": "2026-10-20T22:22:10.904Z",
		"size": 79170,
		"path": "../public/assets/styles-BnbL2z2e.css"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_0jRgqU = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_0jRgqU
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
