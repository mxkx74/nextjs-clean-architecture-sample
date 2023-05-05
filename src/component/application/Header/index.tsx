import { FC } from 'react';
import styled from 'styled-components';
import { uiColor } from '@/theme';

export const Header: FC = () => {
  return (
    <>
      <Wrapper> HEADER</Wrapper>
    </>
  );
};

const Wrapper = styled.header`
  width: 100%;
  border-bottom: 1px solid ${uiColor.text.border};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${uiColor.background.light};
`;
