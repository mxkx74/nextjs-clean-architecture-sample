import '@testing-library/jest-dom/extend-expect';
import { server } from './src/mock';

jest.mock('next/router', () => require('next-router-mock'));

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
