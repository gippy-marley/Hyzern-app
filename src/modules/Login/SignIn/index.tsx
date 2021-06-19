import React from 'react';
import {
  Box,
  Text,
  TextInput,
  TextButton,
  Button,
  Spacer,
} from '../../../components';

type LoginModuleProps = {
  setIsSignUp?: (state: boolean) => void;
};

const LoginModule = (props: LoginModuleProps) => {
  return (
    <Box marginTop={'3xl'}>
      <Text variant="heading">Login</Text>
      <TextInput label="Email Address" placeholder="Enter your Email Address" />
      <TextInput label="Password" placeholder="Enter your Password" />
      <TextButton label="Forgot Password?" textAlign="right" />
      <Spacer />
      <Button label="Login" />
      <Spacer />
      <TextButton
        label="Don't have an account? Sign Up!"
        textAlign="center"
        onPress={() => !props.setIsSignUp || props.setIsSignUp(true)}
      />
    </Box>
  );
};

export default LoginModule;
