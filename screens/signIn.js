import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const signIn = () => {
  return(
    <View>
              <Text style={styles.title}>The Wall</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.red,
      fontSize: 100,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'center',
    }

  });
export default signIn;