import { waitFor } from '@testing-library/react';
import { SampleEntity} from '@/core/sampleApi';
import { ENDPOINT, apiPath } from '@/constant';
import { getFetchClient } from '@/lib';

describe('apiClientのテスト', () => {
  const fetcher = getFetchClient({ baseURL: ENDPOINT, camelCase: true });
  const resource = apiPath.sample.get();

  describe('get', () => {
    test('responseがsnakeCaseからcamelCaseに変換される', async () => {
      const result = await fetcher.get<SampleEntity>(resource, { params: { id: 1 } });

      await waitFor(() => {
        expect(result.data).toHaveProperty('mainText') ;
      });
    });
  });
});

