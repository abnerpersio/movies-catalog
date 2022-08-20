import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { API_TOKEN } from '../constants/app';

type Params = {
  baseURL: string;
};

export class HttpClient {
  private readonly axios: AxiosInstance;

  constructor({ baseURL }: Params) {
    this.axios = axios.create({
      baseURL,
      params: {
        language: 'pt-BR',
      },
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
  }

  get<T = Record<string, unknown>>(url: string, config?: AxiosRequestConfig) {
    return this.axios.get<T>(url, config);
  }

  post<T = Record<string, unknown>>(
    url: string,
    data?: Record<string, unknown>,
    config?: AxiosRequestConfig
  ) {
    return this.axios.post<T>(url, data, config);
  }
}
