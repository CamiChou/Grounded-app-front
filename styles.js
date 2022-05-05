import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('screen');

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
  },

  background:{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
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
  headline_text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: "10%",
    marginLeft: "10%",
    marginRight: "10%",
  },

});
