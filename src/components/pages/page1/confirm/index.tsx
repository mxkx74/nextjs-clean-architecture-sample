import type { NextPageWithLayout } from 'next';
import Page1 from '@/components/pages/page1';
import { Component } from './Component';

const Confirm: NextPageWithLayout = () => <Component />;

Confirm.getLayout = Page1.getLayout;

export default Confirm;
