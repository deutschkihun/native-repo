import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default () => {
  const IconButton = ({ name }) => {
    const [pressColor, setPressColor] = useState("white");
    return (
      <TouchableOpacity
        hitSlop={{ top: 15, bottom: 15 }}
        style={{
          paddingHorizontal: 6,
          backgroundColor: pressColor,
          borderRadius: "30%",
        }}
        onPressOut={() => setPressColor("white")}
        onPressIn={() => setPressColor("lightgray")}
      >
        <Ionicons name={name} size={24} color="black" />
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>친구</Text>
      <View style={{ flexDirection: "row" }}>
        <IconButton name="search-outline" />
        <IconButton name="person-add-outline" />
        <IconButton name="md-musical-notes-outline" />
        <IconButton name="ios-settings-outline" />
      </View>
    </View>
  );
};
