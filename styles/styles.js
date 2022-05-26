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
  logoImage: {
    width: 250,
    height: 250,
    top: 20,
  },
  profileImageContainer: {
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
  profileImage: {
    height: 250,
    width: 250,
    alignItems: "center",
    left: 20,
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
    top: 40,
    width: 250,
    borderWidth: 0,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  createButton: {
    paddingTop: 100,
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
  logInText: {
    flexDirection: "row",
    top: 420,
    left: 80,
  },
  loginTitle: {
    fontSize: 60,
    top: 300,
    textAlign: "center",
    fontWeight: "bold",
    color: "#709467",
  }, 
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#F6FFDA",
    borderRadius: 40,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4
    },
    height: 480,
    width: 350,
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#FAEDCD",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 5,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalButtons: {
    bottom: 170,
    backgroundColor: "white",
    borderColor: "#9DCA92",
    borderWidth: 2,
    marginBottom: 10,
    padding: 5,
    height: 44,
    width: 289,
  },
  textStyle: {
    color: "black",
    fontSize: 18,
  },
  modalText: {
    marginBottom: 30,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center"
  },
  QRcode: {
    bottom: 213,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'}
});
