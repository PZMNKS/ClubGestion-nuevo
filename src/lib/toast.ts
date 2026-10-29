import type { ReactElement, ReactNode } from "react";
import { toast as sonnerToast, type ExternalToast } from "sonner";

type TitleT = (() => ReactNode) | ReactNode;

function dismissExisting() {
  sonnerToast.dismiss();
}

const baseToast = (message: TitleT, data?: ExternalToast) => {
  dismissExisting();
  return sonnerToast(message, data);
};

export const toast = Object.assign(baseToast, {
  success: (message: TitleT, data?: ExternalToast) => {
    dismissExisting();
    return sonnerToast.success(message, data);
  },
  info: (message: TitleT, data?: ExternalToast) => {
    dismissExisting();
    return sonnerToast.info(message, data);
  },
  warning: (message: TitleT, data?: ExternalToast) => {
    dismissExisting();
    return sonnerToast.warning(message, data);
  },
  error: (message: TitleT, data?: ExternalToast) => {
    dismissExisting();
    return sonnerToast.error(message, data);
  },
  loading: (message: TitleT, data?: ExternalToast) => {
    dismissExisting();
    return sonnerToast.loading(message, data);
  },
  message: (message: TitleT, data?: ExternalToast) => {
    dismissExisting();
    return sonnerToast.message(message, data);
  },
  custom: (
    jsx: (id: number | string) => ReactElement,
    data?: ExternalToast,
  ) => {
    dismissExisting();
    return sonnerToast.custom(jsx, data);
  },
  promise: (
    ...args: Parameters<typeof sonnerToast.promise>
  ): ReturnType<typeof sonnerToast.promise> => {
    dismissExisting();
    return sonnerToast.promise(...args);
  },
  dismiss: sonnerToast.dismiss,
  getHistory: sonnerToast.getHistory,
  getToasts: sonnerToast.getToasts,
});
