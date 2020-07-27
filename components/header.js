import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Button, ThemeProvider, Header, Icon } from 'react-native-elements';
import { IconX } from 'react-native-vector-icons'

const header = () => {
  return(

        <Header
          barStyle="dark-content"
          containerStyle={{
            backgroundColor: '#42435b',
            justifyContent: 'space-around',
          }}
          leftComponent={{ icon: 'account-circle', color: '#fff' , size: 35}}
          centerComponent={{ text: 'The Wall', style: { color: '#fff', fontSize: 30, fontFamily:'Cheeky Bite Shine - AND'} }}
          rightComponent={{ icon: 'settings', color: '#fff', size: 35 }}
          />
  
  )
}


const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: '100',
      padding: 4,
      paddingRight: 12,
      textAlign: 'center',
    }

  });
export default header;