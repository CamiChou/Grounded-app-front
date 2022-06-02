import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../navigation/AuthProvider";
import styles from "../styles/styles.js";
import {
  Platform,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Text,
  FlatList,
  View,
  Button,
  Image,
  Alert,
} from "react-native";
import { SearchBar } from "@rneui/themed";
import {
  addFollowing,
  removeFollowing,
} from "../firebase/firebaseFunctions.js";
import { useIsFocused } from "@react-navigation/native";
import firebase from "firebase";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CustomSwitch from "../components/CustomSwitch";
import JournalScreen from "./JournalScreen";

export default function FriendsScreen({ route, navigation }) {
  const { userDetails } = route.params;

  const { user, logout } = useContext(AuthContext);
  const isFocused = useIsFocused();
  const [imageUrl, setImageUrl] = useState();
  const storageRef = firebase.storage().ref();
  const db = firebase.firestore();
  const [userData, setUserData] = useState(null);
  const [text, setText] = useState("Not yet scanned");
  const [value, setValue] = React.useState("");
  const [gamesTab, setGamesTab] = useState(1);
  const [friends, setFriends] = useState([]);
  const [following, setFollowing] = useState([]);
  const [gotFriends, setGotFriends] = useState(false);
  const [gotFollowing, setGotFollowing] = useState(false);

  const onSelectSwitch = (value) => {
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
  };

  const defaultProfilePic = {
    uri: "https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png",
  };

  // get user following
  const getFollowing = async (uid) => {
    await Promise.all(
      db
        .collection("users")
        .doc(uid)
        .get()
        .then((documentSnapchat) => {
          if (documentSnapchat.exists) {
            setFollowing((oldArray) => [...oldArray, documentSnapchat.data()]);
          }
        })
    );
  };

  // get user friends
  const getFriends = async (uid) => {
    await Promise.all(
      db
        .collection("users")
        .doc(uid)
        .get()
        .then((documentSnapchat) => {
          if (documentSnapchat.exists) {
            setFriends((oldArray) => [...oldArray, documentSnapchat.data()]);
          }
        })
    );
  };

  useEffect(() => {
    if (
      gotFriends == false ||
      (userDetails.friends && friends.length != userDetails.friends.length)
    ) {
      setFriends([]);
      if (userDetails.friends) {
        if (userDetails.friends.length != 0) {
          userDetails.friends.map((x) => getFriends(x));
          setGotFriends(true);
        } else {
          console.log("0 friends");
        }
      } else {
        console.log("no friends");
        setGotFriends(false);
      }
    }
    if (
      gotFollowing == false ||
      (userDetails.following &&
        following.length != userDetails.following.length)
    ) {
      setFollowing([]);
      if (userDetails.following) {
        if (userDetails.following.length != 0) {
          userDetails.following.map((x) => getFollowing(x));
          setGotFollowing(true);
        } else {
          console.log("0 following");
        }
      } else {
        console.log("no following");
        setGotFollowing(false);
      }
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      {/* friends / following title  */}
      <View style={{ flexDirection: "row", alignItems: "center", bottom: 230 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <View style={{ right: 100 }}>
            <MaterialCommunityIcons name="arrow-left" color="black" size={26} />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 17,
            textAlign: "center",
          }}
        >
          Friends / Following
        </Text>
      </View>
      <JournalScreen />
      {/* search bar  */}
      <View style={{ margin: 20, bottom: 240 }}>
        <SearchBar
          platform="ios"
          containerStyle={{}}
          inputContainerStyle={{ backgroundColor: "#F3F3F3" }}
          inputStyle={{ fontStyle: "italic", letterSpacing: "0.7" }}
          leftIconContainerStyle={{}}
          rightIconContainerStyle={{}}
          loadingProps={{}}
          onChangeText={(newVal) => setValue(newVal)}
          onClearText={() => console.log(onClearText())}
          placeholder=" Search in my friends"
          placeholderTextColor="#888"
          cancelButtonTitle="Cancel"
          cancelButtonProps={{}}
          onCancel={() => console.log("onCancel()")}
          value={value}
        />
      </View>

      <View style={{ marginVertical: 20, bottom: 280 }}>
        <CustomSwitch
          selectionMode={1}
          option1="Friends"
          option2="Following"
          onSelectSwitch={onSelectSwitch}
        />
      </View>
      <View></View>
      <View
        style={{
          position: "absolute",
          height: 200,
          top: 245,
          backgroundColor: "white",
        }}
      >
        {gamesTab == 1 &&
          friends &&
          friends.map((user) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 35,
              }}
            >
              <Image
                style={{
                  position: "absolute",
                  height: 53,
                  width: 53,
                  right: 140,
                }}
                resizeMode="contain"
                source={user ? profilePics[user.profilePic] : defaultProfilePic}
              />
              <Text style={{ left: -120, position: "absolute", fontSize: 16 }}>
                {user.displayName}
              </Text>
              <View style={{ position: "absolute", left: 165 }}>
                <TouchableOpacity
                  onPress={() => {
                    // removeFollowing(userDetails.uid, userDetails.uid);
                    console.log("unfollow");
                  }}
                >
                  <MaterialCommunityIcons
                    name="close"
                    color="black"
                    size={26}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
      </View>

      <View
        style={{
          position: "absolute",
          height: 200,
          top: 245,
          backgroundColor: "white",
        }}
      >
        {gamesTab == 2 &&
          following &&
          following.map((user, i) => (
            <View
              key={i}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 35,
              }}
            >
              <Image
                style={{
                  position: "absolute",
                  height: 53,
                  width: 53,
                  right: 140,
                }}
                resizeMode="contain"
                source={user ? profilePics[user.profilePic] : defaultProfilePic}
              />
              <Text style={{ left: -120, position: "absolute", fontSize: 16 }}>
                {user.displayName}
              </Text>
              <View style={{ position: "absolute", left: 165 }}>
                <TouchableOpacity
                  onPress={() => {
                    // removeFollowing(userDetails.uid, userDetails.uid);
                    console.log("unfollow");
                  }}
                >
                  <MaterialCommunityIcons
                    name="close"
                    color="black"
                    size={26}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
      </View>
    </View>
  );
}
