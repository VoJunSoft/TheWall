import React, {useEffect} from 'react';
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
import AllPosts from '../components/allPosts'
import admob, { MaxAdContentRating, BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
//const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-4556757412228601/4456863648';

const profile = (props, {navigation}) => {
  //Optional code
    admob()
    .setRequestConfiguration({
      maxAdContentRating: MaxAdContentRating.PG,
      tagForChildDirectedTreatment: true,
      tagForUnderAgeOfConsent: true,
    })
    .then(() => {
      // Request config successfully set!
    })

  const handleDelete = (id) =>{
  
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>profile</Text>

   
      <BannerAd
          unitId={TestIds.BANNER}
          size={BannerAdSize.FULL_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
    </View>

  )}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 10,
    backgroundColor: "#d3d3d3",
  },
  title: {
    flex:0,
    fontFamily:'Cheeky Bite Shine - AND',
    fontSize: 37,
  }
  });
export default profile;