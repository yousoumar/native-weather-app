import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";
export default function Humidity({ humidity }) {
  return (
    <View style={{ ...styles.container, alignItems: "center" }}>
      <Text style={styles.text}>Humidity</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ ...styles.text, fontSize: 45 }}>{humidity}</Text>
        <Text style={styles.text}>%</Text>
      </View>
      <View
        style={{
          padding: 10,
          borderRadius: 50,
          backgroundColor: "hsla(230,5%,45%,.3)",
          marginTop: 10,
        }}
      >
        <FontAwesomeIcon icon={faTint} size={25} color={"white"} />
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
    borderRadius: 10,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
