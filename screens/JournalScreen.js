import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/styles.js";
import {Text, View, Button, Image, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useFonts} from "expo-font";
import {Inter_400Regular} from "@expo-google-fonts/inter";
import {Inika_400Regular} from "@expo-google-fonts/inika";
import AppLoading from "expo-app-loading";

export default function JournalScreen({ navigation }) {
    const [loaded] = useFonts({
        inter: Inter_400Regular,
        inika: Inika_400Regular
    });

    if (!loaded) {
        return <AppLoading/>
    }
  return (
    <View style={styles.container}>
        <Text style = {{
            fontSize: 17,
            fontWeight: "bold",
            textAlign: "center",
            position: "absolute",
            top: 43,
            fontFamily: "inter",
        }}>Journal Entries</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <MaterialCommunityIcons
                style = {{
                    position: "relative",
                    left: -170,
                    top: -315,
                }}
                name="arrow-left"
                size={30}
            />
        </TouchableOpacity>
      <Text>Journal Screen</Text>

    </View>
  );
}
