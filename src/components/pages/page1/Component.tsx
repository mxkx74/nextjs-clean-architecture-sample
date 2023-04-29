import { FC } from 'react';
import Head from 'next/head';

type Props = {
  title?: string;
};

export const Component: FC<Props> = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <p>PAGE1</p>
    </>
  );
};
