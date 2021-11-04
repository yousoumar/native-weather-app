import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Wind({ windSpeed }) {
  return (
    <View style={{ ...styles.container, alignItems: "center" }}>
      <Text style={styles.text}>Wind</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ ...styles.text, fontSize: 45 }}>{windSpeed}</Text>
        <Text style={styles.text}>m/s</Text>
      </View>
      <View
        style={{
          padding: 10,
          borderRadius: 50,
          backgroundColor: "hsla(230,5%,45%,.3)",
          marginTop: 10,
        }}
      >
        <FontAwesome5 name="location-arrow" size={25} color={"white"} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "#1e213a",
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 10,
    justifyContent: "center",
    width: "44%",
    borderRadius: 10,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
