import { Suspense } from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Text = dynamic(() => import('../../ui/text/Text'), { ssr: false });

type Props = {
  title?: string;
};

const Home: NextPage = ({ title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Suspense fallback={<p>loading...</p>}>
        <Text />
      </Suspense>
    </>
  );
};

export default Home;
