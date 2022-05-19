import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../navigation/AuthProvider";
import styles from "../styles/styles.js";
import { Text, View, Button, Image } from "react-native";
import { addFollowing, showimage } from "../firebase/firebaseFunctions.js";
import { useIsFocused } from '@react-navigation/native'
import firebase from "firebase";
// import 'firebase/storage'; 

export default function HomeScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const isFocused = useIsFocused()
  const [imageUrl, setImageUrl] = useState();
  const storageRef = firebase.storage().ref();

  useEffect(() => {
    setUserName(user.displayName);
    setProfilePic(user.photoURL);
    const getImage = async() => {
      await storageRef.child("rK9tNZCypvS39WHieNjl5MGc5EN2/20220507T004515746Z").getDownloadURL().then(function(url) {
        setImageUrl(url);
        }).catch(function(error) {
          console.log(error)
      });
    }
    getImage();

    // for any post
    const getUserPost = async(user, path) => {
      await storageRef.child(user + "/" + path).getDownloadURL().then(function(url) {
        return(url);
        }).catch(function(error) {
          console.log(error)
      });
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text>Welcome {userName}</Text>
      <Image style={styles.profileImage} source={{ uri: imageUrl }} />
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
