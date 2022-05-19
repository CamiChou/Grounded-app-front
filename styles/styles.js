import { StyleSheet } from "react-native";


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  hidden: {
    opacity: 0,
  },
  signinButton: {
    alignItems: "center",
    top: 400,
  },
  profileImage: {
    top: 30,
    height: 300,
    width: 300,
    borderRadius: 75,
  },
  styledContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
  },
  pageTitle: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#709467",
    paddingTop: 40,
    paddingBottom: 10,
  },
  logoImage: {
    height: 100,
    width: 100,
  },
  textInput: {
    fontSize: 20,
    padding: 10,
    top: 40,
    right: 20,
    textAlign: "center",
    color: "#7cbf8c",
    width: 300,
    borderRadius: 15,
    backgroundColor: "#E5F5EF"
  },
  textBox: {
    top: 20,
    width: 250,
    borderWidth: 0,
    borderRadius: 15,
  },
  createButton: {
    paddingTop: 90,
    left: 80,
  },
  background: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  nextButton: {
    bottom: 180,
    right: 90,
  },
  avatar: {
    height: "20%",
    width: "25%",
    padding: 50,
    marginLeft: "2%",
    marginRight: "2%",
    marginBottom: "2%",
    resizeMode: "contain",
  },
  headline_text: {
    color: "#455340",
    marginTop: 60,
    fontSize: 35,
    fontWeight: "bold",
    right: 98,
  },
  avatargrid: {
    flexDirection: "row",
    right: 90,
    marginTop: 50,
  },
  logInText:{
    flexDirection: "row",
    top: 420,
    left: 80,
  },
  loginTitle:{
    fontSize: 60,
    top: 300,
    textAlign: "center",
    fontWeight: "bold",
    color: "#709467",
    fontFamily: 'Inika_400Regular',
  }
});
