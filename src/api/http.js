import axios from 'axios';

function create(baseUrl, options) {
  console.log('import.meta.env', import.meta.env);
  return axios.create(
    Object.assign({
      baseURL: baseUrl,
    }),
    options,
  );
}

export const canvases = create(
  //'https://json-server-vercel-eight-phi.vercel.app/canvases/',
  `${import.meta.env.VITE_API_BASE_URL}/canvases/`,
);
export const posts = create(`${import.meta.env.VITE_API_BASE_URL}/posts/`);
