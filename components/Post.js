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
import ReadMore from 'react-native-read-more-text';


export default function Post({ data }) {
  return (
    <View style={PostStyles.post}>
      
      <View style={PostStyles.postImage}>
      <ImageBackground source={data.image} style={PostStyles.image}>
        <View style={PostStyles.postHeader}>
          <View style={PostStyles.userProfile}><Image source={data.pfp} style={PostStyles.profImg}/></View>
          <View style={PostStyles.userInfo}>
            <View style={PostStyles.user}>
              <Text style={PostStyles.userName}>{data.user}</Text>
              <Text style={PostStyles.type}>{` ${data.type}`}</Text>
            </View>
            <Text style={PostStyles.userTime}>{data.time}</Text>
          </View>
          <View style={PostStyles.userLocation}></View>
        </View>
        </ImageBackground>
      
      </View>
      <View style ={PostStyles.messageContainer}>
      <View style={PostStyles.postMessage}>
      <ReadMore
              numberOfLines={2}
              renderTruncatedFooter={this._renderTruncatedFooter}
              renderRevealedFooter={this._renderRevealedFooter}
              onReady={this._handleTextReady}>
        <Text>{data.caption}</Text>
      </ReadMore>
      </View>
      </View>
    
    </View>
  );


_renderTruncatedFooter = (handlePress) => {
  return (
    <Text style={{color: Colors.tintColor, marginTop: 5}} onPress={handlePress}>
      Read more
    </Text>
  );
}

_renderRevealedFooter = (handlePress) => {
  return (
    <Text style={{color: Colors.tintColor, marginTop: 5}} onPress={handlePress}>
      Show less
    </Text>
  );
}

_handleTextReady = () => {
  // ...
}
}