import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import { AuthContext } from "./AuthProvider";
import { ActivityIndicator } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import ExtraScreen from "../screens/ExtraScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import firebase from "firebase";
import LogoScreen from "../screens/LogoScreen";

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
      {user ? (
        <Stack.Navigator initialRouteName="Logo">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Logo"
            component={LogoScreen}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerLeft: () => <></>,
            }}
          />
          <Stack.Screen name="Extra" component={ExtraScreen} />
          <Stack.Screen
            // options={{
            //   headerLeft: () => <></>,
            // }}
            name="UserProfile"
            component={UserProfileScreen}
          />
        </Stack.Navigator>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}
