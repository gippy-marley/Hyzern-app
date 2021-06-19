import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {Box, Text} from '../../styles/theme';
import {useStyles} from './styles';

const Login: React.FC = ({}) => {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Box style={styles.container}>
        <Text variant="heading">Hello World</Text>
        <Text variant="subheading">Hello World</Text>
        <Text variant="body">Hello World</Text>
      </Box>
    </SafeAreaView>
  );
};

export default Login;
