import React, {createContext, useEffect, useState, useContext} from 'react';
import * as AuthService from '../API/auth';
import {
  SignInWithPhoneNumberProps,
  UserProps,
  VerifyOTPProps,
  AuthResponse,
  AuthResponsePhoneNumber,
} from '../models/Auth';
import {getToken, removeToken, setToken} from '../API';

interface AuthProviderData {
  children?: React.ReactNode;
}

interface AuthContextData {
  signed: boolean;
  user: UserProps | null;
  signInWithPhoneNumber(
    signInData: SignInWithPhoneNumberProps,
  ): Promise<AuthResponsePhoneNumber>;
  verifyOTP({
    otpVerifyCode,
    otpVerifyId,
  }: VerifyOTPProps): Promise<AuthResponse>;
  signOut(): void;
  theme: string;
  setThemeMode(theme?: string | null): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({
  children,
}: AuthProviderData): React.ReactElement => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    async function loadStorageData() {
      const token = await getToken();
      if (!token) {
        return;
      }

      const {user: currentUser} = await AuthService.getCurrentUser(token);
      setUser(currentUser);
    }

    loadStorageData();
  }, []);

  async function signInWithPhoneNumber(
    signInData: SignInWithPhoneNumberProps,
  ): Promise<AuthResponsePhoneNumber> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await AuthService.signInWithPhoneNumber(signInData);
        resolve(response);
      } catch (err) {
        console.log('Context', err);
        reject(err);
      }
    });
  }

  async function verifyOTP({
    otpVerifyCode,
    otpVerifyId,
  }: VerifyOTPProps): Promise<AuthResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await AuthService.verifyOTP({
          otpVerifyCode,
          otpVerifyId,
        });
        const {token, user: newUser} = response;

        if (!token) {
          throw new Error('TOKEN MISSING');
        }
        setUser(newUser);
        setToken(token);
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  }

  function signOut() {
    removeToken();
    setUser(null);
  }

  function setThemeMode(selectedTheme: string | null) {
    if (!selectedTheme) {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      return;
    }

    setTheme(selectedTheme);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signInWithPhoneNumber,
        verifyOTP,
        signOut,
        theme,
        setThemeMode,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export const useAuthContext = () => useContext(AuthContext);
