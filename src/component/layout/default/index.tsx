import { FC, ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';
import { Header } from '@/component/application/Header';
import { spacing } from '@/theme';

export type Props = {
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <main>
      <Header />
      <Wrapper>
        <ErrorBoundary fallback={<p>Error</p>}>
          <div>{children}</div>
        </ErrorBoundary>
      </Wrapper>
    </main>
  );
};

export default DefaultLayout;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: ${spacing.XL}px;
`;
