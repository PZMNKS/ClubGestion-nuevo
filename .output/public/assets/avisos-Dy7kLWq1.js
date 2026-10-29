import { c as e } from "./useSelector-7GdJWpjS.js";
import { t } from "./megaphone-jV0MBMQZ.js";
import { t as n } from "./AppShell-DK6djA2j.js";
import { o as r } from "./mock-data-C0pVxE4X.js";
import { o as i } from "./prototype-state-Cf-JC4Ew.js";
var a = e();
function o() {
  let { avisos: e } = i(),
    o = e.filter(
      (e) =>
        e.destinatarios === `Todos` ||
        e.destinatarios === r.category ||
        e.destinatarios === `Socios`,
    );
  return (0, a.jsxs)(n, {
    children: [
      (0, a.jsx)(`h1`, {
        className: `text-2xl font-extrabold`,
        children: `Avisos`,
      }),
      (0, a.jsxs)(`p`, {
        className: `mt-1 text-sm text-muted-foreground`,
        children: [r.category, ` · Comunicados del club`],
      }),
      (0, a.jsx)(`div`, {
        className: `mt-4 space-y-3`,
        children: o.map((e) =>
          (0, a.jsxs)(
            `article`,
            {
              className: `rounded-2xl bg-card p-4 shadow-card`,
              children: [
                (0, a.jsxs)(`div`, {
                  className: `flex items-center gap-2`,
                  children: [
                    (0, a.jsx)(t, {
                      className: `h-5 w-5 shrink-0 text-primary`,
                    }),
                    (0, a.jsx)(`h2`, {
                      className: `min-w-0 text-base font-bold`,
                      children: e.titulo,
                    }),
                  ],
                }),
                (0, a.jsx)(`p`, {
                  className: `mt-2 text-sm`,
                  children: e.cuerpo,
                }),
                (0, a.jsxs)(`p`, {
                  className: `mt-3 text-xs text-muted-foreground`,
                  children: [e.destinatarios, ` · `, e.autor, ` · `, e.fecha],
                }),
              ],
            },
            e.id,
          ),
        ),
      }),
    ],
  });
}
export { o as component };
