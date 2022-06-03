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
      user: "vivi",
      image: require("../assets/posts/post1.png"),
      location: { longitude: -122.03, latitude: 37.42 },
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis orci, tristique vitae rutrum nec, dapibus ut sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis orci, tristique vitae rutrum nec, dapibus ut sapien Donec felis orci, tristique vitae rutrum nec, dapibus ut sapien.",
      time: "2h ago",
      type: "Friend",
      pfp: require("../assets/avatars/avatar1.png"),
    },
    {
      id: 2,
      user: "jonohansen",
      image: require("../assets/posts/post2.png"),
      location: { longitude: -122.03, latitude: 37.42 },
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis orci, tristique vitae rutrum nec, dapibus ut sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis orci, tristique vitae rutrum nec, dapibus ut sapien Donec felis orci, tristique vitae rutrum nec, dapibus ut sapien.",
      time: "3h ago",
      type: "Following",
      pfp: require("../assets/avatars/avatar5.png"),
    },
    {
      id: 3,
      user: "John Doeyy",
      image: require("../assets/posts/post3.png"),
      location: { longitude: -122.03, latitude: 37.42 },
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      time: "13h ago",
      type: "Friend",
      pfp: require("../assets/avatars/avatar6.png"),
    },
    {
      id: 4,
      user: "John Doeyy",
      image: require("../assets/posts/post4.png"),
      location: { longitude: -122.03, latitude: 37.42 },
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      time: "17h ago",
      type: "Friend",
      pfp: require("../assets/avatars/avatar7.png"),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        { }
            <View>
                <Text style={styles.headerText}>Grounded</Text>
            </View>
        </View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post data={item} />}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </SafeAreaView>
  );
}
