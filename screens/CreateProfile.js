import React, { useState, useEffect, useContext } from "react";
import styles from "../styles.js";
import { Text, View, Button, Image, TextInput } from "react-native";

import { AuthContext } from "../navigation/AuthProvider.js";

export default function CreateProfile() {
    const { user, logout } = useContext(AuthContext);
    const [profilePic, setProfilePic] = useState(null);
    const [text, onChangeText] = React.useState(null);
    
    useEffect(() => {
        setProfilePic(user.photoURL);
    }, []); //ComponentDidMount

    return (
        <View style={styles.container}>
          <Text>Create Profile</Text>   
          <Image style={styles.profileImage} source={{ uri: profilePic }} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Username"
          />
          <Button title="Create!" />
        </View>

      );

      
} 