import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  FlatList
} from 'react-native';

import { Button, ThemeProvider, Header, Icon } from 'react-native-elements';

const allPosts = (props) => {
  //Date format
  const handleDate = (dataD) => {
    let data= new Date(dataD)
    let month = data.getMonth() + 1
    let day = data.getDate()
    let year = data.getFullYear()
    if(day<=9)
      day = '0' + day
    if(month<10)
      month = '0' + month
    const postDate = year + '-' + month + '-' + day
    return postDate
  }

  //Date format
  const handleTime = (dataD) => {
    let data= new Date(dataD)
    let hrs = data.getHours()
    let mins = data.getMinutes()
    const postTime= hrs + ':' + mins
    return postTime
  }
  return(
    //TODO: fix nested flastList issue/contradiction with scrollView
    <FlatList 
    data={props.posts}
    keyExtractor={item => item.userid}
    renderItem={ ({item}) => (
      <View style={styles.posts}>
      <ImageBackground source={require('../assets/imgs/postsbg1.png')} style={styles.image}>
       <View style={styles.postsHeader}>
        <Icon
          reverse
          name='user'
          type='font-awesome'
          size={10}
          color='#42435b'
          onPress={() => console.log('hello')} />
        <Text style={styles.user}>{item.userid}</Text>
      </View>

      <Text style={styles.body}>{item.body}</Text>

      <View style={styles.dateTime}>
        <Text style={styles.date}>{handleDate(item.date)}</Text>
        <Text style={styles.date}>{handleTime(item.date)}</Text>
      </View>
      </ImageBackground>
    </View>
    )}
  />
  
//   props.posts.map(post => 
//     <View style={styles.posts} key={post.userid}>
//       <ImageBackground source={require('../assets/imgs/postsbg1.png')} style={styles.image}>
//        <View style={styles.postsHeader}>
//         <Icon
//           reverse
//           name='user'
//           type='font-awesome'
//           size={10}
//           color='#42435b'
//           onPress={() => console.log('hello')} />
//         <Text style={styles.user}>{post.userid}</Text>
//       </View>

//       <Text style={styles.body}>{post.body}</Text>

//       <View style={styles.dateTime}>
//         <Text style={styles.date}>{handleDate(post.date)}</Text>
//         <Text style={styles.date}>{handleTime(post.date)}</Text>
//       </View>
//       </ImageBackground>
//     </View>
//   )
  )
}


const styles = StyleSheet.create({
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
    },
    postsHeader:{
      flex:1,
      flexDirection:'row',
      justifyContent: 'flex-start',
      paddingLeft:5,
      paddingRight:5,
    },
    dateTime:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      paddingLeft:10,
      paddingRight:10,

    },
    user:{
      fontSize: 12,
      color:'black',
      textAlign: 'left',
      textAlignVertical: 'center'
    },
    body:{
      fontSize: 22,
      color:'black',
      padding: 4,
      paddingLeft: 22,
      textAlign: 'left',
      fontFamily: "Good Morning"
    },
    date:{
      fontSize: 12,
      color:'black',
      padding: 4,
      textAlign: 'right',
    },
    postInput: {
      flex:1,
      fontSize: 24,
      borderColor:'#42435b',
      borderWidth:1,
      margin:10,
      fontFamily: "Outrun future",
    },
    btn:{
      width:100
    },
    posts: {
      flex:1,
      fontSize: 24,
      color:'green',
      padding: 4,
      margin: 7,
      textAlign: 'center',
      backgroundColor:'lightgray'
    }
  });
export default allPosts;