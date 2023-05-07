import { authLoginPostHandler } from '@/feature/auth';
import { sampleGetHandler, samplePostHandler } from '@/feature/sampleApi';
import { userGetHandler, userPostHandler } from '@/feature/user';

export const handlers = [
  sampleGetHandler(),
  samplePostHandler(),
  userGetHandler(),
  userPostHandler(),
  authLoginPostHandler(),
];
