import React, { ReactNode } from "react";
import classes from "./ErrorAlert.module.css";

type ErrorAlertProps = {
  children: ReactNode;
};

export default function ErrorAlert({ children }: ErrorAlertProps) {
  return <div className={classes.alert}>{children}</div>;
}

