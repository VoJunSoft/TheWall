import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  FlatList,
  TextInput,
  Button
} from 'react-native';
import { Divider, Icon} from 'react-native-elements';
import HeaderMenu from '../components/header'
//import Icon from 'react-native-vector-icons/FontAwesome';

const settings = () => {

  return(
    <View>
      <HeaderMenu />
      <ScrollView>
        <Text>About Us</Text>
        <Text>Log Out</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    postInput: {
      flex:1,
      fontSize: 24,
      borderColor:'#42435b',
      borderWidth:1,
      margin:10,
      fontFamily: "Outrun future",
    }
  });

export default settings;