import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/styles.js";
import {LinearGradient} from "expo-linear-gradient"
import { TouchableOpacity, Modal, Text, View, Button, Image } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
// const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];



export default function CalendarScreen({ navigation }) {
  const [markedDates, setMarkedDates] = useState({})
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDay, setDay] = useState("");
  function updateMarkedDates(sDate)
  {
    setMarkedDates({
      ...markedDates,
      [sDate.dateString]: {marked: true}
    });    
  }
  function getDay(date) {
    return new Date(
      (date + "T00:00:00").replace(/-/g, "/").replace(/T.+/, "")
    ).toDateString();
  }
  return (
    
    <View style={[styles.container, {flex: 1, backgroundColor: "#eee"}]}>
      <Text style={{paddingTop: 200, fontSize: 25}}>Journal Entries</Text>
      <View style={{backgroundColor: "#fff", width: '90%', marginLeft: 0, marginRight: 0, marginTop: 50, marginBottom: '35%', paddingHorizontal: 45, borderRadius: 50}}>
        <CalendarList
          // markingType={'dot'}
          // Callback which gets executed when visible months change in scroll view. Default = undefined
          onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Enable or disable scrolling of calendar list
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          showScrollIndicator={true}
          onDayPress={(day) => {
            setDay(day);
            setModalVisible(true);
          }}

          dayComponent={({date, state, onPress, onLongPress, marking}) => {
            var isMarked = false;
            if (marking != undefined && marking.marked)
            {
              isMarked = true;
            }
            return (
              <LinearGradient style={{borderRadius: 3}} colors={['#badab2', '#edf9d4']} >
                <TouchableOpacity style={[/*isMarked ? styles.marking : null,*/ styles.calendarDate]} onPress={() => onPress(date)} onLongPress={() => onLongPress(date)}>
                  <Text style={{includeFontPadding: false, textAlign: 'center', fontSize: 5}}></Text>
                  <Text style={{includeFontPadding: false, textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black'}}>{date.day}</Text>
                  <Text style={{includeFontPadding: false, textAlign: 'center', fontSize: 5}}>{isMarked ? '\u2B24' : ''}</Text>
                </TouchableOpacity>
              </LinearGradient>
            );
          }}

          markedDates = {markedDates}

          theme={{
            'stylesheet.calendar.main': {
              week: {
                margin: 2,
                flexDirection: 'row',
                justifyContent: 'space-around',
              },
            },
          }}
        />
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>You have selected the date:</Text>
              <Text style={styles.modalText}>{getDay(selectedDay.dateString)}</Text>
              <Button
                style={{marginBottom: 20}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate("TempJournalFeed", {selDate: getDay(selectedDay.dateString)});
                }}
                title="Go to journal for this day"
              />
              <View style={{height:10}}/>
              <Button
                style={{marginBottom: 20}}
                onPress={() => {
                  // const dateStr = [selectedDay.dateString];
                  // const newMarkedDates = markedDates;
                  // newMarkedDates.dateStr = {marked: true};
                  updateMarkedDates(selectedDay);  
                }}
                title="Mark this date"
              />
              <View style={{height:10}}/>
              <Button
                // style={[styles.button, styles.buttonClose]}
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
