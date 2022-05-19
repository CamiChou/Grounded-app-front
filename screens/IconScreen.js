import React from "react";
import styles from "../styles/styles.js";
import { Text, View, Image, ImageBackground, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";

export default function IconScreen({ navigation }) {
  //Stuff you do when the page loads before it displays

  return (
    <ImageBackground source={require("../assets/background.jpeg")} style={{width: "150%", height: "120%"}} imageStyle={{opacity: 0.4, position: 'absolute', top: -50, right: 0}}>
      <View style={styles.styledContainer}>
        <Text style={styles.headline_text}>Choose your avatar</Text>
        {/* row 1 */}
        <View style={styles.avatargrid}>
          <View >
            <TouchableOpacity onPress={() => {
              alert("you clicked me");
            }}>
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar1.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              alert("you clicked me");
            }}>
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar4.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              alert("you clicked me");
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
              alert("you clicked me");
            }}>
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar2.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              alert("you clicked me");
            }}>
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar5.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              alert("you clicked me");
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
              alert("you clicked me");
            }}>
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar3.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              alert("you clicked me");
            }}>
              <Image
                style={styles.avatar}
                source={require("../assets/avatars/avatar6.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              alert("you clicked me");
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
                    navigation.navigate("CreateProfile");
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
