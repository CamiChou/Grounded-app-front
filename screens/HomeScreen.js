import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../navigation/AuthProvider";
import styles from "../styles/styles.js";
import { Modal, Platform, Pressable, Text, View, Button, Image } from "react-native";
import { addFollowing, showimage } from "../firebase/firebaseFunctions.js";
import { useIsFocused } from '@react-navigation/native'
import firebase from "firebase";
import QRCode from 'react-native-qrcode-svg';

export default function HomeScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);
  const isFocused = useIsFocused()
  const [imageUrl, setImageUrl] = useState();
  const storageRef = firebase.storage().ref();
  const db = firebase.firestore();
  const [userData, setUserData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

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
  }

  const defaultProfilePic = { uri: 'https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png' }

  // get user data
  const getUser = async () => {
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
  const getImage = async () => {
    await storageRef.child("rK9tNZCypvS39WHieNjl5MGc5EN2/20220507T004515746Z").getDownloadURL().then(function (url) {
      setImageUrl(url);
    }).catch(function (error) {
      console.log(error)
    });
  }
  const getUserPost = async (user, path) => {
    await storageRef.child(user + "/" + path).getDownloadURL().then(function (url) {
      return (url);
    }).catch(function (error) {
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
      <View style={styles.profileImageContainer}>
        <Image style={styles.profileImage} resizeMode="contain" source={userData ? profilePics[userData.profilePic] : defaultProfilePic} />
      </View>
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
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.modalText}>My QR Code</Text>
          <Image
                source={require("../assets/codeFrame.png")}
          />
          <View style={styles.QRcode}>
            <QRCode 
                value={userData ? userData.uid : "none"}
                size={197}
              />
          </View>
            <Pressable
              style={[styles.button, styles.modalButtons]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Scan QR Code</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.modalButtons]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Share Code Link</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View >
  );
}