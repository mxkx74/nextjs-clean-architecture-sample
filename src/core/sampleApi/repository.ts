import { AxiosError, AxiosResponse } from 'axios';
import { ENDPOINT, path } from '../../constant/path';
import { getFetchClient } from '../../lib/apiClient';
import { type SampleData, type PostResponseData } from './usecase';

const client = getFetchClient(ENDPOINT);
const endpoint = path.sample();

export const sampleRepository = {
  getSample: async (id: number): Promise<SampleData> => {
    return await client
      .get<SampleData, AxiosResponse<SampleData>>(endpoint, { params: { id } })
      .then((response) => response.data)
      .catch((reason: AxiosError<Error>) => {
        throw reason;
      });
  },

  postSample: async (data: SampleData): Promise<PostResponseData> => {
    return await client
      .post<SampleData, AxiosResponse<PostResponseData>>(endpoint, data)
      .then((response) => response.data)
      .catch((reason: AxiosError<Error>) => {
        throw reason;
      });
  },
};
