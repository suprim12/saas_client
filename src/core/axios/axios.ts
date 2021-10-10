import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from "axios";
import cookies from "js-cookie";
import {
  API_BASE_URL,
  COOKIE_ACCESS,
  COOKIE_REFRESH,
  JWT_TOKEN_HEADER,
} from "../../config";

const axiosConfig: AxiosRequestConfig = {
  baseURL: API_BASE_URL,
};

const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  const accessToken = cookies.get(COOKIE_ACCESS);
  if (accessToken && accessToken.length > 10) {
    config.headers = {
      authorization: `${JWT_TOKEN_HEADER} ${accessToken}`,
    };
  } else {
    window.location.href = "/";
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return new Promise((resolve, reject) => {
      const originalReq = err.config;
      if (
        err?.response?.status === 401 &&
        (!err?.response?.subStatusCode ||
          err?.response?.subStatusCode !== 463) &&
        cookies.get(COOKIE_ACCESS) &&
        err.config &&
        !err.config.__isRetryRequest
      ) {
        const config: RequestInit = {
          method: "POST",
          cache: "no-cache",
          headers: {
            "content-type": "application/json",
            authorization: `${JWT_TOKEN_HEADER} ${cookies.get(COOKIE_ACCESS)}`,
          },
          body: JSON.stringify({
            token: cookies.get(COOKIE_REFRESH),
          }),
        };
        originalReq.__isRetryRequest = true;

        const res = fetch(`${API_BASE_URL}/auth/refresh/token`, config)
          .then((res) => res.json())
          .then((res): AxiosResponse | AxiosPromise | void => {
            if (res.statusCode === 401 && res.subStatusCode === 463) {
              // TODO: OPEN SESSION EXPIRE MODAL
              reject(err);
            } else {
              // TODO: HANDLE TOKENS
              return axiosInstance(originalReq);
            }
          });
        resolve(res);
      }
      return reject(err);
    });
  }
);

export { axiosInstance };
export default axiosInstance;
