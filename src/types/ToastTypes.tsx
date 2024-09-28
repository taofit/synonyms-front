export enum ToastType {
  WARNING = "warning",
  SUCCESS = "success",
  INFO = "info",
}
export interface ToastProps {
  show: boolean;
  message: string;
  type: ToastType;
}
