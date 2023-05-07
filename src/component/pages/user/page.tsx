import { Suspense } from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ErrorBoundary } from 'react-error-boundary';
import styled, { css } from 'styled-components';
import { mediaQuery, spacing } from '@/theme';

const ProfileDetail = dynamic(() => import('./Detail').then((mod) => mod.ProfileDetail), { ssr: false });

const User: NextPage = () => {
  const { query } = useRouter();
  const { id } = query;
  const userId = id ? Number(id) : undefined;

  return (
    <>
      <Head>
        <title>PROFILE</title>
      </Head>
      <Wrapper>
        <PageTitle>Profile</PageTitle>
        <ErrorBoundary fallback={<div>ERROR</div>}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <ProfileDetail userId={userId} />
          </Suspense>
        </ErrorBoundary>
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
