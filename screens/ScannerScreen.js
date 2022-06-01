import React, { useState, useEffect, useContext } from "react";
import { Text, View, TouchableOpacity, Pressable, Image, Button, ImageBackground } from "react-native";
import { Camera } from "expo-camera";
import { AuthContext } from "../navigation/AuthProvider";
import { uploadCloudStorage } from "../firebase/firebaseFunctions";
import * as Location from "expo-location";
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from "../styles/styles.js";
import firebase from "firebase";
import Modal from "react-native-modal";
import { addFriend } from "../firebase/firebaseFunctions.js";

export default function CameraScreen() {
  const { user, logout } = useContext(AuthContext);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [pin, setPin] = React.useState(null); // pri Create a pin here to show current location
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')
  const db = firebase.firestore();
  const [userData, setUserData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const defaultProfilePic = { uri: 'https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png' }

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

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

    // get scanned user data
    const getScannedUser = async (data) => {
        await db.collection("users")
        .doc(data)
        .get().then((documentSnapchat) => {
            if (documentSnapchat.exists) {
            console.log('Scanned User Data', documentSnapchat.data());
            setUserData(documentSnapchat.data())
            }
        });
    }
  
  useEffect(() => {
    askForCameraPermission();
  },);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    getScannedUser(data);
    setText(userData ? userData.displayName : data)
    console.log('Type: ' + type + '\nData: ' + data)
    setModalVisible(true)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  } 

  return (
    <View style={styles.container}>    
        <View style={styles.barcodebox}>
            <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 400, width: 400 }} />
        </View>
        {/* <Pressable
              style={[styles.button, styles.addButton]}
              onPress={() => setScanned(false)}
            >
            <Text style={{color: "white", fontSize: "20", textAlign: "center"}}>{text}</Text>
        </Pressable> */}
        {scanned && <Pressable
              style={[styles.button, styles.scanButton]}
              onPress={() => setScanned(false)}
            >
            <Text style={{color: "white", fontSize: "20", textAlign: "center"}}>Scan Again</Text>

            </Pressable>
        } 
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

          <View style={styles.modalView2}>
              <View style={{
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 3
                      },
                      shadowOpacity: 0.8,
                      shadowRadius: 3.5,
              }}>
              <Image style={{
                  height: 200, 
                  width: 200,
                }} 
                  resizeMode="contain" 
                  source={userData ? profilePics[userData.profilePic] : defaultProfilePic}/>
            </View>
              <Text style={{
                top: 20,
                fontSize: 30,
                fontWeight: "bold",
                textAlign: "center"}}>
                {userData ? userData.displayName : "n/a"}
            </Text>
                <Pressable
                style={[styles.button, styles.addButton]}
                onPress={() => {
                    setModalVisible(false);
                    addFriend(user.uid, userData.uid)
                    }
                }
                >
                <Text style={{color: "white", fontSize: 24, textAlign: "center", right: 10}}>    Add Friend</Text>
                </Pressable>
            <TouchableOpacity
                style={{top: 75}}
                onPress={() => { 
                    setModalVisible(false)
                    console.log("cancelled")}}
            >
                <Text style={{fontSize: 22, color: "black", fontWeight: "bold"}}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
    )
}
