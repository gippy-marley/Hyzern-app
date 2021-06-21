import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/Login';
import OTPVerifyScreen from '../screens/OTPVerify';

const AuthStack = createStackNavigator();

function Route() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{headerShown: false}}
          name="OTPVerify"
          component={OTPVerifyScreen}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
