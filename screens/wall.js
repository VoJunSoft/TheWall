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

  const [errMsg, setErrMsg]= useState('')
  const handleSubmit = () => {
    if(input.length<=12){
      setErrMsg("Your post is too short")
      return
    }
    //Add Input to posts state
    //TODO: replace userid with user name and fix keyExtractor @ allPosts.js
    setPosts((prevState) => {
    return [
      ...prevState,
      {userid: '6', body: input, date: Date()}
    ]})
    setInput("")
    setInputVisibility(false)
    //TO DO: ENTER DATA TO DATABASE
  }
  const [inputVisibiliy, setInputVisibility] = useState(false)
  const handleInput = () =>{
    setInputVisibility(!inputVisibiliy)
  }
  return(
    //TODO: styling/replacing textInput container + validation
    <View style={styles.container}>
        <Button 
          onPress={handleInput}
          title="Post On The Wall"
          color="#42435b"
        />
        {inputVisibiliy ? 
        <View style={styles.inputBox}>
         <TextInput
            value={input}
            style={styles.postInput}
            onChangeText={text=> setInput(text)}
            multiline={true}
            numberOfLines={3}
            maxLength={500}
            placeholderTextColor="#42435b"
            placeholder="Write On the Wall..."
            underlineColorAndroid='transparent'
         />
         <View style={styles.subBox}>
          <Text style={styles.err}>{errMsg}</Text>
            <Icon
              style={styles.send}
              reverse
              name='send'
              type='font-awesome'
              size={22}
              color='#42435b'
              onPress={handleSubmit}/>
              </View>
         </View> : null
        }
        {/* <Divider style={{ backgroundColor: '#42435b' }} /> */}
        <AllPosts posts={posts} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      marginTop: 0,
    },
    postInput: {
      fontSize: 24,
      borderColor:'#42435b',
      borderWidth:1,
      margin:7,
      fontFamily: "Outrun future",
      backgroundColor: "white"
    },
    inputBox:{
      backgroundColor: "white",
      textAlign:"center"
    },
    subBox:{
      flex:0,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center'
    },
    err:{
      color:'red',
      textAlign:'center'
    }
  });

export default wall;