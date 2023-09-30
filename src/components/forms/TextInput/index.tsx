import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";
import cx from "clsx";
import s from "./TextInput.module.scss";

interface IInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  disabled?: boolean;
  label?: string;
  tip?: string;
}

export const TextInput = forwardRef<HTMLInputElement, IInput>(function MyInput(
  {
    className,
    type = "text",
    label = "",
    tip = "",
    disabled = false,
    ...props
  }: IInput,
  ref,
) {
  return (
    <label className={s.wrapper}>
      {label}
      <input
        className={cx(
          s.input,
          className,
          [disabled && s.disabled],
          [tip && s.error],
        )}
        type={type}
        disabled={disabled}
        ref={ref}
        {...props}
      />
      <span className={s.tip}>{tip}</span>
    </label>
  );
});
