import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/styles.js";
import { Text, View, TouchableOpacity, Button, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import Post from "../components/Post.js";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function PostScreen({ navigation }) {
  const posts = [
    {
      id: 1,
      user: "Jason Tay",
      image: require("../assets/tempPic.jpg"),
      location: { longitude: -122.03, latitude: 37.42 },
      caption: "This is a caption",
      time: "1 hour ago",
      type: "friend",
    },
    {
      id: 2,
      user: "Rachel Nguyen",
      image: require("../assets/tempPic.jpg"),
      location: { longitude: 99.32, latitude: 37.42 },
      caption: "This is a caption",
      time: "2 hours ago",
      type: "friend",
    },
    {
      id: 3,
      user: "Cami Chou",
      image: require("../assets/tempPic.jpg"),
      location: { longitude: 101.72, latitude: 37.42 },
      caption: "This is a caption",
      time: "35 mins ago",
      type: "friend",
    },
    {
      id: 4,
      user: "Priya Shah",
      image: require("../assets/tempPic.jpg"),
      location: { longitude: 42.88, latitude: 37.42 },
      caption: "This is a caption",
      time: "1 day ago",
      type: "friend",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>        
        {/* friends / following title  */}
        <View style={{flexDirection: "row", alignItems: "center", bottom: -20}}>
            <Text style={{
              fontSize: 32, color: "#709467", right: 115, marginBottom: 10
            }}>grounded</Text>
        </View>
      <FlatList style={{bottom: -30}}
        data={posts}
        renderItem={({ item }) => <Post data={item} />}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </SafeAreaView>
  );
}
