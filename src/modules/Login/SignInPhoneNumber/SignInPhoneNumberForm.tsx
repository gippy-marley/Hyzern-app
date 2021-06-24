/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Box, Text, FormTextField} from '../../../components';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../../styles/theme';

const SignInPhoneNumberForm = () => {
  const theme = useTheme<Theme>();

  return (
    <>
      <Text variant="textInputLabel">Phone Number</Text>
      <Box flex={1} flexDirection="row" alignItems="center" minHeight={80}>
        <Box
          backgroundColor="textInputBackground"
          flex={1}
          width="20%"
          borderRadius={theme.rounded.s}
          borderColor="textInputBackground"
          borderWidth={1}
          marginRight="s"
          paddingVertical="m"
          paddingHorizontal="m">
          <Text style={{color: theme.colors.textColor}}>+91</Text>
        </Box>
        <FormTextField
          name="phoneNumber"
          placeholder="Enter your Phone Number"
          keyboardType="email-address"
          containerStyle={{flex: 7, width: '80%', marginTop: 15}}
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
