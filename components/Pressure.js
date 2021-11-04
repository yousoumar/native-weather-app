import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
export default function Pressure({ pressure }) {
  return (
    <View style={{ ...styles.container, alignItems: "center" }}>
      <Text style={styles.text}>Pressure</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ ...styles.text, fontSize: 35 }}>{pressure}</Text>
        <Text style={styles.text}>hPa</Text>
      </View>
      <View
        style={{
          padding: 10,
          borderRadius: 50,
          backgroundColor: "hsla(230,5%,45%,.3)",
          marginTop: 10,
        }}
      >
        <FontAwesome5 name="stopwatch-20" size={25} color={"white"} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "#1e213a",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    justifyContent: "center",
    width: "44%",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
