import { CurrentRenderContext } from "@react-navigation/core";
import { StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  buttonToggle: {
    alignSelf: "center",
    width: "100%",
    height: "50%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activeMapToggle: {
    backgroundColor: "#C4C4C4",
  },
  inactiveMapToggle: {
    backgroundColor: "#FFFFFF",
  },
  topToggle: {
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  bottomToggle: {
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  toggleIcon: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  signinButton: {
    alignItems: "center",
    backgroundColor: "#b3d0ff",
    padding: 20,
    borderRadius: 20,
  },
  profileImage: {
    height: 250,
    width: 250,
    borderRadius: 75,
  },
  styledContainer: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    alignItems: "center",
    paddingTop: 0,
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#7cbf8c",
    paddingTop: 10,
    paddingBottom: 10,
  },
  logoImage: {
    height: 100,
    width: 100,
  },
  textInput: {
    fontSize: 20,
    padding: 10,
    textAlign: "center",
    color: "#7cbf8c",
  },
  textBox: {
    top: 20,
    width: 250,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15,
  },
  createButton: {
    paddingTop: 70,
  },
  background: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  avatar: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: "20%",
    width: "25%",
    padding: 50,
    marginLeft: "2%",
    marginRight: "2%",
    marginBottom: "2%",
    resizeMode: "contain",
  },
  avatar2: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: "20%",
    width: "25%",
    padding: 50,
    marginLeft: "2%",
    marginRight: "2%",
    marginBottom: "2%",
  },
  headline_text: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: "10%",
    marginLeft: "10%",
    marginRight: "10%",
  },
});
