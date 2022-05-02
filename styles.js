import { CurrentRenderContext } from "@react-navigation/core";
import { StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    paddingTop: 50,
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
    color: '#7cbf8c'
  },
  textBox: {
    top: 20,
    width: 250,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
  },
  createButton: {
    paddingTop: 70, 
  },

});
