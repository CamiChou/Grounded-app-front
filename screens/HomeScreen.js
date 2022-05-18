import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../navigation/AuthProvider";
import styles from "../styles/styles.js";
import { Text, View, Button, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    setUserName(user.displayName);
    setProfilePic(user.photoURL);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Welcome {userName}</Text>
      <Image style={styles.profileImage} source={{ uri: profilePic }} />
      <Button
        title="Continue"
        onPress={() => navigation.navigate("UserProfile")}
      />
      <Button
        title="Test camera"
        onPress={() => navigation.navigate("Camera")}
      />
      <Button title="Log Out" onPress={logout} />
    </View>
  );
}
