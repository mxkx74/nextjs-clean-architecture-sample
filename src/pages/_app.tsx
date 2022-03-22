import { AppProps } from 'next/app';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
  <main>
    <Component {...pageProps} />
  </main>
);

export default App;
