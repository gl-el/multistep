import styles from './Avatar.module.scss';

export function Avatar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar} role='image'>
        ИИ
      </div>
      <div className={styles.data}>
        <h3 className={styles.name}>Иван Иванов</h3>
        <ul className={styles.linksList}>
          <li className={styles.linkItem}>
            <a href='#' target='_blank' className={styles.link}>
              Telegram
            </a>
          </li>
          <li className={styles.linkItem}>
            <a href='#' target='_blank' className={styles.link}>
              Github
            </a>
          </li>
          <li className={styles.linkItem}>
            <a href='#' target='_blank' className={styles.link} rel='noreferrer'>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
