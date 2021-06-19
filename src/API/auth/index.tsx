import api from '../index';
import {SignInProps, UserProps, VerifyOTPProps} from '../../models/Auth';

interface AuthResponsePhoneNumber {
  verificationId: string;
}

interface AuthResponse {
  token: string | null;
  user: UserProps | null;
}

export const signIn = (payload: SignInProps): Promise<AuthResponse> =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await api.post('/user/signin-phone-number', payload);
      console.log(response);
      resolve({
        token: '123',
        user: {country_code: '+91', phone_number: 9566141671},
      });
    } catch (err) {
      reject(err);
    }
  });

export const signInWithPhoneNumber = (
  payload: SignInProps,
): Promise<AuthResponsePhoneNumber> =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await api.post('/user/phone-number', payload);
      const {otp_verification_id} = response.data.data;
      resolve({
        verificationId: otp_verification_id,
      });
    } catch (err) {
      reject(err);
    }
  });

export const verifyOTP = (payload: VerifyOTPProps): Promise<AuthResponse> =>
  new Promise(async (resolve, reject) => {
    try {
      const {verification_id: otp_verification_id, otp_verify_code} = payload;
      const response = await api.post('/user/otp-verify', {
        otp_verification_id,
        otp_verify_code,
      });
      const {user, token} = response.data.data;
      resolve({user, token});
    } catch (err) {
      reject(err);
    }
  });

export const getCurrentUser = (token: string): Promise<AuthResponse> =>
  new Promise(async resolve => {
    try {
      const response = await api.get('/user/current');
      const user = response.data.data;
      resolve({token, user});
    } catch (err) {
      resolve({user: null, token: null});
    }
  });
