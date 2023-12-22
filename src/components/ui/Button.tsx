import React, { ComponentPropsWithoutRef } from "react";
import classes from './button.module.css';

type ButtonProps = {} & ComponentPropsWithoutRef<"button"> & { href?: never };
type AnchorProps = {} & ComponentPropsWithoutRef<"a"> & { href?: string };

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

export default function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) {
    return <a {...props} className={classes.btn}></a>;
  }
  return <button {...props} className={classes.btn}></button>;
}
