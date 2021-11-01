import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { APIKEY } from "react-native-dotenv";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  SafeAreaView,
} from "react-native";
import * as Location from "expo-location";
export default function App() {
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    setErrorMessage(null);
    setData(null);
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMessage("Location is needed to run the app :)");
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lang=fr&units=metric&lat=${latitude}&lon=${longitude}&appid=${APIKEY}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setData(data);
      } else {
        throw Error("Something went rong");
      }
    } catch (error) {
      setErrorMessage(error.message + ", please come back later :)");
    }
  };
  if (errorMessage) {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.text}>{errorMessage}</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (data) {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
            }}
          />
          <Text style={{ ...styles.text, color: "white" }}>
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
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" color="white" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e213a",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    color: "#a09fb1",
  },
  tinyLogo: {
    width: 200,
    height: 100,
  },
});
