import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dirigente")({
  head: () => ({
    meta: [
      { title: "ClubGestión Dirigente — Gestiona tu club" },
      {
        name: "description",
        content:
          "Panel para dirigentes de clubes deportivos amateurs: socios, pagos, eventos, documentos y comunicación en un solo lugar.",
      },
      { property: "og:title", content: "ClubGestión Dirigente" },
      {
        property: "og:description",
        content:
          "Organiza tu club deportivo: registra socios, controla pagos, planifica eventos y mantén tus documentos al día.",
      },
    ],
  }),
  component: () => <Outlet />,
});
