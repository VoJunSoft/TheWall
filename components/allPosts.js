import React from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar, ImageBackground, FlatList } from 'react-native';

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
    if(hrs<=9)
       hrs = '0' + hrs
    if(mins<10)
      mins = '0' + mins
    const postTime= hrs + ':' + mins
    return postTime
  }
  
  return(
    //TODO: fix nested flastList issue/contradiction with scrollView
    <FlatList 
    data={props.posts}
    keyExtractor={item => item.id}
    renderItem={ ({item}) => (
      <View style={styles.posts}>
      <ImageBackground source={item.postBg} style={styles.image}>
       <View style={styles.postsHeader}>
        <Icon
          reverse
          name='user'
          type='font-awesome'
          size={10}
          color='#42435b'
          onPress={() => console.log('hello')} />
        <Text style={styles.user}>{item.name}</Text>
      </View>

      <Text style={styles.body}>{item.body}</Text>

      <View style={styles.dateTime}>
        <Text style={styles.date}>{handleDate(item.date)}</Text>
        <Text style={styles.date}>{handleTime(item.date)}</Text>
        { props.deleteButton ?
        <Icon
          reverse
          name='trash'
          type='font-awesome'
          size={10}
          color='red'
          onPress={() => handleDelete(item.id)} /> : null
        }
      </View>
      </ImageBackground>
    </View>
    )}
  />

  )
}


const styles = StyleSheet.create({
    image: {
      flex: 0,
      resizeMode:'repeat',
      justifyContent: "center",
      borderRadius: 1
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
      alignItems:"center",
      paddingLeft:10,
      paddingRight:10,
      fontWeight:'bold',

    },
    user:{
      fontSize: 15,
      fontWeight:'bold',
      color:'black',
      textAlign: 'left',
      textAlignVertical: 'center',
      
    },
    body:{
      fontSize: 28,
      color:'black',
      paddingLeft: 22,
      textAlign: 'left',
      fontFamily: "Outrun future",
      paddingTop: 0,
    },
    date:{
      fontSize: 15,
      color:'black',
      padding: 4,
      textAlign: 'right',
      fontWeight:'bold',
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
      fontSize: 24,
      color:'green',
      padding: 4,
      margin: 7,
      textAlign: 'center',
      backgroundColor:'lightgray',
      borderRadius: 15
    }
  });
export default allPosts;