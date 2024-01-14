import CheckIcon from '@/assets/icons/circleCheck.svg?react';
import ErrorIcon from '@/assets/icons/circleError.svg?react';
import cx from 'clsx';

import s from './Mark.module.scss';

export function Mark({ status, className }: { status: 'success' | 'error'; className?: string }) {
  return (
    <div className={cx(s.wrapper, className)}>
      <div className={cx(s.icoWrapper, { [s.icoGreen]: status === 'success' }, { [s.icoRed]: status === 'error' })}>
        {status === 'success' && <CheckIcon />}
        {status === 'error' && <ErrorIcon />}
      </div>
    </div>
  );
}
