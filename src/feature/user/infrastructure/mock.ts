import { rest } from 'msw';
import { UserEntity } from '@/feature/user/domain/entity';
import { UserInputModel, UserInputParams, UserOutputModel } from '@/feature/user/domain/usecase';
import { apiPath } from '@/constant';
import { type DeepCamelToSnakeCase } from '@/type';

export const userEntityMock: UserEntity = {
  id: 1,
  name: 'sample',
  email: '0x66ccff@gmail.com',
  phone: '09012345678',
  address: '東京都',
  company: 'sample company',
  description: 'sample description',
  createdAt: '2021-01-01 00:00:00',
};

export const userOutputModelMock: UserOutputModel = {
  id: 1,
  name: 'sample',
  email: '0x66ccff@gmail.com',
  phone: '09012345678',
  address: '東京都',
  company: 'sample company',
  description: 'sample description',
};

export const userInputParamsMock: UserInputParams = {
  id: 1,
  data: {
    name: 'sample',
    email: '0x66ccff@gmail.com',
    phone: '09012345678',
    address: '東京都',
    company: 'sample company',
    description: 'sample description',
  },
};

export const userInputModelMock: UserInputModel = {
  id: 1,
  name: 'sample',
  email: '0x66ccff@gmail.com',
  phone: '09012345678',
  address: '東京都',
  company: 'sample company',
  description: 'sample description',
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

    return res(
      ctx.status(status),
      ctx.json<DeepCamelToSnakeCase<UserEntity>>({
        id: 1,
        name: 'sample',
        email: '0x66ccff@gmail.com',
        phone: '09012345678',
        address: '東京都',
        company: 'sample company',
        description: 'sample description',
        created_at: '2021-01-01 00:00:00',
      })
    );
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

    return res(
      ctx.status(200),
      ctx.json<DeepCamelToSnakeCase<UserEntity>>({
        id: 1,
        name: 'sample',
        email: '0x66ccff@gmail.com',
        phone: '09012345678',
        address: '東京都',
        company: 'sample company',
        description: 'sample description',
        created_at: '2021-01-01 00:00:00',
      })
    );
  });
};
