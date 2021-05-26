import axios, { AxiosError, AxiosResponse } from 'axios';
import IUser from './models/user';

const { REACT_APP_ENDPOINT } = process.env;

axios.defaults.baseURL = REACT_APP_ENDPOINT;

axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    throw error.response;
  }
);

const responseData = (response: AxiosResponse) => response?.data;

const request = {
  get: (url: string, params: any = {}) => axios.get(url, { params }).then(responseData),
};

const Users = {
  list: (): Promise<{ users: IUser[] }> => request.get('/v3/ecb7eac3-9723-4ed9-bf47-f634b7a277cc'),
};

export default {
  Users,
};
