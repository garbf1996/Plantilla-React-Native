import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from './components/Home.jsx'

const { Screen, Navigator } = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Navigator
      screenOptions={{ headerShown: true }}>
        <Screen name="Home" options={{ title: 'Home' }} component={Home} />
      </Navigator>
      </NavigationContainer>  
  );
}