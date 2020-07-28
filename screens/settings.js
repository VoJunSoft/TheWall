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
      <ScrollView>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.title}>Log Out</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    flex:0,
    flexDirection: "row",
    justifyContent: 'space-between',
    fontFamily:'Cheeky Bite Shine - AND',
    fontSize: 37,
    marginTop:70,
    fontWeight: '100',
    padding: 7,
    textAlign: 'center',
  }
  });

export default settings;