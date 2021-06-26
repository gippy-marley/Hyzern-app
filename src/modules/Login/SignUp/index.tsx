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

const SignUpModule = (props: LoginModuleProps) => {
  return (
    <Box marginTop={'3xl'}>
      <Text variant="heading">Sign Up</Text>
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
    </Box>
  );
};

export default SignUpModule;
