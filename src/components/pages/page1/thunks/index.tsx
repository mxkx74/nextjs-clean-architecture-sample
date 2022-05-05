import type { NextPageWithLayout } from 'next';
import { Page1Layout } from '../../../layout/page1';
import { Component } from './Component';

const Thunks: NextPageWithLayout = () => {
  return <Component />;
};

Thunks.getLayout = (page: React.ReactNode) => <Page1Layout>{page}</Page1Layout>;

export default Thunks;
