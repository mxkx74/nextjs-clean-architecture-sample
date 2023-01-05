import { setupWorker } from 'msw';
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

if (process.env.NODE_ENV === 'development') {
  if (typeof window === 'undefined') {
    const server = setupServer(...handlers);
    server.listen();
  } else {
    const worker = setupWorker(...handlers);
    worker.start();
  }
}
export {};
