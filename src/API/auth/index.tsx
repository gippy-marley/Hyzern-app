import api from '../index';
import {
  SignInWithPhoneNumberProps,
  VerifyOTPProps,
  AuthResponse,
  AuthResponsePhoneNumber,
} from '../../models/Auth';

export const signInWithPhoneNumber = (
  payload: SignInWithPhoneNumberProps,
): Promise<AuthResponsePhoneNumber> =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await api.post('/user/signin-phone-number', payload);
      const {otpVerifyId, isRegistered} = response.data.data;
      resolve({
        otpVerifyId,
        isRegistered,
      });
    } catch (err) {
      reject(err);
    }
  });

export const verifyOTP = (payload: VerifyOTPProps): Promise<AuthResponse> =>
  new Promise(async (resolve, reject) => {
    try {
      const {otpVerifyId, otpVerifyCode} = payload;
      const response = await api.post('/user/otp-verify', {
        otpVerifyId,
        otpVerifyCode,
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

export default {signInWithPhoneNumber, verifyOTP};
