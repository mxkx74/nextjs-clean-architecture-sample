import type { NextPage } from 'next';
import Head from 'next/head';

type Props = {
  title: string;
};

export const Home: NextPage<Props> = ({ title }) => (
  <main>
    <Head>
      <title>{title}</title>
    </Head>
    <p>{title}</p>
  </main>
);

