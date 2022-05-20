import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export default StyleSheet.create({
  post: {
    flex: 1,
    width: Dimensions.get("window").width,
    flexDirection: "column",
  },
  postHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "white",
    flex: 1,
    width: "100%",
    height: "25%",
    zIndex: 1,
  },
  userProfile: {
    flex: 1,
    width: "20%",
    height: "100%",
    backgroundColor: "blue",
  },
  userInfo: {
    flex: 4,
    height: "100%",
    backgroundColor: "red",
  },
  user: {
    flex: 1,
    flexDirection: "row",
  },
  userLocation: {
    flex: 1,
    height: "100%",
    backgroundColor: "green",
  },
  type: {
    fontSize: 12,
    color: "grey",
  },
  userName: {
    fontSize: 14,
    color: "white",
  },
  userTime: {
    fontSize: 12,
    color: "grey",
    fontStyle: "italic",
  },
  postImage: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    height: "30%",
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  postMessage: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    borderTopWidth: 1,
    backgroundColor: "white",
  },
});
