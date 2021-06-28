import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {tokenKey, baseURL} from '../config';

export const getToken = async () => {
  const token = await AsyncStorage.getItem(tokenKey);
  return token;
};

export const setToken = async (token: string) => {
  return AsyncStorage.setItem(tokenKey, token);
};

export const removeToken = async () => {
  return AsyncStorage.removeItem(tokenKey);
};

const API = axios.create({
  baseURL,
  headers: {},
});

API.interceptors.request.use(async config => {
  const token = await getToken();
  config.headers['x-access-token'] = token ? token : '';
  return config;
});

API.interceptors.response.use(
  function (response) {
    const {msg} = response.data;
    const code = response.status;

    if (code === 200 || code === 201) {
      return response;
    }

    if (code === 403) {
      removeToken();
    }

    throw Error(`${msg}`);
  },
  function (error) {
    if (error.response) {
      throw error.response.data;
    }
    throw error;
  },
);

export default API;

export const urlQueryBuilder = (url: string, query: any = {}) => {
  url += '?';
  Object.keys(query).map(queryKey => {
    if (query[queryKey] && query[queryKey] !== '') {
      url += `${queryKey}=${query[queryKey]}`;
    }
  });
  return url;
};
