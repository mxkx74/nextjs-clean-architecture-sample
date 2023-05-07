import type { ReactElement } from 'react';
import type { NextPage, NextPageWithLayout } from 'next';
import type { AppProps } from 'next/app';

/**
 * getLayout使用のための型の拡張
 */

declare module 'next' {
  type NextPageWithLayout<P = Record<never, never>, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactElement;
  };
}

declare module 'next/app' {
  type AppPropsWithLayout<P = Record<never, never>> = AppProps<P> & {
    Component: NextPageWithLayout<P>;
  };
}
