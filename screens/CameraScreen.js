import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Switch,
} from "react-native";
import { Camera } from "expo-camera";
import { AuthContext } from "../navigation/AuthProvider";
import { uploadCloudStorage } from "../firebase/firebaseFunctions";
import * as Location from "expo-location";
import { Icon } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { TextInput } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function CameraScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [pin, setPin] = React.useState(null); // pri Create a pin here to show current location
  const [publicPost, setPublic] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
          <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={{ flex: 1 }}
            scrollEnabled={false}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 20,
                    alignSelf: "center",
                    textAlign: "center",
                  }}
                >
                  New Post
                </Text>
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "5%",
                  }}
                >
                  <Icon
                    name="arrow-back"
                    color="black"
                    onPress={() => {
                      setPreviewVisible(false);
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: "row",
                }}
              >
                {/* TODO: Crop image */}
                <ImageBackground
                  source={{ uri: capturedImage && capturedImage.uri }}
                  resizeMode="cover"
                  style={{
                    flex: 3,
                  }}
                />
                <View
                  style={{
                    flex: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 12, marginTop: 10 }}>
                      Who can see this post?
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Picker
                      selectedValue={publicPost}
                      onValueChange={(itemValue) => setPublic(itemValue)}
                      style={{ height: "100%", width: 150, marginBottom: 260 }}
                    >
                      <Picker.Item label="Only Me" value="false" />
                      <Picker.Item label="Public" value="true" />
                    </Picker>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    width: "90%",
                    borderBottomColor: "grey",
                    borderBottomWidth: 1,
                    justifyContent: "center",
                    alignItems: "right",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "right",
                    }}
                  >
                    <Switch
                      style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
                      trackColor={{ false: "#767577", true: "#9CC991" }}
                      thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                    />
                  </View>
                  <View
                    style={{
                      flex: 5,
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "right",
                    }}
                  >
                    <Text>Add Location</Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 4,
                    width: "100%",
                    flexDirection: "column",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TextInput
                      style={{
                        color: "black",
                        width: "90%",
                        height: "100%",
                        textAlignVertical: "top",
                        padding: 10,
                      }}
                      placeholder="Caption:"
                      placeholderTextColor="black"
                      numberOfLines={5}
                      multiline
                    ></TextInput>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        marginTop: 30,
                        backgroundColor: "#9CC991",
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 20,
                        paddingRight: 20,
                        borderRadius: 20,
                      }}
                    >
                      <Text>Share</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </KeyboardAwareScrollView>
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
                onPress={() => {
                  navigation.navigate("Home");
                }}
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
                  <Icon name="flash-on" color="white" />
                ) : (
                  <Icon name="flash-off" color="white" />
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
                      width: 90,
                      height: 90,
                      borderRadius: 50,
                      backgroundColor: "#fff",
                    }}
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 50,
                      }}
                      source={require("../assets/logo.png")}
                      resizeMode="contain"
                    />
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
