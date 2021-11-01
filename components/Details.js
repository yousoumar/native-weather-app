import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMapMarkerAlt,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
export default function Details({ data }) {
  return (
    <View
      style={{
        backgroundColor: "#1e213a",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <View>
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
      </View>

      <Text style={styles.text}>{data.weather[0].description}</Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <FontAwesomeIcon icon={faMapMarkerAlt} size={32} color={"white"} />
        <Text style={{ ...styles.text, marginTop: 10, fontSize: 20 }}>
          {data && data.name}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    color: "#a09fb1",
  },
});
