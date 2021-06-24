export interface SignInWithPhoneNumberProps {
  countryCode: string;
  phoneNumber: string;
}

export interface VerifyOTPProps {
  otpVerifyId: string;
  otpVerifyCode: string;
}

export interface UserProps {
  name?: string;
  email?: string;
  countryCode: string;
  phoneNumber: number;
}

export interface AuthResponsePhoneNumber {
  otpVerifyId: string;
  isRegistered: boolean;
}

export interface AuthResponse {
  token: string | null;
  user: UserProps | null;
}
