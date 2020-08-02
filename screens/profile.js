import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,

} from 'react-native';

import { Avatar } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import AllPosts from '../components/allPosts'
import auth from '@react-native-firebase/auth'




const profile = ({ route, navigation }) => {

  const { userData } = route.params;

  let userPhoto = userData.photoURL;

  let userDisplayName = userData.displayName;

  const [userPosts, setUserPosts] = useState([])

  const [postId, setPostId] = useState()

  //state for if data feild is currently editable or not
  const [editable, setEditable] = useState(false)
  const [userName,setUserName] = useState();
  


  useEffect(() => {
    firestore()
      .collection('posts')
      .where("userid", "==", userData.uid)
      .onSnapshot(snapshot => {
        const posts = snapshot.docs.map(post => {
          setPostId(post.id)
          return post.data()
        })
        setUserPosts(posts)
      })

  }, [userPosts])


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

  userDisplayName = userName

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
              size={70}
              title="null"
              overlayContainerStyle={{ backgroundColor: '#42435b' }}
            />
          </View>

          {userDisplayName == null ? (

            <View>

              {editable == false ? (

                <View style={styles.editNameTopContainer}>

                  <Text style={styles.userNameText}>Anonymous</Text>

                  <TouchableOpacity style={styles.editButtonContainer} onPress={handleEdit}>

                    <Text style={styles.editButton}>Edit</Text>


                  </TouchableOpacity>


                </View>



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

            <View>

            {editable == false ? (

              <View style={styles.editNameTopContainer}>

            <Text style={styles.userNameText}>{userName}</Text>

                <TouchableOpacity style={styles.editButtonContainer} onPress={handleEdit}>

                  <Text style={styles.editButton}>Edit</Text>


                </TouchableOpacity>


              </View>



            ) : (

              <View style={styles.saveNameTopContainer}>

              <TextInput style={styles.userNameTextInput} defaultValue={userDisplayName} onChangeText={handleChange}></TextInput>

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

                <Text style={styles.userNameText}>{userDisplayName}</Text>

              )}


          </View>



        )
      }

      <AllPosts postId={postId} posts={userPosts} deleteButton={true} handleDelete={handleDelete} />


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
    alignSelf : "center"

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

  userNameTextInput : {

    margin: 10,
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor : "#DDE3D8",
    width : 150,
    
  }



});
export default profile;