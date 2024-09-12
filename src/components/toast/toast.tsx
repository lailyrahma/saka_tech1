import React, { useState, useEffect } from "react";
import { ToastProps } from "./toast.type";

const Toast: React.FC<ToastProps> = ({
  message,
  variant = "information",
  size = "medium",
  type = "information",
  duration = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const variantStyles = {
    success: "bg-green-500 text-white",
    danger: "bg-red-500 text-white",
    information: "bg-blue-500 text-white",
    warning: "bg-yellow-500 text-black",
  };

  const sizeStyles = {
    small: "p-2 text-sm",
    medium: "p-4 text-base",
    large: "p-6 text-lg",
  };

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);
  return (
    <div
      className={`fixed bottom-5 right-5 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${variantStyles[variant]} ${sizeStyles[size]} rounded shadow-lg`}
      role="alert"
    >
      <strong>
        {type === "notification" ? "Notification: " : "Information: "}
      </strong>
      {message}
    </div>
  );
};

export default Toast;