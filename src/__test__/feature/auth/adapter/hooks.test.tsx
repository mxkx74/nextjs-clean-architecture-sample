import { renderHook } from '@testing-library/react';
import { authLoginInputModelMock, authLoginOutputModelMock, useAuthLogin } from '@/feature/auth';
import { WithQueryClient } from '@/component/context/WithQueryClient';

describe('loginApiのadapterのtest', () => {
  const wrapper = WithQueryClient();

  describe('useAuthLogin', () => {
    test('成功時repositoryから返されるentityをview modelに変換し返す', async () => {
      const { result } = renderHook(() => useAuthLogin(), { wrapper });
      const response = await result.current.mutateAsync(authLoginInputModelMock);
      expect(response).toEqual(authLoginOutputModelMock);
    });
  });
});
