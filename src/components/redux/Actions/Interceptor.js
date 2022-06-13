const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    headers: {
      'content-type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify(params),
  });
  
  axiosClient.interceptors.request.use(async (config) => {
    const customHeaders = {};
  
    const accessToken = `Bearer ${localStorage.getItem("userInfo").token}`;
    if (accessToken) {
      customHeaders.Authorization = accessToken;
    }
  
    return {
      ...config,
      headers: {
        ...customHeaders,  // auto attach token
        ...config.headers, // but you can override for some requests
      }
    };
  });
  
  export default axiosClient;