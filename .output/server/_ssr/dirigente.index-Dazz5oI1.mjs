import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as Calendar, D as CircleCheck, O as ChevronRight, S as FileText, T as ClipboardList, a as UserPlus, g as Megaphone, n as Wallet, r as Users, s as TriangleAlert } from "../_libs/lucide-react.mjs";
import { c as resumenRegistros, d as useSocios, i as clubResumen, u as useAsistencias } from "./dirigente-data-Bu9bjl4U.mjs";
import { r as usePrototype } from "./prototype-state-C9Ig4_P9.mjs";
import { n as DirigenteShell, t as DSectionTitle } from "./DirigenteShell-Z01acKMg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dirigente.index-Dazz5oI1.js
var import_jsx_runtime = require_jsx_runtime();
function DirigenteHome() {
	const { pagosClub, documentos, avisos, events } = usePrototype();
	const socios = useSocios();
	const asistencias = useAsistencias();
	const pagosPend = pagosClub.filter((p) => p.estado !== "pagado");
	const docsAlerta = documentos.filter((d) => d.estado === "por-vencer" || d.estado === "vencido" || d.estado === "pendiente");
	const vigentes = documentos.filter((d) => d.estado === "vigente").length;
	const formalizacion = documentos.length ? Math.round(vigentes / documentos.length * 100) : 0;
	const proximos = events.slice(0, 2);
	const ultAsistencia = asistencias[0];
	const formatCLP = (n) => `$${n.toLocaleString("es-CL")}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DirigenteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-3xl bg-primary-soft p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-card text-2xl shadow-[var(--shadow-card)]",
					children: clubResumen.escudo
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "truncate text-lg font-extrabold text-foreground",
							children: clubResumen.nombre
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-0.5 flex items-center gap-2 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-success" }),
								socios.length,
								" socios registrados ·",
								" ",
								socios.filter((s) => s.rol === "jugador").length,
								" jugadores"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs font-semibold text-primary",
							children: "Panel de dirigente"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-2xl bg-card/80 p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-xs font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: "Estado de formalización"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground",
							children: [formalizacion, "%"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 h-2 overflow-hidden rounded-full bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-primary",
							style: { width: `${formalizacion}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-[11px] text-muted-foreground",
						children: [docsAlerta.length, " documento(s) requieren tu atención."]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 flex items-center gap-2 text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-success" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-semibold text-success",
					children: [socios.filter((s) => s.pago === "al-dia").length, " al día"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: "·"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-semibold text-destructive",
					children: [socios.filter((s) => s.pago !== "al-dia").length, " con pagos pendientes"]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid grid-cols-2 gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/dirigente/socios",
					"aria-label": "Ver miembros activos",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						label: "Miembros activos",
						value: String(socios.length),
						sub: `${socios.filter((s) => s.rol === "jugador").length} jugadores`,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/dirigente/pagos",
					"aria-label": "Ver pagos pendientes",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						label: "Pagos pendientes",
						value: String(pagosPend.length),
						sub: pagosPend.length ? "Revisar ahora" : "Al día",
						tone: pagosPend.length ? "warn" : "ok",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-4 w-4" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/dirigente/eventos",
					"aria-label": "Ver próximo evento",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						label: "Próximo evento",
						value: "Sáb 20",
						sub: "vs Unión Centro",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/dirigente/eventos",
					search: { tab: "asistencia" },
					"aria-label": "Ver asistencia del mes",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						label: "Asistencia mes",
						value: `${clubResumen.asistenciaPromedio}%`,
						sub: "Promedio del club",
						tone: "ok",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" })
					})
				})
			]
		}),
		(pagosPend.length > 0 || docsAlerta.length > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DSectionTitle, { children: "Alertas importantes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [pagosPend.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/dirigente/pagos",
				className: "flex items-center gap-3 rounded-2xl bg-destructive-soft p-4 text-destructive",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-6 w-6 shrink-0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-semibold leading-tight",
							children: [pagosPend.length, " pago(s) sin regularizar"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm opacity-80",
							children: [formatCLP(pagosPend.reduce((s, p) => s + p.monto, 0)), " por cobrar"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
				]
			}), docsAlerta.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/dirigente/mas",
				search: { tab: "documentos" },
				className: "flex items-center gap-3 rounded-2xl bg-warning-soft p-4 text-warning-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-6 w-6 shrink-0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-semibold leading-tight",
							children: [docsAlerta.length, " documento(s) por revisar"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm opacity-80",
							children: "Vencidos, por vencer o pendientes"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
				]
			})]
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DSectionTitle, { children: "Acciones rápidas" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickAction, {
					to: "/dirigente/socios",
					search: { new: 1 },
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "h-5 w-5" }),
					label: "Registrar socio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickAction, {
					to: "/dirigente/eventos",
					search: { new: 1 },
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-5 w-5" }),
					label: "Crear evento"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickAction, {
					to: "/dirigente/pagos",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-5 w-5" }),
					label: "Revisar pagos"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickAction, {
					to: "/dirigente/mas",
					search: {
						tab: "comunicacion",
						new: 1
					},
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "h-5 w-5" }),
					label: "Publicar aviso"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DSectionTitle, {
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreLink, {
				to: "/dirigente/eventos",
				children: "Ver todos"
			}),
			children: "Próximos eventos"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: proximos.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/dirigente/eventos",
				className: "flex items-center gap-4 rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-primary-soft text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-bold tracking-wider",
							children: e.monthLabel
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl font-extrabold leading-none",
							children: e.dayLabel
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-semibold",
								children: e.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									e.time,
									" · ",
									e.place
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[11px] font-semibold text-primary",
								children: e.called ? "Convocatoria publicada" : "Sin convocar"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5 text-muted-foreground" })
				]
			}, e.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DSectionTitle, {
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/dirigente/eventos",
				search: { tab: "asistencia" },
				className: "flex items-center gap-0.5 text-sm font-semibold text-primary",
				children: ["Detalle ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
			}),
			children: "Asistencia reciente"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/dirigente/eventos",
			search: { tab: "asistencia" },
			className: "block rounded-2xl bg-card p-4 shadow-[var(--shadow-card)] transition active:scale-[0.98]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-12 w-12 items-center justify-center rounded-xl bg-success-soft text-success",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: ultAsistencia.titulo
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								ultAsistencia.categoria,
								" · ",
								ultAsistencia.fecha
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-lg font-extrabold text-success",
							children: [Math.round(resumenRegistros(ultAsistencia.registros).presentes / (resumenRegistros(ultAsistencia.registros).total || 1) * 100), "%"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[10px] text-muted-foreground",
							children: [
								resumenRegistros(ultAsistencia.registros).presentes,
								"/",
								resumenRegistros(ultAsistencia.registros).total
							]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DSectionTitle, {
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/dirigente/mas",
				search: { tab: "comunicacion" },
				className: "text-sm font-semibold text-primary",
				children: "Ver todos"
			}),
			children: "Últimos avisos"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: avisos.slice(0, 2).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "flex gap-3 rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-semibold",
								children: a.titulo
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-bold text-secondary-foreground",
								children: a.destinatarios
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "line-clamp-2 text-sm text-muted-foreground",
							children: a.cuerpo
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: [
								a.autor,
								" · ",
								a.fecha
							]
						})
					]
				})]
			}, a.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DSectionTitle, {
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreLink, {
				to: "/dirigente/socios",
				children: "Ver todos"
			}),
			children: "Socios recientes"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: socios.slice(0, 3).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/dirigente/socios/$id",
				params: { id: s.id },
				className: "flex items-center gap-3 rounded-2xl bg-card p-3 shadow-[var(--shadow-card)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-primary",
						children: s.foto
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-semibold",
							children: s.nombre
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: s.categoria
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PagoBadge, { estado: s.pago })
				]
			}, s.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6 rounded-3xl bg-primary-soft p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-wider text-primary",
					children: "Estado del club"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-2xl font-extrabold",
					children: [formalizacion, "% al día"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						vigentes,
						" de ",
						documentos.length,
						" documentos vigentes"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 h-2 overflow-hidden rounded-full bg-card/70",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-primary",
						style: { width: `${formalizacion}%` }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/dirigente/mas",
					search: { tab: "documentos" },
					className: "mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-card py-2.5 text-sm font-bold text-primary shadow-[var(--shadow-card)] transition active:scale-[0.98]",
					children: ["Documentos ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
				})
			]
		})
	] });
}
function Tile({ label, value, sub, tone = "default", icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full rounded-2xl bg-card p-4 shadow-[var(--shadow-card)] transition active:scale-[0.98]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5 text-xs font-medium text-muted-foreground",
				children: [icon, label]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-1 text-2xl font-extrabold ${tone === "warn" ? "text-destructive" : tone === "ok" ? "text-success" : "text-primary"}`,
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: sub
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 shrink-0 text-muted-foreground" })]
			})
		]
	});
}
function QuickAction({ to, search, icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		search,
		className: "flex items-center gap-3 rounded-2xl bg-card p-4 shadow-[var(--shadow-card)] transition active:scale-[0.98]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-semibold text-foreground",
			children: label
		})]
	});
}
function MoreLink({ to, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "flex items-center gap-0.5 text-sm font-semibold text-primary",
		children: [
			children,
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
		]
	});
}
function PagoBadge({ estado }) {
	const it = {
		"al-dia": {
			label: "Al día",
			cls: "bg-success-soft text-success"
		},
		pendiente: {
			label: "Pendiente",
			cls: "bg-warning-soft text-warning-foreground"
		},
		vencido: {
			label: "Vencido",
			cls: "bg-destructive-soft text-destructive"
		}
	}[estado];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `rounded-full px-2 py-0.5 text-[10px] font-bold ${it.cls}`,
		children: it.label
	});
}
//#endregion
export { PagoBadge, DirigenteHome as component };
