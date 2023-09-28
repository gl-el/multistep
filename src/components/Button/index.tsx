import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import cx from "clsx";
import s from "./Button.module.scss";

interface IButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "secondary";
  disabled?: boolean;
  children?: ReactNode;
  type?: "button" | "reset" | "submit";
}

export function Button({
  children,
  className,
  variant = "primary",
  type = "button",
  disabled = false,
  ...props
}: IButton) {
  return (
    <button
      className={cx(s.button, s[variant], className)}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
