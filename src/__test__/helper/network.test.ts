import { AxiosError } from 'axios';
import { isInternalError } from '@/helper';

describe('networkのtest', () => {
  describe('isInternalErrorのtest', () => {
    describe('errorステータスが500以上の場合trueを返す', () => {
      test('500以上', () => {
        expect(
          isInternalError({
            response: { status: 500 },
          } as AxiosError)
        ).toBe(true);

        expect(
          isInternalError({
            response: { status: 510 },
          } as AxiosError)
        ).toBe(true);
      });
    });

    describe('errorステータスが500以下の場合falseを返す', () => {
      test('500以下', () => {
        expect(
          isInternalError({
            response: { status: 499 },
          } as AxiosError)
        ).toBe(false);

        expect(
          isInternalError({
            response: { status: 404 },
          } as AxiosError)
        ).toBe(false);
      });
    });
  });
});
