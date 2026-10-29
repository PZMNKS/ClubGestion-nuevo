import { d as e, l as t } from "./useSelector-7GdJWpjS.js";
var n = e(t(), 1),
  r = [
    {
      id: `s1`,
      nombre: `Matías Rojas`,
      rol: `jugador`,
      categoria: `Primera Adulta`,
      numero: 8,
      posicion: `Mediocampista`,
      contacto: `matias@mail.cl`,
      telefono: `+56 9 5544 1122`,
      pago: `pendiente`,
      asistenciaPct: 92,
      observaciones: `Capitán del equipo.`,
      desde: `Mar 2021`,
      foto: `MR`,
    },
    {
      id: `s2`,
      nombre: `Camila Soto`,
      rol: `jugador`,
      categoria: `Femenino Adulto`,
      numero: 10,
      posicion: `Delantera`,
      contacto: `camila@mail.cl`,
      telefono: `+56 9 7788 3344`,
      pago: `al-dia`,
      asistenciaPct: 88,
      desde: `Ene 2022`,
      foto: `CS`,
    },
    {
      id: `s3`,
      nombre: `Jorge Pérez`,
      rol: `jugador`,
      categoria: `Primera Adulta`,
      numero: 1,
      posicion: `Arquero`,
      contacto: `jperez@mail.cl`,
      telefono: `+56 9 4422 9911`,
      pago: `vencido`,
      asistenciaPct: 65,
      observaciones: `Lesión leve en mayo.`,
      desde: `Jul 2019`,
      foto: `JP`,
    },
    {
      id: `s4`,
      nombre: `Valentina Díaz`,
      rol: `jugador`,
      categoria: `Sub-17`,
      numero: 7,
      posicion: `Volante`,
      contacto: `vdiaz@mail.cl`,
      telefono: `+56 9 6677 1234`,
      pago: `al-dia`,
      asistenciaPct: 95,
      desde: `Abr 2023`,
      foto: `VD`,
    },
    {
      id: `s5`,
      nombre: `Pedro Muñoz`,
      rol: `cuerpo-tecnico`,
      categoria: `Cuerpo Técnico`,
      contacto: `dt@mail.cl`,
      telefono: `+56 9 1122 3344`,
      pago: `al-dia`,
      asistenciaPct: 100,
      observaciones: `Entrenador principal.`,
      desde: `Feb 2020`,
      foto: `PM`,
    },
    {
      id: `s6`,
      nombre: `Lucía Vergara`,
      rol: `dirigente`,
      categoria: `Directiva`,
      contacto: `lvergara@mail.cl`,
      telefono: `+56 9 8899 2211`,
      pago: `al-dia`,
      asistenciaPct: 100,
      observaciones: `Secretaria.`,
      desde: `Ago 2018`,
      foto: `LV`,
    },
    {
      id: `s7`,
      nombre: `Diego Fuentes`,
      rol: `jugador`,
      categoria: `Sub-17`,
      numero: 4,
      posicion: `Defensa`,
      contacto: `dfuentes@mail.cl`,
      telefono: `+56 9 5566 8877`,
      pago: `pendiente`,
      asistenciaPct: 78,
      desde: `Mar 2024`,
      foto: `DF`,
    },
    {
      id: `s8`,
      nombre: `Antonia Rivas`,
      rol: `socio`,
      categoria: `Socio colaborador`,
      contacto: `antonia@mail.cl`,
      telefono: `+56 9 2233 9988`,
      pago: `al-dia`,
      asistenciaPct: 60,
      desde: `May 2021`,
      foto: `AR`,
    },
  ],
  i = {
    nombre: `Club Atlético Los CZ`,
    escudo: `⚽`,
    miembrosActivos: 67,
    jugadoresActivos: 48,
    pagosPendientes: 12,
    ingresosMes: 72e4,
    asistenciaPromedio: 84,
    proximoEvento: `Sáb 20 · vs Unión Centro`,
    estadoFormalizacion: 72,
  },
  a = [
    {
      id: `d1`,
      nombre: `Certificado de personalidad jurídica`,
      tipo: `certificado`,
      vencimiento: `15-08-2026`,
      estado: `vigente`,
      subidoPor: `Lucía V.`,
      fechaSubida: `10-01-2026`,
    },
    {
      id: `d2`,
      nombre: `Acta última asamblea`,
      tipo: `acta`,
      estado: `vigente`,
      subidoPor: `Lucía V.`,
      fechaSubida: `05-05-2026`,
    },
    {
      id: `d3`,
      nombre: `Estatutos del club`,
      tipo: `estatuto`,
      estado: `vigente`,
      subidoPor: `Directiva`,
      fechaSubida: `20-03-2024`,
    },
    {
      id: `d4`,
      nombre: `Inscripción en Registro Civil de OOCC`,
      tipo: `certificado`,
      vencimiento: `30-07-2026`,
      estado: `por-vencer`,
      subidoPor: `Lucía V.`,
      fechaSubida: `30-07-2024`,
    },
    {
      id: `d5`,
      nombre: `Renovación directiva (acta)`,
      tipo: `directiva`,
      estado: `pendiente`,
    },
    {
      id: `d6`,
      nombre: `Permiso uso cancha municipal`,
      tipo: `otro`,
      vencimiento: `20-06-2026`,
      estado: `vencido`,
      subidoPor: `Pedro M.`,
      fechaSubida: `20-06-2025`,
    },
    {
      id: `d7`,
      nombre: `Certificado tributario`,
      tipo: `certificado`,
      estado: `pendiente`,
    },
  ],
  o = [
    {
      id: `av1`,
      titulo: `Convocatoria sábado`,
      cuerpo: `Citación a Primera Adulta para el partido vs Unión Centro.`,
      fecha: `hace 2h`,
      destinatarios: `Primera Adulta`,
      autor: `Lucía V.`,
    },
    {
      id: `av2`,
      titulo: `Cambio de horario entreno`,
      cuerpo: `El jueves entrenamos a las 19:30 hs en cancha auxiliar.`,
      fecha: `hace 1d`,
      destinatarios: `Todos`,
      autor: `Pedro M.`,
    },
    {
      id: `av3`,
      titulo: `Cuotas de junio`,
      cuerpo: `Recordatorio de pago de cuota mensual antes del 20.`,
      fecha: `hace 3d`,
      destinatarios: `Socios`,
      autor: `Lucía V.`,
    },
  ],
  s = [
    {
      id: `as1`,
      titulo: `Entrenamiento`,
      fecha: `18-06-2026`,
      categoria: `Primera Adulta`,
      presentes: 18,
      total: 22,
    },
    {
      id: `as2`,
      titulo: `Partido vs Atlético Sur`,
      fecha: `07-06-2026`,
      categoria: `Primera Adulta`,
      presentes: 16,
      total: 18,
    },
    {
      id: `as3`,
      titulo: `Entrenamiento`,
      fecha: `16-06-2026`,
      categoria: `Sub-17`,
      presentes: 12,
      total: 16,
    },
    {
      id: `as4`,
      titulo: `Reunión plantel`,
      fecha: `10-06-2026`,
      categoria: `Todos`,
      presentes: 35,
      total: 48,
    },
  ],
  c = [
    {
      id: `pc1`,
      socioId: `s1`,
      socio: `Matías Rojas`,
      concepto: `Cuota Junio 2026`,
      monto: 15e3,
      vencimiento: `20-06-2026`,
      estado: `pendiente`,
    },
    {
      id: `pc2`,
      socioId: `s3`,
      socio: `Jorge Pérez`,
      concepto: `Cuota Mayo 2026`,
      monto: 15e3,
      vencimiento: `20-05-2026`,
      estado: `vencido`,
    },
    {
      id: `pc3`,
      socioId: `s7`,
      socio: `Diego Fuentes`,
      concepto: `Cuota Junio 2026`,
      monto: 12e3,
      vencimiento: `20-06-2026`,
      estado: `pendiente`,
    },
    {
      id: `pc4`,
      socioId: `s2`,
      socio: `Camila Soto`,
      concepto: `Cuota Junio 2026`,
      monto: 15e3,
      vencimiento: `20-06-2026`,
      estado: `pagado`,
      pagadoEl: `12-06-2026`,
    },
    {
      id: `pc5`,
      socioId: `s4`,
      socio: `Valentina Díaz`,
      concepto: `Cuota Junio 2026`,
      monto: 12e3,
      vencimiento: `20-06-2026`,
      estado: `pagado`,
      pagadoEl: `10-06-2026`,
    },
    {
      id: `pc6`,
      socioId: `s8`,
      socio: `Antonia Rivas`,
      concepto: `Aporte socio Jun 2026`,
      monto: 8e3,
      vencimiento: `20-06-2026`,
      estado: `pagado`,
      pagadoEl: `05-06-2026`,
    },
  ],
  l = `dirigente.socios.v1`,
  u = r,
  d = !1,
  f = new Set();
function p() {
  for (let e of f) e();
}
function m() {
  if (!(d || typeof window > `u`)) {
    d = !0;
    try {
      let e = window.localStorage.getItem(l);
      if (e) {
        let t = JSON.parse(e);
        Array.isArray(t) && t.length && ((u = t), p());
      }
    } catch {}
  }
}
function h() {
  if (typeof window < `u`)
    try {
      window.localStorage.setItem(l, JSON.stringify(u));
    } catch {}
}
function g() {
  return u;
}
function _(e) {
  ((u = [e, ...u]), h(), p());
}
function v(e, t) {
  ((u = u.map((n) => (n.id === e ? { ...n, ...t } : n))), h(), p());
}
function y(e) {
  return (
    f.add(e),
    () => {
      f.delete(e);
    }
  );
}
function b() {
  return (
    (0, n.useEffect)(() => {
      m();
    }, []),
    (0, n.useSyncExternalStore)(
      y,
      () => u,
      () => r,
    )
  );
}
var x = [`presente`, `presente`, `ausente`, `presente`, `sin-respuesta`];
function S(e, t) {
  let n = {};
  return (
    r
      .filter(
        (t) => t.rol === `jugador` && (e === `Todos` || t.categoria === e),
      )
      .forEach((e, r) => {
        n[e.id] = x[(r + t) % x.length];
      }),
    n
  );
}
var C = s.map((e, t) => ({
  ...e,
  tipo: e.titulo.toLowerCase().startsWith(`partido`)
    ? `partido`
    : e.titulo.toLowerCase().startsWith(`reuni`)
      ? `reunion`
      : `entrenamiento`,
  registros: S(e.categoria, t),
}));
function w(e) {
  let t = Object.values(e);
  return {
    presentes: t.filter((e) => e === `presente`).length,
    ausentes: t.filter((e) => e === `ausente`).length,
    lesionados: t.filter((e) => e === `lesionado`).length,
    sinRespuesta: t.filter((e) => e === `sin-respuesta`).length,
    total: t.length,
  };
}
function T(e, t) {
  let n = {},
    r = e.split(``).reduce((e, t) => e + t.charCodeAt(0), 0);
  return (
    g()
      .filter((e) => e.rol === `jugador`)
      .forEach((e, i) => {
        n[e.id] = t ? x[(i + r) % x.length] : `sin-respuesta`;
      }),
    n
  );
}
var E = `dirigente.asistencias.v1`,
  D = C,
  O = !1,
  k = new Set();
function A(e) {
  D = [e, ...D];
  try {
    window.localStorage.setItem(E, JSON.stringify(D));
  } catch {}
  for (let e of k) e();
}
function j(e, t) {
  let n = w(t);
  D = D.map((r) =>
    r.id === e
      ? { ...r, registros: t, presentes: n.presentes, total: n.total }
      : r,
  );
  try {
    window.localStorage.setItem(E, JSON.stringify(D));
  } catch {}
  for (let e of k) e();
}
function M() {
  return (
    (0, n.useEffect)(() => {
      if (!O) {
        O = !0;
        try {
          let e = window.localStorage.getItem(E);
          if (e) {
            let t = JSON.parse(e);
            if (Array.isArray(t) && t.length) {
              D = t;
              for (let e of k) e();
            }
          }
        } catch {}
      }
    }, []),
    (0, n.useSyncExternalStore)(
      (e) => (
        k.add(e),
        () => {
          k.delete(e);
        }
      ),
      () => D,
      () => C,
    )
  );
}
export {
  T as a,
  w as c,
  M as d,
  b as f,
  i,
  j as l,
  _ as n,
  a as o,
  o as r,
  c as s,
  A as t,
  v as u,
};
