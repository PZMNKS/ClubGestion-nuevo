import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import {
  A as ChevronRight,
  D as ClipboardList,
  _ as Megaphone,
  d as Send,
  g as Pencil,
  p as Plus,
  r as Users,
  t as X,
} from "../_libs/lucide-react.mjs";
import {
  c as resumenRegistros,
  d as useAsistencias,
  f as useSocios,
  l as updateAsistencia,
  t as addAsistencia,
} from "./dirigente-data-CBIkTrPW.mjs";
import {
  a as updatePrototype,
  n as resolveConvocatoriaEvento,
  o as usePrototype,
  r as saveConvocatoriaEvento,
  t as getPrototype,
} from "./prototype-state-BkJ0Cljr.mjs";
import { a as Route$5, s as Button } from "./router-CuTlj-1m.mjs";
import { t as toast$1 } from "./toast-kixGVRDj.mjs";
import { n as FlowSheet, t as FlowActions } from "./FlowSheet-CwbRCL9q.mjs";
import { t as DraggableBottomSheet } from "./DraggableBottomSheet-C1poPEKI.mjs";
import {
  n as DirigenteShell,
  t as DSectionTitle,
} from "./DirigenteShell-KjK-l_0e.mjs";
import { t as EventCard } from "./EventCard-DRbmkhAL.mjs";
// node_modules/.nitro/vite/services/ssr/assets/dirigente.eventos-BrAg9pKv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var grupos = [
  {
    key: "presente",
    label: "Asistieron / Confirmaron",
    cls: "bg-success-soft text-success",
  },
  {
    key: "ausente",
    label: "No asistieron",
    cls: "bg-destructive-soft text-destructive",
  },
  {
    key: "lesionado",
    label: "Lesionados",
    cls: "bg-orange-100 text-orange-800",
  },
  {
    key: "sin-respuesta",
    label: "Sin responder",
    cls: "bg-warning-soft text-warning-foreground",
  },
];
var opcionesEstado = [
  {
    k: "presente",
    l: "Asistió",
    on: "bg-success text-success-foreground hover:bg-success hover:text-success-foreground",
  },
  {
    k: "ausente",
    l: "No asistió",
    on: "bg-destructive text-destructive-foreground hover:bg-destructive hover:text-destructive-foreground",
  },
  {
    k: "lesionado",
    l: "Lesionado",
    on: "bg-orange-600 text-white hover:bg-orange-600 hover:text-white",
  },
  {
    k: "sin-respuesta",
    l: "Sin responder",
    on: "bg-warning text-warning-foreground hover:bg-warning hover:text-warning-foreground",
  },
];
function AsistenciaListaSheet({
  titulo,
  subtitulo,
  registros,
  onClose,
  onEdit,
}) {
  const socios = useSocios();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DraggableBottomSheet, {
    onClose,
    level: "raised",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex items-start justify-between gap-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                className: "text-xl font-extrabold",
                children: titulo,
              }),
              subtitulo &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-xs text-muted-foreground",
                  children: subtitulo,
                }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
            variant: "ghost",
            onClick: onClose,
            "aria-label": "Cerrar",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
              className: "h-5 w-5",
            }),
          }),
        ],
      }),
      onEdit &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
          onClick: onEdit,
          className:
            "mt-4 flex w-full items-center justify-center gap-2 text-sm font-bold",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {
              className: "h-4 w-4",
            }),
            " Editar asistencia",
          ],
        }),
      grupos.map((g) => {
        const ids = Object.entries(registros)
          .filter(([, v]) => v === g.key)
          .map(([k]) => k);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            className: "mt-5",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "mb-2 flex items-center justify-between",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "text-sm font-bold",
                    children: g.label,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: `rounded-full px-2 py-0.5 text-xs font-bold ${g.cls}`,
                    children: ids.length,
                  }),
                ],
              }),
              ids.length === 0
                ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "text-xs text-muted-foreground",
                    children: "Nadie en este grupo.",
                  })
                : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "space-y-2",
                    children: ids.map((id) => {
                      const s = socios.find((x) => x.id === id);
                      if (!s) return null;
                      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                        "div",
                        {
                          className:
                            "flex items-center gap-3 rounded-2xl bg-secondary p-2.5",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className:
                                "flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-xs font-bold text-primary",
                              children: s.foto,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className: "min-w-0 flex-1",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "p",
                                    {
                                      className:
                                        "truncate text-sm font-semibold",
                                      children: s.nombre,
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "p",
                                    {
                                      className:
                                        "text-xs text-muted-foreground",
                                      children: s.categoria,
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        },
                        id,
                      );
                    }),
                  }),
            ],
          },
          g.key,
        );
      }),
    ],
  });
}
function EditarAsistenciaSheet({
  titulo,
  subtitulo,
  registros,
  categoria = "Todos",
  onClose,
  onSave,
}) {
  const socios = useSocios();
  const idsRegistrados = Object.keys(registros);
  const jugadores = socios.filter(
    (s) =>
      s.rol === "jugador" &&
      (idsRegistrados.includes(s.id) ||
        categoria === "Todos" ||
        s.categoria === categoria),
  );
  const [reg, setReg] = (0, import_react.useState)(() => {
    const init = {};
    jugadores.forEach((j) => {
      init[j.id] = registros[j.id] ?? "sin-respuesta";
    });
    return init;
  });
  const resumen = resumenRegistros(reg);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FlowSheet, {
    title: titulo,
    description: subtitulo,
    onClose,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "grid grid-cols-4 gap-1.5 text-center text-xs",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "rounded-xl bg-success-soft p-2 text-success",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-[10px] font-bold",
                children: "Asistió",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-base font-extrabold",
                children: resumen.presentes,
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "rounded-xl bg-destructive-soft p-2 text-destructive",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-[10px] font-bold",
                children: "No asist.",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-base font-extrabold",
                children: resumen.ausentes,
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "rounded-xl bg-orange-100 p-2 text-orange-800",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-[10px] font-bold",
                children: "Lesionado",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-base font-extrabold",
                children: resumen.lesionados,
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "rounded-xl bg-warning-soft p-2 text-warning-foreground",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-[10px] font-bold",
                children: "Sin resp.",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-base font-extrabold",
                children: resumen.sinRespuesta,
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "space-y-2",
        children: jugadores.map((j) => {
          const cur = reg[j.id] ?? "sin-respuesta";
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "div",
            {
              className: "rounded-2xl bg-secondary p-3",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex items-center gap-2.5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className:
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-xs font-bold text-primary",
                      children: j.foto,
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "min-w-0 flex-1",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "truncate text-sm font-semibold",
                          children: j.nombre,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "text-xs text-muted-foreground",
                          children: j.categoria,
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "mt-2.5 grid grid-cols-2 gap-1.5",
                  children: opcionesEstado.map((o) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      Button,
                      {
                        variant: "ghost",
                        onClick: () =>
                          setReg((p) => ({
                            ...p,
                            [j.id]: o.k,
                          })),
                        "aria-pressed": cur === o.k,
                        className: `rounded-xl px-2 py-1.5 text-xs font-bold transition ${cur === o.k ? o.on : "bg-card text-secondary-foreground"}`,
                        children: o.l,
                      },
                      o.k,
                    ),
                  ),
                }),
              ],
            },
            j.id,
          );
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowActions, {
        onCancel: onClose,
        label: "Guardar asistencia",
        onSave: () => onSave(reg),
      }),
    ],
  });
}
var DESTINATARIOS_OPTIONS = [
  "Todos",
  "Primera Adulta",
  "Femenino Adulto",
  "Sub-17",
  "Socios",
  "Directiva",
];
function resolveEventosTab(tab) {
  if (tab === "asistencia") return "asistencia";
  if (tab === "avisos" || tab === "comunicacion") return "avisos";
  return "eventos";
}
function EventosDirigente() {
  const { events, convocatorias } = usePrototype();
  useSocios();
  const [selectedId, setSelectedId] = (0, import_react.useState)(null);
  const selected = events.find((e) => e.id === selectedId);
  const search = Route$5.useSearch();
  const navigate = Route$5.useNavigate();
  const isInitialAvisoTab =
    search.tab === "avisos" || search.tab === "comunicacion";
  const isInitialAsistenciaTab = search.tab === "asistencia";
  const [tab, setTab] = (0, import_react.useState)(() =>
    resolveEventosTab(search.tab),
  );
  const [showForm, setShowForm] = (0, import_react.useState)(
    Boolean(search.new) && !isInitialAvisoTab && !isInitialAsistenciaTab,
  );
  const [showNewAsistencia, setShowNewAsistencia] = (0, import_react.useState)(
    Boolean(search.new) && isInitialAsistenciaTab,
  );
  const [openNewAviso, setOpenNewAviso] = (0, import_react.useState)(
    Boolean(search.new) && isInitialAvisoTab,
  );
  const [avisoInitialDest, setAvisoInitialDest] = (0, import_react.useState)(
    "Todos",
  );
  const [showConv, setShowConv] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const isAviso = search.tab === "avisos" || search.tab === "comunicacion";
    const isAsistencia = search.tab === "asistencia";
    if (search.tab) setTab(resolveEventosTab(search.tab));
    if (search.new) {
      if (isAviso) setOpenNewAviso(true);
      else if (isAsistencia) setShowNewAsistencia(true);
      else setShowForm(true);
    }
    if (search.new || search.tab)
      navigate({
        search: {},
        replace: true,
      });
  }, [search.new, search.tab, navigate]);
  const conv = selected
    ? resolveConvocatoriaEvento(selected, convocatorias[selected.id])
    : {};
  const convR = resumenRegistros(conv);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DirigenteShell, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "grid grid-cols-[minmax(0,1fr)_auto] items-end gap-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                className: "text-2xl font-extrabold",
                children: "Eventos",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-sm text-muted-foreground",
                children: "Planifica, convoca y comunica al equipo.",
              }),
            ],
          }),
          tab === "eventos" &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
              onClick: () => setShowForm(true),
              className: "flex items-center gap-1 px-3 font-bold",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
                  className: "h-4 w-4",
                }),
                " Crear",
              ],
            }),
          tab === "asistencia" &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
              onClick: () => setShowNewAsistencia(true),
              className: "flex items-center gap-1 px-3 font-bold",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, {
                  className: "h-4 w-4",
                }),
                " Registrar asistencia",
              ],
            }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "mt-4 inline-flex rounded-full bg-secondary p-1",
        children: ["eventos", "asistencia", "avisos"].map((v) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Button,
            {
              variant: "ghost",
              "aria-pressed": tab === v,
              onClick: () => setTab(v),
              className: `rounded-full px-4 py-1.5 text-sm font-semibold capitalize transition ${tab === v ? "bg-card text-foreground shadow-[var(--shadow-card)]" : "text-muted-foreground"}`,
              children: v,
            },
            v,
          ),
        ),
      }),
      tab === "eventos" &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          import_jsx_runtime.Fragment,
          {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DSectionTitle, {
                children: "Próximos",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "space-y-3",
                children: events.map((e) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    EventCard,
                    {
                      ...e,
                      onClick: () => setSelectedId(e.id),
                    },
                    e.id,
                  ),
                ),
              }),
            ],
          },
        ),
      tab === "asistencia" &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AsistenciaSection, {
          onOpenNew: () => setShowNewAsistencia(true),
        }),
      tab === "avisos" &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvisosSection, {
          openNew: openNewAviso,
          initialDestinatarios: avisoInitialDest,
          onConsumeOpenNew: () => {
            setOpenNewAviso(false);
            setAvisoInitialDest("Todos");
          },
        }),
      selected &&
        !showConv &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DraggableBottomSheet, {
          onClose: () => {
            setSelectedId(null);
            setShowConv(false);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className:
                    "text-xs font-semibold uppercase tracking-wider text-primary",
                  children: selected.type,
                }),
                selected.destinatarios &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className:
                      "rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-bold text-secondary-foreground",
                    children: selected.destinatarios,
                  }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
              className: "mt-1 text-2xl font-extrabold",
              children: selected.title,
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "mt-3 space-y-1 text-sm text-muted-foreground",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                  children: [
                    "📅 ",
                    selected.monthLabel,
                    " ",
                    selected.dayLabel,
                    " · ",
                    selected.time,
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                  children: ["📍 ", selected.place],
                }),
                selected.destinatarios &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                    children: ["👥 Destinatarios: ", selected.destinatarios],
                  }),
                selected.rival &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                    children: ["🆚 ", selected.rival],
                  }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DSectionTitle, {
              children: "Convocatoria",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
              variant: "ghost",
              onClick: () => setShowConv(true),
              className:
                "block h-auto w-full rounded-2xl bg-secondary p-3 text-left text-sm transition active:scale-[0.98]",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      className: "flex items-center gap-2 font-semibold",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
                          className: "h-4 w-4",
                        }),
                        " Convocados (",
                        convR.presentes,
                        "/",
                        convR.total,
                        ")",
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      className:
                        "flex items-center gap-1 text-xs font-bold text-primary",
                      children: [
                        "Editar asistencia ",
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          ChevronRight,
                          { className: "h-4 w-4" },
                        ),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "mt-3 grid grid-cols-2 gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
                      label: "Confirmados",
                      value: String(convR.presentes),
                      tone: "ok",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
                      label: "No asisten",
                      value: String(convR.ausentes),
                      tone: "bad",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
                      label: "Lesionados",
                      value: String(convR.lesionados),
                      tone: "injured",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
                      label: "Sin responder",
                      value: String(convR.sinRespuesta),
                      tone: "warn",
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
              onClick: () => {
                const dest = selected.destinatarios ?? "Todos";
                setSelectedId(null);
                setShowConv(false);
                setAvisoInitialDest(dest);
                setTab("avisos");
                setOpenNewAviso(true);
              },
              className:
                "mt-4 flex w-full items-center justify-center gap-2 text-sm font-bold",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
                  className: "h-4 w-4",
                }),
                " Enviar aviso a convocados",
              ],
            }),
          ],
        }),
      selected &&
        showConv &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditarAsistenciaSheet, {
          titulo: `Convocatoria · ${selected.title}`,
          subtitulo: `${selected.monthLabel} ${selected.dayLabel} · ${selected.time}`,
          registros: conv,
          onClose: () => setShowConv(false),
          onSave: (nuevos) => {
            saveConvocatoriaEvento(selected.id, nuevos);
            toast$1.success("Asistencia de la convocatoria actualizada");
            setShowConv(false);
          },
        }),
      showForm &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewEventSheet, {
          onClose: () => setShowForm(false),
          onSave: (e) => {
            updatePrototype({ events: [e, ...getPrototype().events] });
            toast$1.success("Evento creado en esta sesión");
            setShowForm(false);
          },
        }),
      showNewAsistencia &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegistrarAsistenciaSheet, {
          onClose: () => setShowNewAsistencia(false),
        }),
    ],
  });
}
function AvisosSection({
  openNew = false,
  initialDestinatarios = "Todos",
  onConsumeOpenNew,
}) {
  const { avisos } = usePrototype();
  const setAvisos = (fn) =>
    updatePrototype({ avisos: fn(getPrototype().avisos) });
  const [show, setShow] = (0, import_react.useState)(openNew);
  const [defaultDest, setDefaultDest] = (0, import_react.useState)(
    initialDestinatarios,
  );
  (0, import_react.useEffect)(() => {
    if (openNew) {
      setDefaultDest(initialDestinatarios);
      setShow(true);
      onConsumeOpenNew?.();
    }
  }, [openNew, initialDestinatarios, onConsumeOpenNew]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_jsx_runtime.Fragment,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "mt-5 flex items-center justify-between",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
              className: "text-sm font-semibold text-muted-foreground",
              children: [avisos.length, " avisos publicados"],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
              onClick: () => {
                setDefaultDest("Todos");
                setShow(true);
              },
              className: "flex items-center gap-1 px-3 font-bold",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
                  className: "h-3.5 w-3.5",
                }),
                " Nuevo",
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "mt-3 space-y-3",
          children: avisos.map((a) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "article",
              {
                className:
                  "rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className:
                          "flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          Megaphone,
                          { className: "h-5 w-5" },
                        ),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "min-w-0 flex-1",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className: "truncate font-semibold",
                            children: a.titulo,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                            className: "text-xs text-muted-foreground",
                            children: [a.autor, " · ", a.fecha],
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className:
                          "rounded-full bg-secondary px-2 py-0.5 text-[10px] font-bold text-secondary-foreground",
                        children: a.destinatarios,
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "mt-2 text-sm text-muted-foreground",
                    children: a.cuerpo,
                  }),
                ],
              },
              a.id,
            ),
          ),
        }),
        show &&
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewAvisoSheet, {
            defaultDestinatarios: defaultDest,
            onClose: () => setShow(false),
            onSave: (a) => {
              setAvisos((p) => [a, ...p]);
              toast$1.success("Aviso publicado en esta sesión");
              setShow(false);
            },
          }),
      ],
    },
  );
}
function NewAvisoSheet({ defaultDestinatarios = "Todos", onClose, onSave }) {
  const [titulo, setTitulo] = (0, import_react.useState)("");
  const [cuerpo, setCuerpo] = (0, import_react.useState)("");
  const [destinatarios, setDestinatarios] = (0, import_react.useState)(
    defaultDestinatarios,
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FlowSheet, {
    title: "Nuevo aviso",
    onClose,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mt-4 space-y-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
            className: "block",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className:
                  "mb-1 block text-xs font-semibold text-muted-foreground",
                children: "Título",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                value: titulo,
                onChange: (e) => setTitulo(e.target.value),
                className:
                  "w-full rounded-xl bg-secondary px-3 py-2.5 text-sm outline-none",
                placeholder: "Ej: Convocatoria sábado",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
            className: "block",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className:
                  "mb-1 block text-xs font-semibold text-muted-foreground",
                children: "Destinatarios",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
                value: destinatarios,
                onChange: (e) => setDestinatarios(e.target.value),
                className:
                  "w-full rounded-xl bg-secondary px-3 py-2.5 text-sm outline-none",
                children: DESTINATARIOS_OPTIONS.map((opt) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "option",
                    {
                      value: opt,
                      children: opt,
                    },
                    opt,
                  ),
                ),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
            className: "block",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className:
                  "mb-1 block text-xs font-semibold text-muted-foreground",
                children: "Mensaje",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
                value: cuerpo,
                onChange: (e) => setCuerpo(e.target.value),
                rows: 4,
                className:
                  "w-full rounded-xl bg-secondary px-3 py-2.5 text-sm outline-none",
                placeholder: "Escribe el mensaje...",
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowActions, {
        onCancel: onClose,
        disabled: !titulo.trim() || !cuerpo.trim(),
        label: "Publicar aviso",
        onSave: () =>
          onSave({
            id: `av${Date.now()}`,
            titulo,
            cuerpo,
            destinatarios,
            fecha: "ahora",
            autor: "Tú",
          }),
      }),
    ],
  });
}
function Mini({ label, value, tone }) {
  const cls = {
    ok: "bg-success-soft text-success",
    warn: "bg-warning-soft text-warning-foreground",
    bad: "bg-destructive-soft text-destructive",
    injured: "bg-orange-100 text-orange-800",
    default: "bg-card text-foreground",
  }[tone];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: `rounded-xl p-2 ${cls}`,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className:
          "text-[10px] font-semibold uppercase tracking-wider opacity-80",
        children: label,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: "text-lg font-extrabold",
        children: value,
      }),
    ],
  });
}
function NewEventSheet({ onClose, onSave }) {
  const [titulo, setTitulo] = (0, import_react.useState)("");
  const [tipo, setTipo] = (0, import_react.useState)("entrenamiento");
  const [destinatarios, setDestinatarios] = (0, import_react.useState)("Todos");
  const [fecha, setFecha] = (0, import_react.useState)("");
  const [hora, setHora] = (0, import_react.useState)("19:30");
  const [lugar, setLugar] = (0, import_react.useState)("");
  const [obs, setObs] = (0, import_react.useState)("");
  const inputCls =
    "w-full rounded-xl bg-secondary px-3 py-2.5 text-sm outline-none";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FlowSheet, {
    title: "Nuevo evento",
    onClose,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mt-4 space-y-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, {
            label: "Título",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
              value: titulo,
              onChange: (e) => setTitulo(e.target.value),
              className: inputCls,
              placeholder: "Ej: Entrenamiento",
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, {
            label: "Tipo",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
              value: tipo,
              onChange: (e) => setTipo(e.target.value),
              className: inputCls,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                  value: "entrenamiento",
                  children: "Entrenamiento",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                  value: "partido",
                  children: "Partido",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                  value: "reunion",
                  children: "Reunión",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                  value: "actividad",
                  children: "Actividad",
                }),
              ],
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, {
            label: "Destinatarios",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
              value: destinatarios,
              onChange: (e) => setDestinatarios(e.target.value),
              className: inputCls,
              children: DESTINATARIOS_OPTIONS.map((opt) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "option",
                  {
                    value: opt,
                    children: opt,
                  },
                  opt,
                ),
              ),
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "grid grid-cols-2 gap-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, {
                label: "Fecha",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                  type: "date",
                  value: fecha,
                  onChange: (e) => setFecha(e.target.value),
                  className: inputCls,
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, {
                label: "Hora",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                  type: "time",
                  value: hora,
                  onChange: (e) => setHora(e.target.value),
                  className: inputCls,
                }),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, {
            label: "Lugar",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
              value: lugar,
              onChange: (e) => setLugar(e.target.value),
              className: inputCls,
              placeholder: "Ej: Cancha municipal",
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, {
            label: "Observaciones",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
              value: obs,
              onChange: (e) => setObs(e.target.value),
              rows: 2,
              className: inputCls,
              placeholder: "Notas opcionales...",
            }),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowActions, {
        onCancel: onClose,
        disabled: !titulo.trim() || !fecha || !hora || !lugar.trim(),
        label: "Crear evento",
        onSave: () => {
          const d = /* @__PURE__ */ new Date(fecha + "T00:00:00");
          onSave({
            id: `e${Date.now()}`,
            type: tipo,
            title: titulo,
            date: fecha,
            dayLabel: String(d.getDate()).padStart(2, "0"),
            monthLabel: [
              "ENE",
              "FEB",
              "MAR",
              "ABR",
              "MAY",
              "JUN",
              "JUL",
              "AGO",
              "SEP",
              "OCT",
              "NOV",
              "DIC",
            ][d.getMonth()],
            time: `${hora} hs`,
            place: lugar,
            destinatarios,
            status: "pendiente",
            called: false,
          });
        },
      }),
    ],
  });
}
function L({ label, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
    className: "block",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: "mb-1 block text-xs font-semibold text-muted-foreground",
        children: label,
      }),
      children,
    ],
  });
}
function AsistenciaSection({ onOpenNew }) {
  const sesiones = useAsistencias();
  const [openId, setOpenId] = (0, import_react.useState)(null);
  const [editing, setEditing] = (0, import_react.useState)(false);
  const open = sesiones.find((s) => s.id === openId);
  const pcts = sesiones.map((s) => {
    const r = resumenRegistros(s.registros);
    return r.total ? Math.round((r.presentes / r.total) * 100) : 0;
  });
  const avg = pcts.length
    ? Math.round(pcts.reduce((a, b) => a + b, 0) / pcts.length)
    : 0;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_jsx_runtime.Fragment,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "mt-5 grid grid-cols-3 gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
              label: "Promedio",
              value: `${avg}%`,
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
              label: "Mejor",
              value: `${pcts.length ? Math.max(...pcts) : 0}%`,
              cls: "text-success",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
              label: "Menor",
              value: `${pcts.length ? Math.min(...pcts) : 0}%`,
              cls: "text-destructive",
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DSectionTitle, {
          children: "Sesiones recientes",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "space-y-2",
          children: sesiones.map((a) => {
            const r = resumenRegistros(a.registros);
            const pct = r.total ? Math.round((r.presentes / r.total) * 100) : 0;
            return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              Button,
              {
                variant: "ghost",
                onClick: () => {
                  setEditing(false);
                  setOpenId(a.id);
                },
                className:
                  "block h-auto w-full rounded-2xl bg-card p-4 text-left shadow-[var(--shadow-card)] transition active:scale-[0.98]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className:
                          "flex h-11 w-11 items-center justify-center rounded-xl bg-success-soft text-success",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          ClipboardList,
                          { className: "h-5 w-5" },
                        ),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "min-w-0 flex-1",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className: "truncate text-sm font-semibold",
                            children: a.titulo,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                            className: "text-xs text-muted-foreground",
                            children: [a.categoria, " · ", a.fecha],
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "text-right",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                            className: "text-base font-extrabold text-success",
                            children: [pct, "%"],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                            className: "text-[10px] text-muted-foreground",
                            children: [r.presentes, "/", r.total],
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className:
                      "mt-3 h-1.5 overflow-hidden rounded-full bg-secondary",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "div",
                      {
                        className: "h-full rounded-full bg-success",
                        style: { width: `${pct}%` },
                      },
                    ),
                  }),
                ],
              },
              a.id,
            );
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
          onClick: onOpenNew,
          className: "mt-5 w-full text-sm font-bold",
          children: "Registrar asistencia",
        }),
        open &&
          !editing &&
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AsistenciaListaSheet, {
            titulo: open.titulo,
            subtitulo: `${open.categoria} · ${open.fecha}`,
            registros: open.registros,
            onEdit: () => setEditing(true),
            onClose: () => setOpenId(null),
          }),
        open &&
          editing &&
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditarAsistenciaSheet, {
            titulo: `Editar · ${open.titulo}`,
            subtitulo: `${open.categoria} · ${open.fecha}`,
            registros: open.registros,
            categoria: open.categoria,
            onClose: () => setEditing(false),
            onSave: (nuevos) => {
              updateAsistencia(open.id, nuevos);
              toast$1.success("Asistencia actualizada");
              setEditing(false);
            },
          }),
      ],
    },
  );
}
function Stat({ label, value, cls = "text-foreground" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className:
      "rounded-2xl bg-card p-3 text-center shadow-[var(--shadow-card)]",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className:
          "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
        children: label,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: `mt-1 text-lg font-extrabold ${cls}`,
        children: value,
      }),
    ],
  });
}
function RegistrarAsistenciaSheet({ onClose }) {
  const jugadores = useSocios().filter((s) => s.rol === "jugador");
  const categorias = [
    "Todos",
    ...Array.from(new Set(jugadores.map((j) => j.categoria))),
  ];
  const [titulo, setTitulo] = (0, import_react.useState)("");
  const [tipo, setTipo] = (0, import_react.useState)("entrenamiento");
  const [fecha, setFecha] = (0, import_react.useState)(() =>
    /* @__PURE__ */ new Date().toISOString().slice(0, 10),
  );
  const [categoria, setCategoria] = (0, import_react.useState)("Todos");
  const [reg, setReg] = (0, import_react.useState)({});
  const lista = jugadores.filter(
    (j) => categoria === "Todos" || j.categoria === categoria,
  );
  const opts = [
    {
      k: "presente",
      l: "Asistió",
      on: "bg-success text-success-foreground hover:bg-success hover:text-success-foreground",
    },
    {
      k: "ausente",
      l: "No asistió",
      on: "bg-destructive text-destructive-foreground hover:bg-destructive hover:text-destructive-foreground",
    },
    {
      k: "lesionado",
      l: "Lesionado",
      on: "bg-orange-600 text-white hover:bg-orange-600 hover:text-white",
    },
    {
      k: "sin-respuesta",
      l: "Sin responder",
      on: "bg-warning text-warning-foreground hover:bg-warning hover:text-warning-foreground",
    },
  ];
  const guardar = () => {
    const [y, m, d] = fecha.split("-");
    const registros = {};
    lista.forEach((j) => (registros[j.id] = reg[j.id] ?? "sin-respuesta"));
    const r = resumenRegistros(registros);
    const s = {
      id: `as${Date.now()}`,
      titulo: titulo.trim(),
      tipo,
      fecha: `${d}-${m}-${y}`,
      categoria,
      presentes: r.presentes,
      total: r.total,
      registros,
    };
    addAsistencia(s);
    toast$1.success("Asistencia registrada");
    onClose();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FlowSheet, {
    title: "Registrar asistencia",
    onClose,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mt-4 space-y-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, {
            label: "Título del evento",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
              value: titulo,
              onChange: (e) => setTitulo(e.target.value),
              className: "fld",
              placeholder: "Ej: Entrenamiento martes",
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "grid grid-cols-2 gap-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, {
                label: "Tipo",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "select",
                  {
                    value: tipo,
                    onChange: (e) => setTipo(e.target.value),
                    className: "fld",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                        value: "entrenamiento",
                        children: "Entrenamiento",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                        value: "partido",
                        children: "Partido",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                        value: "reunion",
                        children: "Reunión",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                        value: "actividad",
                        children: "Actividad",
                      }),
                    ],
                  },
                ),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, {
                label: "Fecha",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                  type: "date",
                  value: fecha,
                  onChange: (e) => setFecha(e.target.value),
                  className: "fld",
                }),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, {
            label: "Categoría",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
              value: categoria,
              onChange: (e) => setCategoria(e.target.value),
              className: "fld",
              children: categorias.map((c) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "option",
                  {
                    value: c,
                    children: c,
                  },
                  c,
                ),
              ),
            }),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DSectionTitle, {
        children: ["Jugadores (", lista.length, ")"],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "space-y-2",
        children: lista.map((j) => {
          const cur = reg[j.id] ?? "sin-respuesta";
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "div",
            {
              className: "rounded-2xl bg-secondary p-3",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-sm font-semibold",
                  children: j.nombre,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-xs text-muted-foreground",
                  children: j.categoria,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "mt-2 grid grid-cols-2 gap-1.5",
                  children: opts.map((o) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      Button,
                      {
                        variant: "ghost",
                        onClick: () =>
                          setReg((p) => ({
                            ...p,
                            [j.id]: o.k,
                          })),
                        "aria-pressed": cur === o.k,
                        className: `rounded-xl px-2 py-1.5 text-xs font-bold transition ${cur === o.k ? o.on : "bg-card text-secondary-foreground"}`,
                        children: o.l,
                      },
                      o.k,
                    ),
                  ),
                }),
              ],
            },
            j.id,
          );
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowActions, {
        onCancel: onClose,
        disabled: !titulo.trim() || !fecha || lista.length === 0,
        label: "Guardar asistencia",
        onSave: guardar,
      }),
    ],
  });
}
export { EventosDirigente as component };
