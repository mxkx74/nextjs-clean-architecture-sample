import Head from 'next/head';
import { FC } from 'react';

type Props = {
  title?: string;
};

export const Component: FC<Props> = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <p>CONFIRM</p>
    </>
  );
};
