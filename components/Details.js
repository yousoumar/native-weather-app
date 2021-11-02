import React from "react";
import { View, Image, Text, StyleSheet, ImageBackground } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Wind from "./Wind";
import Visibility from "./Visibility";
import Humidity from "./Humidity";
import Pressure from "./Pressure";

export default function Details({ data }) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 100,
        width: "100%",
      }}
    >
      <Image
        style={{ width: 200, height: 100 }}
        source={{
          uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
        }}
      />
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 20,
          color: "#a09fb1",
        }}
      >
        <Text style={{ fontSize: 100 }}>
          {data && Math.trunc(data.main.temp)}
        </Text>
        °C
      </Text>

      <Text style={styles.text}>{data.weather[0].description}</Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <FontAwesomeIcon icon={faMapMarkerAlt} size={32} color={"white"} />
        <Text style={{ ...styles.text, marginTop: 10 }}>
          {data && data.name}
        </Text>
      </View>
      <View style={{ backgroundColor: "black", marginTop: 100, width: "100%" }}>
        <Text
          style={{
            ...styles.text,
            fontWeight: "bold",
            fontSize: 30,
            marginTop: 16,
          }}
        >
          Les points forts
        </Text>
        <Wind windSpeed={data.wind.speed} />
        <Visibility visibility={data.visibility * 0.001} />
        <Humidity humidity={data.main.humidity} />
        <Pressure pressure={data.main.pressure} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    color: "#a09fb1",
  },
});
