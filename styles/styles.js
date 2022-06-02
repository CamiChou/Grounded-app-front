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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  journalIcon: {
    margin: 4,
    borderRadius: 4,
    height: 45,
    width: 45,
    backgroundColor: "#bad9b2",
    alignItems: "center",
    justifyContent: "center",
  },
  shadowBackground:
  {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1, 
    elevation: 5 
  },
  navigationButton:
  {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    width: '50%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#a5a2a2"
  },
  calendarDate:
  {
    alignContent: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
  },
  marking:
  {
    borderWidth: 5,
    borderColor: "#fff"
  }
});
