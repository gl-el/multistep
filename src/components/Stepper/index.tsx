import cx from 'clsx';
import s from './Stepper.module.scss';

interface StepperProps {
  min?: number;
  max: number;
  current: number;
  className?: string;
}

export function Stepper({ min = 1, max, current, className }: StepperProps) {
  const range = max - min;
  const stepMarks = Array.from({ length: range + 1 }, (_, i) => i + min);
  return (
    <div className={cx(s.stepper, className)}>
      {stepMarks.map((mark) => (
        <div key={mark} className={cx(s.mark, [mark === current && s.active], [mark < current && s.done])}>
          <div className={s.label}>
            <span className={s.ico}></span>
            <span className={s.text}>{mark}</span>
          </div>
          <div className={s.line} />
        </div>
      ))}
    </div>
  );
}
