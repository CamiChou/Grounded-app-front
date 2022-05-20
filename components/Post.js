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

export default function Post({ data }) {
  return (
    <View style={PostStyles.post}>
      <View style={PostStyles.postImage}>
        <View style={PostStyles.postHeader}>
          <View style={PostStyles.userProfile}></View>
          <View style={PostStyles.userInfo}>
            <View style={PostStyles.user}>
              <Text style={PostStyles.userName}>{data.user}</Text>
              <Text style={PostStyles.type}>{` ${data.type}`}</Text>
            </View>
            <Text style={PostStyles.userTime}>{data.time}</Text>
          </View>
          <View style={PostStyles.userLocation}></View>
        </View>
        <Image source={data.image} style={PostStyles.image} />
      </View>
      <View style={PostStyles.postMessage}>
        <Text>{data.caption}</Text>
      </View>
    </View>
  );
}
