import React from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

import {Box, Text, TextButton, Button, Spacer} from '../../../components';
import SignUpForm from './SignUpForm';

type LoginModuleProps = {
  setIsSignUp?: (state: boolean) => void;
};

type SignInModel = {
  name: string;
  phone_number: string;
  email: string;
  password: string;
};

const SignUpModule = (props: LoginModuleProps) => {
  const navigation = useNavigation();
  const formMethods = useForm<SignInModel>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      phone_number: '',
      email: '',
      password: '',
    },
  });

  const handeSignUp = () => {
    navigation.navigate('OTPVerify');
  };

  return (
    <Box marginTop={'3xl'}>
      <Text variant="heading">Sign Up</Text>
      <FormProvider {...formMethods}>
        <SignUpForm />
        <Button
          label="Sign Up"
          onPress={formMethods.handleSubmit(handeSignUp)}
        />
        <Spacer />
        <TextButton
          label="Already have an account? Sign In!"
          textAlign="center"
          onPress={() => !props.setIsSignUp || props.setIsSignUp(false)}
        />
      </FormProvider>
    </Box>
  );
};

export default SignUpModule;
