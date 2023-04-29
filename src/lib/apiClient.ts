import axios from 'axios';
import { deepCamelToSnake, deepSnakeToCamel } from '@/helper';

type Config = {
  baseURL: string,
  camelCase?: boolean,
  csrfToken?: string,
};

const createClient = ({baseURL, camelCase, csrfToken}: Config) => {
  const instance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      ...(csrfToken && { 'X-CSRF-TOKEN': csrfToken }),
    },
    withCredentials: !!csrfToken,
    responseType: 'json',
    baseURL,
  });

  if(camelCase) {
    instance.interceptors.response.use(
      (response) => {
        const  { data } = response;
        if((data !== null && typeof data !== 'undefined')) {
          return {
            ...response,
            data: deepSnakeToCamel(data)
          };
        }
        return response;
      },
      (error) => Promise.reject(error)
    );

    instance.interceptors.request.use(
      (config) => {
        const { data } = config;
        if((data !== null && typeof data !== 'undefined')) {
          return {
            ...config,
            data: deepCamelToSnake(data)
          };
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  return instance;
};

export const getFetchClient = (config: Config) => {
  const client = createClient(config);

  return {
    get: client.get,
    post: client.post,
    put: client.put,
    delete: client.delete,
  };
};
