import axios from 'axios';
import { HTTP_STATUS, HttpError } from '../interfaces/HttpInterfaces';
import { PublicRoutes } from '../constants/routes';
import { PATHS_WITHOUT_TOKEN } from '../constants/pathsWithoutToken';
import { getAuthToken, removeAuthToken } from '../utils/expirationToken';

const BASE_URL = import.meta.env.VITE_API_URL;

export const petFinderApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

function errorHandler(error: HttpError<unknown>) {
  if (error.response && error.response.status === HTTP_STATUS.UNAUTHORIZED) {
    removeAuthToken();
    window.location.href = PublicRoutes.LOGIN;
    window.location.reload();
  }

  return Promise.reject(error);
}

petFinderApi.interceptors.response.use(
  response => {
    return response;
  },
  error => errorHandler(error)
);

petFinderApi.interceptors.request.use((config) => {
  const token = getAuthToken();

  const isAuthEndpoint = PATHS_WITHOUT_TOKEN.some(path => config.url?.includes(path));

  if (token && !isAuthEndpoint) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;

}, error => Promise.reject(error));
