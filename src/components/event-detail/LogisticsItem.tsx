import React, { ReactNode } from "react";
import classes from "./LogisticsItem.module.css";

type LogisticsItemProps = {
  icon: React.ComponentType;
  children: ReactNode;
};

function LogisticsItem({ icon: Icon, children }: LogisticsItemProps) {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
