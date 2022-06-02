import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export default StyleSheet.create({
  post: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: 300,
    marginBottom: 100,
    flexDirection: "column",
    borderRadius: 80,
    backgroundColor: "black"
  },
  postHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "white",
    flex: 1,
    width: "100%",
    height: "40%",
    zIndex: 1,
  },
  userProfile: {
    flex: 1,
    width: "20%",
    height: "100%",
    backgroundColor: "white",
  },
  userInfo: {
    flex: 4,
    height: "100%",
    backgroundColor: "white",
  },
  user: {
    flex: 1,
    flexDirection: "row",
  },
  userLocation: {
    flex: 1,
    height: "100%",
    backgroundColor: "white",
  },
  type: {
    fontSize: 12,
    color: "black",
  },
  userName: {
    fontSize: 14,
    color: "black",
  },
  userTime: {
    fontSize: 12,
    color: "black",
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
