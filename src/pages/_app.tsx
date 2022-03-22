import { AppProps } from 'next/app';
import { GlobalContextProvider } from '../components/context/global/GlobalProvider';
import { Layout } from '../components/layout';

const App = ({ Component, pageProps }: AppProps) => (
  <GlobalContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </GlobalContextProvider>
);

export default App;
