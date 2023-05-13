import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';
import { type AuthLoginValidation, authLoginValidationSchema, useAuthLogin } from '@/feature/auth';
import { Button, Label, Stack, TextInput } from '@/component/ui';
import { route } from '@/constant';
import { font, mediaQuery, uiColor } from '@/theme';

export const Home: NextPage = () => {
  const { push } = useRouter();

  const { mutate } = useAuthLogin({
    onSuccess: (data) => push(route.user(data.id)),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
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
