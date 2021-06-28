<<<<<<< HEAD
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
  Box,
  Text,
  TextInput,
  TextButton,
  Button,
  Spacer,
} from '../../../components';
import { RootStackParamList } from '../../../routes/RoomStackParamList';
=======
import React, {useState} from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
>>>>>>> a3a0858c43794b75b365fcd4f336f16593b16b6e

import {Box, Text, TextButton, Button, Spacer} from '../../../components';
import SignInForm from './SignInForm';

type SignInModuleProps = {
  setIsSignUp?: (state: boolean) => void;
};

<<<<<<< HEAD
type LoginProp = StackNavigationProp<RootStackParamList,'Room'>;

const LoginModule = (props: LoginModuleProps) => {

  const navigation = useNavigation<LoginProp>();
=======
type SignInModel = {
  email: string;
  password: string;
};

const SignInModule = (props: SignInModuleProps) => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const formMethods = useForm<SignInModel>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handeLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigation.navigate('OTPVerify');
      setIsLoading(false);
    }, 2000);
  };
>>>>>>> a3a0858c43794b75b365fcd4f336f16593b16b6e

  return (
    <Box marginTop={'3xl'}>
      <Text variant="heading">Login</Text>
<<<<<<< HEAD
      <TextInput label="Email Address" placeholder="Enter your Email Address" />
      <TextInput label="Password" placeholder="Enter your Password" />
      <TextButton label="Forgot Password?" textAlign="right" />
      <Spacer />
      <Button label="Login" onPress={ ()=>navigation.navigate('Room')} />
=======
      <FormProvider {...formMethods}>
        <SignInForm />
        <TextButton label="Forgot Password?" textAlign="right" />
        <Spacer />
        <Button
          label="Login"
          isLoading={isLoading}
          onPress={formMethods.handleSubmit(handeLogin)}
        />
      </FormProvider>
>>>>>>> a3a0858c43794b75b365fcd4f336f16593b16b6e
      <Spacer />
      <TextButton
        label="Don't have an account? Sign Up!"
        textAlign="center"
        onPress={() => !props.setIsSignUp || props.setIsSignUp(true)}
      />
    </Box>
  );
};

export default SignInModule;
