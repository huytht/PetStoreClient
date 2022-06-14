import { refreshToken } from "../Reducers/UserReducers";
import TokenService from "../../services/token.service";
import axios from "axios";
import { axiosClient } from "../../services/api";

const validRequestForNotAddingToken = [
  '/product',
  '/user/login',
  '/user/refresh-token'
]

const setup = (store) => {
  
  axiosClient.interceptors.request.use( async (config) => {
    // const positionIndicator = 'api/';
    // const position = request.url.indexOf(positionIndicator);
    validRequestForNotAddingToken.forEach(item => {
      if (config.url.indexOf(item) >= 0) {
        return config;
      }
    })
      const token = await TokenService.getLocalAccessToken();
      if (token) {
        config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  const { dispatch } = store;
  axiosClient.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;
      if (originalConfig.url !== '/user/login' && err.response) {
        // Access Token was expired
        if (err.response.status !== 401 && !originalConfig._retry) {
          originalConfig._retry = true;
          try {
            const rs = await axiosClient.post('/user/refresh-token', {
              refreshToken: TokenService.getLocalRefreshToken(),
            });
            const { accessToken } = rs.data.data;
            console.log(accessToken)
            dispatch(refreshToken(accessToken));
            TokenService.updateLocalAccessToken(accessToken);
            return axiosClient(originalConfig);
          } catch (_error) {
            console.log(_error)
            return Promise.reject(_error);
          }
        }
      }
      return Promise.reject(err);
    }
  );
}
  
 export default setup