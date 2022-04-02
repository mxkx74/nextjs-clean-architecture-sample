import { useQuery } from 'react-query';
import { sampleRepository } from './repository';

const repository = sampleRepository;

export const useSampleQuery = () => {
  return useQuery(
    'sample',
    async () => {
      const data = await repository.getSample();

      return data;
    },
    { useErrorBoundary: true, suspense: true }
  );
};
