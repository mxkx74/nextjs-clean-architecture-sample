import * as Query from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { AxiosError } from 'axios';
import { WithQueryClient } from '@/component/context/WithQueryClient';
import { useQueryWrapper } from '@/hooks';

describe('useQueryWrapper', () => {
  const wrapper = WithQueryClient();

  test('keyとdepsを結合してqueryKeyとして使う', async () => {
    const options = { useErrorBoundary: false };
    const fetcher = jest.fn();
    const spyUseQuery = jest.spyOn(Query, 'useQuery');

    renderHook(
      () =>
        useQueryWrapper({
          queryKey: 'sample.index',
          deps: [1],
          options,
          fetcher,
        }),
      { wrapper }
    );
    expect(spyUseQuery).toHaveBeenCalledWith(['sample.index', 1], fetcher, options);
  });

  describe('失敗時', () => {
    test('useErrorBoundaryがfalseの場合、エラーをthrowする', async () => {
      const { result } = renderHook(
        () => {
          return useQueryWrapper({
            queryKey: 'sample.index',
            fetcher: () => Promise.reject(new AxiosError('error')),
            deps: [1],
            options: { useErrorBoundary: false },
          });
        },
        { wrapper }
      );

      await waitFor(() => {
        expect(result.current.error?.isAxiosError).toBe(true);
      });
    });
  });
});
