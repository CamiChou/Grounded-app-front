import React, { useState, useEffect, useContext, useMemo } from "react";
import styles from "../styles.js";
import { TextInput, View, SafeAreaView, Image, Text } from "react-native";
import MapView from "react-native-maps";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function MapScreen({ navigation }) {
  const mylocationmarker = require("../assets/mylocationmarker.png");
  const savedlocationmarker = require("../assets/savedlocationmarker.png");
  const myLocations = [
    {
      title: "Bruh",
      coordinate: { latitude: 34.0695413, longitude: -118.44499 },
      description: "This is a place",
    },
    {
      title: "Wow",
      coordinate: { latitude: 34.071413, longitude: -118.44499 },
      description: "This is also a place",
    },
  ];
  const savedLocations = [
    {
      title: "Bruh2",
      coordinate: { latitude: 34.0695413, longitude: -118.44699 },
      description: "This is a place",
    },
    {
      title: "Wow",
      coordinate: { latitude: 34.071413, longitude: -118.44699 },
      description: "This is also a place",
    },
  ];

  function loadMarkers() {
    let res = [];
    if (mode !== 2) {
      res = myLocations.map((marker, index) => (
        <MapView.Marker
          key={`mylocation${index}`}
          coordinate={marker.coordinate}
          title={marker.title}
          description={marker.description}
          image={mylocationmarker}
        />
      ));
    }
    if (mode !== 1) {
      res = res.concat(
        savedLocations.map((marker, index) => (
          <MapView.Marker
            key={`savedlocation${index}`}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            image={savedlocationmarker}
          />
        ))
      );
    }
    return res.filter((marker) => marker.props.title.indexOf(search) > -1);
  }

  const [mode, toggleMode] = useState(0);
  const [search, setSearch] = useState("");
  const markers = useMemo(() => loadMarkers(), [myLocations, savedLocations]);

  return (
    <SafeAreaView style={styles.mapContainer}>
      <MapView
        initialRegion={{
          latitude: 34.0695413,
          longitude: -118.44499,
          latitudeDelta: 0.0042,
          longitudeDelta: 0.0041,
        }}
        style={styles.map}
      >
        {markers}
      </MapView>
      <View style={{ position: "absolute", top: 30, width: "100%" }}>
        <TextInput
          style={styles.mapSearch}
          value={search}
          onChange={(e) => setSearch(e.nativeEvent.text)}
          placeholder={"Search"}
          placeholderTextColor={"#666"}
        />
      </View>
      <View style={styles.buttonToggleContainer}>
        <TouchableOpacity
          style={[
            styles.buttonToggle,
            styles.topToggle,
            styles[
              mode === 0
                ? "inactiveMapToggle"
                : mode === 1
                ? "inactiveMapToggle"
                : "activeMapToggle"
            ],
          ]}
          onPress={() => toggleMode(mode === 1 ? 0 : 1)}
        >
          <Image
            style={styles.toggleIcon}
            source={mylocationmarker}
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonToggle,
            styles.bottomToggle,
            styles[
              mode === 0
                ? "inactiveMapToggle"
                : mode === 2
                ? "inactiveMapToggle"
                : "activeMapToggle"
            ],
          ]}
          onPress={() => toggleMode(mode === 2 ? 0 : 2)}
        >
          <Image
            style={styles.toggleIcon}
            source={savedlocationmarker}
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonToggleLabelContainer}>
        <View
          style={[styles.buttonToggleLabel, mode === 2 ? styles.hidden : ""]}
        >
          <Text style={styles.buttonToggleText}>My Locations</Text>
        </View>
        <View
          style={[styles.buttonToggleLabel, mode === 1 ? styles.hidden : ""]}
        >
          <Text style={styles.buttonToggleText}>Saved Locations</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
