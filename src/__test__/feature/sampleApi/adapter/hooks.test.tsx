import { renderHook, waitFor } from '@testing-library/react';
import { useCreateSample, useGetSample } from '@/feature/sampleApi';
import { WithQueryClient } from '@/component/context/WithQueryClient';
import { queryClient } from '@/lib';

describe('sampleApiのadapterのtest', () => {
  const wrapper = WithQueryClient();
  const sample = {
    id: '1',
    mainText: 'sample text',
    text: 'TOP PAGE',
    title: 'page1',
  };

  describe('useGetSample', () => {
    test('sampleのentityを返す', async () => {
      const { result } = renderHook(() => useGetSample(1), { wrapper });
      await waitFor(() => expect(result.current.data).toEqual(sample));
    });
  });

  describe('useCreateSample', () => {
    test('responseのidはstring', async () => {
      const { result } = renderHook(() => useCreateSample(), { wrapper });
      const response = await result.current.mutateAsync(sample);
      expect(response.id).toBe('1');
    });

    test('成功時invalidateQueriesがcallされる', async () => {
      const resetQueriesSpy = jest.spyOn(queryClient, 'invalidateQueries');
      const { result } = renderHook(() => useCreateSample(), { wrapper });
      result.current.mutate(sample);
      await waitFor(() => expect(resetQueriesSpy).toHaveBeenCalledWith(['sample']));
    });
  });
});
