import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Button } from "react-native-elements";
export default function Search({
  inputValue,
  setInputValue,
  setReload,
  reload,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingLeft: 16,
        paddingRight: 16,
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
          if (inputValue.trim() !== "") {
            setReload(!reload);
          }
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    width: "70%",
    borderWidth: 1,
    padding: 10,
    borderColor: "white",
    borderRadius: 10,
    color: "white",
  },
  button: {
    padding: 10,
    borderRadius: 10,
    marginLeft: 18,
  },
});
