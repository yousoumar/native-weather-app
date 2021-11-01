import React from "react";
import { View, ActivityIndicator } from "react-native";
export default function Loader() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1e213a",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}
