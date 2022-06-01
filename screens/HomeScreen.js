import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../navigation/AuthProvider";
import styles from "../styles/styles.js";
import { Platform, TouchableOpacity, Pressable, Text, View, Button, Image, Alert } from "react-native";
import { addFollowing, showimage } from "../firebase/firebaseFunctions.js";
import { useIsFocused } from '@react-navigation/native'
import firebase from "firebase";
import QRCode from 'react-native-qrcode-svg';
import Modal from "react-native-modal";
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function HomeScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);
  const isFocused = useIsFocused()
  const [imageUrl, setImageUrl] = useState();
  const storageRef = firebase.storage().ref();
  const db = firebase.firestore();
  const [userData, setUserData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('Not yet scanned')

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
  // // get example photo 
  // const getImage = async () => {
  //   await storageRef.child("rK9tNZCypvS39WHieNjl5MGc5EN2/20220507T004515746Z").getDownloadURL().then(function (url) {
  //     setImageUrl(url);
  //   }).catch(function (error) {
  //     console.log(error)
  //   });
  // }
  // const getUserPost = async (user, path) => {
  //   await storageRef.child(user + "/" + path).getDownloadURL().then(function (url) {
  //     return (url);
  //   }).catch(function (error) {
  //     console.log(error)
  //   });
  // }

  useEffect(() => {
    // getImage();
    getUser();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Image style={{top: -90, width: "100%"}} source={require("../assets/ellipse.png")} ></Image>

      <View style={styles.profileImageContainer}>
        <Image style={styles.profileImage} resizeMode="contain" source={userData ? profilePics[userData.profilePic] : defaultProfilePic} />
      </View>
      
      <Text style={{bottom: 270, fontSize: 30}}>{userData ? userData.displayName : 'None'}</Text>
      
      {/* show qr code  */}
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{fontSize:15}}>Show QR</Text>
      </Pressable>

      {/* friends/following */}
      <View style={{
                  flexDirection: "row",
                  alignItems: "center", left: 10}}>
        <TouchableOpacity
                  onPress={() => { 
                      console.log("viewing friends")
                      console.log(userData ? userData.friends : "none")
                      navigation.navigate("FriendsScreen");
                  }}
              >
                  <Text style={{top: -220, fontSize: 19}}>Friends / Following</Text>
        </TouchableOpacity>
      </View>
      {/* testers */}
      <Button
        title="Test follow"
        onPress={() =>
          addFollowing(user.uid, user.uid)
        }
      />
      <Button
        title="Test camera"
        onPress={() => navigation.navigate("Camera")}
      />
      <Button title="Log Out" onPress={logout} />

      {/* modal for qr code */}
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
            {/* qr code just holds user uid for now  */}
            <QRCode 
                value={userData ? userData.uid : "none"}
                size={160}
              />
          </View>
            <Pressable
              style={[styles.button, styles.modalButtons]}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("ScannerScreen");
                }
              }
            >
              <View style={{
                  flexDirection: "row",
                  alignItems: "center",
                  left: 45,
              }}>
                <Image source={require("../assets/Camera.png")}/>
                <Text style={styles.textStyle}>    Scan QR Code</Text>

              </View>
            </Pressable>
            <Pressable
              style={[styles.button, styles.modalButtons]}
              onPress={() => console.log("share code link button pressed")}
            >
              <View style={{
                  flexDirection: "row",
                  alignItems: "center",
                  left: 40,
              }}>
                <Image source={require("../assets/Share.png")}/>
                <Text style={styles.textStyle}>  Share Code Link</Text>

              </View>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View >
  );
}