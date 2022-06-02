import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/styles.js";
import { Text, View, Button, Image } from "react-native";

export default function JournalScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={{top: -320, width: "100%"}} source={require("../assets/ellipse.png")} ></Image>
      <Text>Journal Screen</Text>
    </View>
  );
}
