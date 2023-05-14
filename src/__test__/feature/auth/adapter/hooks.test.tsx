import { act, renderHook, waitFor } from '@testing-library/react';
// eslint-disable-next-line strict-dependencies/strict-dependencies
import { AuthLoginOutputModel, authLoginInputModelMock, authLoginOutputModelMock, useAuthLogin } from '@/feature/auth';
import { WithQueryClient } from '@/component/context/WithQueryClient';

jest.mock('next/router', () => require('next-router-mock'));

describe('loginApiのadapterのtest', () => {
  const wrapper = WithQueryClient();

  describe('useAuthLogin', () => {
    test('成功時repositoryから返されるentityをview modelに変換し返す', async () => {
      let response: AuthLoginOutputModel;
      const { result } = renderHook(() => useAuthLogin(), { wrapper });
      await act(async () => {
        response = await result.current.mutateAsync(authLoginInputModelMock);
      });

      await waitFor(() => {
        expect(response).toEqual(authLoginOutputModelMock);
      });
    });
  });
});
