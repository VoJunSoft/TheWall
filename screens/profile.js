import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import HeaderMenu from '../components/header'

const profile = ({navigation}) => {
  return(
    <View>
            <Text style={styles.title}>profile</Text>
    </View>

  )}

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
export default profile;