import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/styles.js";
import { Modal, Text, View, Button, Image } from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'

export default function JournalFeedScreen({ route, navigation }) {
    const {selDate} = route.params;
  return (
    <View style={[styles.container, {backgroundColor: "#eee"}]}>
        <Text>Temporary Journal Feed</Text>
        <Text>This is the feed for the following date:</Text>
        <Text>selDate</Text>
    </View>
  );
}
