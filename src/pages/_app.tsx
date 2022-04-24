import { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import { GlobalContextProvider } from '../components/context/global/GlobalProvider';
import { Layout } from '../components/layout';
import { queryClient } from '../lib/queryClient';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mock');
}

const App = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <GlobalContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContextProvider>
  </QueryClientProvider>
);

export default App;
