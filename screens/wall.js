import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput, Button, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Divider, Icon} from 'react-native-elements';
import HeaderMenu from '../components/header'
import AllPosts from '../components/allPosts'
import * as Animatable from "react-native-animatable";

const wall = ({navigation}) => {
  //TODO: Check if user not logged in go to login screen
  
  //input is the body of the new post
  const [input, setInput] = useState('')
  //initialize empty posts state
  const [posts, setPosts] = useState([])

  //get user's name and ID from Auth-logIN
  const [userName, setUserName] = useState('Khaled')
  const [userID, setUserID] = useState('IitAXPGy0NoBBZrtER68')

  //TODO: change useEffect onRefresh
  useEffect(() => {
    //set default png
   
   // const subscriber = firestore()
    firestore()
      .collection('posts')
      .get()
      .then(querySnapshot => {
        console.log('Total posts: ', querySnapshot.size);
        setPosts([]);
        querySnapshot.forEach(documentSnapshot => {
          console.log('post ID: ', documentSnapshot.id, documentSnapshot.data());
          //load posts from DB into posts state
          setPosts((prevState) => {
            return [
              {
                id: documentSnapshot.id, 
                userid: documentSnapshot.data().userid, 
                body: documentSnapshot.data().body, 
                date: documentSnapshot.data().date, 
                name: documentSnapshot.data().name,
                //postBg: require('../assets/imgs/wall00.png')
                postBg: documentSnapshot.data().postBg
              },  ...prevState
            ]})
        });
      });
      // Stop listening for updates when no longer required
      //return () => subscriber();
  }, []);


  const [errMsg, setErrMsg]= useState('')

  const handleSubmit = () => {
    if(input.length<=12){
      setErrMsg("Your post is too short")
      return
    }
    // if(!bgStyle)
    //   setBgStyle(require('../assets/imgs/wall00.png'))

    //Add Input to posts state
    //TO DO: Automated id
    setPosts((prevState) => {
    return [
      {
        id:'6', 
        userid: userID, 
        body: input, 
        date: Date(), 
        name:userName,
        postBg: bgStyle
    }, ...prevState
    ]})

    //add post to database
    firestore()
      .collection('posts')
      .add({
        userid: userID,
        body: input,
        date: Date(),
        name: userName,
        postBg: bgStyle
      })
      .then(() => {
        console.log('User added!');
      });

    setInput("")
    setInputVisibility(false)
    setWallTitle('Show My Wall')
  }

  const [wallTitle, setWallTitle] = useState("Hide My Wall")
  const [inputVisibiliy, setInputVisibility] = useState(true)
  const handleInput = () =>{
    setInputVisibility(!inputVisibiliy)
    if(wallTitle === 'Show My Wall')
      setWallTitle('Hide My Wall')
    else
      setWallTitle('Show My Wall')

    setErrMsg('')
  }

  //default background image
  const [bgStyle, setBgStyle] = useState(require('../assets/imgs/wall111.png'))
  
  return(
    <View style={styles.container}>
        <Button 
          onPress={handleInput}
          title={wallTitle}
          color="#42435b"
        />
        {inputVisibiliy ? 
         <Animatable.View 
          style={styles.inputBox} 
          easing="ease-in-out-quad"
          animation="slideInDown" 
          iterationCount={1} 
          direction="alternate">
        <ImageBackground source={bgStyle} style={styles.image}>
         <TextInput
            value={input}
            style={styles.postInput}
            onChangeText={text=> setInput(text)}
            multiline={true}
            numberOfLines={4}
            maxLength={500}
            selectionColor="orange"
            placeholderTextColor="#42435b"
            placeholder="Write On the Wall..."
            underlineColorAndroid='transparent'
         />
         </ImageBackground>
         <View style={styles.subBox}>
          <Text style={styles.err}>{errMsg}</Text> 

          <TouchableOpacity 
            onPress={() => setBgStyle(require('../assets/imgs/wall111.png'))}>
            <Image style={styles.logo} source={require("../assets/imgs/wall111.png")} />
          </TouchableOpacity>

          {/* <TouchableOpacity onPress={() => setBgStyle(require('../assets/imgs/wall01.jpg'))}>
            <Image style={styles.logo} source={require("../assets/imgs/wall01.jpg")} />
          </TouchableOpacity> */}

          <TouchableOpacity 
            onPress={() => setBgStyle(require('../assets/imgs/wall03.jpg'))}>
            <Image style={styles.logo} source={require("../assets/imgs/wall03.jpg")} />
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => setBgStyle(require('../assets/imgs/wall333.jpg'))}>
            <Image style={styles.logo} source={require("../assets/imgs/wall333.jpg")} />             
          </TouchableOpacity>

            <Icon
              style={styles.send}
              reverse
              name='send'
              type='font-awesome'
              size={27}
              color='#42435b'
              onPress={handleSubmit}/>
              </View>
         </Animatable.View>
         : null
        }
        
        {/* TODO: possible loading command */}

        <AllPosts posts={posts} deleteButton={false}/>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop: 0,
      backgroundColor: "#d3d3d3",
    },
    image: {
      flex: 0,
      resizeMode:'cover',
      justifyContent: "center",
      margin: 7
    },
    postInput: {
      textAlignVertical:'top',
      fontSize: 24,
      borderColor:'#42435b',
      borderWidth:1,
      margin:0,
      fontFamily: "Outrun future",
    },
    inputBox:{
      flex:0,
      backgroundColor: "#d3d3d3",
      textAlign:"center",
      padding:5
    },
    subBox:{
      flex:0,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'flex-end',
      height:9,
      marginRight:10
    },
    err:{
      color:'red',
      textAlign:'center',
      marginLeft:10
    },
    logo:{
      width:40,
      height:30,
      borderColor:'black',
      borderWidth:1,
      borderRadius:3
    }
  });

export default wall;