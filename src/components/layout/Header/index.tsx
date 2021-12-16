import socialList from './socialList';
import style from './style.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={style.header__container}>
      <span>MeuFreela</span>

      <nav>
        {socialList.map(item => (
          <a key={item.id} href={item.href} target="_blank" rel="noreferrer">
            <img
              width={32}
              height={32}
              loading="lazy"
              src={`/${item.social}.svg`}
              alt={`$imagem da logo da rede ${item.social}`}
            />
          </a>
        ))}
      </nav>
    </header>
  );
}
