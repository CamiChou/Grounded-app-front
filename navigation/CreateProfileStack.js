import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import HomeStack from "./HomeStack";
import ExtraScreen from "../screens/ExtraScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import CreateProfileScreen from "../screens/CreateProfile";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function CreateProfileStack() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator initialRouteName="CreateProfile">
        <Stack.Screen
          name="CreateProfile"
          component={CreateProfileScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Home"
          component={HomeStack}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    );
  }
  