import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Box} from '../../components';
import {useStyles} from './styles';
import SignInPhoneNumberModule from '../../modules/Login/SignInPhoneNumber';
import SignUpModule from '../../modules/Login/SignUp';

const Login: React.FC = ({}) => {
  const styles = useStyles();
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Box style={styles.container}>
        {isSignUp ? (
          <SignUpModule setIsSignUp={setIsSignUp} />
        ) : (
          <SignInPhoneNumberModule setIsSignUp={setIsSignUp} />
        )}
      </Box>
    </SafeAreaView>
  );
};

export default Login;
