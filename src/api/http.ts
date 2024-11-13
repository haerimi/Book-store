import axios, { AxiosRequestConfig } from 'axios'

const BASE_URL = "http://localhost:9999";
const DEFAULT_TIMEOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
    const axiosInstance = axios.create({
        baseURL: BASE_URL,
        timeout: DEFAULT_TIMEOUT,
        headers: {
            "content-type": 'application/json',
          },
          withCredentials: true,
          ...config
    });

    // 에러상황
    axiosInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            // 서버의 에러 메시지 추출
            if (error.response) {
              console.error("Server Error:", error.response.data);
            } else if (error.request) {
              console.error("Request Error:", error.request);
            } else {
              console.error("Error:", error.message);
            }
            return Promise.reject(error);
          }
    )
    return axiosInstance;
};

export const httpClient = createClient();