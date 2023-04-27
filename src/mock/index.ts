import { setupWorker } from 'msw';
import { setupServer } from 'msw/node';
import * as Handlers from '@/mock/handlers';

if (process.env.NODE_ENV === 'development') {
  if (typeof window === 'undefined') {
    const server = setupServer(...Handlers.handlers);
    server.listen();
  } else {
    const worker = setupWorker(...Handlers.handlers);
    worker.start();
  }
}

export const server = setupServer(...Handlers.handlers);

export const handlers = Handlers.handlers;
