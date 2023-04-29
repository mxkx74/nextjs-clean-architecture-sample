import { ReactNode } from 'react';
import type { NextPageWithLayout } from 'next';
import { Page1Layout } from '@/components/layout';
import { Component } from '@/components/pages/page1/Component';

const Page1: NextPageWithLayout = () => <Component />;

Page1.getLayout = (page: ReactNode) => <Page1Layout>{page}</Page1Layout>;

export default Page1;
