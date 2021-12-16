import styles from './style.module.scss';

export default function About(): JSX.Element {
  return (
    <>
      <section className={styles.about__container}>
        <article>
          <h2>Nossa iniciativa</h2>
          <p>
            Somos desenvolvedores que se dedicam a fazer projetos perfeitos e
            entregar valor para todos os seus clientes. Gostamos de ver clientes
            satisfeitos com projetos feitos com carinho, atenção e qualidade
            altíssima.
          </p>
        </article>
        <img
          height={476}
          width={400}
          loading="lazy"
          src="/thinking_man.webp"
          alt="Imagem de uma Pessoa pensando"
        />
      </section>
      <div className={styles.about__bar} />
    </>
  );
}
