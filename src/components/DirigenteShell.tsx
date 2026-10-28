import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home,
  Users,
  Calendar,
  Wallet,
  FolderOpen,
  Shield,
} from "lucide-react";

const items: {
  to: string;
  label: string;
  icon: typeof Home;
  exact?: boolean;
}[] = [
  { to: "/dirigente", label: "Inicio", icon: Home, exact: true },
  { to: "/dirigente/socios", label: "Socios", icon: Users },
  { to: "/dirigente/eventos", label: "Eventos", icon: Calendar },
  { to: "/dirigente/pagos", label: "Pagos", icon: Wallet },
  { to: "/dirigente/mas", label: "Mi Club", icon: FolderOpen },
];

export function DirigenteShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[480px] flex-col bg-background">
      <header className="sticky top-0 z-30 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 bg-background/90 px-5 pb-2 pt-3 backdrop-blur">
        <Link to="/dirigente" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Shield className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <div className="leading-tight">
            <p className="text-base font-extrabold tracking-tight text-foreground">
              ClubGestión
            </p>
            <p className="text-[10px] font-bold uppercase tracking-wider text-primary">
              Dirigente
            </p>
          </div>
        </Link>
        <Link
          to="/jugador"
          aria-label="Ver como jugador"
          className="flex min-h-11 items-center rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground"
        >
          Modo jugador
        </Link>
      </header>
      <main className="flex-1 px-5 pb-28 pt-2">{children}</main>
      <DirigenteBottomNav />
    </div>
  );
}

function DirigenteBottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav
      aria-label="Navegación de dirigente"
      className="app-nav fixed bottom-0 left-1/2 z-40 w-full max-w-[480px] -translate-x-1/2 border-t border-border bg-card/95 backdrop-blur"
    >
      <ul className="flex items-center justify-around px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2">
        {items.map(({ to, label, icon: Icon, exact }) => {
          const active = exact ? pathname === to : pathname.startsWith(to);
          return (
            <li key={to}>
              <Link
                to={to}
                aria-current={active ? "page" : undefined}
                className="flex w-16 flex-col items-center gap-1 text-[11px] font-medium"
              >
                <span
                  className={`flex h-10 w-12 items-center justify-center rounded-2xl transition-colors ${
                    active
                      ? "bg-primary-soft text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <span
                  className={
                    active ? "text-foreground" : "text-muted-foreground"
                  }
                >
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function DSectionTitle({
  children,
  action,
}: {
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="mb-3 mt-6 flex items-end justify-between">
      <h2 className="text-lg font-bold tracking-tight">{children}</h2>
      {action}
    </div>
  );
}
