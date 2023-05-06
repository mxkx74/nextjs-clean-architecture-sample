import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import { useGetUser } from '@/feature/user';
import { mediaQuery, spacing } from '@/theme';

const User: NextPage = () => {
  const { query } = useRouter();
  const { id } = query;
  const userId = id ? Number(id) : undefined;
  const { data } = useGetUser(userId);

  return (
    <>
      <Head>
        <title>PROFILE</title>
      </Head>
      <Wrapper>
        <PageTitle>Profile</PageTitle>
        <dl>
          <dt>name</dt>
          <dd>{data?.name}</dd>

          <dt>email</dt>
          <dd>{data?.email}</dd>

          <dt>phone</dt>
          <dd>{data?.phone}</dd>

          <dt>address</dt>
          <dd>{data?.address}</dd>

          <dt>company</dt>
          <dd>{data?.company}</dd>

          <dt>description</dt>
          <dd>{data?.description}</dd>
        </dl>
      </Wrapper>
    </>
  );
};

export default User;

const PageTitle = styled.h1`
  margin: 0 auto;
  text-align: center;
`;

const Wrapper = styled.div`
  margin: 0 auto;

  ${mediaQuery.pc(css`
    width: 450px;
  `)}

  > dl {
    dt {
      font-weight: bold;

      ${mediaQuery.pc(css`
        text-align: right;
        float: left;
        width: 110px;
        padding-right: ${spacing.XL}px;
      `)}
    }
    dd {
      margin: 0 0 ${spacing.L}px 0;

      ${mediaQuery.pc(css`
        margin-left: 110px;
      `)}
    }
  }
`;
