/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Box, Text, FormTextField, CountryCode} from '../../../components';

type SignInPhoneNumberFormProps = {
  formMethods: any;
};

const SignInPhoneNumberForm = ({formMethods}: SignInPhoneNumberFormProps) => {
  return (
    <>
      <Text variant="textInputLabel">Phone Number</Text>
      <Box flex={1} flexDirection="row" alignItems="center" minHeight={80}>
        <CountryCode
          onChange={countryCode =>
            formMethods.setValue('countryCode', countryCode)
          }
        />
        <FormTextField
          name="phoneNumber"
          placeholder="Enter your Phone Number"
          keyboardType="number-pad"
          containerStyle={{flex: 5, marginTop: 15}}
          textInputStyle={{height: 50, width: '100%'}}
          rules={{
            required: 'Phone Number Required',
            minLength: {value: 7, message: 'Enter a valid Phone Number'},
          }}
          maxLength={12}
        />
      </Box>
    </>
  );
};

export default SignInPhoneNumberForm;
