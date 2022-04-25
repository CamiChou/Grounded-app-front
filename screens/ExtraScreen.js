import React from "react";
import styles from "../styles.js";
import { Text, View, Button } from "react-native";

export default function ExtraScreen() {
  const [string, setString] = React.useState("Hello World");

  async function handleClick() {
    console.log("button clicked");
    fetch("http://128.97.250.43:8000/api/test/something")
      .then((response) => (response = response.json()))
      .then((response) => {
        console.log(response.data);
        setString(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text>An Extra Screen!</Text>
      <Button
        title={string}
        onPress={() => {
          handleClick();
        }}
      ></Button>
    </View>
  );
}
