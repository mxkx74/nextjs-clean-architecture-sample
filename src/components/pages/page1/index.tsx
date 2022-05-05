import type { NextPageWithLayout } from 'next';
import { ReactNode } from 'react';
import { Page1Layout } from '../../layout';
import { Component } from './Component';

const Page1: NextPageWithLayout = () => <Component />;

Page1.getLayout = (page: ReactNode) => <Page1Layout>{page}</Page1Layout>;

export default Page1;
