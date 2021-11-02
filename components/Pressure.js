import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function Pressure({ pressure }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pression</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ ...styles.text, fontSize: 45 }}>{pressure}</Text>
        <Text style={styles.text}>hPa</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "#1e213a",
    marginTop: 20,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
    justifyContent: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
