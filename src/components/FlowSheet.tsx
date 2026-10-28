import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function FlowSheet({
  title,
  description,
  onClose,
  children,
}: {
  title: string;
  description?: string;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <Dialog
      open
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="flow-sheet" aria-describedby={undefined}>
        <div className="pr-8">
          <DialogTitle>{title}</DialogTitle>
          {description && (
            <DialogDescription className="mt-1">
              {description}
            </DialogDescription>
          )}
        </div>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export function FlowActions({
  onCancel,
  onSave,
  disabled,
  label = "Guardar",
  cancelLabel = "Cancelar",
}: {
  onCancel: () => void;
  onSave: () => void;
  disabled?: boolean;
  label?: string;
  cancelLabel?: string;
}) {
  return (
    <div className="flow-actions">
      <Button variant="secondary" onClick={onCancel}>
        {cancelLabel}
      </Button>
      <Button onClick={onSave} disabled={disabled}>
        {label}
      </Button>
    </div>
  );
}
