import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from "react-native";
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

const signIn = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.imgContainer}>
        <Image style={styles.logo} source={require("../design/wall.png")} />
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.header}>Login</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#d3d3d3",
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },

  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },

  header: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
export default signIn;
