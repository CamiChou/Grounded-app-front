import React, { useState, useEffect, useContext } from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { Camera } from "expo-camera";
import { AuthContext } from "../navigation/AuthProvider";
import { uploadCloudStorage } from "../firebase/firebaseFunctions";

export default function CameraScreen() {
  const { user, logout } = useContext(AuthContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
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
    await uploadCloudStorage(blob, user);
  }

  const takePicture = async () => {
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
                    Re-take
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
                  top: "5%",
                  left: "5%",
                }}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <Text
                  style={{ fontSize: 20, marginBottom: 10, color: "white" }}
                >
                  {" "}
                  Flip{" "}
                </Text>
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
                  />
                </View>
              </View>
            </View>
          </Camera>
        )}
      </View>
    );
  }
}
