import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./HomeStack";
import AuthStack from "./AuthStack";
import { AuthContext } from "./AuthProvider";
import { ActivityIndicator } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import firebase from "firebase";
import LogoScreen from "../screens/LogoScreen";
import CameraScreen from "../screens/CameraScreen";
import CreateProfile from "../screens/CreateProfile";
import IconScreen from "../screens/IconScreen";

export default function NavigationStack() {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const [loading, setLoading] = useState(true);

  // Handle user state changes
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(function (user) {
      setUser(user);
      if (initializing) setInitializing(false);
      setLoading(false);
    });

    return subscriber;
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logo">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Logo"
          component={LogoScreen}
        />
        <Stack.Screen
          name="CreateProfile"
          component={user ? CreateProfile : AuthStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AvatarScreen"
          component={user ? IconScreen : AuthStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeStack"
          component={user ? HomeStack : AuthStack}
          options={{
            headerLeft: () => <></>,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
