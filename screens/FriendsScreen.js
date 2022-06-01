import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../navigation/AuthProvider";
import styles from "../styles/styles.js";
import { Platform, TouchableOpacity, Pressable, ScrollView, Text, FlatList, View, Button, Image, Alert } from "react-native";
import { SearchBar } from "@rneui/themed";
import { addFollowing, showimage } from "../firebase/firebaseFunctions.js";
import { useIsFocused } from '@react-navigation/native'
import firebase from "firebase";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/CustomSwitch';

export default function FriendsScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);
  const isFocused = useIsFocused()
  const [imageUrl, setImageUrl] = useState();
  const storageRef = firebase.storage().ref();
  const db = firebase.firestore();
  const [userData, setUserData] = useState(null);
  const [text, setText] = useState('Not yet scanned')
  const [value, setValue] = React.useState("");
  const [gamesTab, setGamesTab] = useState(1);
  const friends = [];
  const following = [];

  const onSelectSwitch = value => {
    // if (value == 1) {
    //     (userData.friends).map(user => getFriends(user))
    // }
    // else if (value == 2) {
    //     (userData.following).map(user => getFollowing(user))
    // }
    setGamesTab(value);
  };

  const profilePics = {
    "../assets/avatars/avatar1.png": require("../assets/avatars/avatar1.png"),
    "../assets/avatars/avatar2.png": require("../assets/avatars/avatar2.png"),
    "../assets/avatars/avatar3.png": require("../assets/avatars/avatar3.png"),
    "../assets/avatars/avatar4.png": require("../assets/avatars/avatar4.png"),
    "../assets/avatars/avatar5.png": require("../assets/avatars/avatar5.png"),
    "../assets/avatars/avatar6.png": require("../assets/avatars/avatar6.png"),
    "../assets/avatars/avatar7.png": require("../assets/avatars/avatar7.png"),
    "../assets/avatars/avatar8.png": require("../assets/avatars/avatar8.png"),
    "../assets/avatars/avatar9.png": require("../assets/avatars/avatar9.png"),
  }

  const defaultProfilePic = { uri: 'https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png' }

  // get user data
  const getUser = async () => {
    await db.collection("users")
      .doc(user.uid)
      .get().then((documentSnapchat) => {
        if (documentSnapchat.exists) {
            setUserData(documentSnapchat.data())
        }
      });
  }


  useEffect(() => {
    getUser();

  }, [isFocused]);

  return (
    <View style={styles.container}>
        
        {/* friends / following title  */}
        <View style={{flexDirection: "row", alignItems: "center", bottom: 230}}>
            <TouchableOpacity onPress={() => { 
                      navigation.navigate("Home");
                  }}>
                <View style={{right:100}}>
                    <MaterialCommunityIcons
                        name="arrow-left"
                        color="black"
                        size={26}
                        />
                </View>
            </TouchableOpacity>
            <Text style={{
                fontSize: 17,
                textAlign: "center",
            }}>Friends / Following</Text>
        </View>
        {/* search bar  */}
        <View style={{margin:20, bottom: 240}}>
            <SearchBar
                platform="ios"
                containerStyle={{}}
                inputContainerStyle={{backgroundColor: "#F3F3F3"}}
                inputStyle={{fontStyle:"italic", letterSpacing: "0.7"}}
                leftIconContainerStyle={{}}
                rightIconContainerStyle={{}}
                loadingProps={{}}
                onChangeText={newVal => setValue(newVal)}
                onClearText={() => console.log(onClearText())}
                placeholder=" Search in my friends"
                placeholderTextColor="#888"
                cancelButtonTitle="Cancel"
                cancelButtonProps={{}}
                onCancel={() => console.log("onCancel()")}
                value={value}
            />
        </View>
        
        <View style={{marginVertical: 20, bottom: 280}}>
          <CustomSwitch
            selectionMode={1}
            option1="Friends"
            option2="Following"
            onSelectSwitch={onSelectSwitch}
          />
        </View>
        <View>

        </View>
        <View style={{position: "absolute", height:200, top: 275, backgroundColor:"white"}}>
        {gamesTab == 1 && userData ? (userData.friends).map(user => 
            <View>
                <Text>{user}</Text> 
            </View>
        ) : null}
        </View>


        <View style={{position: "absolute", height:200, top: 275, backgroundColor:"white"}}>
        {gamesTab == 2 && userData ? (userData.following).map(user => 
            <View style={{marginBottom: 62}}>
                <Text>{user}</Text> 
            </View>
        ) : null}
        </View>
    </View >
  );
}
