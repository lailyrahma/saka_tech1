export interface ToastProps {
    variant: "success" | "danger" | "warning" | "information";
    size: "small" | "medium" | "large";
    type: "information" | "notification";
    message: string;
    duration?: number;
  }