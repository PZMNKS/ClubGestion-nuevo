import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { UserRound } from "lucide-react";
import { BottomNav } from "./BottomNav";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[30rem] flex-col bg-background">
      <header className="sticky top-0 z-30 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 bg-background/90 px-5 pb-2 pt-3 backdrop-blur">
        <Link
          to="/jugador"
          className="text-2xl font-extrabold tracking-tight text-primary"
        >
          ClubGestión
        </Link>
        <div className="flex items-center gap-2">
          <Link
            to="/dirigente"
            className="flex min-h-11 items-center rounded-xl bg-secondary px-2 text-xs font-semibold text-secondary-foreground"
          >
            Modo dirigente
          </Link>
          <Link
            to="/perfil"
            aria-label="Perfil"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground"
          >
            <UserRound className="h-5 w-5" />
          </Link>
        </div>
      </header>
      <main className="flex-1 px-5 pb-28 pt-2">{children}</main>
      <BottomNav />
    </div>
  );
}

export function SectionTitle({
  children,
  action,
}: {
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="mb-3 mt-6 flex items-end justify-between">
      <h2 className="text-xl font-bold tracking-tight">{children}</h2>
      {action}
    </div>
  );
}
