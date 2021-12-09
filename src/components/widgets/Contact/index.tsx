import Form from '@App/components/elements/Form';
import styles from './style.module.scss';

export default function Contact(): JSX.Element {
  return (
    <>
      <section className={styles.contact__container}>
        <h2>Mande um oi, ligamos para você!</h2>
        <p>Preencha seus dados para que a gente possa entrar em contato.</p>
        <Form />
      </section>
    </>
  );
}
