import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import { AuthContext } from "../navigation/AuthProvider";
import { uploadCloudStorage } from "../firebase/firebaseFunctions";
import * as Location from "expo-location";
import { Icon } from "react-native-elements";

export default function CameraScreen() {
  const { user, logout } = useContext(AuthContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [pin, setPin] = React.useState(null); // pri Create a pin here to show current location

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location.coords);

      setPin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      }); // End of the additional code but there is additional code in the style sheet for the gold pin on lines 127-132
    })();
  }, []);

  async function uploadImageAsync(uri) {
    console.log(uri, user.uid);
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    // const ref = fireStorage.ref().child(new Date().toISOString());
    // const snapshot = await ref.put(blob);
    // blob.close();
    //here
    await uploadCloudStorage(blob, user, pin);
  }

  const takePicture = async () => {
    console.log(await camera.getAvailablePictureSizesAsync());
    if (!camera) return;
    let photo = await camera.takePictureAsync();
    setPreviewVisible(true);
    setCapturedImage(photo);
  };

  if (hasPermission === null) {
    return <View />;
  } else if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  } else {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        {previewVisible ? (
          <ImageBackground
            source={{ uri: capturedImage && capturedImage.uri }}
            style={{
              flex: 1,
            }}
          >

            <TouchableOpacity
              style={{
                color: "#fff",
                fontSize: 20,
                width: 350,
                height: 350,
                borderColor: "#fff",
                borderWidth: 2,
                marginTop: 200,
                marginLeft: 20,
              }}
            />
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                padding: 15,
                justifyContent: "flex-end",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  onPress={() => setPreviewVisible(false)}
                  style={{
                    width: 130,
                    height: 40,
                    alignItems: "center",
                    borderRadius: 4,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 20,
                    }}
                  >
                    Retake
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => uploadImageAsync(capturedImage.uri)}
                  style={{
                    width: 130,
                    height: 40,
                    alignItems: "center",
                    borderRadius: 4,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 20,
                    }}
                  >
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        ) : (
          <Camera
            style={{ flex: 1 }}
            flashMode={flash}
            type={type}
            ref={(r) => {
              camera = r;
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "4%",
                }}
                onPress={() => { }}
              >
                <Icon name="close" color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "15%",
                }}
                onPress={() => {
                  setFlash(
                    flash === Camera.Constants.FlashMode.on
                      ? Camera.Constants.FlashMode.off
                      : Camera.Constants.FlashMode.on
                  );
                }}
              >
                {flash === Camera.Constants.FlashMode.on ? (
                  <Icon name="flash-on" color="yellow" />
                ) : (
                  <Icon name="flash-off" color="yellow" />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "27%",
                }}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <Icon name="flip-camera-ios" color="white" />
              </TouchableOpacity>
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  flexDirection: "row",
                  flex: 1,
                  width: "100%",
                  padding: 20,
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    alignSelf: "center",
                    flex: 1,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={takePicture}
                    style={{
                      width: 70,
                      height: 70,
                      bottom: 0,
                      borderRadius: 50,
                      backgroundColor: "#fff",
                    }}
                  >
                    <Image style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 50,
                    }} source={require("../assets/logo.png")} resizeMode="contain" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Camera>
        )}
      </View>
    );
  }
}
