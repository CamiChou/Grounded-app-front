import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import DiscoverScreen from "../screens/DiscoverScreen";
import PostScreen from "../screens/PostScreen";
import MapScreen from "../screens/MapScreen";
import JournalScreen from "../screens/JournalScreen";
import CameraScreen from "../screens/CameraScreen";
import QRScanner from "../screens/QRCodeScanner";
import { Image, View } from "react-native";

export default function HomeStack() {
  const Tab = createBottomTabNavigator();
  
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, tabBarActiveTintColor: '#9CC991', tabBarInactiveTintColor: 'black', tabBarStyle: {
        bottom: 0, 
        elevation:0, 
        backgroundColor:'#F8F8F8',
        borderRadius:15, 
        height:90
    }}}
     tabBarOptions={{
      showLabel: false,
      style: {
        position: 'absolute',
        bottom: 25, 
        left: 20, 
        right: 20, 
        elevation:0, 
        backgroundColor:'#F8F8F8',
        borderRadius:15, 
        height:90}
      }}
    >
      <Tab.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="earth"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarIcon: () => (<Image source={require("./../assets/postButton.png")} style={{width: 100, height: 99, bottom: 20}} />)
        }}
         />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="map"
              color={color}
              size={26}
            />
          ),
        }}
      />
      
      <Tab.Screen
        name="Journal"
        component={JournalScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="person"
              color={color}
              size={26}
            />
          ),
        }}
      />
       <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-box"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="QRScanner"
        component={QRScanner}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-box"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
