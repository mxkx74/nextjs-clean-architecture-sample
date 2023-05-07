import { type FC } from 'react';
import { useGetUser } from '@/feature/user';

type Props = {
  userId?: number;
};

export const ProfileDetail: FC<Props> = ({ userId }) => {
  const { data } = useGetUser(userId, { suspense: true });

  return (
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
  );
};
