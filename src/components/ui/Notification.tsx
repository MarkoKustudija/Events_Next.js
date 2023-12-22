import React from "react";
import classes from "./Notification.module.css";

type NotificationProps = {
  title: string;
  message: string;
  status: string;
};

function Notification({ title, message, status }: NotificationProps) {
  

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  if (status === "pending") {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
