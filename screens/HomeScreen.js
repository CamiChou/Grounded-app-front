import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../navigation/AuthProvider";
import styles from "../styles/styles.js";
import { Text, View, Button, Image } from "react-native";
import { addFollowing, showimage } from "../firebase/firebaseFunctions.js";
import { useIsFocused } from '@react-navigation/native'
import firebase from "firebase";

export default function HomeScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);
  const isFocused = useIsFocused()
  const [imageUrl, setImageUrl] = useState();
  const storageRef = firebase.storage().ref();
  const db = firebase.firestore();
  const [userData, setUserData] = useState(null);

  // get user data
  const getUser = async() => {
    await db.collection("users")
    .doc(user.uid)
    .get().then((documentSnapchat) => {
      if (documentSnapchat.exists) {
        console.log('User Data', documentSnapchat.data());
        setUserData(documentSnapchat.data())
      }
    });
  }
  // get example photo 
  const getImage = async() => {
    await storageRef.child("rK9tNZCypvS39WHieNjl5MGc5EN2/20220507T004515746Z").getDownloadURL().then(function(url) {
      setImageUrl(url);
      }).catch(function(error) {
        console.log(error)
    });
  }
  const getUserPost = async(user, path) => {
    await storageRef.child(user + "/" + path).getDownloadURL().then(function(url) {
      return(url);
      }).catch(function(error) {
        console.log(error)
    });
  }

  useEffect(() => {
    // getImage();
    getUser();

  }, [isFocused]);
  return (
    <View style={styles.container}>
      <Text>Welcome {userData ? userData.displayName : 'None'}</Text>
      <Image style={styles.profileImage} source={{uri: userData ? userData.profilePic : 'https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png'}}/>
      <Button
        title="Follow"
        onPress={() => 
          addFollowing(user.uid, user.uid)
        }
      />
      <Button
        title="Test camera"
        onPress={() => navigation.navigate("Camera")}
      />
      <Button title="Log Out" onPress={logout} />

    <Button title="view Image" id="viewbtn"  onPress={() => showimage('rK9tNZCypvS39WHieNjl5MGc5EN2')}/>
    </View>
  );
}
