import type { NextPageWithLayout } from 'next';
import Head from 'next/head';
import Page1 from '@/component/pages/page1/page';

type Props = {
  title?: string;
};

const Confirm: NextPageWithLayout = ({ title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <p>CONFIRM</p>
    </>
  );
};

Confirm.getLayout = Page1.getLayout;

export default Confirm;
