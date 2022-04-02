import axios from 'axios';

const createClient = (baseURL: string, csrfToken?: string) =>
  axios.create({
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      ...(csrfToken && { 'X-CSRF-TOKEN': csrfToken }),
    },
    withCredentials: !!csrfToken,
    responseType: 'json',
    baseURL,
  });

export const getFetchClient = (baseURL: string, csrfToken?: string) => {
  const client = createClient(baseURL, csrfToken);

  return {
    get: client.get,
    post: client.post,
    put: client.put,
    delete: client.delete,
  };
};
