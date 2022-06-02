import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/styles.js";
import { TouchableOpacity, Text, View, Button, Image } from "react-native";
import { getDay } from "./CalendarScreen.js";
import {LinearGradient} from "expo-linear-gradient"
import JournalStyles from "../styles/JournalStyles";

export function JournalIconButton(props) {
  return (
    <LinearGradient style={{borderRadius: 5, margin: 1}} colors={['#B9D9B1', '#F6FFDA']} >
      <TouchableOpacity
        style={[JournalStyles.journalIcon]}
        onPress={() =>
          props.n.navigate("TempJournalFeed", { selDate: props.date })
        }
      >
        <Text style={{ fontSize: 25, color: "black" }}>
          {
            /*new Date(props.date).getMonth() + "/" +*/ new Date(
              props.date
            ).getDate()
          }
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

export default function JournalScreen({ navigation }) {
  function getDateString(numDaysBack) {
    return new Date(
      new Date().setDate(new Date().getDate() - numDaysBack)
    ).toDateString();
  }
  return (
      <View
        style={[
          JournalStyles.shadowBackground,
          { padding: 10, borderRadius: 10, backgroundColor: "#FBFFE5" },
        ]}
      >
        <Text style={{ color: "black", paddingLeft: 10, fontSize: 16, margin: 7}}>Last 14 Days</Text>
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            <JournalIconButton date={getDateString(0)} n={navigation} />
            <JournalIconButton date={getDateString(1)} n={navigation} />
            <JournalIconButton date={getDateString(2)} n={navigation} />
            <JournalIconButton date={getDateString(3)} n={navigation} />
            <JournalIconButton date={getDateString(4)} n={navigation} />
            <JournalIconButton date={getDateString(5)} n={navigation} />
            <JournalIconButton date={getDateString(6)} n={navigation} />
          </View>
          <View style={{ flexDirection: "row" }}>
            <JournalIconButton date={getDateString(7)} n={navigation} />
            <JournalIconButton date={getDateString(8)} n={navigation} />
            <JournalIconButton date={getDateString(9)} n={navigation} />
            <JournalIconButton date={getDateString(10)} n={navigation} />
            <JournalIconButton date={getDateString(11)} n={navigation} />
            <JournalIconButton date={getDateString(12)} n={navigation} />
            <JournalIconButton date={getDateString(13)} n={navigation} />
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={[JournalStyles.navigationButton, JournalStyles.shadowBackground]}
            onPress={() => navigation.navigate("Calendar")}
          >
            <Text>View All</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}
