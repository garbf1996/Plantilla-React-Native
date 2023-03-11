import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from '../components/Home'
import { LoginScreen } from '../screens/LoginScreen'

const { Screen, Navigator } = createBottomTabNavigator();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: true }}>
        <Screen name='Home' options={{ title: "Home" }} component={Home} />
        <Screen name='Login' options={{ title: "Login" }} component={LoginScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
