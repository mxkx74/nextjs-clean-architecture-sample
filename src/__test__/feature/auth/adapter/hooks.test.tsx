import { act, renderHook, waitFor } from '@testing-library/react';
// eslint-disable-next-line strict-dependencies/strict-dependencies
import mockRouter from 'next-router-mock';
import { AuthLoginOutputModel, authLoginInputModelMock, authLoginOutputModelMock, useAuthLogin } from '@/feature/auth';
import { WithQueryClient } from '@/component/context/WithQueryClient';

jest.mock('next/router', () => require('next-router-mock'));

describe('loginApiのadapterのtest', () => {
  const wrapper = WithQueryClient();
  const pushSpy = jest.spyOn(mockRouter, 'push');

  describe('useAuthLogin', () => {
    test('成功時profile画面に遷移する', async () => {
      const { result } = renderHook(() => useAuthLogin(), { wrapper });
      act(() => {
        result.current.mutate(authLoginInputModelMock);
      });
      await waitFor(() => {
        expect(pushSpy).toHaveBeenCalledWith('/user/1');
      });
    });

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
