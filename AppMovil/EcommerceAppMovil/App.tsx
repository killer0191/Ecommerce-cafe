import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeCustomerPage from './componets/pages/HomePage/HomeCustomerPage';
import HeroSection from './componets/organisms/HeroSection/HeroSection';
import RegisterPage from './componets/pages/LoginPage/RegisterPage';
import LoginPage from './componets/pages/LoginPage/LoginPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Hero">
      <Stack.Screen name="Hero" component={HeroSection} />
      <Stack.Screen name="HomeCustomerPage" component={HomeCustomerPage} />
      <Stack.Screen name="RegisterPage" component={RegisterPage} />
      <Stack.Screen name="LoginPage" component={LoginPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

