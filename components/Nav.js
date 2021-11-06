import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
export default function Nav({
  setInputValue,
  useFetchDataOnLoad,
  setShowSearch,
  showSearch,
  setData,
  setErrorMessage,
  setLoading,
}) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.largeButton}
        onPress={() => {
          setShowSearch(!showSearch);
        }}
      >
        <View>
          <Text style={styles.text}>Chercher une ville</Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.roundButton}
        onPress={() => {
          setInputValue("");
          setLoading(true);
          setErrorMessage(false);
          useFetchDataOnLoad(setData, setErrorMessage, setLoading);
        }}
      >
        <View>
          <FontAwesome5 name={"compass"} size={22} color="white" />
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  largeButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "hsla(230,5%,45%,.3)",
    padding: 10,
    borderRadius: 10,
  },
  roundButton: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: "hsla(230,5%,45%,.3)",
  },
  text: { color: "white" },
});
