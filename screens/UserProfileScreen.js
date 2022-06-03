import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../navigation/AuthProvider";
import styles from "../styles/styles.js";
import {
  Platform,
  TouchableOpacity,
  Pressable,
  Text,
  View,
  Button,
  Image,
  Alert,
} from "react-native";
import { addFollowing } from "../firebase/firebaseFunctions.js";
import { useIsFocused } from "@react-navigation/native";
import firebase from "firebase";
import Modal from "react-native-modal";
import QRCodeStyles from "../styles/QRCodeStyles";
import { Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProfilePost from "../components/ProfilePost.js";

export default function UserProfileScreen({ route, navigation }) {
  const isFocused = useIsFocused();

  const { userData, type } = route.params;
  const { user, logout } = useContext(AuthContext);
  const [imageUrl, setImageUrl] = useState();
  const db = firebase.firestore();
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("Not yet scanned");
  const [currentUser, setCurrentUser] = useState(null);
  const posts = [
    {
      id: 1,
      user: "Jason Tay",
      image: require("../assets/tempPic.jpg"),
      location: { longitude: -122.03, latitude: 37.42 },
      caption: "This is a caption",
      time: "1 hour ago",
      type: "friend",
    },
    {
      id: 2,
      user: "Rachel Nguyen",
      image: require("../assets/tempPic.jpg"),
      location: { longitude: 99.32, latitude: 37.42 },
      caption: "This is a caption",
      time: "2 hours ago",
      type: "friend",
    },
    {
      id: 3,
      user: "Cami Chou",
      image: require("../assets/tempPic.jpg"),
      location: { longitude: 101.72, latitude: 37.42 },
      caption: "This is a caption",
      time: "35 mins ago",
      type: "friend",
    },
    {
      id: 4,
      user: "Priya Shah",
      image: require("../assets/tempPic.jpg"),
      location: { longitude: 42.88, latitude: 37.42 },
      caption: "This is a caption",
      time: "1 day ago",
      type: "friend",
    },
  ];
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
  };

  const defaultProfilePic = {
    uri: "https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png",
  };

  // get user data
  const getUser = async () => {
    await db
      .collection("users")
      .doc(user.uid)
      .get()
      .then((documentSnapchat) => {
        if (documentSnapchat.exists) {
          console.log("User Data", documentSnapchat.data());
          setCurrentUser(documentSnapchat.data());
        }
      });
  };

  useEffect(() => {
    getUser();
  }, [isFocused]);

  return (
    <View style={QRCodeStyles.container}>
      {/* <View style={{top: 300}}> */}
          {/* friends / following title  */}
              <View style={{ flexDirection: "row", alignItems: "center", bottom: -330, zIndex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FriendsScreen", {userDetails: currentUser} );
            }}
          >
            <View style={{ right: 140 }}>
              <MaterialCommunityIcons name="arrow-left" color="black" size={26} />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              right: 10,
              textAlign: "center",
            }}
          >
            {type == 'friend' ? 'friends' : 'following'}
          </Text>
        </View>
        <Image
          style={{ top: 250, width: "100%" }}
          source={require("../assets/ellipse.png")}
        ></Image>

        <View style={{    top: 190,
        right: -80,
        height: 300,
        width: 300,
        borderRadius: 75,}}>
          <Image
            style={QRCodeStyles.profileImage}
            resizeMode="contain"
            source={
              userData ? profilePics[userData.profilePic] : defaultProfilePic
            }
          />
        </View>

        <Text style={{ bottom: -50, fontSize: 30 }}>
          {userData ? '@' + userData.displayName : "None"}
        </Text>

        {/*  follow button  */}
        <Pressable
          style={{ 
            borderRadius: 10,
            padding: 10,
            elevation: 2,
            backgroundColor: "#FAEDCD",
            borderRadius: 20,
            paddingHorizontal: 20,
            paddingTop: 5,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            top: 70,
          }}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ fontSize: 16, letterSpacing:0.7, fontStyle: "italic" }}>{type}</Text>
        </Pressable>
      {/* </View> */}

      <View style={{ bottom: 140, 
        width: Dimensions.get("window").width - 15, padding: 10, paddingTop: 10,
        alignContent: "center",
        borderRadius: 7,
        backgroundColor: '#E0EDCB',
        top:95,
      }}>
        <Text style={{fontSize: 18, marginBottom: 10, marginLeft: 20}}>Public Posts</Text>
      <FlatList style={{}}
        data={posts}
        renderItem={({ item }) => <ProfilePost data={item} />}
        keyExtractor={(item) => item.id}>
      </FlatList>
      </View>


    </View>

    
  );
}
