import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
  appearance: "primary" | "ghost";
  arrow?: "right" | "down" | "none";
}