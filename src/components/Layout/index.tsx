import { FC, ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <main>
      <ErrorBoundary fallback={<p>Error</p>}>
        <div>
          {/** Headerコンポーネントなど全ページ共通のコンポーネントが入る */}
          {/* <Header /> */}
          {children}
        </div>
      </ErrorBoundary>
    </main>
  );
};
