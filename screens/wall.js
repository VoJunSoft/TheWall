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
import AllPosts from '../components/allPosts'
//import Icon from 'react-native-vector-icons/FontAwesome';

const wall = ({navigation}) => {
  //TODO: Check if user not logged in go to login screen
  
  //TODO: input validation and Show/Hide TextInput
  const [input, setInput] = useState('')

  //TODO: Load state from posts database. HINT: Use post id as key for the list
  const [posts, setPosts] = useState([
    { 
      userid: '12345', 
      body: 'My first writting on the wall',
      date: Date()
    },{
      userid: '12346', 
      body: 'Bricks Bricks Bricks, Stick with STicks However then never end up left or right',
      date: Date()
    },{
      userid: '12347', 
      body: 'My first writting on the wall',
      date: Date() 
    },{
      userid: '12348', 
      body: 'My first writting on the wall',
      date: Date() 
    },{
      userid: '12349', 
      body: 'My first writting on the wall',
      date: Date() 
    },{
      userid: '12342', 
      body: 'My first writting on the wall',
      date: Date() 
    }
  ])

  
  const handleSubmit = () => {
    //Add Input to posts state
    //TODO: replace userid with user name and fix keyExtractor @ allPosts.js
    setPosts((prevState) => {
    return [
      ...prevState,
      {userid: '6', body: input, date: Date()}
    ]})
    setInput("")
    //TO DO: ENTER DATA TO DATABASE
  }

  return(
    <View style={styles.container}>
      <ScrollView>
         <TextInput
            value={input}
            style={styles.postInput}
            onChangeText={text=> setInput(text)}
            multiline={true}
            numberOfLines={3}
            placeholder="Write On the Wall..."
            underlineColorAndroid='transparent'
         />
        <Button 
          onPress={handleSubmit}
          title="Post On The Wall"
          color="#42435b"
        />

        {/* <Divider style={{ backgroundColor: '#42435b' }} /> */}

        <AllPosts posts={posts} />
    
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop: 0,
    },
    postInput: {
      flex:1,
      fontSize: 24,
      borderColor:'#42435b',
      borderWidth:1,
      margin:10,
      fontFamily: "Outrun future",
    }
  });

export default wall;