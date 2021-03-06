import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../pages/home-page';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{title: 'Barcelona Urban Mobility'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
