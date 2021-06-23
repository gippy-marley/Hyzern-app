import React from 'react';
import {Alert} from 'react-native';
import {useForm, FormProvider} from 'react-hook-form';

import {
  Box,
  Text,
  FormTextField,
  TextButton,
  Button,
  Spacer,
} from '../../components';

type OTPVerifyModel = {
  otp_code: string;
};

const OTPVerifyModule = () => {
  const formMethods = useForm<OTPVerifyModel>({
    mode: 'onBlur',
    defaultValues: {
      otp_code: '',
    },
  });

  const verifyOTP = () => {
    Alert.alert('OTP Verified');
  };

  return (
    <Box marginTop={'3xl'}>
      <Text variant="heading">OTP Verification</Text>
      <FormProvider {...formMethods}>
        <FormTextField
          name="otp_code"
          label="OTP Code"
          placeholder="Enter the OTP Code you received."
          rules={{
            required: 'OTP Required',
            minLength: {value: 6, message: 'Minimum 6 length'},
          }}
          maxLength={6}
          keyboardType="number-pad"
        />
        <Spacer />
        <Button label="Verify" onPress={formMethods.handleSubmit(verifyOTP)} />
      </FormProvider>
      <Spacer />
      <TextButton label="Resend OTP" textAlign="center" />
    </Box>
  );
};

export default OTPVerifyModule;
