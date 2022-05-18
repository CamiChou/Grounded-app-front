import { StatusBar } from "expo-status-bar";
import React, {Component} from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./styles/styles.js";
import NavigationStack from "./navigation/NavigationStack";
import Providers from "./navigation/index";
import { LogBox } from "react-native";
import * as Location from 'expo-location';

export default function App() {
  LogBox.ignoreLogs(["AsyncStorage"]);
  return <Providers />;
}
