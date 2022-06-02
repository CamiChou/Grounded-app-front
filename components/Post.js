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
    // <View style={PostStyles.post}>
    //   <View style={PostStyles.postImage}>
    //     <View style={PostStyles.postHeader}>
    //       <View style={PostStyles.userProfile}></View>
    //       <View style={PostStyles.userInfo}>
    //         <View style={PostStyles.user}>
    //           <Text style={PostStyles.userName}>{data.user}</Text>
    //           <Text style={PostStyles.type}>{` ${data.type}`}</Text>
    //         </View>
    //         <Text style={PostStyles.userTime}>{data.time}</Text>
    //       </View>
    //       <View style={PostStyles.userLocation}></View>
    //     </View>
    //     <Image source={data.image} style={PostStyles.image} />
    //   </View>
    //   <View style={PostStyles.postMessage}>
    //     <Text>{data.caption}</Text>
    //   </View>
    // </View>

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
    width: Dimensions.get("window").width,
    height: undefined,
    marginBottom: 10,
    flexDirection: "column",
    backgroundColor: "white"}}>

    <ImageBackground source={data.image} style={{
      height:307,
      width: Dimensions.get("window").width,
    }}>

    <View style={{
        top: 15,
        marginHorizontal: 15,
        zIndex:1,
        flexDirection: "row",
        alignItems: "center", 
        position: 'relative'
      }}>
        <Image style={{height: 40, width:40}} resizeMode="contain" source={require("../assets/avatars/avatar1.png")}></Image>
        <Text style={{fontSize: 18, position: "relative", left: 13, color: "white", bottom: 7}}>{data.user}</Text>
        <Text style={{fontSize: 12, position: "relative", left: 20, color: "#DADADA", bottom: 4.3, fontStyle:"italic"}}>{data.type}</Text>
        <Text style={{fontSize: 14, position: "relative", right: 96, color: "#DADADA", top: 15, fontStyle:"italic"}}>{data.time}</Text>

      { data.location ? <View style={{flexDirection: "row",
            alignItems: "center", right: 0, position: 'absolute'}}>
        <View style={{
            position: "relative",bottom: 3,
          }}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            color="#2664DC"
            size={28}
            />
            </View>
          <Text style={{fontSize: 15, position: "relative", color: "white", bottom: 4, fontStyle:"italic"}}>{JSON.stringify(data.location, ['longitude'])}</Text>

        </View> : null }
        </View>
    </ImageBackground>

    <View style={{
      height: 70, width: 375, 
    }}>
      <Text style={{
        fontSize: 15, position: 'relative', marginVertical: 15, marginHorizontal: 20
        }}>{data.caption}</Text>
    </View>
</View>
  );
}
