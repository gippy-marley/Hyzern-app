export interface SignInProps {
  country_code: string;
  phone_number: number;
}

export interface VerifyOTPProps {
  verification_id: string;
  otp_verify_code: string;
}

export interface UserProps {
  name?: string;
  email?: string;
  country_code: string;
  phone_number: number;
}
