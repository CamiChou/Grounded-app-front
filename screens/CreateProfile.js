import React, { useState, useEffect, useContext } from "react";
import styles from "../styles.js";
import {
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
  TextInput,
  Alert,
} from "react-native";
import { AuthContext } from "../navigation/AuthProvider.js";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { changeDisplayName } from "../firebase/firebaseFunctions.js"


export default function CreateProfile({ navigation }) {
  const { user, logout } = useContext(AuthContext);
  const [profilePic, setProfilePic] = useState(null);
  const [text, onChangeText] = React.useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    setProfilePic(user.photoURL);
  }, []); //ComponentDidMount

  return (
    <SafeAreaView style={styles.styledContainer}>
      <View style={styles.styledContainer}>
        {/* example logo */}
        <Image
          style={styles.logoImage}
          source={{
            uri: "https://images.squarespace-cdn.com/content/v1/5f3b0e3f572a30394b94a212/1597705994012-1GI1SWXYAC6JPDVMCDJ3/Ikigai+Logo.png?format=1500w",
          }}
        />

        {/* page title */}
        <Text style={styles.pageTitle}>Create Profile</Text>

        {/* avatar */}
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://images.theconversation.com/files/104935/original/image-20151208-4898-1tvnkf7.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
          }}
        />

        {/* username input */}
        <View style={styles.textBox}>
          <TextInput
            style={styles.textInput}
            onChangeText={(val) => setUsername(val)}
            placeholder="username"
            placeholderTextColor="#7cbf8c"
          />
        </View>

        {/* create button --> navigates to homestack after press */}
        {/* but should probably change it so that it only navigates when username is !null (and possibly not taken? if we're doing unique usernames)*/}
        <View style={styles.createButton}>
          <AwesomeButtonRick
            onPress={() => {
              // change displayname for user in firebase
              user.updateProfile({
                displayName: username,
              })
              .then(() => console.log("username updated to " + username));
              // change display name for "users" table 
              changeDisplayName(user.uid, username);
              // navigate to home
              navigation.navigate("HomeStack");
            }}
            type="anchor"
            width={150}
            textSize={20}
          >
            Create
          </AwesomeButtonRick>
          {/* <AwesomeButton onPress={() => Alert.alert('Created')} color="#1d692f" title="Create!" /> */}
        </View>
      </View>
    </SafeAreaView>
  );
}
