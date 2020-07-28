/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import SignIn from './screens/signIn'
import Wall from './screens/wall'
import Settings from './screens/settings'
import Profile from './screens/profile'
import HeaderMenu from './components/header'

const Stack = createStackNavigator();
const App = () => {
  return (  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen 
            name="SignIn" 
            component={SignIn} 
            options={{headerTitle: null}}/>
        <Stack.Screen 
            name='Wall' 
            component={Wall} 
            options={{ headerTitle: props => <HeaderMenu {...props} /> , headerLeft: null}}/>
        <Stack.Screen 
            name="Profile" 
            component={Profile} 
            options={{ headerTitle: props => <HeaderMenu {...props} />, headerLeft: null}}/>
        <Stack.Screen 
            name="Settings" 
            component={Settings} 
            options={{ headerTitle: props => <HeaderMenu {...props} />, headerLeft: null}}/>
      </Stack.Navigator>
    </NavigationContainer>   
  );
};


export default App;
