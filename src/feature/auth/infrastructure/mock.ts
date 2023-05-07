import { rest } from 'msw';
import { type AuthLoginEntity } from '@/feature/auth/domain/entity';
import { type AuthLoginInputModel, type AuthLoginOutputModel } from '@/feature/auth/domain/usecase';
import { apiPath } from '@/constant';
import { deepCamelToSnakeCase } from '@/helper';
import { type DeepCamelToSnakeCase } from '@/type';

export const authLoginEntityMock: AuthLoginEntity = {
  id: 1,
  name: 'sample',
  email: '0x66ccff@gmail.com',
  phone: '09012345678',
  address: '東京都',
  company: 'sample company',
  createdAt: '2021-01-01 00:00:00',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  eslint-disable-next-line react/no-unescaped-entities industry&apos;s standard dummy text ever since the
  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
  survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
  passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
  Lorem Ipsum.`,
};

export const authLoginInputModelMock: AuthLoginInputModel = {
  email: '0x66ccff@gmail.com',
  password: 'passwordddd',
};

export const authLoginOutputModelMock: AuthLoginOutputModel = {
  id: 1,
};

export const authLoginPostHandler = (status: 200 | 403 | 404 | 500 = 200) => {
  return rest.post(apiPath.auth.login(), (_, res, ctx) => {
    if (status === 403) {
      return res(ctx.status(403));
    }

    if (status === 404) {
      return res(ctx.status(404));
    }

    if (status === 500) {
      return res(ctx.status(500));
    }

    return res(
      ctx.status(200),
      ctx.json<DeepCamelToSnakeCase<AuthLoginEntity>>(deepCamelToSnakeCase(authLoginEntityMock))
    );
  });
};
