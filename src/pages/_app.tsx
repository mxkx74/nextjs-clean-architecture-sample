import { QueryClientProvider } from '@tanstack/react-query';
import { type NextPage } from 'next';
import { type AppPropsWithLayout } from 'next/app';
import { GlobalContextProvider } from '../components/context/global/GlobalProvider';
import { DefaultLayout } from '../components/layout';
import { queryClient } from '../lib/queryClient';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mock');
}

const App: NextPage<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContextProvider>{getLayout(<Component {...pageProps} />)}</GlobalContextProvider>
    </QueryClientProvider>
  );
};

export default App;
