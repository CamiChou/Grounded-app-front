import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/styles.js";
import {
    Platform,
    TouchableOpacity,
    Pressable,
    Text,
    View,
    Button,
    Image,
    Alert,
  } from "react-native";
  import { Icon } from "react-native-elements";
  import Modal from "react-native-modal";
  import ProfileStyles from "../styles/ProfileStyles";
  import { AuthContext } from "../navigation/AuthProvider.js";
  import { changeProfilePic } from "../firebase/firebaseFunctions.js";
export default function EditAvatarScreen({ route, navigation }) {
    const { userDetails } = route.params; 
    const [modalVisible, setModalVisible] = useState(false);
    const [newProfile, setNewProfile] = useState(null);

    var avatarSelected = false;

    const { user, logout } = useContext(AuthContext);

  const profilePics = {
    "../assets/avatars/avatar1.png": require("../assets/avatars/avatar1.png"),
    "../assets/avatars/avatar2.png": require("../assets/avatars/avatar2.png"),
    "../assets/avatars/avatar3.png": require("../assets/avatars/avatar3.png"),
    "../assets/avatars/avatar4.png": require("../assets/avatars/avatar4.png"),
    "../assets/avatars/avatar5.png": require("../assets/avatars/avatar5.png"),
    "../assets/avatars/avatar6.png": require("../assets/avatars/avatar6.png"),
    "../assets/avatars/avatar7.png": require("../assets/avatars/avatar7.png"),
    "../assets/avatars/avatar8.png": require("../assets/avatars/avatar8.png"),
    "../assets/avatars/avatar9.png": require("../assets/avatars/avatar9.png"),
  };

  const backgroundColors = {
    "../assets/avatars/avatar1.png": '#E0C3BB',
    "../assets/avatars/avatar2.png": '#E15A70',
    "../assets/avatars/avatar3.png": '#91353A',
    "../assets/avatars/avatar4.png": '#484968',
    "../assets/avatars/avatar5.png": '#005E59',
    "../assets/avatars/avatar6.png": '#4993C2',
    "../assets/avatars/avatar7.png": '#C67804',
    "../assets/avatars/avatar8.png": '#32591F',
    "../assets/avatars/avatar9.png": '#A38390',
  };

  const defaultProfilePic = {
    uri: "https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png",
  };
 const changeProfile = () => {
     userDetails.profilePic = newProfile;
 };
  return (
    <View
      style={{    flex: 1,
        backgroundColor: userDetails ? backgroundColors[userDetails.profilePic] : 'black',
        alignItems: "center",
        justifyContent: "center",}}
    >
                      <TouchableOpacity
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "4%",
                }}
                onPress={() => {
                  navigation.navigate("Journal");
                }}
              >
                <Icon name="close" color="white" />
              </TouchableOpacity>
    <TouchableOpacity  onPress={() => {
                  setModalVisible(true);
    }}>
      <Text style={{
                      display: modalVisible ? 'none' : 'flex',

          color: 'white',
          fontSize: 18,
          fontWeight: 'bold',
          paddingBottom: 20,
      }}>Choose New Avatar</Text>
    </TouchableOpacity>
    <Image
        source={
            userDetails ? profilePics[userDetails.profilePic] : defaultProfilePic
          }
        style={{
            display: modalVisible ? 'none' : 'flex',
          height: 290,
          width: 290,
        }} resizeMode="contain"
      ></Image>



      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={ProfileStyles.centeredView}>
          <View style={{    margin: 20,
    backgroundColor: "F5F8E8",
    borderRadius: 40,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    height: 360,
    width: 350,
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,}}>
            <View style={{    flex: 1,
    alignItems: "center",
    paddingTop: 0, bottom: 50, left: 94}}>
        {/* row 1 */}
        <View style={styles.avatargrid}>
          <View>
            <TouchableOpacity
              onPress={() => {
                user.updateProfile({
                  photoURL: "../assets/avatars/avatar1png",
                });
                changeProfilePic(user.uid, "../assets/avatars/avatar1.png");
                avatarSelected = true;
              }}
            >
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar1.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                user.updateProfile({
                  photoURL: "../assets/avatars/avatar4.png",
                });
                changeProfilePic(user.uid, "../assets/avatars/avatar4.png");
                avatarSelected = true;
              }}
            >
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar4.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                user.updateProfile({
                  photoURL: "../assets/avatars/avatar7.png",
                });
                changeProfilePic(user.uid, "../assets/avatars/avatar7.png");
                avatarSelected = true;
              }}
            >
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar7.png")}
              />
            </TouchableOpacity>
          </View>
          {/* row 2 */}
          <View>
            <TouchableOpacity
              onPress={() => {
                user.updateProfile({
                  photoURL: "../assets/avatars/avatar2.png",
                });
                changeProfilePic(user.uid, "../assets/avatars/avatar2.png");
                avatarSelected = true;
              }}
            >
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar2.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                user.updateProfile({
                  photoURL: "../assets/avatars/avatar5.png",
                });
                changeProfilePic(user.uid, "../assets/avatars/avatar5.png");
                avatarSelected = true;
              }}
            >
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar5.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                user.updateProfile({
                  photoURL: "../assets/avatars/avatar8.png",
                });
                changeProfilePic(user.uid, "../assets/avatars/avatar8.png");
                avatarSelected = true;
              }}
            >
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar8.png")}
              />
            </TouchableOpacity>
          </View>
          {/* row 3  */}
          <View>
            <TouchableOpacity
              onPress={() => {
                user.updateProfile({
                  photoURL: "../assets/avatars/avatar3.png",
                });
                changeProfilePic(user.uid, "../assets/avatars/avatar3.png");
                avatarSelected = true;
              }}
            >
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar3.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                user.updateProfile({
                  photoURL: "../assets/avatars/avatar6.png",
                });
                changeProfilePic(user.uid, "../assets/avatars/avatar6.png");
                avatarSelected = true;
              }}
            >
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar6.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                user.updateProfile({
                  photoURL: "../assets/avatars/avatar9.png",
                });
                changeProfilePic(user.uid, "../assets/avatars/avatar9.png");
                avatarSelected = true;
              }}
            >
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar9.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
