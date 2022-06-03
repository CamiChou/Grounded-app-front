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
    flex: 1,
    width: "100%",
    height: "25%",
    zIndex: 1,
    marginTop: '2.5%'
  },
  userProfile: {
    flex: 1,
    width: "20%",
    height: "100%",
  },
  userInfo: {
    flex: 4,
    height: "100%",
  },
  user: {
    flex: 1,
    flexDirection: "row",
  },
  userLocation: {
    flex: 1,
    height: "100%",
  },
  type: {
    fontSize: 12,
    color: "#DADADA",
    marginLeft: '1%',
    fontStyle: "italic",
  },
  userName: {
    fontSize: 14,
    color: "white",
  },
  userTime: {
    fontSize: 12,
    height: "95%",
    color: "#DADADA",
    fontStyle: "italic",
  },
  postImage: {
    width: "100%",
    height:309,
    flex: 1,
    alignItems: "center",
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: 309,
  },
  profImg:{
    width: 40,
    height: 40,
    borderRadius: 40/ 2,
    marginLeft: '10%',
  },
  messageContainer: {
    backgroundColor: "white",
  },
  postMessage: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    marginLeft:'2.5%',
    marginRight: '2.5%',
    paddingBottom:10,
    alignItems: "center",
    backgroundColor: "white",
  },
});
