import {Country} from 'react-native-country-picker-modal';

export const tokenKey = 'token';
export const baseURL = 'http://192.168.1.54:8000/v1';

export const defaultCountry: Partial<Country> = {
  callingCode: ['91'],
  cca2: 'IN',
  currency: ['INR'],
  flag: 'flag-in',
  name: 'India',
  region: 'Asia',
  subregion: 'Southern Asia',
};
