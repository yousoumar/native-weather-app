import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";

import Loader from "./components/Loader";
import Details from "./components/Details";
import Error from "./components/Error";
import Search from "./components/Search";
import Nav from "./components/Nav";
import useFetchDataOnLoad from "./hooks/useFetchDataOnLoad";

export default function App() {
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState();
  const [inputValue, setInputValue] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    useFetchDataOnLoad(setData, setErrorMessage, setLoading);
  }, []);

  if (showSearch) {
    return (
      <SafeAreaView
        style={{
          ...styles.container,
          justifyContent: "flex-start",
          flex: 1,
          backgroundColor: "#1e213a",
        }}
      >
        <Search
          inputValue={inputValue}
          setInputValue={setInputValue}
          setShowSearch={setShowSearch}
          setData={setData}
          setErrorMessage={setErrorMessage}
          setLoading={setLoading}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Nav
          setInputValue={setInputValue}
          useFetchDataOnLoad={useFetchDataOnLoad}
          showSearch={showSearch}
          setShowSearch={setShowSearch}
          setData={setData}
          setLoading={setLoading}
          setErrorMessage={setErrorMessage}
        />
        {loading ? (
          <Loader />
        ) : errorMessage ? (
          <Error errorMessage={errorMessage} />
        ) : (
          <Details data={data} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e213a",
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight + 10 : 0,
    flex: 1,
  },
});
