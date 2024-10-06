export enum ToastType {
  WARNING = "warning",
  SUCCESS = "success",
  INFO = "info",
  ERROR = "danger",
}
export interface ToastProps {
  show: boolean;
  message: string;
  type: ToastType;
}
