import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/styles.js";
import {
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { AuthContext } from "../navigation/AuthProvider.js";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { changeDisplayName } from "../firebase/firebaseFunctions.js";
import {
  Inika_400Regular,
} from '@expo-google-fonts/inika'
import {
  Inter_400Regular,
} from '@expo-google-fonts/inter'
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading'


export default function CreateProfile({ navigation }) {
  const { user, logout } = useContext(AuthContext);
  const [profilePic, setProfilePic] = useState(null);
  const [text, onChangeText] = React.useState(null);
  const [username, setUsername] = useState("");
  const [loaded] = useFonts({
    inter: Inter_400Regular,
    inika: Inika_400Regular
    });

    if (!loaded) {
      return <AppLoading/>
    }

  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!username.trim()) {
      return false;
    }
    //Checked Successfully
    //Do whatever you want
    return true;
  };

  return (
    <ImageBackground
      source={require("../assets/background.jpeg")}
      style={{ width: "100%", height: "110%", position: "absolute", top: -50 }}
      imageStyle={{ opacity: 0.5 }}
    >
      {/* example logo */}
      <View style={styles.styledContainer}>
        {/* page title */}
        <Text style={{    fontSize: 60,
    fontWeight: "bold",
    color: "#709467",
    paddingTop: 40,
    paddingBottom: 10, fontFamily:"inika"}}>grounded</Text>

        {/* avatar */}
        <Image
          style={styles.logoImage}
          source={require("../assets/ikigai.png")}
        />

        {/* username input */}
        <View style={styles.textBox}>
          <TextInput
            style={styles.textInput}
            onChangeText={(val) => setUsername(val)}
            placeholder="   Username"
            placeholderTextColor="#98AD8B"
            textAlign="left"
            fontStyle="italic"
          />
        </View>

        {/* create button --> navigates to homestack after press */}
        {/* but should probably change it so that it only navigates when username is !null (and possibly not taken? if we're doing unique usernames)*/}
        <View style={styles.createButton}>
          <AwesomeButtonRick
            onPress={() => {
              if (checkTextInput() == false) {
                alert("Please Enter Username");
              } else {
                // change displayname for user in firebase
                user
                  .updateProfile({
                    displayName: username,
                  })
                  .then(() => console.log("username updated to " + username));
                // change display name for "users" table
                changeDisplayName(user.uid, username);
                // navigate to home
                navigation.navigate("AvatarScreen");
              }
            }}
            type="anchor"
            width={150}
            backgroundColor="#E5F5EF"
            borderColor="#709467"
            backgroundShadow="#709467"
            backgroundDarker="#709467"
            textSize={20}
          >
            Create!
          </AwesomeButtonRick>

          {/* <AwesomeButton onPress={() => Alert.alert('Created')} color="#1d692f" title="Create!" /> */}
        </View>
      </View>
    </ImageBackground>
  );
}
