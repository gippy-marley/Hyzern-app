/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useCallback} from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {useForm, FormProvider} from 'react-hook-form';
import {useRoute, useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
MaterialIcons.loadFont();

import {VerifyOTPProps} from '../../models/Auth';
import {RootRouteProps} from '../../routes';
import {useAuthContext} from '../../context/Auth';

import AuthAPI from '../../API/auth';

import {
  Box,
  Text,
  FormTextField,
  TextButton,
  Button,
  Spacer,
} from '../../components';

const OTPVerifyModule = () => {
  const route = useRoute<RootRouteProps<'OTPVerify'>>();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const formMethods = useForm<VerifyOTPProps>({
    mode: 'onBlur',
    defaultValues: {
      otpVerifyId: '',
      otpVerifyCode: '',
    },
  });

  const {verifyOTP, user} = useAuthContext();

  const handleOTPVerifyId = useCallback(otpVerifyId => {
    formMethods.setValue('otpVerifyId', otpVerifyId);
  }, []);

  useEffect(() => {
    if (route.params.otpVerifyId) {
      const otpVerifyId = route.params.otpVerifyId;
      handleOTPVerifyId(otpVerifyId);
    } else {
      Alert.alert('OTP Code Not Found');
      navigation.goBack();
    }
  }, [route, handleOTPVerifyId]);

  const handleVerifyOTP = async () => {
    const payload = formMethods.getValues();
    setIsLoading(true);

    try {
      const {token} = await verifyOTP(payload);
      console.log(token, user);
      Alert.alert('Verified');
      // navigation.navigate('OTPVerify', {});
    } catch (err) {
      Alert.alert(err.message);
      console.log('Error', err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    try {
      await AuthAPI.resendOTP(formMethods.getValues('otpVerifyId'));
      Alert.alert('OTP Resent');
    } catch (err) {
      Alert.alert(err.message);
      console.log('Error', err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box marginTop={'3xl'}>
      <Box flexDirection="row">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="arrow-back-ios"
            size={30}
            style={{marginTop: 5}}
            color="#FFF"
          />
        </TouchableOpacity>
        <Box>
          <Text variant="heading">OTP Verification</Text>
        </Box>
      </Box>

      <FormProvider {...formMethods}>
        <FormTextField
          name="otpVerifyCode"
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
        <Button
          isLoading={isLoading}
          label="Verify"
          onPress={formMethods.handleSubmit(handleVerifyOTP)}
        />
      </FormProvider>
      <Spacer />
      <TextButton
        label="Resend OTP"
        textAlign="center"
        onPress={handleResendOTP}
      />
    </Box>
  );
};

export default OTPVerifyModule;
