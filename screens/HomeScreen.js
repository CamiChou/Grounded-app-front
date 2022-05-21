import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../navigation/AuthProvider";
import styles from "../styles/styles.js";
import {Text, View, Button, Image, TouchableOpacity} from "react-native";
import { addFollowing } from "../firebase/firebaseFunctions.js";
import { useIsFocused } from '@react-navigation/native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
    Inika_400Regular,
} from '@expo-google-fonts/inika'
import {
    Inter_400Regular,
} from '@expo-google-fonts/inter'
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading'


export default function HomeScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const isFocused = useIsFocused();


  useEffect(() => {
    setUserName(user.displayName);
    setProfilePic(user.photoURL);
  }, [isFocused]);

    const [loaded] = useFonts({
        inter: Inter_400Regular,
        inika: Inika_400Regular
    });

    if (!loaded) {
        return <AppLoading/>
    }


  return (
    <View style={styles.container}>
        <Text style = {{
            color: "#709467",
            fontSize: 32,
            fontWeight: "bold",
            position: "absolute",
            left: 20,
            top: 35,
            fontFamily: "inika",
        }}>grounded</Text>
        <TouchableOpacity onPress={() => navigation.navigate("CreateProfile")}>
            <MaterialCommunityIcons
                style = {{
                    color: "#709467",
                    position: "absolute",
                    left: 150,
                    top: -148,
                }}
                name="menu"
                size={30}
            />
        </TouchableOpacity>
      <Text>Welcome {userName}</Text>
      <Image style={styles.profileImage} source={{ uri: profilePic }} />
      <Button
        title="Follow"
        onPress={() => 
          addFollowing(user.uid, user.uid)
        }
      />
      <Button
        title="Test camera"
        onPress={() => navigation.navigate("Camera")}
      />
      <Button title="Log Out" onPress={logout} />
    </View>
  );
}
