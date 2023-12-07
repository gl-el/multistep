import CheckIco from '@/assets/icos/circleCheck.svg?react';
import ErrorIco from '@/assets/icos/circleError.svg?react';
import cx from 'clsx';

import s from './Mark.module.scss';

export function Mark({ status, className }: { status: 'success' | 'error'; className?: string }) {
  return (
    <div className={cx(s.wrapper, className)}>
      <div className={cx(s.icoWrapper, { [s.icoGreen]: status === 'success' }, { [s.icoRed]: status === 'error' })}>
        {status === 'success' && <CheckIco />}
        {status === 'error' && <ErrorIco />}
      </div>
    </div>
  );
}
