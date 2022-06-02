import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function CustomSwitch({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
}) {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = (value) => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View
      style={{
        top: 10,
        height: 20,
        width: "100%",
        backgroundColor: "white",
        borderRadius: 10,
        borderColor: "#AD40AF",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          height: 40,
          backgroundColor: "white",
          borderBottomWidth: getSelectionMode == 1 ? 3 : 0,
          borderBottomColor: "black",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            letterSpacing: "0.7",
            color: "black",
            fontSize: 16,
            fontWeight: getSelectionMode == 1 ? "bold" : "normal",
          }}
        >
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          height: 40,
          borderBottomWidth: getSelectionMode == 2 ? 3 : 0,
          borderBottomColor: "black",
          borderRadius: 20,
          backgroundColor: "white",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            letterSpacing: "0.7",
            color: "black",
            fontSize: 16,
            fontWeight: getSelectionMode == 2 ? "bold" : "normal",
          }}
        >
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
