import React, { useState, useEffect, useContext } from "react";
import styles from "../styles.js";
import { Text, View, Button, Image } from "react-native";
import MapView from "react-native-maps";

export default function MapScreen({ navigation }) {
  const markers = [
    {
      title: "Bruh",
      coordinate: { latitude: 37.78825, longitude: -122.4324 },
      description: "This is a place",
    },
    {
      title: "Wow",
      coordinate: { latitude: 37.88825, longitude: -123.4324 },
      description: "This is also a place",
    },
  ];
  return (
    <View style={styles.mapContainer}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0,
          longitudeDelta: 0.0,
        }}
        style={styles.map}
      >
        {markers.map((marker, index) => (
          <MapView.Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  );
}
