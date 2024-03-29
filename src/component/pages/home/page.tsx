import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { zodResolver } from '@hookform/resolvers/zod';
import styled, { css } from 'styled-components';
import { type AuthLoginValidation, authLoginValidationSchema, useAuthLogin } from '@/feature/auth';
import { Button, Label, Stack, TextInput } from '@/component/ui';
import { route } from '@/constant';
import { useHookForm } from '@/hooks/useHookForm';
import { font, mediaQuery, uiColor } from '@/theme';

const Home: NextPage = () => {
  const { push } = useRouter();

  const { mutate } = useAuthLogin({
    onSuccess: (data) => push(route.user(data.id)),
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useHookForm<AuthLoginValidation>({
    resolver: zodResolver(authLoginValidationSchema),
  });

  return (
    <>
      <Head>
        <title>LOGIN</title>
      </Head>
      <Wrapper>
        <PageTitle>LOGIN</PageTitle>
        <form onSubmit={handleSubmit((data) => mutate(data))}>
          <FormWrapper direction="column" spacing="XXL">
            <FromGroup>
              <Label htmlFor="email">USER NAME</Label>
              <TextInput id="email" {...register('email')} data-testid="email" />
              {errors.email?.message && <ErrorMessage role="alert">{errors.email?.message}</ErrorMessage>}
            </FromGroup>

            <FromGroup>
              <Label htmlFor="password">PASSWORD</Label>
              <TextInput id="password" type="password" {...register('password')} data-testid="password" />
              {errors.password?.message && <ErrorMessage role="alert">{errors.password?.message}</ErrorMessage>}
            </FromGroup>

            <Button tag="button" disabled={!isValid}>
              LOGIN
            </Button>
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
