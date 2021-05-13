// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/HomePage';
import DetailCountry from './src/DetailCountry';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator headerMode="screen"
        screenOptions={{
          headerTintColor: 'black',
          headerStyle: { backgroundColor: '#bdbdbd' },
        }} >
        <Stack.Screen options={{ title: 'Home' }} name="Home" component={HomePage} />
        <Stack.Screen           options={({ route }) => ({  title: route.params.countries.name })}
 name="detailCountry"  component={DetailCountry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;