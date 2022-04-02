import { ENDPOINT, path } from '../../constant/path';
import { getFetchClient } from '../../lib/apiClient';
import type { Sample } from './entity';

const client = getFetchClient(ENDPOINT);

export const sampleRepository = {
  getSample: async (): Promise<Sample> => {
    return await client
      .get<Sample>(path.sample())
      .then((response) => response.data)
      .catch((reason: Error) => {
        throw new Error(reason.message);
      });
  },
};
