import React, { useState, useEffect, useContext } from "react";
import styles from "../styles.js";
import { Text, View, Button, Image } from "react-native";

export default function JournalScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Journal Screen</Text>
      <Button title="My Calendar" onPress={() => navigation.navigate("Calendar")}/>
    </View>
  );
}
