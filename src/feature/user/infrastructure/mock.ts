import { rest } from 'msw';
import { UserEntity } from '@/feature/user/domain/entity';
import { UserInputModel, UserInputParams, UserOutputModel } from '@/feature/user/domain/usecase';
import { apiPath } from '@/constant';
import { deepCamelToSnakeCase } from '@/helper';
import { type DeepCamelToSnakeCase } from '@/type';

export const userEntityMock: UserEntity = {
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

export const userOutputModelMock: UserOutputModel = {
  id: 1,
  name: 'sample',
  email: '0x66ccff@gmail.com',
  phone: '09012345678',
  address: '東京都',
  company: 'sample company',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  eslint-disable-next-line react/no-unescaped-entities industry&apos;s standard dummy text ever since the
  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
  survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
  passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
  Lorem Ipsum.`,
};

export const userInputParamsMock: UserInputParams = {
  id: 1,
  data: {
    name: 'sample',
    email: '0x66ccff@gmail.com',
    phone: '09012345678',
    address: '東京都',
    company: 'sample company',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    eslint-disable-next-line react/no-unescaped-entities industry&apos;s standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
    Lorem Ipsum.`,
  },
};

export const userInputModelMock: UserInputModel = {
  id: 1,
  name: 'sample',
  email: '0x66ccff@gmail.com',
  phone: '09012345678',
  address: '東京都',
  company: 'sample company',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  eslint-disable-next-line react/no-unescaped-entities industry&apos;s standard dummy text ever since the
  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
  survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
  passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
  Lorem Ipsum.`,
};

export const userGetHandler = (status: 200 | 403 | 404 | 500 = 200) => {
  return rest.get(apiPath.user.index(1), (_, res, ctx) => {
    if (status === 403) {
      return res(ctx.status(403));
    }

    if (status === 404) {
      return res(ctx.status(404));
    }

    if (status === 500) {
      return res(ctx.status(500));
    }

    return res(ctx.status(status), ctx.json<DeepCamelToSnakeCase<UserEntity>>(deepCamelToSnakeCase(userEntityMock)));
  });
};

export const userPostHandler = (status: 200 | 403 | 404 | 500 = 200) => {
  return rest.post(apiPath.user.create(), (_, res, ctx) => {
    if (status === 403) {
      return res(ctx.status(403));
    }

    if (status === 404) {
      return res(ctx.status(404));
    }

    if (status === 500) {
      return res(ctx.status(500));
    }

    return res(ctx.status(200), ctx.json<DeepCamelToSnakeCase<UserEntity>>(deepCamelToSnakeCase(userEntityMock)));
  });
};
