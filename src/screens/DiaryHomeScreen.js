import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

const DiaryHomeScreen = () => {
  return (
    <View>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/image/diarybackground.jpg")}
        resizeMode="cover"
      ></ImageBackground>
      <Text>Diary Home</Text>
    </View>
  );
};

export default DiaryHomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
  },
});
