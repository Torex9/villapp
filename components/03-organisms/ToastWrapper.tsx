import ToastNotification from "../02-molecules/ToastNotification";

export interface NotificationProps {
  id: number;
  message: string;
  duration?: number;
}

interface ToastWrapperProps {
  notifications: NotificationProps[];
}

const ToastWrapper = ({ notifications }: ToastWrapperProps) => {
  return (
    <div className="absolute right-0 top-0 z-30 m-4 space-y-2">
      {notifications.map((notification) => (
        <div key={notification.id}>
          <ToastNotification message={notification.message} duration={notification.duration} />
        </div>
      ))}
    </div>
  );
};

export default ToastWrapper;
