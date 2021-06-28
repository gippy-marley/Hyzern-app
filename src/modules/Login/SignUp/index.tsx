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
  phoneNumber: string;
  email: string;
  password: string;
};

const SignUpModule = (props: LoginModuleProps) => {
  const navigation = useNavigation();
  const formMethods = useForm<SignInModel>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      phoneNumber: '',
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
<<<<<<< HEAD
      <TextInput label="Name" placeholder="Enter your Name" />
      <TextInput label="Phone Number" placeholder="Enter your Phone Number" />
      <TextInput label="Email Address" placeholder="Enter your Email Address" />
      <TextInput label="Password" placeholder="Enter your Password" />
      <Button label="Sign Up" />
      <Spacer />
      <TextButton
        label="Already have an account? sign In!"
        textAlign="center"
        onPress={() => !props.setIsSignUp || props.setIsSignUp(false)}
      />
=======
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
>>>>>>> a3a0858c43794b75b365fcd4f336f16593b16b6e
    </Box>
  );
};

export default SignUpModule;
