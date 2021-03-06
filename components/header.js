import React,{useState} from 'react';
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
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

const header = () => {
  const navigation = useNavigation();

  const [userData, setUserData] = useState()

  AsyncStorage.getItem("userData").then(userData => {

    setUserData(JSON.parse(userData))

  })

    .catch(err => {

      console.log(err.message)
    })

  return (
    <View style={styles.title}>
      <Icon
        reverse
        name='user'
        type='font-awesome'
        size={22}
        color='#42435b'
        onPress={() => navigation.navigate('Profile' , {
          userData
        })
      }
        />
      <Icon
        reverse
        name='map'
        type='font-awesome'
        size={22}
        color='#42435b'
        onPress={() => navigation.navigate('Wall' , {
          userData
        })
      }
        
        />
      <Icon
        reverse
        name='gear'
        type='font-awesome'
        size={22}
        color='#42435b'
        onPress={() => navigation.navigate('Settings' , {
          userData
        })
      }
        />
    </View>
    // <Header
    //   barStyle="dark-content"
    //   containerStyle={{
    //     backgroundColor: '#42435b',
    //     justifyContent: 'space-around',
    //   }}        
    //   leftComponent={{ icon: 'account-circle', color: '#fff' , size: 35}}
    //   centerComponent={{ text: 'The Wall', style: { color: '#fff', fontSize: 30, fontFamily:'Cheeky Bite Shine - AND'} }}
    //   rightComponent={{ icon: 'settings', color: '#fff', size: 35 }}
    //   />

  )
}


const styles = StyleSheet.create({
  title: {
    flex: 0,
    flexDirection: "row",
    justifyContent: 'space-between',
    fontFamily: 'Cheeky Bite Shine - AND',
    fontSize: 30,
    fontWeight: '100',
    padding: 0,
    textAlign: 'center',
  }

});
export default header;    