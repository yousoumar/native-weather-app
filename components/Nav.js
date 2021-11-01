import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
export default function Nav({ setInputValue, fetchDataOnLoad }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#1e213a",
        width: "100%",
        paddingLeft: 16,
        paddingRight: 16,
        marginBottom: 16,
      }}
    >
      {/* <Button
        title="Chercher une ville"
        buttonStyle={{
          ...styles.button,
        }}
      /> */}
      <Button
        title="Météo loacal"
        buttonStyle={{
          ...styles.button,
        }}
        onPress={() => {
          setInputValue("");
          fetchDataOnLoad();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    padding: 10,
    borderRadius: 10,
  },
});
