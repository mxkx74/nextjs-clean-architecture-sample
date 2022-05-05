import type { NextPageWithLayout } from 'next';

import Page1 from '../';
import { Component } from './Component';

const Confirm: NextPageWithLayout = () => <Component />;

Confirm.getLayout = Page1.getLayout;

export default Confirm;
