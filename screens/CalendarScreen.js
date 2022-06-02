import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/styles.js";
import { TouchableOpacity, Modal, Text, View, Button, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FlatList } from "react-native-gesture-handler";
import CalendarMonth from "../components/Calendar.js";
import JournalStyles from "../styles/JournalStyles";



export default function CalendarScreen({ navigation }) {
  const [monthsList, setMonthsList] = useState([]);

  const months = ['2022-06-01','2022-05-01', '2022-04-01', '2022-03-01', '2022-02-01', '2022-01-01'];

  return (
    
    <View style={[JournalStyles.container, {flex: 1, backgroundColor: "#fff"}]}>
      <View style={{flexDirection: "row", alignContent: "center", right: 100, zIndex: 1, top: 80, marginBottom: 0}}>
      <TouchableOpacity
          onPress={() => {
            navigation.navigate("Journal");
          }}
        >
          <View>
            <MaterialCommunityIcons name="arrow-left" color="black" size={26} />
          </View>
        </TouchableOpacity>
      <Text style={{fontSize: 25, left:95}}>Journal Entries</Text>
      </View>

      {/* calendar for months */}
      <View style={{paddingTop: 80}}>
        <FlatList style={{bottom: -30, margin: 0, padding:10}}
          data={months}
          renderItem={({ item }) => <CalendarMonth data={item} />}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
      </View>
  );
}
