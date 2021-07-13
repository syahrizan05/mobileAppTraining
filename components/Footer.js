import React from "react";
import { View } from "react-native";


const Footer = () => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, backgroundColor: "yellow" }}></View>
      <View style={{ flex: 1, backgroundColor: "darkturquoise" }}></View>
    </View>
  );
};

export default Footer;
