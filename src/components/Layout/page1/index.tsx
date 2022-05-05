import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export type Props = {
  children: ReactNode;
};

export const Page1Layout: FC<Props> = ({ children }) => {
  return (
    <main>
      <ErrorBoundary fallback={<p>Error</p>}>
        <nav>
          <ul>
            <li>
              <Link href="/home">
                <a>HOME</a>
              </Link>
            </li>
            <li>
              <Link href="/page1">
                <a>PAGE1</a>
              </Link>
              <nav>
                <ul>
                  <li>
                    <Link href="/page1/confirm">
                      <a>CONFIRM</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/page1/thunks">
                      <a>THUNKS</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </li>
          </ul>
        </nav>
        <div>
          {/** Headerコンポーネントなど全ページ共通のコンポーネントが入る */}
          {/* <Header /> */}
          {children}
        </div>
      </ErrorBoundary>
    </main>
  );
};
