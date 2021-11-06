import React from "react";
import { View, Dimensions } from "react-native";

export default ({ children, position, type }) => (
  <View
    style={{
      flexDirection: "row",
      width: type ? "100%" : Dimensions.get("screen").width * 0.55,
      height: type ? 100 : Dimensions.get("screen").width * 0.45,
      alignSelf: position,
      paddingHorizontal: Dimensions.get("screen").width * 0.05,
    }}
  >
    {children}
  </View>
);
