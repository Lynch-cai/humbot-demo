import axios, { type AxiosInstance } from 'axios';

import { ErrorCode } from '@/constants';
import { refreshToken } from '@/modules/auth/auth-service';
import { getAccessToken, getBearerToken, getDeviceId } from '@/modules/auth/auth-util';
import { env } from './env';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: env.APP_BASE_PATH,
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = getAccessToken(); // Retrieve access token
    if (token) {
      config.headers['Device-Id'] = getDeviceId(); // Add device ID
      config.headers['Authorization'] = `Bearer ${token}`; // Add authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response; // Return the response as-is
  },
  async (error) => {
    const res: ErrorResponse = error?.response?.data;
    const originalRequestConfig = error.config;

    // Handle token expiration
    if (res?.errorCode === ErrorCode.AccessTokenExpired && !originalRequestConfig._isRetry) {
      try {
        // Set retry flag to avoid infinite loops
        originalRequestConfig._isRetry = true;

        // Refresh the token
        const refreshResponse = await refreshToken();
        if (refreshResponse) {
          // Update the authorization header with the new token
          originalRequestConfig.headers['Authorization'] = getBearerToken();
          return axios.request(originalRequestConfig); // Retry the original request
        }
      } catch (refreshError) {
        // Handle refresh token failure (e.g., redirect to login)
        console.error('Token refresh failed:', refreshError);
        return Promise.reject(refreshError);
      }
    }

    // Reject all other errors
    return Promise.reject(error);
  }
);

export default axiosInstance;
