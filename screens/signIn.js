import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const signIn = () => {
  return(
    <View>
              <Text style={styles.title}>sign in</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'center',
    }

  });
export default signIn;