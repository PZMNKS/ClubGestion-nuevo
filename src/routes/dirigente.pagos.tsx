import { pageHead } from "@/lib/page-head";
import { FlowSheet, FlowActions } from "@/components/FlowSheet";
import { toast } from "@/lib/toast";
import {
  usePrototype,
  getPrototype,
  updatePrototype,
} from "@/lib/prototype-state";
import { useSocios } from "@/lib/dirigente-data";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CheckCircle2, Wallet, TrendingUp, AlertTriangle } from "lucide-react";
import { DirigenteShell, DSectionTitle } from "@/components/DirigenteShell";
import {
  pagosClub as initialPagos,
  type PagoSocio,
} from "@/lib/dirigente-data";

export const Route = createFileRoute("/dirigente/pagos")({
  head: () =>
    pageHead(
      "Pagos del club",
      "Control global de cuotas, ingresos y pagos pendientes de los socios.",
    ),
  component: PagosDirigente,
});

const filtros = ["todos", "pendiente", "vencido", "pagado"] as const;

function PagosDirigente() {
  const { pagosClub: pagos } = usePrototype();
  const socios = useSocios();
  const [confirm, setConfirm] = useState<PagoSocio | null>(null);
  const [f, setF] = useState<(typeof filtros)[number]>("todos");

  const filtered = useMemo(
    () => (f === "todos" ? pagos : pagos.filter((p) => p.estado === f)),
    [pagos, f],
  );

  const totalIngresos = pagos
    .filter((p) => p.estado === "pagado")
    .reduce((s, p) => s + p.monto, 0);
  const totalPendiente = pagos
    .filter((p) => p.estado !== "pagado")
    .reduce((s, p) => s + p.monto, 0);
  const morosos = new Set(
    pagos.filter((p) => p.estado === "vencido").map((p) => p.socioId),
  ).size;

  const markPaid = (id: string) => {
    const before = getPrototype().pagosClub;
    updatePrototype({
      pagosClub: before.map((p) =>
        p.id === id ? { ...p, estado: "pagado", pagadoEl: hoy() } : p,
      ),
    });
    setConfirm(null);
    toast.success("Pago registrado en esta sesión", {
      action: {
        label: "Deshacer",
        onClick: () => updatePrototype({ pagosClub: before }),
      },
    });
  };

  return (
    <DirigenteShell>
      <h1 className="text-2xl font-extrabold">Pagos</h1>
      <p className="text-sm text-muted-foreground">
        Control de cuotas y aportes del club.
      </p>

      <div className="mt-4 grid grid-cols-1 gap-2 min-[23.75rem]:grid-cols-3">
        <Sum
          label="Ingresos registrados"
          value={fmt(totalIngresos)}
          tone="ok"
          icon={<TrendingUp className="h-4 w-4" />}
        />
        <Sum
          label="Por cobrar"
          value={fmt(totalPendiente)}
          tone="warn"
          icon={<Wallet className="h-4 w-4" />}
        />
        <Sum
          label="Morosos"
          value={String(morosos)}
          tone={morosos ? "bad" : "default"}
          icon={<AlertTriangle className="h-4 w-4" />}
        />
      </div>

      <div className="mt-4 inline-flex max-w-full overflow-x-auto rounded-full bg-secondary p-1">
        {filtros.map((it) => (
          <Button
            variant="ghost"
            key={it}
            onClick={() => setF(it)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold capitalize transition ${
              f === it
                ? "bg-card text-foreground shadow-[var(--shadow-card)]"
                : "text-muted-foreground"
            }`}
          >
            {it}
          </Button>
        ))}
      </div>

      <DSectionTitle>{filtered.length} pagos</DSectionTitle>
      <div className="space-y-2">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]"
          >
            <div className="flex items-start gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                  p.estado === "pagado"
                    ? "bg-success-soft text-success"
                    : p.estado === "vencido"
                      ? "bg-destructive-soft text-destructive"
                      : "bg-warning-soft text-warning-foreground"
                }`}
              >
                {p.estado === "pagado" ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <Wallet className="h-5 w-5" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="break-words text-sm font-semibold">{p.socio}</p>
                <p className="mt-0.5 break-words text-xs text-muted-foreground">
                  {p.concepto} ·{" "}
                  {p.estado === "pagado"
                    ? `Pagado ${p.pagadoEl}`
                    : `Vence ${p.vencimiento}`}
                </p>
              </div>
              <p className="shrink-0 text-right text-sm font-bold">
                {fmt(p.monto)}
              </p>
            </div>
            {p.estado !== "pagado" && (
              <div className="mt-3 grid grid-cols-[minmax(0,1fr)_auto] gap-2">
                <Button
                  onClick={() => setConfirm(p)}
                  className="w-full whitespace-normal px-3 font-bold"
                >
                  Registrar pago
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  title="Preparar recordatorio por WhatsApp"
                  aria-label={`Recordar pago a ${p.socio}`}
                  onClick={() => {
                    const tel = socios
                      .find((s) => s.id === p.socioId)
                      ?.telefono.replace(/\D/g, "");
                    if (!tel) {
                      toast.error("Agrega un teléfono en el perfil del socio.");
                      return;
                    }
                    window.open(
                      `https://wa.me/${tel}?text=${encodeURIComponent(`Hola ${p.socio}, tienes pendiente ${p.concepto} por ${fmt(p.monto)}. Gracias.`)}`,
                      "_blank",
                      "noopener,noreferrer",
                    );
                  }}
                >
                  <Wallet className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
      {confirm && (
        <FlowSheet
          title="Registrar pago"
          description="Revisa el pago antes de guardarlo"
          onClose={() => setConfirm(null)}
        >
          <p className="font-bold">{confirm.socio}</p>
          <p>
            {confirm.concepto} · {fmt(confirm.monto)}
          </p>
          <p className="text-sm text-muted-foreground">
            Confirma solo si el club ya recibió este pago. Este registro es de
            prueba y permanece en esta sesión.
          </p>
          <FlowActions
            onCancel={() => setConfirm(null)}
            onSave={() => markPaid(confirm.id)}
            label="Confirmar pago"
          />
        </FlowSheet>
      )}
    </DirigenteShell>
  );
}

function Sum({
  label,
  value,
  tone,
  icon,
}: {
  label: string;
  value: string;
  tone: "ok" | "warn" | "bad" | "default";
  icon: React.ReactNode;
}) {
  const cls = {
    ok: "text-success",
    warn: "text-warning-foreground",
    bad: "text-destructive",
    default: "text-foreground",
  }[tone];
  return (
    <div className="rounded-2xl bg-card p-3 shadow-[var(--shadow-card)]">
      <div className="flex items-start gap-1 text-[10px] font-semibold uppercase leading-snug text-muted-foreground">
        {icon}
        {label}
      </div>
      <p
        className={`mt-1 break-words text-base font-extrabold leading-tight ${cls}`}
      >
        {value}
      </p>
    </div>
  );
}

function fmt(n: number) {
  return `$${n.toLocaleString("es-CL")}`;
}
function hoy() {
  const d = new Date();
  return `${String(d.getDate()).padStart(2, "0")}-${String(d.getMonth() + 1).padStart(2, "0")}-${d.getFullYear()}`;
}
