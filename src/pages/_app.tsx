import type { NextPage } from 'next';
import type { AppPropsWithLayout } from 'next/app';
import Head from 'next/head';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { GlobalContextProvider } from '@/component/context/global/GlobalProvider';
import { DefaultLayout } from '@/component/layout';
import { Style } from '@/component/ui/Style';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mock');
}

const App: NextPage<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <>
      <Style />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <GlobalContextProvider>{getLayout(<Component {...pageProps} />)}</GlobalContextProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
