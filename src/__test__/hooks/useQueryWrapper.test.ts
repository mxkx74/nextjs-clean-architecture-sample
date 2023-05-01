import * as Query from '@tanstack/react-query';
import { renderHook } from '@testing-library/react';
import { WithQueryClient } from '@/components/context/WithQueryClient';
import { ApiQueryKeys } from '@/constant';
import { useQueryWrapper } from '@/hooks';

describe('useQueryWrapper', () => {
  const wrapper = WithQueryClient();

  test('keyとdepsを結合してqueryKeyとして使う', async () => {
    const Key: ApiQueryKeys = 'sample.get';
    const deps = [1];
    const options = { useErrorBoundary: false };
    const fetcher = jest.fn();
    const spyUseQuery = jest.spyOn(Query, 'useQuery');

    renderHook(() => useQueryWrapper({ queryKey: Key, deps, options, fetcher }), { wrapper });
    expect(spyUseQuery).toHaveBeenCalledWith([Key, ...deps], fetcher, options );
  });
});
