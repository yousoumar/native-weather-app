import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { APIKEY } from "react-native-dotenv";
import { Button } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
} from "react-native";
import * as Location from "expo-location";
export default function App() {
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [reload, setReload] = useState(false);
  useEffect(() => {
    setErrorMessage(null);
    setData(null);
    fetchDataOnSearch;
  }, [reload]);
  useEffect(() => {
    setErrorMessage(null);
    setData(null);
    fetchDataOnLoad();
  }, []);
  const fetchDataOnLoad = async () => {
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
        setData(data);
      } else {
        throw Error("Something went rong");
      }
    } catch (error) {
      setErrorMessage(error.message + ", please come back later :)");
    }
  };
  const fetchDataOnSearch = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lang=fr&units=metric&q=${inputValue}&appid=${APIKEY}`
      );
      if (response.ok) {
        const data = await response.json();
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
      <SafeAreaProvider>
        <SafeAreaView
          style={{
            backgroundColor: "#1e213a",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 16,
              justifyContent: "space-between",
              marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
            }}
          >
            <TextInput
              style={styles.input}
              placeholder="Entrer le nom d'une ville"
              placeholderTextColor="#a09fb1"
              onChangeText={(text) => setInputValue(text)}
              value={inputValue}
            />
            <Button
              title="Chercher"
              buttonStyle={styles.button}
              onPress={() => {
                setReload(!reload);
                fetchDataOnSearch();
              }}
            />
          </View>
          <Button
            title="Météo loacal"
            buttonStyle={{ ...styles.button, margin: 10 }}
            onPress={() => {
              setInputValue("");
              fetchDataOnLoad();
            }}
          />
        </SafeAreaView>

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
      </SafeAreaProvider>
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
    position: "relative",
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
  input: {
    height: 40,
    width: "70%",
    borderWidth: 1,
    padding: 10,
    borderColor: "white",
    borderRadius: 10,
    color: "white",
  },
  button: {
    height: 40,
    padding: 10,
    borderRadius: 10,
  },
});
