import React from "react";
import { View, ActivityIndicator } from "react-native";
export default function Loader() {
  return (
    <View
      style={{
        alignSelf: "center",
        marginTop: 200,
      }}
    >
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}
