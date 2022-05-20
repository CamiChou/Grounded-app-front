import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/styles.js";
import { TouchableOpacity, Text, View, Button, Image } from "react-native";
import { getDay } from "./CalendarScreen.js";

export function JournalIconButton(props) {
  return (
    <TouchableOpacity style={styles.journalIcon} onPress={() => props.n.navigate("TempJournalFeed", {selDate: props.date})}>
      <Text>{props.date.getMonth() + "/" + props.date.getDate()}</Text>
    </TouchableOpacity>
  );
}

export default function JournalScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Journal Screen</Text>
      <View style={{padding: 10, borderRadius: 10, backgroundColor: "#aaa"}}>
        <Text>Last 14 Days</Text>
        <View style={{flexDirection: "column"}}>
          <View style={{flexDirection: "row"}}>
            <JournalIconButton date={new Date()} n={navigation}/>
            <JournalIconButton date={new Date(new Date().setDate(new Date().getDate() - 1))} n={navigation}/>
            <JournalIconButton date={new Date(new Date().setDate(new Date().getDate() - 2))} n={navigation}/>
            <JournalIconButton date={new Date(new Date().setDate(new Date().getDate() - 3))} n={navigation}/>
            <JournalIconButton date={new Date(new Date().setDate(new Date().getDate() - 4))} n={navigation}/>
            <JournalIconButton date={new Date(new Date().setDate(new Date().getDate() - 5))} n={navigation}/>
            <JournalIconButton date={new Date(new Date().setDate(new Date().getDate() - 6))} n={navigation}/>
          </View>
          <View style={{flexDirection: "row"}}>
            <JournalIconButton date={new Date(new Date().setDate(new Date().getDate() - 7))} n={navigation}/>
            <JournalIconButton date={new Date(new Date().setDate(new Date().getDate() - 8))} n={navigation}/>
            <JournalIconButton date={new Date(new Date().setDate(new Date().getDate() - 9))} n={navigation}/>
            <JournalIconButton date={new Date(new Date().setDate(new Date().getDate() - 10))} n={navigation}/>
            <JournalIconButton date={new Date(new Date().setDate(new Date().getDate() - 11))} n={navigation}/>
            <JournalIconButton date={new Date(new Date().setDate(new Date().getDate() - 12))} n={navigation}/>
            <JournalIconButton date={new Date(new Date().setDate(new Date().getDate() - 13))} n={navigation}/>

          </View>
        </View>
        <TouchableOpacity style={[styles.signinButton, {borderRadius: 30, margin: 10}]} onPress={() => navigation.navigate("Calendar")}> 
          <Text>View Journal Entries</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
