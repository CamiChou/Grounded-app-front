import React from "react";
import styles from "../styles/styles.js";
import { View, Image } from "react-native";

export default function LogoScreen({ navigation }) {
  return (
    <View
      style={styles.container}
      onTouchStart={() => navigation.navigate("AvatarScreen")}
    >
      <Image
        source={require("../assets/logo.png")}
        style={{
          width: "30%",
          height: "15%",
        }}
      ></Image>
    </View>
  );
}
