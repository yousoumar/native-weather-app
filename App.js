import React, { useEffect, useState } from "react";
import { APIKEY } from "react-native-dotenv";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import * as Location from "expo-location";
import Loader from "./components/Loader";
import Details from "./components/Details";
import Error from "./components/Error";
import Search from "./components/Search";
import Nav from "./components/Nav";
export default function App() {
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [reload, setReload] = useState(false);
  useEffect(() => {
    setErrorMessage(null);
    setData(null);
    fetchDataOnSearch();
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
      setErrorMessage(
        error.message
          ? error.message + ", please come back later :)"
          : "Something went rong, , please come back later :)"
      );
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
      setErrorMessage(
        error.message
          ? error.message + ", please come back later :)"
          : "Something went rong, please come back later :)"
      );
    }
  };
  if (errorMessage) {
    return (
      <SafeAreaView style={styles.container}>
        <Error errorMessage={errorMessage} />
      </SafeAreaView>
    );
  }

  if (data) {
    return (
      <SafeAreaView style={styles.container}>
        <Nav setInputValue={setInputValue} fetchDataOnLoad={fetchDataOnLoad} />
        <Search
          inputValue={inputValue}
          setInputValue={setInputValue}
          setReload={setReload}
          reload={reload}
        />
        <Details data={data} />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Loader />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e213a",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
});
