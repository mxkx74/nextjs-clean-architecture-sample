import type { NextPageWithLayout } from 'next';
import Page1 from '../';
import { Component } from './Component';

const Thunks: NextPageWithLayout = () => <Component />;

Thunks.getLayout = Page1.getLayout;

export default Thunks;
