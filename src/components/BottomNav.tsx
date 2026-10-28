import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Calendar, Wallet, Megaphone, Shield } from "lucide-react";

const items = [
  { to: "/jugador", label: "Inicio", icon: Home },
  { to: "/eventos", label: "Eventos", icon: Calendar },
  { to: "/pagos", label: "Mis Pagos", icon: Wallet },
  { to: "/club", label: "Club", icon: Shield },
  { to: "/avisos", label: "Avisos", icon: Megaphone },
] as const;

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav
      aria-label="Navegación de jugador"
      className="app-nav fixed bottom-0 left-1/2 z-40 w-full max-w-[480px] -translate-x-1/2 border-t border-border bg-card/95 backdrop-blur"
    >
      <ul className="flex items-center justify-around px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2">
        {items.map(({ to, label, icon: Icon }) => {
          const active =
            to === "/jugador"
              ? pathname === "/jugador"
              : pathname.startsWith(to);
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
                      ? "bg-success-soft text-success"
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
