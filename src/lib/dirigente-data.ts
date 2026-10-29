export type SocioStatus = "al-dia" | "pendiente" | "vencido";
export type SocioRol = "jugador" | "dirigente" | "cuerpo-tecnico" | "socio";

export type Socio = {
  id: string;
  nombre: string;
  rol: SocioRol;
  categoria: string;
  numero?: number;
  posicion?: string;
  contacto: string;
  telefono: string;
  pago: SocioStatus;
  asistenciaPct: number;
  observaciones?: string;
  desde: string;
  foto: string; // emoji/avatar placeholder
};

export const socios: Socio[] = [
  {
    id: "s1",
    nombre: "Matías Rojas",
    rol: "jugador",
    categoria: "Primera Adulta",
    numero: 8,
    posicion: "Mediocampista",
    contacto: "matias@mail.cl",
    telefono: "+56 9 5544 1122",
    pago: "pendiente",
    asistenciaPct: 92,
    observaciones: "Capitán del equipo.",
    desde: "Mar 2021",
    foto: "MR",
  },
  {
    id: "s2",
    nombre: "Camila Soto",
    rol: "jugador",
    categoria: "Femenino Adulto",
    numero: 10,
    posicion: "Delantera",
    contacto: "camila@mail.cl",
    telefono: "+56 9 7788 3344",
    pago: "al-dia",
    asistenciaPct: 88,
    desde: "Ene 2022",
    foto: "CS",
  },
  {
    id: "s3",
    nombre: "Jorge Pérez",
    rol: "jugador",
    categoria: "Primera Adulta",
    numero: 1,
    posicion: "Arquero",
    contacto: "jperez@mail.cl",
    telefono: "+56 9 4422 9911",
    pago: "vencido",
    asistenciaPct: 65,
    observaciones: "Lesión leve en mayo.",
    desde: "Jul 2019",
    foto: "JP",
  },
  {
    id: "s4",
    nombre: "Valentina Díaz",
    rol: "jugador",
    categoria: "Sub-17",
    numero: 7,
    posicion: "Volante",
    contacto: "vdiaz@mail.cl",
    telefono: "+56 9 6677 1234",
    pago: "al-dia",
    asistenciaPct: 95,
    desde: "Abr 2023",
    foto: "VD",
  },
  {
    id: "s5",
    nombre: "Pedro Muñoz",
    rol: "cuerpo-tecnico",
    categoria: "Cuerpo Técnico",
    contacto: "dt@mail.cl",
    telefono: "+56 9 1122 3344",
    pago: "al-dia",
    asistenciaPct: 100,
    observaciones: "Entrenador principal.",
    desde: "Feb 2020",
    foto: "PM",
  },
  {
    id: "s6",
    nombre: "Lucía Vergara",
    rol: "dirigente",
    categoria: "Directiva",
    contacto: "lvergara@mail.cl",
    telefono: "+56 9 8899 2211",
    pago: "al-dia",
    asistenciaPct: 100,
    observaciones: "Secretaria.",
    desde: "Ago 2018",
    foto: "LV",
  },
  {
    id: "s7",
    nombre: "Diego Fuentes",
    rol: "jugador",
    categoria: "Sub-17",
    numero: 4,
    posicion: "Defensa",
    contacto: "dfuentes@mail.cl",
    telefono: "+56 9 5566 8877",
    pago: "pendiente",
    asistenciaPct: 78,
    desde: "Mar 2024",
    foto: "DF",
  },
  {
    id: "s8",
    nombre: "Antonia Rivas",
    rol: "socio",
    categoria: "Socio colaborador",
    contacto: "antonia@mail.cl",
    telefono: "+56 9 2233 9988",
    pago: "al-dia",
    asistenciaPct: 60,
    desde: "May 2021",
    foto: "AR",
  },
];

export const clubResumen = {
  nombre: "Club Atlético Los CZ",
  escudo: "⚽",
  miembrosActivos: 67,
  jugadoresActivos: 48,
  pagosPendientes: 12,
  ingresosMes: 720000, // CLP
  asistenciaPromedio: 84,
  proximoEvento: "Sáb 20 · vs Unión Centro",
  estadoFormalizacion: 72, // %
};

export type Documento = {
  id: string;
  nombre: string;
  tipo: "acta" | "estatuto" | "certificado" | "directiva" | "otro";
  vencimiento?: string;
  estado: "vigente" | "por-vencer" | "vencido" | "pendiente";
  subidoPor?: string;
  fechaSubida?: string;
};

export const documentos: Documento[] = [
  {
    id: "d1",
    nombre: "Certificado de personalidad jurídica",
    tipo: "certificado",
    vencimiento: "15-08-2026",
    estado: "vigente",
    subidoPor: "Lucía V.",
    fechaSubida: "10-01-2026",
  },
  {
    id: "d2",
    nombre: "Acta última asamblea",
    tipo: "acta",
    estado: "vigente",
    subidoPor: "Lucía V.",
    fechaSubida: "05-05-2026",
  },
  {
    id: "d3",
    nombre: "Estatutos del club",
    tipo: "estatuto",
    estado: "vigente",
    subidoPor: "Directiva",
    fechaSubida: "20-03-2024",
  },
  {
    id: "d4",
    nombre: "Inscripción en Registro Civil de OOCC",
    tipo: "certificado",
    vencimiento: "30-07-2026",
    estado: "por-vencer",
    subidoPor: "Lucía V.",
    fechaSubida: "30-07-2024",
  },
  {
    id: "d5",
    nombre: "Renovación directiva (acta)",
    tipo: "directiva",
    estado: "pendiente",
  },
  {
    id: "d6",
    nombre: "Permiso uso cancha municipal",
    tipo: "otro",
    vencimiento: "20-06-2026",
    estado: "vencido",
    subidoPor: "Pedro M.",
    fechaSubida: "20-06-2025",
  },
  {
    id: "d7",
    nombre: "Certificado tributario",
    tipo: "certificado",
    estado: "pendiente",
  },
];

export type AvisoDirigente = {
  id: string;
  titulo: string;
  cuerpo: string;
  fecha: string;
  destinatarios: string;
  autor: string;
};

export const avisos: AvisoDirigente[] = [
  {
    id: "av1",
    titulo: "Convocatoria sábado",
    cuerpo: "Citación a Primera Adulta para el partido vs Unión Centro.",
    fecha: "hace 2h",
    destinatarios: "Primera Adulta",
    autor: "Lucía V.",
  },
  {
    id: "av2",
    titulo: "Cambio de horario entreno",
    cuerpo: "El jueves entrenamos a las 19:30 hs en cancha auxiliar.",
    fecha: "hace 1d",
    destinatarios: "Todos",
    autor: "Pedro M.",
  },
  {
    id: "av3",
    titulo: "Cuotas de junio",
    cuerpo: "Recordatorio de pago de cuota mensual antes del 20.",
    fecha: "hace 3d",
    destinatarios: "Socios",
    autor: "Lucía V.",
  },
];

export type AsistenciaSesion = {
  id: string;
  titulo: string;
  fecha: string; // dd-mm-yyyy
  categoria: string;
  presentes: number;
  total: number;
};

export const asistencias: AsistenciaSesion[] = [
  {
    id: "as1",
    titulo: "Entrenamiento",
    fecha: "18-06-2026",
    categoria: "Primera Adulta",
    presentes: 18,
    total: 22,
  },
  {
    id: "as2",
    titulo: "Partido vs Atlético Sur",
    fecha: "07-06-2026",
    categoria: "Primera Adulta",
    presentes: 16,
    total: 18,
  },
  {
    id: "as3",
    titulo: "Entrenamiento",
    fecha: "16-06-2026",
    categoria: "Sub-17",
    presentes: 12,
    total: 16,
  },
  {
    id: "as4",
    titulo: "Reunión plantel",
    fecha: "10-06-2026",
    categoria: "Todos",
    presentes: 35,
    total: 48,
  },
];

export type PagoSocio = {
  id: string;
  socioId: string;
  socio: string;
  concepto: string;
  monto: number;
  vencimiento: string;
  estado: "pagado" | "pendiente" | "vencido";
  pagadoEl?: string;
};

export const pagosClub: PagoSocio[] = [
  {
    id: "pc1",
    socioId: "s1",
    socio: "Matías Rojas",
    concepto: "Cuota Junio 2026",
    monto: 15000,
    vencimiento: "20-06-2026",
    estado: "pendiente",
  },
  {
    id: "pc2",
    socioId: "s3",
    socio: "Jorge Pérez",
    concepto: "Cuota Mayo 2026",
    monto: 15000,
    vencimiento: "20-05-2026",
    estado: "vencido",
  },
  {
    id: "pc3",
    socioId: "s7",
    socio: "Diego Fuentes",
    concepto: "Cuota Junio 2026",
    monto: 12000,
    vencimiento: "20-06-2026",
    estado: "pendiente",
  },
  {
    id: "pc4",
    socioId: "s2",
    socio: "Camila Soto",
    concepto: "Cuota Junio 2026",
    monto: 15000,
    vencimiento: "20-06-2026",
    estado: "pagado",
    pagadoEl: "12-06-2026",
  },
  {
    id: "pc5",
    socioId: "s4",
    socio: "Valentina Díaz",
    concepto: "Cuota Junio 2026",
    monto: 12000,
    vencimiento: "20-06-2026",
    estado: "pagado",
    pagadoEl: "10-06-2026",
  },
  {
    id: "pc6",
    socioId: "s8",
    socio: "Antonia Rivas",
    concepto: "Aporte socio Jun 2026",
    monto: 8000,
    vencimiento: "20-06-2026",
    estado: "pagado",
    pagadoEl: "05-06-2026",
  },
];

import { useEffect, useSyncExternalStore } from "react";

const STORAGE_KEY = "dirigente.socios.v1";
let _socios: Socio[] = socios;
let _hydrated = false;
const _listeners = new Set<() => void>();

function _emit() {
  for (const l of _listeners) l();
}

function _hydrate() {
  if (_hydrated || typeof window === "undefined") return;
  _hydrated = true;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Socio[];
      if (Array.isArray(parsed) && parsed.length) {
        _socios = parsed;
        _emit();
      }
    }
  } catch {
    /* ignore */
  }
}

function _persist() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(_socios));
  } catch {
    /* ignore */
  }
}

export function getSocios(): Socio[] {
  return _socios;
}

export function addSocio(s: Socio) {
  _socios = [s, ..._socios];
  _persist();
  _emit();
}

export function updateSocio(id: string, patch: Partial<Socio>) {
  _socios = _socios.map((s) => (s.id === id ? { ...s, ...patch } : s));
  _persist();
  _emit();
}

function subscribeSocios(cb: () => void) {
  _listeners.add(cb);
  return () => {
    _listeners.delete(cb);
  };
}

export function useSocios(): Socio[] {
  useEffect(() => {
    _hydrate();
  }, []);
  return useSyncExternalStore(
    subscribeSocios,
    () => _socios,
    () => socios,
  );
}

// ---------------- Asistencias store ----------------
export type EstadoAsistencia =
  "presente" | "ausente" | "lesionado" | "sin-respuesta";

export type SesionAsistencia = AsistenciaSesion & {
  tipo: string;
  registros: Record<string, EstadoAsistencia>;
};

const _ciclo: EstadoAsistencia[] = [
  "presente",
  "presente",
  "ausente",
  "presente",
  "sin-respuesta",
];
function _seedRegistros(
  categoria: string,
  offset: number,
): Record<string, EstadoAsistencia> {
  const r: Record<string, EstadoAsistencia> = {};
  socios
    .filter(
      (s) =>
        s.rol === "jugador" &&
        (categoria === "Todos" || s.categoria === categoria),
    )
    .forEach((s, i) => {
      r[s.id] = _ciclo[(i + offset) % _ciclo.length];
    });
  return r;
}

const seedSesiones: SesionAsistencia[] = asistencias.map((a, i) => ({
  ...a,
  tipo: a.titulo.toLowerCase().startsWith("partido")
    ? "partido"
    : a.titulo.toLowerCase().startsWith("reuni")
      ? "reunion"
      : "entrenamiento",
  registros: _seedRegistros(a.categoria, i),
}));

export function resumenRegistros(r: Record<string, EstadoAsistencia>) {
  const v = Object.values(r);
  return {
    presentes: v.filter((x) => x === "presente").length,
    ausentes: v.filter((x) => x === "ausente").length,
    lesionados: v.filter((x) => x === "lesionado").length,
    sinRespuesta: v.filter((x) => x === "sin-respuesta").length,
    total: v.length,
  };
}

export function convocatoriaEvento(
  eventId: string,
  called: boolean,
): Record<string, EstadoAsistencia> {
  const r: Record<string, EstadoAsistencia> = {};
  const seed = eventId.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  getSocios()
    .filter((s) => s.rol === "jugador")
    .forEach((s, i) => {
      r[s.id] = called ? _ciclo[(i + seed) % _ciclo.length] : "sin-respuesta";
    });
  return r;
}

const AS_KEY = "dirigente.asistencias.v1";
let _ses: SesionAsistencia[] = seedSesiones;
let _sesHydrated = false;
const _sesL = new Set<() => void>();

export function addAsistencia(s: SesionAsistencia) {
  _ses = [s, ..._ses];
  try {
    window.localStorage.setItem(AS_KEY, JSON.stringify(_ses));
  } catch {
    /* ignore */
  }
  for (const l of _sesL) l();
}

export function updateAsistencia(
  id: string,
  registros: Record<string, EstadoAsistencia>,
) {
  const r = resumenRegistros(registros);
  _ses = _ses.map((s) =>
    s.id === id
      ? { ...s, registros, presentes: r.presentes, total: r.total }
      : s,
  );
  try {
    window.localStorage.setItem(AS_KEY, JSON.stringify(_ses));
  } catch {
    /* ignore */
  }
  for (const l of _sesL) l();
}

export function useAsistencias(): SesionAsistencia[] {
  useEffect(() => {
    if (!_sesHydrated) {
      _sesHydrated = true;
      try {
        const raw = window.localStorage.getItem(AS_KEY);
        if (raw) {
          const p = JSON.parse(raw);
          if (Array.isArray(p) && p.length) {
            _ses = p;
            for (const l of _sesL) l();
          }
        }
      } catch {
        /* ignore */
      }
    }
  }, []);
  return useSyncExternalStore(
    (cb) => {
      _sesL.add(cb);
      return () => {
        _sesL.delete(cb);
      };
    },
    () => _ses,
    () => seedSesiones,
  );
}
