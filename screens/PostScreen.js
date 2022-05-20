import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/styles.js";
import { Text, View, Button, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import Post from "../components/Post.js";

export default function PostScreen({ navigation }) {
  const posts = [
    {
      id: 1,
      user: "John Doe",
      image: require("../assets/tempPic.jpg"),
      location: { longitude: -122.03, latitude: 37.42 },
      caption: "This is a caption",
      time: "1 hour ago",
      type: "friend",
    },
    {
      id: 2,
      user: "John Doey",
      image: require("../assets/tempPic.jpg"),
      location: { longitude: -122.03, latitude: 37.42 },
      caption: "This is a caption",
      time: "1 hour ago",
      type: "friend",
    },
    {
      id: 3,
      user: "John Doeyy",
      image: require("../assets/tempPic.jpg"),
      location: { longitude: -122.03, latitude: 37.42 },
      caption: "This is a caption",
      time: "1 hour ago",
      type: "friend",
    },
    {
      id: 4,
      user: "John Doeyy",
      image: require("../assets/tempPic.jpg"),
      location: { longitude: -122.03, latitude: 37.42 },
      caption: "This is a caption",
      time: "1 hour ago",
      type: "friend",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post data={item} />}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </SafeAreaView>
  );
}
