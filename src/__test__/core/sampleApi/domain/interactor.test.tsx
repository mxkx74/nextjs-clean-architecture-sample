import { act, renderHook, waitFor } from '@testing-library/react';
import { SampleRequestParams, sampleInteractor, samplePostHandler } from '@/core/sampleApi';
import { withQueryClient } from '@/helper/HOC/withQueryClient';
import { server } from '@/mock';


const wrapper = withQueryClient();

describe('mswを使ったテスト', () => {

  describe('query', () => {
    test('sampleEntityを取得', async () => {
      const { result } = renderHook(() => sampleInteractor.useQuery(1), { wrapper });
      await waitFor(() => {
        expect(result.current.data).toEqual({
          id: '1',
          title: 'page1',
          text: 'TOP PAGE',
        });
      });
    });
  });

  describe('mutation', () => {
    const data: SampleRequestParams = {
      id: '1',
      title: 'mutation',
      text: 'new text',
    };

    test('成功時はentityが返る', async () => {
      server.use(samplePostHandler(200));

      const { result } = renderHook(() => sampleInteractor.useMutation(), { wrapper });
      act(() =>{
        result.current.mutate(data);
      });

      await waitFor(() => {
        expect(result.current.data).toEqual({
          id: 1,
          title: 'page1',
          text: 'TOP PAGE',
        });
      });
    });
  });
});
