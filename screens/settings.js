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
  Button,
  Image
} from 'react-native';
import { Divider, Icon} from 'react-native-elements';
import HeaderMenu from '../components/header'
//import Icon from 'react-native-vector-icons/FontAwesome';

const settings = () => {

  return(
   
    <View style={styles.container}>
       <ScrollView>
        <Image style={styles.logo} source={require("../assets/imgs/wall.png")} />
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.body}>
        “...it’s just another one of those things I don’t understand: everyone impresses upon you how unique you are, encouraging you to cultivate your individuality while at the same time trying to squish you and everyone else into the same ridiculous mould. It’s an artist’s right to rebel against the world’s stupidity.”
        ― E.A. Bucchianeri, Brushstrokes of a Gadfly,
        </Text>
    <Text style={styles.title}>Log Out</Text>
    <Text style={styles.body}>Leave us in peace!</Text>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#d3d3d3",
  },
  logo: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    width: 180,
    height: 180,
    borderRadius: 20,
    marginLeft:100,
    marginTop:35
  },
  title: {
    fontFamily:'Cheeky Bite Shine - AND',
    fontSize: 37,
    marginTop:30,
    fontWeight: '100',
    padding: 7,
    textAlign: 'left',
  },
  body:{
    marginLeft:20,
    padding:4,
    fontSize:17
  }
  });

export default settings;