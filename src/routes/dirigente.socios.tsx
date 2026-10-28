import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dirigente/socios")({
  component: DirigenteSociosLayout,
});

function DirigenteSociosLayout() {
  return <Outlet />;
}
