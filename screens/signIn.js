import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Button,

} from "react-native";
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

import IconsFontAwesome from 'react-native-vector-icons/FontAwesome'

import IconsAntDesign from 'react-native-vector-icons/AntDesign'

import auth from '@react-native-firebase/auth'

import IntlPhoneInput from 'react-native-intl-phone-input';


const signIn = () => {

  const [isFocused, setIsFocused] = useState(false)
  const [signInPhone, setSignInPhone] = useState("")
  const [confirm, setConfirm] = useState(null)
  const [code, setCode] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();


  // Handle user state changes

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);



  const handleFocus = () => {

    setIsFocused(true)

  }

  const handleBlur = () => {

    setIsFocused(false)


  }

  const handleSignIn = async () => {

    const confirmation = await auth().signInWithPhoneNumber(signInPhone);
    setConfirm(confirmation);

  }

  const handleConfirmCode = () => {

    //Checking the length of the code

    if (code.length == 6) {
      confirm
        .confirm(code)
        .then(user => {
          alert(`Verified! ${user.uid}`)
        })
        .catch(error => {
          alert(error.message)
          console.log(error)
        })
    } else {
      alert('Please enter a 6 digit OTP code.')
    }


  }

  const handleContryCode = (phoneDetails) => {

    const fullNumber = phoneDetails.dialCode + phoneDetails.phoneNumber;

    setSignInPhone(fullNumber)

  }

  const handleSignOut = () => {

    auth().signOut()
    setUser(null)

  }


  if (initializing) {

    return null

  } else {

    return (
      <View style={styles.screen}>
        {user ? (
          <View style={styles.signOutButtonTopContainer}>
            <TouchableOpacity style={styles.signOutButtonContainer} onPress={handleSignOut}>

              <IconsAntDesign name="logout" size={25} color="white" style={styles.signOutIcon} />

            </TouchableOpacity>
          </View>
        ) : (
            <View style={styles.imgContainer}>
              <Image style={styles.logo} source={require("../assets/imgs/wall.png")} />
            </View>
          )}

        {user ? (
          <View>
            <Text>Welcome {user.phoneNumber} </Text>
          </View>

        ) : (

            <>

              {confirm ? (

                //Confirm code view

                <View style={styles.confirmCodeView}>
                  <TextInput
                    style={styles.codeInput}
                    selectionColor="#e89328"
                    underlineColorAndroid={
                      isFocused ? "#e89328" : "gray"
                    }
                    placeholder="Please enter verification code"
                    keyboardType="phone-pad"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChangeText={text => setCode(text)}
                    value={code}
                  />

                  <TouchableOpacity style={styles.codeButtonContainer} onPress={handleConfirmCode}>

                    <Text style={styles.confirmButton}>Confirm Code</Text>


                  </TouchableOpacity>



                </View>

              ) : (
                  //Phone signin view

                  <>
                    <View style={styles.phoneInputContainer}>
                      <IconsFontAwesome name="mobile-phone" size={35} color="gray" style={styles.signInIcon} />
                      <View style={styles.intlPhoneSafeViewContainer}>
                        <IntlPhoneInput
                          containerStyle={styles.intlPhoneContainer}
                          dialCodeTextStyle={styles.dialCode}
                          defaultCountry="IL"
                          lang="EN"
                          onChangeText={handleContryCode}
                          filterText="Please choose your country"
                        />
                      </View>
                    </View>

                    <View style={styles.signInTopContainer}>

                      <TouchableOpacity style={styles.signInButtonContainer} onPress={handleSignIn}>

                        <Text style={styles.signInButton}>Sign in</Text>


                      </TouchableOpacity>
                    </View>


                  </>


                )}
            </>
          )}
      </View>

    )

  };
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    paddingTop:70
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
  },

  logo: {
    width: 180,
    height: 180,
    borderRadius: 50,
  },

  phoneInputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

  },

  signInTopContainer: {
    justifyContent: "center",
    alignItems: "center",

  },

  signInButtonContainer: {
    backgroundColor: "#e89328",
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    width: 200,
    marginTop: 25,
  },

  signInButton: {

    alignSelf: "center",
    color: "white"
  },

  intlPhoneSafeViewContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 200

  },

  intlPhoneContainer: {
    backgroundColor: "#d3d3d3",

  },

  dialCode: {

    marginLeft: 5,
  },

  confirmCodeView: {
    justifyContent: "center",
    alignItems: "center",
  },

  codeInput: {
    height: 40,
    paddingLeft: 6,
    width: 250
  },

  codeButtonContainer: {
    backgroundColor: "#e89328",
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    width: 200,
    marginTop: 25,

  },

  confirmButton: {
    alignSelf: "center",
    color: "white"
  },

  signOutButtonTopContainer: {

    alignItems: "flex-end",
    justifyContent: "center",


  },

  signOutButtonContainer: {

    backgroundColor: "red",
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    width: 45,
    marginTop: 25,
    marginRight: 5,


  },

  signOutIcon: {

    alignSelf: "center",

  }

});
export default signIn;



