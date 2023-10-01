import cx from "clsx";
import s from "./Stepper.module.scss";

interface IStepper {
  min: number;
  max: number;
  current: number;
  className?: string;
}

export function Stepper({ min, max, current, className }: IStepper) {
  const range = max - min;
  const stepMarks = Array.from({ length: range + 1 }, (_, i) => i + min);
  let value = min;
  if (current === min) {
    value = 0;
  } else if (current > min && current < max) {
    value = ((current - 1) / range) * 100;
    console.log(value);
  } else {
    value = 100;
  }
  return (
    <div className={s.container}>
      <progress className={cx(s.stepper, className)} max="100" value={value} />
      <div className={s.marksContainer}>
        {stepMarks.map((mark) => (
          <div
            key={crypto.randomUUID()}
            className={cx(
              s.mark,
              [mark === current && s.active],
              [mark < current && s.done],
            )}
          >
            <div className={s.markDot}></div>
            <span className={s.markText}>{mark}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
