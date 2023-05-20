import { SampleEntity } from '@/feature/sampleApi';
import { apiPath } from '@/constant';
import { getFetchClient } from '@/lib';

describe('apiClientのテスト', () => {
  const fetcher = getFetchClient({ camelCase: true });
  const resource = apiPath.sample.index();

  describe('get', () => {
    test('responseがsnakeCaseからcamelCaseに変換される', async () => {
      const result = await fetcher.get<SampleEntity>(resource, { params: { id: 1 } });
      expect(result.data).toHaveProperty('mainText');
    });
  });
});
