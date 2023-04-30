import { ReactNode } from 'react';
import type { NextPageWithLayout } from 'next';
import Head from 'next/head';
import { Page1Layout } from '@/components/layout';

type Props = {
  title?: string;
};

const Page1: NextPageWithLayout = ({ title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <p>PAGE1</p>
    </>
  );
};

Page1.getLayout = (page: ReactNode) => <Page1Layout>{page}</Page1Layout>;

export default Page1;

