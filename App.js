import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";

import Loader from "./components/Loader";
import Details from "./components/Details";
import Error from "./components/Error";
import Search from "./components/Search";
import Nav from "./components/Nav";
import { fetchDataOnSearch, fetchDataOnLoad } from "./hooks/DataFetch";

export default function App() {
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState();
  const [inputValue, setInputValue] = useState("");
  const [reload, setReload] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  useEffect(() => {
    if (!reload) {
      fetchDataOnLoad(setData, setErrorMessage);
    } else {
      fetchDataOnSearch(setData, setErrorMessage, inputValue);
    }
  }, [reload]);

  if (errorMessage) {
    return (
      <SafeAreaView
        style={{
          ...styles.container,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1e213a",
        }}
      >
        <Error errorMessage={errorMessage} />
      </SafeAreaView>
    );
  }
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
          setReload={setReload}
          reload={reload}
          setShowSearch={setShowSearch}
        />
      </SafeAreaView>
    );
  }
  if (data) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Nav
            setInputValue={setInputValue}
            fetchDataOnLoad={fetchDataOnLoad}
            showSearch={showSearch}
            setShowSearch={setShowSearch}
            setData={setData}
            setErrorMessage={setErrorMessage}
          />
          <Details data={data} />
        </ScrollView>
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
    backgroundColor: "#1e213a",
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight + 10 : 0,
    flex: 1,
  },
});
