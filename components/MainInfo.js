import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Highlights from "./Highlights";

export default function MainInfo({ data }) {
  if (!data) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
        }}
      />
      <Text style={styles.text}>
        <Text style={{ fontSize: 100 }}>
          {data && Math.trunc(data.main.temp)}
        </Text>
        °C
      </Text>

      <Text style={styles.text}>{data.weather[0].description}</Text>
      <View style={styles.location}>
        <FontAwesome5 name="map-marker-alt" size={32} color="white" />
        <Text style={{ ...styles.text, marginTop: 10 }}>
          {data && data.name}
        </Text>
      </View>
      <Highlights data={data} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    width: "100%",
  },
  image: { width: 200, height: 100 },
  location: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    color: "#a09fb1",
  },
});
