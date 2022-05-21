import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/styles.js";
import { Text, View, Image, ImageBackground, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";
import { AuthContext } from "../navigation/AuthProvider.js";
import { changeProfilePic } from "../firebase/firebaseFunctions.js";
import firebase from "firebase";

export default function IconScreen({ navigation }) {
  //Stuff you do when the page loads before it displays
  const { user, logout } = useContext(AuthContext);
  var avatarSelected = false; 
  const db = firebase.firestore();
  const storageRef = firebase.storage().ref();

  // get avatar  
    const getAvatar = async(avatar) => {
      await storageRef.child("avatar/" + avatar).getDownloadURL().then(function(url) {
        setImageUrl(url);
        }).catch(function(error) {
          console.log(error)
      });
    }
  // // get user data
  // const changeProfile = async(photo) => {
  //   await db.collection("users")
  //   .doc(user.uid)
  //   .update({
  //     profilePic: photo,
  //   });
  // }
  return (
    <ImageBackground source={require("../assets/background.jpeg")} style={{width: "150%", height: "120%"}} imageStyle={{opacity: 0.4, position: 'absolute', top: -50, right: 0}}>
      <View style={styles.styledContainer}>
        <Text style={styles.headline_text}>Choose your avatar</Text>
        {/* row 1 */}
        <View style={styles.avatargrid}>
          <View >
            <TouchableOpacity onPress={() => {
              user.updateProfile({
                photoURL: "../assets/avatars/avatar1.png",
              });
              changeProfilePic("../assets/avatars/avatar1.png");
              avatarSelected = true;
            }}>
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar1.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              user.updateProfile({
                photoURL: "../assets/avatars/avatar4.png",
              });
              changeProfilePic(user.uid, "../assets/avatars/avatar4.png");
              avatarSelected = true;

            }}>
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar4.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              user.updateProfile({
                photoURL: "../assets/avatars/avatar7.png",
              });
              changeProfilePic(user.uid, "../assets/avatars/avatar7.png");
              avatarSelected = true;

            }}>
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar7.png")}
              />
            </TouchableOpacity>
          </View>
          {/* row 2 */}
          <View>
            <TouchableOpacity onPress={() => {
              user.updateProfile({
                photoURL: "../assets/avatars/avatar2.png",
              });
              changeProfilePic(user.uid, "../assets/avatars/avatar2.png");
              avatarSelected = true;

            }}>
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar2.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              user.updateProfile({
                photoURL: "../assets/avatars/avatar5.png",
              });
              changeProfilePic(user.uid, "../assets/avatars/avatar5.png");
              avatarSelected = true;

            }}>
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar5.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              user.updateProfile({
                photoURL: "../assets/avatars/avatar8.png",
              });
              changeProfilePic(user.uid, "../assets/avatars/avatar8.png");
              avatarSelected = true;

            }}>
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar8.png")}
              />
            </TouchableOpacity>
          </View>
          {/* row 3  */}
          <View>
            <TouchableOpacity onPress={() => {
              user.updateProfile({
                photoURL: "../assets/avatars/avatar3.png",
              });
              changeProfilePic(user.uid, "../assets/avatars/avatar3.png");
              avatarSelected = true;

            }}>
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar3.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              user.updateProfile({
                photoURL: "../assets/avatars/avatar6.png",
              });
              changeProfilePic(user.uid, "../assets/avatars/avatar6.png");
              avatarSelected = true;

            }}>
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar6.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              user.updateProfile({
                photoURL: "../assets/avatars/avatar9.png",
              });
              changeProfilePic(user.uid, "../assets/avatars/avatar9.png");
              avatarSelected = true;

            }}>
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar9.png")}
              />
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.nextButton}>

        <AwesomeButtonRick onPress={() => {
          if (avatarSelected == true){
            navigation.navigate("CreateProfile");
          }
          else {
            alert('Please select an avatar');
          }
                }}
                type="anchor"
                width={150}
                backgroundColor="#E5F5EF"
                borderColor="#709467"
                backgroundShadow="#709467"
                backgroundDarker="#709467"
                textSize={20}
              >
                  Next
                  </AwesomeButtonRick>
        </View>
      </View>

    </ImageBackground>
  );
}
