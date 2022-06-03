import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/styles.js";
import { Text, View, TouchableOpacity, Button, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import Post from "../components/Post.js";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Inika_400Regular,
} from '@expo-google-fonts/inika'
import {
  Inter_400Regular,
} from '@expo-google-fonts/inter'
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading'


export default function PostScreen({ navigation }) {

  const [loaded] = useFonts({
    inter: Inter_400Regular,
    inika: Inika_400Regular
});

if (!loaded) {
  return <AppLoading/>
}
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
        {/* friends / following title  */}
        <View style={{flexDirection: "row", alignItems: "center", bottom: -20}}>
            <Text style={{
              fontSize: 32, color: "#709467", right: 115, marginBottom: 10, fontFamily: "inika",
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
