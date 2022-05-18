import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../navigation/AuthProvider";
import styles from "../styles/styles.js";
import { Text, View, Button, Image } from "react-native";
import { addFollowing } from "../firebase/firebaseFunctions.js";
import { useIsFocused } from '@react-navigation/native'

export default function HomeScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const isFocused = useIsFocused()

  useEffect(() => {
    setUserName(user.displayName);
    setProfilePic(user.photoURL);
  }, [isFocused]);

  return (
    <View style={styles.container}>
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
