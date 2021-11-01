import React from "react";
import { View } from "react-native";

export default ({ children }) => (
  <View style={{ flexDirection: "row", width: "90%" }}>{children}</View>
);
