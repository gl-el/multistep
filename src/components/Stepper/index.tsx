import cx from 'clsx';

import styles from './Stepper.module.scss';

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
    <div className={cx(styles.stepper, className)}>
      {stepMarks.map((mark) => (
        <div
          key={mark}
          className={cx(styles.mark, [mark === current && styles.active], [mark < current && styles.done])}
        >
          <div className={styles.label}>
            <span className={styles.ico}></span>
            <span className={styles.text}>{mark}</span>
          </div>
          <div className={styles.line} />
        </div>
      ))}
    </div>
  );
}
