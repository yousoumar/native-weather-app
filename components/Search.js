import React from "react";
import { View, StyleSheet, TextInput, Pressable, Text } from "react-native";

export default function Search({
  inputValue,
  setInputValue,
  setReload,
  reload,
  setShowSearch,
}) {
  return (
    <View>
      <Pressable
        style={{
          alignSelf: "flex-end",
          backgroundColor: "hsla(230,5%,45%,.3)",
          marginRight: 16,
          borderRadius: 10,
          paddingRight: 10,
          paddingLeft: 10,
          marginBottom: 16,
        }}
        onPress={() => {
          setShowSearch(false);
        }}
      >
        <View>
          <Text style={{ color: "white", fontSize: 25 }}>X</Text>
        </View>
      </Pressable>
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
        <Pressable
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "hsla(230,5%,45%,.3)",
            padding: 10,
            borderRadius: 10,
          }}
          onPress={() => {
            if (inputValue.trim() !== "") {
              setReload(!reload);
              setShowSearch(false);
            }
          }}
        >
          <View>
            <Text style={{ color: "white" }}>Valider</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderColor: "white",
    borderRadius: 10,
    color: "white",
    marginRight: 16,
  },
});
