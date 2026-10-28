export const club = {
  name: "Club Atlético Los CZ",
  shield: "⚽",
  members: 67,
  founded: 1978,
  category: "Primera Adulta",
  city: "Santiago, Chile",
  colors: "Azul y Blanco",
  history:
    "Fundado en 1978 por un grupo de vecinos del barrio, Club Atlético Los CZ ha formado a generaciones de jugadores en el deporte amateur chileno, promoviendo el compañerismo y la vida activa.",
};

export const player = {
  name: "Matías Rojas",
  category: "Primera Adulta",
  position: "Mediocampista",
  number: 8,
  memberSince: "Marzo 2021",
  membership: "activo" as "activo" | "pendiente",
  level: 7,
  xp: 1450,
  xpToNext: 2000,
  title: "Jugador Comprometido",
  stats: {
    trainingsAttended: 84,
    matchesPlayed: 42,
    monthlyAttendance: 92,
    yearlyAttendance: 88,
    goals: 7,
    streak: 6,
  },
};

export type EventStatus = "confirmado" | "pendiente" | "no-asiste";
export type EventType = "partido" | "entrenamiento" | "reunion" | "actividad";

export const events: {
  id: string;
  type: EventType;
  title: string;
  date: string; // ISO
  dayLabel: string;
  monthLabel: string;
  time: string;
  place: string;
  rival?: string;
  status: EventStatus;
  called: boolean;
}[] = [
  {
    id: "1",
    type: "partido",
    title: "Partido vs Unión Centro",
    date: "2026-06-20",
    dayLabel: "20",
    monthLabel: "SÁB",
    time: "16:00 hs",
    place: "Cancha Principal",
    rival: "Unión Centro",
    status: "pendiente",
    called: true,
  },
  {
    id: "2",
    type: "entrenamiento",
    title: "Entrenamiento",
    date: "2026-06-18",
    dayLabel: "18",
    monthLabel: "JUE",
    time: "19:30 hs",
    place: "Cancha Auxiliar",
    status: "confirmado",
    called: true,
  },
  {
    id: "3",
    type: "entrenamiento",
    title: "Entrenamiento técnico",
    date: "2026-06-23",
    dayLabel: "23",
    monthLabel: "MAR",
    time: "19:30 hs",
    place: "Cancha Auxiliar",
    status: "pendiente",
    called: false,
  },
  {
    id: "4",
    type: "reunion",
    title: "Reunión de plantel",
    date: "2026-06-26",
    dayLabel: "26",
    monthLabel: "VIE",
    time: "20:00 hs",
    place: "Sede del Club",
    status: "pendiente",
    called: true,
  },
  {
    id: "5",
    type: "partido",
    title: "Partido vs Deportivo Norte",
    date: "2026-06-28",
    dayLabel: "28",
    monthLabel: "DOM",
    time: "11:00 hs",
    place: "Cancha Visitante",
    rival: "Deportivo Norte",
    status: "pendiente",
    called: false,
  },
  {
    id: "6",
    type: "actividad",
    title: "Asado del club",
    date: "2026-07-05",
    dayLabel: "05",
    monthLabel: "DOM",
    time: "13:00 hs",
    place: "Sede del Club",
    status: "pendiente",
    called: false,
  },
];

export const payments: {
  id: string;
  concept: string;
  amount: number;
  dueDate: string;
  status: "pendiente" | "pagado" | "vencido";
  paidAt?: string;
}[] = [
  {
    id: "p1",
    concept: "Cuota Junio 2026",
    amount: 15000,
    dueDate: "2026-06-20",
    status: "pendiente",
  },
  {
    id: "p2",
    concept: "Cuota Mayo 2026",
    amount: 15000,
    dueDate: "2026-05-20",
    status: "pagado",
    paidAt: "2026-05-18",
  },
  {
    id: "p3",
    concept: "Cuota Abril 2026",
    amount: 15000,
    dueDate: "2026-04-20",
    status: "pagado",
    paidAt: "2026-04-19",
  },
  {
    id: "p4",
    concept: "Cuota Marzo 2026",
    amount: 15000,
    dueDate: "2026-03-20",
    status: "pagado",
    paidAt: "2026-03-17",
  },
  {
    id: "p5",
    concept: "Inscripción torneo",
    amount: 8000,
    dueDate: "2026-02-15",
    status: "pagado",
    paidAt: "2026-02-12",
  },
];

export const announcements: {
  id: string;
  title: string;
  body: string;
  time: string;
  pinned: boolean;
  icon: string;
}[] = [
  {
    id: "a1",
    title: "Convocatoria publicada",
    body: "Se ha publicado la lista para el partido del sábado.",
    time: "hace 2h",
    pinned: true,
    icon: "📣",
  },
  {
    id: "a2",
    title: "Cambio de horario",
    body: "El entrenamiento del jueves será a las 19:30 hs.",
    time: "hace 1d",
    pinned: false,
    icon: "⏰",
  },
  {
    id: "a3",
    title: "Inscripción al torneo",
    body: "Abierta la inscripción para el torneo de invierno.",
    time: "hace 3d",
    pinned: false,
    icon: "🏆",
  },
];

export const achievements = [
  { id: "ac1", name: "Primer entrenamiento", icon: "🌱", unlocked: true },
  { id: "ac2", name: "10 entrenamientos seguidos", icon: "🔥", unlocked: true },
  { id: "ac3", name: "20 partidos jugados", icon: "⚽", unlocked: true },
  { id: "ac4", name: "3 meses sin atrasos", icon: "💎", unlocked: true },
  { id: "ac5", name: "Capitán ejemplar", icon: "🎖️", unlocked: false },
  { id: "ac6", name: "Jugador comprometido", icon: "🏅", unlocked: true },
  { id: "ac7", name: "50 partidos jugados", icon: "🏆", unlocked: false },
  { id: "ac8", name: "Goleador del mes", icon: "⭐", unlocked: false },
];

export const standings = [
  { pos: 1, team: "Deportivo Norte", pj: 10, pts: 24 },
  { pos: 2, team: "Club Atlético Los CZ", pj: 10, pts: 22 },
  { pos: 3, team: "Unión Centro", pj: 10, pts: 19 },
  { pos: 4, team: "Atlético Sur", pj: 10, pts: 15 },
  { pos: 5, team: "Barrio FC", pj: 10, pts: 12 },
];

export const recentResults = [
  {
    id: "r1",
    rival: "Atlético Sur",
    result: "3 - 1",
    local: true,
    date: "07 Jun",
  },
  {
    id: "r2",
    rival: "Barrio FC",
    result: "2 - 2",
    local: false,
    date: "31 May",
  },
  {
    id: "r3",
    rival: "Deportivo Norte",
    result: "0 - 1",
    local: true,
    date: "24 May",
  },
];
