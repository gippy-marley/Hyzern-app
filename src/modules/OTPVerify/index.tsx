import React from 'react';
import {
  Box,
  Text,
  TextInput,
  TextButton,
  Button,
  Spacer,
} from '../../components';

const OTPVerifyModule = () => {
  return (
    <Box marginTop={'3xl'}>
      <Text variant="heading">OTP Verification</Text>
      <TextInput
        label="OTP Code"
        placeholder="Enter the OTP Code you received."
      />
      <Spacer />
      <Button label="Verify" />
      <Spacer />
      <TextButton label="Resend OTP" textAlign="center" />
    </Box>
  );
};

export default OTPVerifyModule;
