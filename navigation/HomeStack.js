import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import DiscoverScreen from "../screens/DiscoverScreen";
import PostScreen from "../screens/PostScreen";
import MapScreen from "../screens/MapScreen";
import JournalScreen from "../screens/JournalScreen";
import CameraScreen from "../screens/CameraScreen";
import { Image } from "react-native";

export default function HomeStack() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="Home" 
     activeColor="#9CC991"
     inactiveColor="black"
     barStyle={{ backgroundColor: '#F8F8F8', paddingBottom: 20,}}
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
          tabBarIcon: () => (<Image source={require("./../assets/postButton.png")} style={{width: 100, height: 99, bottom: 50}} />)
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
    </Tab.Navigator>
  );
}
