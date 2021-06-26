import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';

import LoginScreen from '../screens/Login';
import OTPVerifyScreen from '../screens/OTPVerify';
import RoomModule from '../screens/Room';
import RoomScreen from '../modules/Room/RoomScreen';
import { RootStackParamList } from './RoomStackParamList';

const AuthStack = createStackNavigator<RootStackParamList>();

function Route() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="Room">
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
        <AuthStack.Screen
          options={{headerShown: false}}
          name="Room"
          component={RoomModule}
        />
        <AuthStack.Screen
          options={{headerShown: false}}
          name="RoomScreen"
          component={RoomScreen}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
