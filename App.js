import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function App() {
  const [string, setString] = React.useState("Hello World");

  async function handleClick() {
    console.log("button clicked");
    fetch("http://localhost:8000/test")
      .then((response) => (response = response.json()))
      .then((response) => {
        console.log(response.data);
        setString(response.data);
      });
  }

  return (
    <View style={styles.container}>
      <button onClick={() => handleClick()}>{string}</button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
