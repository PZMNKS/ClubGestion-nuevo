import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, AlertTriangle, Upload } from "lucide-react";
import { toast } from "sonner";
import { AppShell, SectionTitle } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { FlowSheet, FlowActions } from "@/components/FlowSheet";
import {
  usePrototype,
  getPrototype,
  updatePrototype,
} from "@/lib/prototype-state";
import { pageHead } from "@/lib/page-head";
export const Route = createFileRoute("/pagos")({
  head: () =>
    pageHead(
      "Mis pagos",
      "Estado de cuenta, registro guiado de comprobantes e historial de cuotas.",
    ),
  component: PagosPage,
});
const fmt = (n: number) => `$${n.toLocaleString("es-CL")}`;
function PagosPage() {
  const { payments, receipts } = usePrototype();
  const [selected, setSelected] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const pending = payments.filter((p) => p.status !== "pagado");
  const payment = payments.find((p) => p.id === selected);
  const total = pending.reduce((s, p) => s + p.amount, 0);
  function open(id: string) {
    setSelected(id);
    setStep(1);
    setFile(null);
    setError("");
  }
  function save() {
    if (!payment || !file) return;
    updatePrototype({
      receipts: { ...getPrototype().receipts, [payment.id]: file.name },
    });
    setSelected(null);
    toast.success(
      "Comprobante registrado en esta sesión. Pendiente de revisión.",
    );
  }
  return (
    <AppShell>
      <h1 className="text-2xl font-extrabold">Mis pagos</h1>
      <section
        className={`mt-4 rounded-2xl p-4 ${total ? "bg-destructive-soft text-destructive" : "bg-success-soft text-success"}`}
      >
        <p className="flex items-center gap-2 font-bold">
          {total ? (
            <AlertTriangle className="h-5 w-5" />
          ) : (
            <CheckCircle2 className="h-5 w-5" />
          )}
          {total ? "Tienes cuotas pendientes" : "Estás al día"}
        </p>
        <p className="mt-2 text-3xl font-extrabold">{fmt(total)}</p>
        <p className="mt-1 text-sm">{pending.length} cuotas por regularizar</p>
      </section>
      <SectionTitle>Pendientes</SectionTitle>
      <div className="space-y-3">
        {pending.map((p) => (
          <article key={p.id} className="rounded-2xl bg-card p-4 shadow-card">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-2">
              <div className="min-w-0">
                <h2 className="font-bold">{p.concept}</h2>
                <p className="text-xs text-muted-foreground">
                  Vence {p.dueDate.split("-").reverse().join("/")}
                </p>
              </div>
              <p className="font-bold">{fmt(p.amount)}</p>
            </div>
            {receipts[p.id] ? (
              <p className="mt-3 rounded-lg bg-warning-soft p-3 text-sm font-semibold text-warning-foreground">
                Comprobante en revisión · {receipts[p.id]}
              </p>
            ) : (
              <Button className="mt-3 w-full" onClick={() => open(p.id)}>
                <Upload /> Registrar comprobante
              </Button>
            )}
          </article>
        ))}
      </div>
      <SectionTitle>Historial</SectionTitle>
      <div className="space-y-2">
        {payments
          .filter((p) => p.status === "pagado")
          .map((p) => (
            <article
              key={p.id}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl bg-card p-4"
            >
              <div className="min-w-0">
                <p className="font-semibold">{p.concept}</p>
                <p className="text-xs text-success">Pagado · {p.paidAt}</p>
              </div>
              <p className="font-bold">{fmt(p.amount)}</p>
            </article>
          ))}
      </div>
      {payment && (
        <FlowSheet
          title="Registrar comprobante"
          description={`Paso ${step} de 2 · ${payment.concept}`}
          onClose={() => setSelected(null)}
        >
          {step === 1 ? (
            <>
              <p className="text-xl font-bold">{fmt(payment.amount)}</p>
              <p className="text-sm text-muted-foreground">
                Adjunta el comprobante de una transferencia ya realizada. No se
                realizará ningún cobro.
              </p>
              <label className="block text-sm font-semibold">
                Comprobante (PDF o imagen)
                <input
                  className="mt-2 block w-full text-sm"
                  type="file"
                  accept="application/pdf,image/jpeg,image/png"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (
                      f &&
                      (!["application/pdf", "image/jpeg", "image/png"].includes(
                        f.type,
                      ) ||
                        f.size > 10 * 1024 * 1024)
                    ) {
                      setFile(null);
                      setError("Elige un PDF, JPG o PNG de hasta 10 MB.");
                    } else {
                      setFile(f ?? null);
                      setError("");
                    }
                  }}
                />
              </label>
              {error && (
                <p role="alert" className="text-sm text-destructive">
                  {error}
                </p>
              )}
              <FlowActions
                onCancel={() => setSelected(null)}
                onSave={() => setStep(2)}
                disabled={!file}
                label="Continuar"
              />
            </>
          ) : (
            <>
              <p className="font-semibold">Revisa antes de registrar</p>
              <p>
                {payment.concept} · {fmt(payment.amount)}
              </p>
              <p className="break-all text-sm">{file?.name}</p>
              <p className="text-sm text-warning-foreground">
                Prototipo: el comprobante se registra solo en esta sesión, sin
                enviarse al club. Tu deuda no cambia hasta su revisión.
              </p>
              <FlowActions
                cancelLabel="Atrás"
                onCancel={() => setStep(1)}
                onSave={save}
                label="Registrar"
              />
            </>
          )}
        </FlowSheet>
      )}
    </AppShell>
  );
}
