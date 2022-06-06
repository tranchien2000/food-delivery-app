import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './authStack';
import {App} from '../../../App';
import {SignInContext} from './authContext';

export default function RootNavigator() {
  const {signedIn} = useContext(SignInContext);

  return (
    <NavigationContainer>
      {signedIn.userToken === null ? <AuthStack /> : <App />}
    </NavigationContainer>
  );
}
