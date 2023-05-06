import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { spacing } from '@/theme';

const User: NextPage = () => {
  return (
    <>
      <Head>
        <title>PROFILE</title>
      </Head>
      <Wrapper>
        <PageTitle>Profile</PageTitle>
        <dl>
          <dt>name</dt>
          <dd>name</dd>

          <dt>email</dt>
          <dd>email</dd>

          <dt>phone</dt>
          <dd>phone</dd>

          <dt>address</dt>
          <dd>address</dd>

          <dt>company</dt>
          <dd>company</dd>

          <dt>description</dt>
          <dd>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the //
            eslint-disable-next-line react/no-unescaped-entities industry&apos;s standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
          </dd>
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
  width: 450px;
  margin: 0 auto;

  > dl {
    dt {
      float: left;
      width: 110px;
      text-align: right;
      font-weight: bold;
      padding-right: ${spacing.XL}px;
    }
    dd {
      margin-left: 110px;
    }
  }
`;
