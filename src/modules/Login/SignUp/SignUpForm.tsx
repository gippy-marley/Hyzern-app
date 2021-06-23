import React from 'react';
import {Box, FormTextField} from '../../../components';

const SignUpForm = () => {
  return (
    <Box>
      <FormTextField
        name="name"
        label="Name"
        placeholder="Enter your Name"
        rules={{required: 'Name Required'}}
      />
      <FormTextField
        name="phone_number"
        label="Phone Number"
        placeholder="Enter your Phone Number"
        rules={{required: 'Phone Number Required'}}
      />
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

export default SignUpForm;
