import * as React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';

import LoginScreen from '../screens/Login';
import OTPVerifyScreen from '../screens/OTPVerify';
import RoomModule from '../screens/Room';
import RoomScreen from '../modules/Room/RoomScreen';


export type RootStackParamList = {
  Home: undefined;
  OTPVerify: {otpVerifyId: string};
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

const AuthStack = createStackNavigator();

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
