import axios from 'axios';
import { HTTP_STATUS, HttpError } from '../interfaces/HttpInterfaces';

const BASE_URL = 'http://127.0.0.1:8000/api';

export const petFinderApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

function errorHandler(error: HttpError<unknown>) {
  if (error.response && error.response.status === HTTP_STATUS.UNAUTHORIZED) {
    localStorage.removeItem('token');
    window.location.href = '/login';
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
