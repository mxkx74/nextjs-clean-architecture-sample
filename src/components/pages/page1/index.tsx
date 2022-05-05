import type { NextPageWithLayout } from 'next';
import { Page1Layout } from '../../layout';
import { Component } from './Component';

const Page1: NextPageWithLayout = () => {
  return <Component />;
};

Page1.getLayout = (page: React.ReactNode) => <Page1Layout>{page}</Page1Layout>;

export default Page1;
