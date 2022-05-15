import React, { useState, useEffect, useContext } from "react";
import styles from "../styles.js";
import { Text, View, Button, Image } from "react-native";
import { logo } from "../assets/logo.png";

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
