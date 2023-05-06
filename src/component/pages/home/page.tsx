import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { Button } from '@/component/ui/Button';
import { Label } from '@/component/ui/Label/Label';
import { Stack } from '@/component/ui/Stack';
import { TextInput } from '@/component/ui/TextInput';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>LOGIN</title>
      </Head>
      <Wrapper>
        <PageTitle>LOGIN</PageTitle>
        <FormWrapper direction="column" spacing="XL">
          <div>
            <Label htmlFor="user-name">USER NAME</Label>
            <TextInput id="user-name" />
          </div>

          <div>
            <Label htmlFor="password">PASSWORD</Label>
            <TextInput id="password" type="password" />
          </div>

          <Button tag="button">LOGIN</Button>
        </FormWrapper>
      </Wrapper>
    </>
  );
};

export default Home;

const PageTitle = styled.h1`
  margin: 0 auto;
  text-align: center;
`;

const Wrapper = styled.div`
  width: 300px;
  border-width: 1px 0 0 0;
  margin: 0 auto;
`;

const FormWrapper = styled(Stack)``;
