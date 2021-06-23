import React from 'react';
import {Box, FormTextField} from '../../../components';

const SignInForm = () => {
  return (
    <Box>
      <FormTextField
        name="email"
        label="Email Address"
        placeholder="Enter your Email Address"
        keyboardType="email-address"
        rules={{
          required: 'Email Address Required',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Please enter the Email properly',
          },
        }}
      />
      <FormTextField
        name="password"
        label="Password"
        placeholder="Enter your Password"
        secureTextEntry={true}
        rules={{
          required: 'Password Required',
          minLength: {value: 6, message: 'Minimum should be 6 letters'},
        }}
      />
    </Box>
  );
};

export default SignInForm;
