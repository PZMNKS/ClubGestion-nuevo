import {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
  type ReactNode,
} from "react";
import { Button } from "@/components/ui/button";

export function DraggableBottomSheet({
  onClose,
  children,
  level = "default",
}: {
  onClose: () => void;
  children: ReactNode;
  level?: "default" | "raised";
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const startY = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const [offset, setOffset] = useState(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    panelRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  const startDrag = (event: PointerEvent<HTMLButtonElement>) => {
    startY.current = event.clientY;
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const moveDrag = (event: PointerEvent<HTMLButtonElement>) => {
    if (startY.current === null) return;
    const nextOffset = Math.max(0, event.clientY - startY.current);
    offsetRef.current = nextOffset;
    setOffset(nextOffset);
  };

  const endDrag = () => {
    startY.current = null;
    setDragging(false);
    if (offsetRef.current > 88) {
      onClose();
      return;
    }
    offsetRef.current = 0;
    setOffset(0);
  };

  return (
    <div
      className={`fixed inset-0 ${level === "raised" ? "z-[60]" : "z-50"} flex items-end bg-foreground/40`}
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className={`mx-auto max-h-[85vh] w-full max-w-[480px] overflow-y-auto rounded-t-3xl bg-card p-5 pb-8 outline-none ${dragging ? "" : "transition-transform duration-200"}`}
        style={{ transform: `translateY(${offset}px)` }}
      >
        <Button
          type="button"
          variant="ghost"
          aria-label="Cerrar panel"
          className="mx-auto mb-3 flex h-8 w-20 touch-none items-center justify-center p-0"
          onClick={onClose}
          onPointerDown={startDrag}
          onPointerMove={moveDrag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          <span className="h-1.5 w-12 rounded-full bg-border" />
        </Button>
        {children}
      </div>
    </div>
  );
}
