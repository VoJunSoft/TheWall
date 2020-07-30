import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  TextInput,
  Button,
  Image
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
      id:'1',
      userid: '12345', 
      body: 'My first writting on the wall',
      date: Date(),
      postBg: require('../assets/imgs/wall00.png')
    },{
      id:'6',
      userid: '12347', 
      body: 'Bricks Bricks Bricks, Stick with STicks However then never end up left or right',
      date: Date(),
      postBg: require('../assets/imgs/wall02.jpg')
    },{
      id:'2',
      userid: '12347', 
      body: 'My first writting on the wall',
      date: Date(),
      postBg: require('../assets/imgs/wall04.jpg') 
    },{
      id:'3',
      userid: '12347', 
      body: 'My first writting on the wall',
      date: Date(),
      postBg: require('../assets/imgs/wall00.png')
    },{
      id:'4',
      userid: '12349', 
      body: 'My first writting on the wall',
      date: Date(),
      postBg: require('../assets/imgs/wall04.jpg') 
    },{
      id:'5',
      userid: '12342', 
      body: 'My first writting on the wall',
      date: Date(),
      postBg: require('../assets/imgs/wall04.jpg')  
    }
  ])

  const [errMsg, setErrMsg]= useState('')
  const handleSubmit = () => {
    if(input.length<=12){
      setErrMsg("Your post is too short")
      return
    }
    //Add Input to posts state
    //TODO: replace userid with user name and get rid of id as it gets automatically generated in firbase
    setPosts((prevState) => {
    return [
      ...prevState,
      {id:'6', userid: '6', body: input, date: Date(), postBg: bgStyle}
    ]})
    setInput("")
    setInputVisibility(false)
    //TO DO: ENTER DATA TO DATABASE
  }
  const [inputVisibiliy, setInputVisibility] = useState(false)
  const handleInput = () =>{
    setInputVisibility(!inputVisibiliy)
    setErrMsg('')
  }
  const [bgStyle, setBgStyle] = useState(require('../assets/imgs/wall00.png'))

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
          <TouchableOpacity onPress={() => setBgStyle(require('../assets/imgs/wall00.png'))}>
            <Image style={styles.logo} source={require("../assets/imgs/wall00.png")} />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => setBgStyle(require('../assets/imgs/wall01.jpg'))}>
            <Image style={styles.logo} source={require("../assets/imgs/wall01.jpg")} />
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => setBgStyle(require('../assets/imgs/wall02.jpg'))}>
            <Image style={styles.logo} source={require("../assets/imgs/wall02.jpg")} />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => setBgStyle(require('../assets/imgs/wall03.jpg'))}>
            <Image style={styles.logo} source={require("../assets/imgs/wall03.jpg")} /> 
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => setBgStyle(require('../assets/imgs/wall04.jpg'))}>
            <Image style={styles.logo} source={require("../assets/imgs/wall04.jpg")} />             
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
         </View> : null
        }
        {/* <Divider style={{ backgroundColor: '#42435b' }} /> */}
        <AllPosts posts={posts} deleteButton={false} BG={bgStyle}/>
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