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

const wall = () => {
  
  //Input state to be saved into posts database
  const [input, setInput] = useState('')

  //TO DO: Load state from posts database
  // Use post id as key for the list
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
    setPosts((prevState) => {
    return [
      ...prevState,
      {userid: 6, body: input, date: Date()}
    ]})
    setInput("")
    //TO DO: ENTER DATA TO DATABASE
  }

  return(
    <View style={styles.container}>
      <HeaderMenu />
      <ScrollView>
         <TextInput
            value={input}
            style={styles.postInput}
            onChangeText={text=> setInput(text)}
            multiline={true}
            numberOfLines={3}
            placeholder="Write On the Wall..."
            underlineColorAndroid='transparent'
            require={true}
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