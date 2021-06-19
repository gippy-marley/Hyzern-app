import React, {createContext, useEffect, useState, useContext} from 'react';
import * as AuthService from '../api/auth';
import {SignInProps, UserProps} from '../models/Auth';
import {getToken, removeToken, setToken} from '../API';

interface AuthProviderData {
  children?: React.ReactNode;
}

interface AuthContextData {
  signed: boolean;
  user: UserProps | null;
  signIn(signInData: SignInProps): Promise<void>;
  signInWithPhoneNumber(signInData: SignInProps): Promise<void>;
  verifyOTP(otp_verify_code: string): Promise<void>;
  signOut(): void;
  theme: string;
  setThemeMode(theme?: string | null): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({
  children,
}: AuthProviderData): React.ReactElement => {
  const [verification_id, setVerificationId] = useState<string>('');
  const [user, setUser] = useState<UserProps | null>(null);
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    async function loadStorageData() {
      const token = await getToken();
      if (!token) {
        return;
      }

      const {user} = await AuthService.getCurrentUser(token);
      setUser(user);
    }

    loadStorageData();
  }, []);

  async function signIn(signInData: SignInProps) {
    const response = await AuthService.signIn(signInData);
    setUser(response.user);
  }

  async function signInWithPhoneNumber(signInData: SignInProps): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await AuthService.signInWithPhoneNumber(signInData);
        console.log(response);
        setVerificationId(response.verificationId);
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }

  async function verifyOTP(otp_verify_code: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await AuthService.verifyOTP({
          otp_verify_code,
          verification_id,
        });
        const {token, user} = response;
        if (!token) {
          throw new Error('TOKEN MISSING');
        }
        setUser(user);
        setToken(token);
        resolve();
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
        signIn,
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
