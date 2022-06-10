import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const Auth = createStackNavigator();

function AuthStack() {
  return (
    <Auth.Navigator initialRouteName="WelcomeScreen">
      <Auth.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Auth.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Auth.Navigator>
  );
}

export default AuthStack;
