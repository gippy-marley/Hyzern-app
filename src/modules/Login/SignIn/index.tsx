import React from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

import {Box, Text, TextButton, Button, Spacer} from '../../../components';
import SignInForm from './SignInForm';

type SignInModuleProps = {
  setIsSignUp?: (state: boolean) => void;
};

type SignInModel = {
  email: string;
  password: string;
};

const SignInModule = (props: SignInModuleProps) => {
  const navigation = useNavigation();
  const formMethods = useForm<SignInModel>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handeLogin = () => {
    navigation.navigate('OTPVerify');
  };

  return (
    <Box marginTop={'3xl'}>
      <Text variant="heading">Login</Text>
      <FormProvider {...formMethods}>
        <SignInForm />
        <TextButton label="Forgot Password?" textAlign="right" />
        <Spacer />
        <Button label="Login" onPress={formMethods.handleSubmit(handeLogin)} />
      </FormProvider>
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
