import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/styles.js";
import { Modal, Text, View, Button, Image } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
// const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function getDay(date) {
  return new Date(
    (date + "T00:00:00").replace(/-/g, "/").replace(/T.+/, "")
  ).toDateString();
}

export default function CalendarScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDay, setDay] = useState("");

  return (
    <View style={[styles.container, { backgroundColor: "#eee" }]}>
      <Text style={{ paddingTop: 100 }}>Calendar Screen</Text>
      <View style={[styles.container, { marginTop: 50, marginBottom: 100 }]}>
        <CalendarList
          // Callback which gets executed when visible months change in scroll view. Default = undefined
          onVisibleMonthsChange={(months) => {
            console.log("now these months are visible", months);
          }}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Enable or disable scrolling of calendar list
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          showScrollIndicator={true}
          onDayPress={(day) => {
            setDay(getDay(day.dateString));
            setModalVisible(true);
          }}
        />
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>You have selected the date:</Text>
              <Text style={styles.modalText}>{selectedDay}</Text>
              <Button
                //   style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
                title="Close"
              />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
