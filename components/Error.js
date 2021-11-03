import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function Error({ errorMessage }) {
  return (
    <View style={{ marginTop: 200 }}>
      <Text style={styles.text}>{errorMessage}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    color: "#a09fb1",
    padding: 16,
  },
});
