import React from "react";
import styles from "../styles.js";
import { Text, View, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function IconScreen({ navigation }) {
  //Stuff you do when the page loads before it displays

  return (
    <View style={styles.background}>
      <Text style={styles.headline_text}>Choose your avatar</Text>
      <TouchableOpacity
        onPress={() => {
          alert("you clicked me");
        }}
      >
        <Image
          style={styles.avatar}
          source={{
            uri: "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          alert("you clicked me");
        }}
      >
        <Image
          style={styles.avatar}
          source={{
            uri: "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          alert("you clicked me");
        }}
      >
        <Image
          style={styles.avatar}
          source={{
            uri: "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          alert("you clicked me");
        }}
      >
        <Image
          style={styles.avatar}
          source={{
            uri: "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          alert("you clicked me");
        }}
      >
        <Image
          style={styles.avatar}
          source={{
            uri: "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          alert("you clicked me");
        }}
      >
        <Image
          style={styles.avatar}
          source={{
            uri: "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          alert("you clicked me");
        }}
      >
        <Image
          style={styles.avatar}
          source={{
            uri: "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          alert("you clicked me");
        }}
      >
        <Image
          style={styles.avatar}
          source={{
            uri: "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          alert("you clicked me");
        }}
      >
        <Image
          style={styles.avatar}
          source={{
            uri: "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("CreateProfile")}>
        <MaterialCommunityIcons
          style={styles.avatar2}
          name="arrow-right"
          size={60}
        />
      </TouchableOpacity>
    </View>
  );
}
