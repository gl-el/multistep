import s from './Avatar.module.scss';

export function Avatar() {
  return (
    <div className={s.wrapper}>
      <div className={s.avatar} role='image'>
        АИ
      </div>
      <div className={s.data}>
        <h3 className={s.name}>Иван Иванов</h3>
        <ul className={s.linksList}>
          <li className={s.linkItem}>
            <a href='#' target='_blank' className={s.link}>
              Telegram
            </a>
          </li>
          <li className={s.linkItem}>
            <a href='#' target='_blank' className={s.link}>
              Github
            </a>
          </li>
          <li className={s.linkItem}>
            <a href='#' target='_blank' className={s.link} rel='noreferrer'>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
