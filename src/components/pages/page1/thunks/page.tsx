import type { NextPageWithLayout } from 'next';
import Head from 'next/head';
import Page1 from '@/components/pages/page1/page';

type Props = {
  title?: string;
};

const Thunks: NextPageWithLayout =  ({ title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <p>THUNKS</p>
    </>
  );
};

Thunks.getLayout = Page1.getLayout;

export default Thunks;
