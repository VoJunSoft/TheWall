/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local  */
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import SignIn from './screens/signIn'
import Wall from './screens/wall'
import Settings from './screens/settings'
import Profile from './screens/profile'
import HeaderMenu from './components/header'
import AsyncStorage from '@react-native-community/async-storage';
const Stack = createStackNavigator();



const App = () => {

  const [userID, setUserID] = useState()

  AsyncStorage.getItem("userData").then(userData => {

      //We need to parse the object back to read it 

    setUserID(JSON.parse(userData).uid)

  })

    .catch(err => {

      console.log(err.message)
    })




  // return (  
  //     <NavigationContainer>
  //     <Stack.Navigator>
  //       {userToken == null ? (
  //         // No token found, user isn't signed in
  //         <Stack.Screen 
  //         name="SignIn" 
  //         component={SignIn} 
  //         options={{ headerShown: false }}/>
  //       ) : (
  //         // User is signed in
  //         <>
  //         <Stack.Screen 
  //               name='Wall' 
  //               component={Wall} 
  //               options={{ headerTitle: props => <HeaderMenu {...props} /> , headerLeft: null}}/>
  //           <Stack.Screen 
  //               name="Profile" 
  //               component={Profile} 
  //               options={{ headerTitle: props => <HeaderMenu {...props} />, headerLeft: null}}/>
  //           <Stack.Screen 
  //               name="Settings" 
  //               component={Settings} 
  //               options={{ headerTitle: props => <HeaderMenu {...props} />, headerLeft: null}}/>
  //       </>
  //       )}
  //     </Stack.Navigator>
  //     </NavigationContainer>
  // )

  return (
    <NavigationContainer>
      <Stack.Navigator>

        {userID ? (

          <Stack.Screen
            name='Wall'
            component={Wall}
            options={{
              headerTitle: props => <HeaderMenu {...props} />,
              headerLeft: null,
              headerStyle: {
                backgroundColor: '#d3d3d3',
              }
            }} />

        ) : (

            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }} />
          )}

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTitle: props => <HeaderMenu {...props} />,
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#d3d3d3',
            }
          }} />

        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerTitle: props => <HeaderMenu {...props} />,
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#d3d3d3',
            }
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
