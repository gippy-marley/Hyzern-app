import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from '../styles/theme';

const AuthStack = createStackNavigator();

const Login: React.FC = ({}) => {
  const theme = useTheme();

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: theme.colors.background.default,
          padding: theme.spacing(2),
        }}>
        <Text style={{color: theme.typography.color}}>Hello World</Text>
        <Text style={{color: theme.typography.color}}>Hello World</Text>
        <Text style={{color: theme.typography.color}}>Hello World</Text>
        <Text style={{color: theme.typography.color}}>Hello World</Text>
      </View>
    </SafeAreaView>
  );
};

function Route() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen name="Login" component={Login} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
