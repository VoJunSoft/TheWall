import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';
import { Divider, Icon} from 'react-native-elements';
import * as Animatable from "react-native-animatable";
import { useNavigation } from '@react-navigation/native';

const splash = () => {
  const navigation = useNavigation();
  const jumpTo = () => {
    navigation.navigate('Wall')
  }

  return(
    <View style={styles.container} >
    <Animatable.View 
        onAnimationEnd={jumpTo}
        easing="ease"
        animation="slideInDown" 
        iterationCount={3}
        direction="alternate-reverse">
        <Image style={styles.logo} source={require("../assets/imgs/wall3.png")} />
        
    </Animatable.View>
    <Divider style={styles.divider}/>
    <Text style={styles.title}>The Writings on The WALL</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#42435b",
  },
  logo: {
    flex:0,
    width: 270,
    height: 280,
    borderRadius: 20,
  },
  title:{
    color:'white',
    alignContent:'center',
    textAlign:'center'
  },
  divider :{
    backgroundColor:'white',
    width:300,
    margin: 5, 
    shadowColor:'white',
    shadowOpacity: 1,
    shadowRadius: 5,
  }
  });

export default splash;