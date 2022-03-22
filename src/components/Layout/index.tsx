import { FC, ReactNode } from 'react';

export type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <main>
      <div>
        {/** Headerコンポーネントなど全ページ共通のコンポーネントが入る */}
        {/* <Header /> */}
        {children}
      </div>
    </main>
  );
};
