import style from './style.module.scss';

export default function Footer(): JSX.Element {
  return (
    <footer className={style.footer__container}>
      <p>Desafio 1 - front-end iniciante</p>
      <span>
        Iniciativa <strong>DEV HALL</strong>
      </span>
    </footer>
  );
}
