import { JSX } from "react";
import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({
  children,
  size = "m",
  className,
  color = "ghost",
  href,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      {...props}
      className={cn(styles.tag, className, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.ghost]: color === "ghost",
        [styles.red]: color === "red",
        [styles.green]: color === "green",
        [styles.primary]: color === "primary",
        [styles.grey]: color === "grey",
      })}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
