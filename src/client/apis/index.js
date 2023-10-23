const API_ENDPOINTS = {
  ssr: 'https://randomuser.me/api/',
};

const getApiEndPoint = (name) => (name && API_ENDPOINTS[name]) || '';

export default getApiEndPoint;
