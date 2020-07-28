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
import { Button } from 'react-native-elements';


const profile = ({navigation}) => {
  const handleDelete = () =>{
  
  }
  return(
    <View>
            <Text style={styles.title}>profile</Text>

            {/* This will display all posts in your state with the delete Button
            TODO complete handleDelete using posts.filter
            <AllPosts posts={posts} deleteButton={true} handleDelete={handleDelete}/> */}
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