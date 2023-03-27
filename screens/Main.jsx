import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

import { Welcome } from './Welcome';
import { LoginScreen } from './LoginScreen';
import { Dashborad } from './Dashborad';

const { Navigator, Screen } = createStackNavigator();

export const Main = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Welcome} />
      <Screen name="Login" component={LoginScreen} />
      <Screen name="Dashboard" component={Dashborad} />
    </Navigator>
  );
};
