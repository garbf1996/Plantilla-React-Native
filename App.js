import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Welcome } from "./screens/Welcome";
import { LoginScreen } from "./screens/LoginScreen";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name='Home' component={Welcome} />
        <Screen name='Login' component={LoginScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
