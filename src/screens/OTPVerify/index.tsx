import React from 'react';
import {SafeAreaView} from 'react-native';
import {Box} from '../../components';
import {useStyles} from './styles';
import OTPVerifyModule from '../../modules/OTPVerify';

const OTPVerify: React.FC = ({}) => {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Box style={styles.container}>
        <OTPVerifyModule />
      </Box>
    </SafeAreaView>
  );
};

export default OTPVerify;
