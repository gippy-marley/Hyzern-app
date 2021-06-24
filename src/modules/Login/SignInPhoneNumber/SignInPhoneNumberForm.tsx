/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Box, Text, FormTextField, CountryCode} from '../../../components';

const SignInPhoneNumberForm: React.FC = ({}) => {
  return (
    <>
      <Text variant="textInputLabel">Phone Number</Text>
      <Box flex={1} flexDirection="row" alignItems="center" minHeight={80}>
        <CountryCode />
        <FormTextField
          name="phoneNumber"
          placeholder="Enter your Phone Number"
          keyboardType="email-address"
          containerStyle={{flex: 6, marginTop: 15}}
          textInputStyle={{height: 50, width: '100%'}}
          rules={{
            required: 'Phone Number Required',
          }}
        />
      </Box>
    </>
  );
};

export default SignInPhoneNumberForm;
