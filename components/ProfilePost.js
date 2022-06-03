import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Button,
  Image,
} from "react-native";
import PostStyles from "../styles/PostStyles";
import { Dimensions } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Post({ data }) {
  return (

  // <View style={{    flex: 1,
  //   width: 375,
  //   height: 436,
  //   marginBottom: 10,
  //   flexDirection: "column",
  //   borderRadius: 25,
  //   backgroundColor: "#E7FFEB"}}>
  //     <Image source={data.image} style={{
  //       height:undefined,
  //       width: '100%',
  //       aspectRatio: 1,
  //       borderTopLeftRadius: 25,
  //       borderTopRightRadius: 25
  //     }}></Image>
  //     <View style={{
  //       height: 52, width: 375, position: 'relative', bottom: 375,
  //       backgroundColor: 'white', borderTopLeftRadius: 25,
  //       borderTopRightRadius: 25, opacity: 0.8
  //     }}></View>
  //     <View style={{
  //       height: 76, width: 375, position: 'relative'
  //     }}>
  //       <Text style={{
  //         fontSize: 15, position: 'relative', bottom: 50, marginVertical: 7, marginHorizontal: 15
  //         }}>{data.caption}</Text>
  //     </View>
  // </View>

<View style={{    flex: 1,
  width: 375,
  height: 340,
  marginBottom: 10,
  flexDirection: "column",
  borderRadius: 32,
  backgroundColor: "white"}}>
    <Image source={data.image} style={{
      height:267,
      width: '100%',
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32
    }}></Image>

    <View style={{
      height: 76, width: 375, position: 'relative'
    }}>
      <Text style={{
        fontSize: 18, position: 'relative', bottom: 0, marginVertical: 7, marginHorizontal: 15
        }}>{data.caption}</Text>
    </View>
</View>

  );
}
