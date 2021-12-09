import { AppProps } from 'next/app';

import '@App/core/styles/global.scss';
import '@App/core/styles/animations.scss';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ToastContainer theme="dark" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
