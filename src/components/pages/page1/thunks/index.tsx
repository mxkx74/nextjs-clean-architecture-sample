import type { NextPageWithLayout } from 'next';
import { Component } from './Component';
import Page1 from '@/components/pages/page1';

const Thunks: NextPageWithLayout = () => <Component />;

Thunks.getLayout = Page1.getLayout;

export default Thunks;
