import { Toast } from "react-bootstrap";
import { ToastProps } from "../types/ToastTypes"; // Ensure this path is correct

interface NotificationProps {
  toast: ToastProps;
  onSetToast: (toast: ToastProps) => void;
}

const Notification = ({ toast, onSetToast }: NotificationProps) => {
  return (
    <Toast
      show={toast.show}
      onClose={() =>
        onSetToast({ show: !toast.show, message: "", type: toast.type })
      }
      bg={toast.type}
      autohide
    >
      <Toast.Header>
        <img src="" className="rounded me-2" alt="" />
        <strong className="me-auto">{toast.type}</strong>
      </Toast.Header>
      <Toast.Body>{toast.message}</Toast.Body>
    </Toast>
  );
};

export default Notification;
