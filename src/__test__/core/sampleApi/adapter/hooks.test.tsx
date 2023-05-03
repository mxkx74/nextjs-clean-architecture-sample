import { act, renderHook, waitFor } from '@testing-library/react';
import { WithQueryClient } from '@/components/context/WithQueryClient';
import { useCreateSample, useGetSample } from '@/feature/sampleApi';
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
      await waitFor(() => {
        expect(result.current.data).toEqual(sample);
      });
    });
  });

  describe('useCreateSample', () => {
    test('responseのidはstring', async () => {
      const { result } = renderHook(() => useCreateSample(), { wrapper });
      act(() => {
        result.current.mutateAsync(sample);
      });
      await waitFor(() => {
        expect(result.current.data?.id).toBe('1');
      });
    });

    test('成功時invalidateQueriesがcallされる', async () => {
      const resetQueriesSpy = jest.spyOn(queryClient, 'invalidateQueries');
      const { result } = renderHook(() => useCreateSample(), { wrapper });
      act(() => {
        result.current.mutateAsync(sample);
      });
      await waitFor(() => {
        expect(resetQueriesSpy).toHaveBeenCalledWith(['sample']);
      });
    });
  });
});
