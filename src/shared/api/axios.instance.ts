import axios, { AxiosRequestConfig } from 'axios';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

const baseUrl = __IS_DEV__ ? 'http://localhost:8000' : '';
export const api = axios.create({
    baseURL: __API_URL__,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config.headers) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
    }
    return config;
});
