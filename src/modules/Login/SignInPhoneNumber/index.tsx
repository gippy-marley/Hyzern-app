import React, {useState} from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

import {Box, Text, TextButton, Button, Spacer} from '../../../components';
import SignInPhoneNumberForm from './SignInPhoneNumberForm';
import {defaultCountry} from '../../../config';

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
      countryCode:
        defaultCountry && defaultCountry.callingCode
          ? defaultCountry?.callingCode[0]
          : '91',
      phoneNumber: '',
    },
  });

  const handeLogin = () => {
    console.log(formMethods.getValues());
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
