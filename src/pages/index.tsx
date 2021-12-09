import Footer from '@App/components/layout/Footer';
import Header from '@App/components/layout/Header';
import About from '@App/components/widgets/About';
import Contact from '@App/components/widgets/Contact';
import Introduction from '@App/components/widgets/Introduction';
import Head from 'next/head';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>MeuFreela</title>
      </Head>
      <Header />
      <main>
        <Introduction />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
