import { Outlet } from 'react-router-dom';

import styles from './RootLayout.module.scss';

export function RootLayout() {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  );
}
