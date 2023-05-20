import { renderHook, waitFor } from '@testing-library/react';
import { useCreateUser, useGetUser, userOutputModelMock, userInputParamsMock } from '@/feature/user';
import { WithQueryClient } from '@/component/context/WithQueryClient';
import { queryClient } from '@/lib';

describe('userApiのadapterのtest', () => {
  const wrapper = WithQueryClient();

  describe('useGetUser', () => {
    test('userOutputModelを返す', async () => {
      const { result } = renderHook(() => useGetUser(1), { wrapper });
      await waitFor(() => {
        expect(result.current.data).toEqual(userOutputModelMock);
      });
    });
  });

  describe('useCreateSample', () => {
    test('成功時invalidateQueriesがcallされる', async () => {
      const resetQueriesSpy = jest.spyOn(queryClient, 'invalidateQueries');
      const { result } = renderHook(() => useCreateUser(), { wrapper });
      await result.current.mutateAsync(userInputParamsMock);
      expect(resetQueriesSpy).toHaveBeenCalledWith(['user', 1]);
    });
  });
});
