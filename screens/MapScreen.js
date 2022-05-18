import React, { useState, useEffect, useMemo } from "react";
import styles from "../styles/styles.js";
import mapStyles from "../styles/mapStyles.js";
import { TextInput, View, SafeAreaView, Image, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Location from "expo-location";

export default function MapScreen() {
  const mylocationmarker = require("../assets/mylocationmarker.png");
  const savedlocationmarker = require("../assets/savedlocationmarker.png");

  const [pin, setPin] = React.useState(null); // Create a pin here to show current location
  const [mode, toggleMode] = useState(0); // 0 = both 1 = my location, 2 = saved location
  const [search, setSearch] = useState(""); // Current search filter
  const [myLocations, setMyLocations] = useState([]); // My locations
  const [savedLocations, setSavedLocations] = useState([]); // Saved locations

  const mapMarkers = useMemo(
    () => loadMarkers(myLocations, savedLocations),
    [myLocations, savedLocations]
  );
  const filteredMarkers = useMemo(
    () => filterMarkers(mapMarkers, mode, search),
    [mapMarkers, mode, search]
  );

  useEffect(() => {
    // TODO: API call to get user's markers
    setMyLocations([
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
    ]);
    setSavedLocations([
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
    ]);
    // To set pin location priya testing
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location.coords);

      setPin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      }); // End of the additional code but there is additional code in the style sheet for the gold pin on lines 127-132
    })();
  }, []);

  // Helper function to generate markers from the user data
  function generateMarkers(data, type, typeNum, image) {
    return data.map((marker, index) => (
      <Marker
        key={`${type}${index}`}
        coordinate={marker.coordinate}
        title={marker.title}
        description={marker.description}
        image={image}
        type={typeNum}
      />
    ));
  }

  // Load all markers for the map with current filtering
  function loadMarkers(myLocationData, savedLocationData) {
    let res = generateMarkers(
      myLocationData,
      "mylocation",
      1,
      mylocationmarker
    );
    return res.concat(
      generateMarkers(
        savedLocationData,
        "savedlocation",
        2,
        savedlocationmarker
      )
    );
  }

  // Filter markers based on mode and search
  function filterMarkers(markers, filterMode, currSearch) {
    return markers.filter(
      (marker) =>
        marker.props.title.indexOf(currSearch) > -1 &&
        (filterMode === 0 || marker.props.type === filterMode)
    );
  }

  return (
    <SafeAreaView style={mapStyles.mapContainer}>
      <MapView
        initialRegion={{
          latitude: 34.0695413,
          longitude: -118.44499,
          latitudeDelta: 0.0042,
          longitudeDelta: 0.0041,
        }}
        style={mapStyles.map}
      >
        {pin && (
          <Marker
            coordinate={pin}
            title="Test MapView.Marker"
            description="to test if the my location works- priya"
            pinColor="gold"
          />
        )}

        {filteredMarkers}
      </MapView>
      <View style={{ position: "absolute", top: 30, width: "100%" }}>
        <TextInput
          style={mapStyles.mapSearch}
          value={search}
          onChange={(e) => setSearch(e.nativeEvent.text)}
          placeholder={"Search"}
          placeholderTextColor={"#666"}
        />
      </View>
      <View style={mapStyles.buttonToggleContainer}>
        <TouchableOpacity
          style={[
            mapStyles.buttonToggle,
            mapStyles.topToggle,
            mapStyles[
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
            style={mapStyles.toggleIcon}
            source={mylocationmarker}
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            mapStyles.buttonToggle,
            mapStyles.bottomToggle,
            mapStyles[
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
            style={mapStyles.toggleIcon}
            source={savedlocationmarker}
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={mapStyles.buttonToggleLabelContainer}>
        <View
          style={[mapStyles.buttonToggleLabel, mode === 2 ? styles.hidden : ""]}
        >
          <Text style={mapStyles.buttonToggleText}>My Locations</Text>
        </View>
        <View
          style={[mapStyles.buttonToggleLabel, mode === 1 ? styles.hidden : ""]}
        >
          <Text style={mapStyles.buttonToggleText}>Saved Locations</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
