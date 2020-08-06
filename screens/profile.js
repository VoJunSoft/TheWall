import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput } from 'react-native'
import admob, { MaxAdContentRating, BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import { Avatar } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import AllPosts from '../components/allPosts'
import auth from '@react-native-firebase/auth'




const profile = ({ route, navigation }) => {
  //const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-4556757412228601/4456863648';
  const adUnitId = 'ca-app-pub-4556757412228601/4456863648';
  const { userData } = route.params;

  let userPhoto = userData.photoURL;

  let userDisplayName = userData.displayName;

  const [userPosts, setUserPosts] = useState([])

  //state for if data feild is currently editable or not
  const [editable, setEditable] = useState(false)
  const [userName, setUserName] = useState(userDisplayName);
  const [havePosts, setHavePosts] = useState(false)

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

  useEffect(() => {
    firestore()
      .collection('posts')
      .where("userid", "==", userData.uid)
      .onSnapshot(snapshot => {
        if (snapshot.empty) {
          setHavePosts(false);
        } else {
          setHavePosts(true);
          const posts = snapshot.docs.map(post => {
            //Add post id to the data object so that we can extract postID later on in the allposts component
            Object.assign(post.data(), {postID: post.id})
            return post.data()
          })
          setUserPosts(posts)
        }

      })

  }, [])


  const handleDelete = (postID) => {

    firestore().collection('posts').doc(postID).delete()

  }

  const handleEdit = () => {

    setEditable(true)

  }

  const handleChange = (val) => {

    setUserName(val)

  }

  const handleSave = () => {

    auth().currentUser.updateProfile({

      displayName: userName
    })

    setEditable(false)
  }

  return (
    //User without photo view
    <View>
      {userPhoto == null ? (

        <View style={styles.nonUserPhotoContainer}>

          <View style={styles.avatarContainer}>
            <Avatar
              rounded
              size={90}
              title="null"
              overlayContainerStyle={{ backgroundColor: '#42435b' }}
            />
          </View>

          {/* User without name view */}

          {userDisplayName == null ? (

            <View>

              {/* User without name & Non Editable inputs view */}

              {editable == false ? (

                <View style={styles.editNameTopContainer}>

                  <Text style={styles.userNameText}>Anonymous</Text>

                  <TouchableOpacity style={styles.editButtonContainer} onPress={handleEdit}>

                    <Text style={styles.editButton}>Edit</Text>


                  </TouchableOpacity>


                </View>

                //* User without name & Editable inputs view *//


              ) : (

                  <View style={styles.saveNameTopContainer}>

                    <TextInput style={styles.userNameTextInput} placeholder="Anonymous" onChangeText={handleChange}></TextInput>

                    <TouchableOpacity style={styles.saveButtonContainer} onPress={handleSave}>

                      <Text style={styles.saveButton}>Save</Text>


                    </TouchableOpacity>


                  </View>


                )}

            </View>

          ) : (

              //* User with name & Non Editable inputs view *//

              < View >

                {editable == false ? (

                  <View style={styles.editNameTopContainer}>

                    <Text style={styles.userNameText}>{userName}</Text>

                    <TouchableOpacity style={styles.editButtonContainer} onPress={handleEdit}>

                      <Text style={styles.editButton}>Edit</Text>


                    </TouchableOpacity>


                  </View>

                  //* User with name & Editable inputs view *//

                ) : (

                    <View style={styles.saveNameTopContainer}>

                      <TextInput style={styles.userNameTextInput} defaultValue={userName} onChangeText={handleChange}></TextInput>

                      <TouchableOpacity style={styles.saveButtonContainer} onPress={handleSave}>

                        <Text style={styles.saveButton}>Save</Text>


                      </TouchableOpacity>


                    </View>


                  )}

              </View>

            )}


        </View>

        //User with photo view

      ) : (

          <View style={styles.avatarContainer}>
            <Avatar
              rounded
              overlayContainerStyle={{ backgroundColor: '#d3d3d3' }}
              containerStyle={{ height: 100, width: 120 }}
              source={{
                uri:
                  userPhoto,
              }}
            />

            {userDisplayName == null ? (

              <Text style={styles.userNameText}>Anonymous</Text>


            ) : (

                <Text style={styles.userNameText}>{userName}</Text>

              )}


          </View>



        )
      }


      {/*User having posts view */}

      {havePosts ? (

        <AllPosts posts={userPosts} deleteButton={true} handleDelete={handleDelete} />


      ) : (

        //User having no posts view // 

        <Text style={styles.noPostText}>Start writing on the wall . You dont have any post yet</Text>

   )}





        <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.FULL_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />

      {/* This will display all posts in your state with the delete Button
            TODO complete handleDelete using posts.filter
            <AllPosts posts={posts} deleteButton={true} handleDelete={handleDelete}/> */}
    </View >

  )
}

const styles = StyleSheet.create({

  nonUserPhotoContainer: {

    margin: 15,

  },

  avatarContainer: {

    justifyContent: "center",
    alignItems: "center",
    margin: 15,
  },

  userNameText: {

    margin: 10,
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center"

  },

  editNameTopContainer: {
    alignItems: "center"
  },

  editButtonContainer: {
    backgroundColor: "#e89328",
    elevation: 8,
    borderRadius: 10,
    width: 150,
    paddingTop: 5,
    marginTop: 5,
    height: 30

  },

  editButton: {
    alignSelf: "center",
    color: "white"
  },

  saveNameTopContainer: {
    alignItems: "center"
  },

  saveButtonContainer: {
    backgroundColor: "red",
    elevation: 8,
    borderRadius: 10,
    width: 150,
    paddingTop: 5,
    marginTop: 5,
    height: 30

  },

  saveButton: {
    alignSelf: "center",
    color: "white"
  },

  userNameTextInput: {

    margin: 10,
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "#DDE3D8",
    width: 150,

  },

  noPostText : {

    alignSelf: "center",
    color: "black"
  }



});
export default profile;