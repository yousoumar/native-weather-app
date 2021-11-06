import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { View, StyleSheet } from "react-native";
import Hightlight from "./Hightlight";

export default function Highlights({ data }) {
  return (
    <View style={styles.container}>
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
          icon={<FontAwesome5 name="stopwatch-20" size={25} color={"white"} />}
          data={data.main.humidity}
          title="Pression"
          unit="hPa"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    marginTop: 50,
    width: "100%",
    paddingHorizontal: 16,
  },
});
