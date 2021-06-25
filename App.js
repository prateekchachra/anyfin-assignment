

import React from 'react';
import type {Node} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './src/screens/Splash';
import SearchScreen from './src/screens/Search';
import CountryDetailScreen from './src/screens/CountryDetail';
const App: () => Node = () => {


  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator
         screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Splash" component={SplashScreen}/>
          <Stack.Screen name="Search" component={SearchScreen}/>
          <Stack.Screen name="CountryDetail" component={CountryDetailScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
