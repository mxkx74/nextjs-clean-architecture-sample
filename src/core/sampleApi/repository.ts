import { ENDPOINT, path } from '../../constant/path';
import { getFetchClient } from '../../lib/apiClient';
import type { Sample } from './entity';
import { PostData } from './usecase';

const client = getFetchClient(ENDPOINT);
const endpoint = path.sample();

export const sampleRepository = {
  getSample: async (): Promise<Sample> => {
    return await client
      .get<Sample>(endpoint)
      .then((response) => response.data)
      .catch((reason: Error) => {
        throw reason;
      });
  },

};
