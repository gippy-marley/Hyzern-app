import React, {useState} from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

import {Box, Text, TextButton, Button, Spacer} from '../../../components';
import SignInPhoneNumberForm from './SignInPhoneNumberForm';
import {defaultCountry} from '../../../config';
import {SignInWithPhoneNumberProps} from '../../../models/Auth';
import {useAuthContext} from '../../../context/Auth';

type SignInPhoneNumberModuleProps = {
  setIsSignUp?: (state: boolean) => void;
};

const SignInPhoneNumberModule = (props: SignInPhoneNumberModuleProps) => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const formMethods = useForm<SignInWithPhoneNumberProps>({
    mode: 'onBlur',
    defaultValues: {
      countryCode:
        defaultCountry && defaultCountry.callingCode
          ? defaultCountry?.callingCode[0]
          : '91',
      phoneNumber: '9566141671',
    },
  });

  const {signInWithPhoneNumber} = useAuthContext();

  const handeLogin = async () => {
    const payload = formMethods.getValues();
    setIsLoading(true);

    try {
      const {otpVerifyId, isRegistered} = await signInWithPhoneNumber(payload);

      if (isRegistered) {
        navigation.navigate('OTPVerify', {otpVerifyId});
      } else {
        !props.setIsSignUp || props.setIsSignUp(true);
      }
    } catch (err) {
      console.error('Error', err, signInWithPhoneNumber);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box marginTop={'3xl'}>
      <Text variant="heading">Sign In</Text>
      <FormProvider {...formMethods}>
        <SignInPhoneNumberForm formMethods={formMethods} />
        <Spacer />
        <Button
          label="Sign In"
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
