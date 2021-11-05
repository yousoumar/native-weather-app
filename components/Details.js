import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Hightlight from "./Hightlight";

export default function Details({ data }) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 50,
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
        <FontAwesome5 name="map-marker-alt" size={32} color="white" />
        <Text style={{ ...styles.text, marginTop: 10 }}>
          {data && data.name}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "black",
          marginTop: 50,
          width: "100%",
          paddingHorizontal: 16,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Hightlight
            icon={
              <FontAwesome5 name="location-arrow" size={25} color={"white"} />
            }
            data={data.wind.speed}
            unit={"m/s"}
            title="Vent"
          />
          <Hightlight
            icon={<FontAwesome5 name="eye-slash" size={25} color={"white"} />}
            data={data.visibility * 0.001}
            unit="km"
            title="Visibilité"
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Hightlight
            icon={<FontAwesome5 name="tint" size={25} color={"white"} />}
            data={data.main.humidity}
            title="Humidité"
            unit="%"
          />

          <Hightlight
            icon={
              <FontAwesome5 name="stopwatch-20" size={25} color={"white"} />
            }
            data={data.main.humidity}
            title="Pression"
            unit="hPa"
          />
        </View>
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
