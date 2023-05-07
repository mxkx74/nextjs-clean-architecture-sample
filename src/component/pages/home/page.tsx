import type { NextPage } from 'next';
import Head from 'next/head';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';
import { type AuthLoginValidation, authLoginValidationSchema, useAuthLogin } from '@/feature/auth';
import { Button } from '@/component/ui';
import { Label } from '@/component/ui/Label';
import { Stack } from '@/component/ui/Stack';
import { TextInput } from '@/component/ui/TextInput';
import { font, mediaQuery, uiColor } from '@/theme';

const Home: NextPage = () => {
  const { mutate } = useAuthLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthLoginValidation>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    shouldFocusError: true,
    shouldUnregister: false,
    resolver: zodResolver(authLoginValidationSchema),
  });

  const onSubmit: SubmitHandler<AuthLoginValidation> = (data) => {
    mutate(data);
  };

  return (
    <>
      <Head>
        <title>LOGIN</title>
      </Head>
      <Wrapper>
        <PageTitle>LOGIN</PageTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormWrapper direction="column" spacing="XXL">
            <FromGroup>
              <Label htmlFor="email">USER NAME</Label>
              <TextInput id="email" {...register('email')} />
              {errors.email?.message && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
            </FromGroup>

            <FromGroup>
              <Label htmlFor="password">PASSWORD</Label>
              <TextInput id="password" type="password" {...register('password')} />
              {errors.password?.message && <ErrorMessage>{errors.password?.message}</ErrorMessage>}
            </FromGroup>

            <Button tag="button">LOGIN</Button>
          </FormWrapper>
        </form>
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
  border-width: 1px 0 0 0;
  margin: 0 auto;

  ${mediaQuery.pc(css`
    width: 300px;
  `)}
`;

const FromGroup = styled.div`
  position: relative;
`;

const ErrorMessage = styled.p`
  font-size: ${font.size.XS}px;
  color: ${uiColor.error.dark};
  position: absolute;
  bottom: -1.2rem;
  margin: 0;
`;

const FormWrapper = styled(Stack)``;
