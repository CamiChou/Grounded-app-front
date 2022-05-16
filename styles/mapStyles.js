import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export default StyleSheet.create({
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
  mapSearch: {
    borderRadius: 10,
    margin: 30,
    color: "#000",
    borderColor: "#666",
    backgroundColor: "#FFF",
    borderWidth: 1,
    height: 45,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  buttonToggleContainer: {
    position: "absolute",
    top: 160,
    left: 30,
    width: "12%",
    height: "7%",
    borderRadius: 12,
    opacity: 1.0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.8,
    flexDirection: "column",
  },
  buttonToggleLabelContainer: {
    position: "absolute",
    top: 140,
    left: 90,
    width: "25%",
    height: "14%",
    borderRadius: 12,
    opacity: 1.0,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  buttonToggleLabel: {
    alignSelf: "center",
    width: "100%",
    backgroundColor: "white",
    opacity: 0.5,
    borderRadius: 12,
    padding: 2,
  },
  buttonToggleText: {
    fontSize: 11,
    lineHeight: 11,
    textAlign: "center",
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
});
