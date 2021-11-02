import React from "react";
import { View, Pressable, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
export default function Nav({
  setInputValue,
  fetchDataOnLoad,
  setShowSearch,
  showSearch,
  setData,
  setErrorMessage,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",

        width: "100%",
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
      }}
    >
      <Pressable
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "hsla(230,5%,45%,.3)",
          padding: 10,
          borderRadius: 10,
        }}
        onPress={() => {
          setShowSearch(!showSearch);
        }}
      >
        <View>
          <Text style={{ color: "white" }}>Chercher une ville</Text>
        </View>
      </Pressable>
      <Pressable
        style={{
          padding: 10,
          borderRadius: 50,
          backgroundColor: "hsla(230,5%,45%,.3)",
        }}
        onPress={() => {
          setInputValue("");
          fetchDataOnLoad(setData, setErrorMessage);
        }}
      >
        <View>
          <FontAwesomeIcon icon={faCompass} size={22} color={"white"} />
        </View>
      </Pressable>
    </View>
  );
}
