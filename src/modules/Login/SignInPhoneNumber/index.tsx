import React, {useState} from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

import {Box, Text, TextButton, Button, Spacer} from '../../../components';
import SignInPhoneNumberForm from './SignInPhoneNumberForm';

type SignInPhoneNumberModuleProps = {
  setIsSignUp?: (state: boolean) => void;
};

type SignInPhoneNumberModel = {
  countryCode: string;
  phoneNumber: string;
};

const SignInPhoneNumberModule = (props: SignInPhoneNumberModuleProps) => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const formMethods = useForm<SignInPhoneNumberModel>({
    mode: 'onBlur',
    defaultValues: {
      countryCode: '+91',
      phoneNumber: '',
    },
  });

  const handeLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigation.navigate('OTPVerify');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Box marginTop={'3xl'}>
      <Text variant="heading">Sign In</Text>
      <FormProvider {...formMethods}>
        <SignInPhoneNumberForm />
        <Spacer />
        <Button
          label="Send OTP"
          isLoading={isLoading}
          onPress={formMethods.handleSubmit(handeLogin)}
        />
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

export default SignInPhoneNumberModule;
