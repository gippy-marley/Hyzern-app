import React from 'react';
import {
  Box,
  Text,
  TextInput,
  TextButton,
  Button,
  Spacer,
} from '../../../components';
import {useNavigation} from '@react-navigation/native';

type LoginModuleProps = {
  setIsSignUp?: (state: boolean) => void;
};

const LoginModule = (props: LoginModuleProps) => {
  const navigation = useNavigation();

  const handeLogin = () => {
    navigation.navigate('OTPVerify');
  };

  return (
    <Box marginTop={'3xl'}>
      <Text variant="heading">Login</Text>
      <TextInput label="Email Address" placeholder="Enter your Email Address" />
      <TextInput label="Password" placeholder="Enter your Password" />
      <TextButton label="Forgot Password?" textAlign="right" />
      <Spacer />
      <Button label="Login" onPress={handeLogin} />
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
