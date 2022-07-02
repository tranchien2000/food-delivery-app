import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Restaurant, OrderDelivery, Home, AuthStack} from './src/screens';
import Tabs from './src/screens/tabs';
import OrderScreen from './src/screens/OrderDelivery/OrderScreen';
// import {rootNavigation} from './src/screens/Authentication/rootNavigation';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="AuthStack">
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
      </Stack.Navigator>
    </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
