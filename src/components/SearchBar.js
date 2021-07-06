import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const SearchBar = ({ city, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <FontAwesome5 name="city" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="City"
        value={city}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#bcc2cc",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    alignItems: "center",
    marginTop: 10,
    flexDirection: "row",
  },
  inputStyle: {
    fontSize: 25,
    flex: 5,
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: "center",
    flex: 1,
    paddingLeft: 20,
  },
});

export default SearchBar;
