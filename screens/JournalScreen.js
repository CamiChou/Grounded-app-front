import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/styles.js";
import { TouchableOpacity, Text, View, Button, Image } from "react-native";
import { getDay } from "./CalendarScreen.js";

export function JournalIconButton(props) {
  return (
    <TouchableOpacity
      style={[styles.journalIcon, styles.shadowBackground]}
      onPress={() =>
        props.n.navigate("TempJournalFeed", { selDate: props.date })
      }
    >
      <Text style={{ fontSize: 25, color: "#fff" }}>
        {
          /*new Date(props.date).getMonth() + "/" +*/ new Date(
            props.date
          ).getDate()
        }
      </Text>
    </TouchableOpacity>
  );
}

export default function JournalScreen({ navigation }) {
  function getDateString(numDaysBack) {
    return new Date(
      new Date().setDate(new Date().getDate() - numDaysBack)
    ).toDateString();
  }
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.shadowBackground,
          { padding: 10, borderRadius: 10, backgroundColor: "#e0edcb" },
        ]}
      >
        <Text style={{ color: "#b0b1a8", paddingBottom: 5 }}>Last 14 Days</Text>
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
            style={[styles.navigationButton, styles.shadowBackground]}
            onPress={() => navigation.navigate("Calendar")}
          >
            <Text>View Journal Entries</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
