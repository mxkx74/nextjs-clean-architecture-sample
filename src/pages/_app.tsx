import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <main>
    <Component {...pageProps} />
  </main>
);

export default App;
