import { JSX } from "react";
import { PtagProps } from "./Ptag.props";
import styles from "./Ptag.module.css";
import cn from "classnames";

export const Ptag = ({
  children,
  size = "m",
  className,
  ...props
}: PtagProps): JSX.Element => {
  return (
    <p
      className={cn(
        styles.p,
        {
          [styles.s]: size === "s",
          [styles.m]: size === "m",
          [styles.l]: size === "l",
        },
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
