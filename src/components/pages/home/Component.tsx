import dynamic from 'next/dynamic';
import Head from 'next/head';
import { FC, Suspense } from 'react';

const Text = dynamic(() => import('../../text/'), { ssr: false });

type Props = {
  title?: string;
};

export const Component: FC<Props> = ({ title }) => {
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
