import React, { useState, useEffect, useContext } from "react";
import styles from "../styles.js";
import { Text, View, Button, Image } from "react-native";

export default function LogoScreen({ navigation }) {
  return (
    <View
      style={styles.container}
      onTouchStart={() => navigation.navigate("AvatarScreen")}
    >
      <View
        style={{
          backgroundColor: "#0f0f0f",
          width: "30%",
          height: "15%",
        }}
      ></View>
    </View>
  );
}
