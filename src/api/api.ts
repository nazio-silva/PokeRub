import { BASE_URL, BASE_URL_IMAGE } from '@env';
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const api =  axios.create({
  baseURL: BASE_URL
})

const apiImage =  axios.create({
  baseURL: BASE_URL_IMAGE
})

// Interceptors
api.interceptors.request.use(function (config: InternalAxiosRequestConfig) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

api.interceptors.response.use(function (response: AxiosResponse) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export { api, apiImage };