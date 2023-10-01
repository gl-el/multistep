import cx from "clsx";
import s from "./Divider.module.scss";

export function Divider({ className }: { className: string }) {
  return <hr className={cx(s.divider, className)} />;
}
