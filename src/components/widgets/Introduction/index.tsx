import Button from '@App/components/elements/Button';
import style from './style.module.scss';

export default function Introduction(): JSX.Element {
  function handleGoToEnd(): void {
    const heightPage = document.body.scrollHeight;
    window.scrollTo(0, heightPage);
  }

  return (
    <section className={`${style.introduction__container} fadeAppear`}>
      <main>
        <h3>Desenvolvedores prontos para ação</h3>
        <h1>Seu projeto pronto na velocidade da luz</h1>
        <Button
          title="Peça uma reunião"
          type="button"
          color="var(--primary-light)"
          onClick={() => handleGoToEnd()}
        />
      </main>
    </section>
  );
}
