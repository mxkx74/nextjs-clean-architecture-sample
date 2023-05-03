import { waitFor } from '@testing-library/react';
import { ENDPOINT, apiPath } from '@/constant';
import { SampleEntity } from '@/feature/sampleApi';
import { getFetchClient } from '@/lib';

describe('apiClientのテスト', () => {
  const fetcher = getFetchClient({ baseURL: ENDPOINT, camelCase: true });
  const resource = apiPath.sample.index();

  describe('get', () => {
    test('responseがsnakeCaseからcamelCaseに変換される', async () => {
      const result = await fetcher.get<SampleEntity>(resource, { params: { id: 1 } });

      await waitFor(() => {
        expect(result.data).toHaveProperty('mainText');
      });
    });
  });
});
