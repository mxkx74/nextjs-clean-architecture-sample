import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

type Props = {
  title: string;
};

const Home: NextPage<Props> = ({ title }) => (
  <main>
    <Head>
      <title>{title}</title>
    </Head>
    <p>{title}</p>
  </main>
);

export const getStaticProps: GetStaticProps = async () => {
  const result = await {
    props: { title: 'HOME' },
    revalidate: 60,
  };
  return result;
};

export default Home;
