import React, { useState, useEffect, useContext } from "react";
import { TouchableOpacity, Modal, Text, View, Button, Image } from "react-native";

import PostStyles from "../styles/PostStyles";
import { Dimensions } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import {LinearGradient} from "expo-linear-gradient"
import styles from "../styles/styles.js";

export default function CalendarMonth({ data }) {
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
  function getTodate()
  {
    const dateWOTime = new Date();
    dateWOTime.setHours(0,0,0,0);
    return dateWOTime;
  }
  return (

    <View style={{marginBottom: 15}}>
          {/* calendar start (month) */}
          <Calendar   hideArrows={true}
          current={data}
        style={{
            borderRadius: 20,
            height: 350,
            width: Dimensions.get("window").width - 25,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.5,
            shadowRadius: 4,
          }}
          maxDate = {getTodate().toDateString()}
          // markingType={'dot'}
          // Callback which gets executed when visible months change in scroll view. Default = undefined
          // onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={0}
          // Enable or disable scrolling of calendar list
          scrollEnabled={false}
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
              <LinearGradient style={{borderRadius: 5, height: 40, width: 49}} colors={['#B9D9B1', '#F6FFDA']} >
                <TouchableOpacity style={[/*isMarked ? styles.marking : null,*/ styles.calendarDate]} onPress={() => onPress(date)} onLongPress={() => onLongPress(date)}>
                  <Text style={{includeFontPadding: false, textAlign: 'center', fontSize: 9}}></Text>
                  <Text style={{includeFontPadding: false, fontSize: 20, left: 10, top: 6, textAlign: 'center', color: 'black'}}>{date.day}</Text>
                  <Text style={{includeFontPadding: false, textAlign: 'center', fontSize: 9}}>{isMarked ? '\u2B24' : ''}</Text>
                </TouchableOpacity>
              </LinearGradient>
            );
          }}

          markedDates = {markedDates}

          theme={{
            textSectionTitleColor: 'black',
            monthTextColor: 'black',
            textDayFontSize: 16,
            textDayHeaderFontSize: 14,
            textMonthFontSize: 20,
            backgroundColor: '#FBFFE5',
            calendarBackground: '#FBFFE5',
            'stylesheet.calendar.main': {
              week: {
                margin: 5,
                flexDirection: 'row',
                justifyContent: 'space-around',
              },
            },
            'stylesheet.calendar.header': {
                header: {      
                    alignItems: 'flex-start',
                    paddingLeft: 2,

                },
              monthText: {
                margin: 10,
                fontSize: 24,
                textAlign: 'left',
              },
            }
          }}
        />

        {/* modal for onpress date  */}
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
  );
}
