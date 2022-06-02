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
        {/* friends / following title  */}
        <View style={{flexDirection: "row", alignItems: "center", bottom: -20}}>
            <TouchableOpacity onPress={() => { 
                      navigation.navigate("Home");
                  }}>
                <View style={{right:100}}>
                    <MaterialCommunityIcons
                        name="arrow-left"
                        color="black"
                        size={26}
                        />
                </View>
            </TouchableOpacity>
            <Text style={{
                fontSize: 17,
                textAlign: "center",
            }}>Friends / Following</Text>
        </View>
      <FlatList style={{bottom: -30}}
        data={posts}
        renderItem={({ item }) => <Post data={item} />}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </SafeAreaView>
  );
}
