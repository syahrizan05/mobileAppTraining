import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1, backgroundColor: "yellow" }}></View>
        <View style={{ flex: 1, backgroundColor: "darkturquoise" }}></View>
        <View style={{ flex: 1, backgroundColor: "purple" }}></View>
      </View>

      <View style={{ flex: 5, backgroundColor: "blue" }}></View>

      <View style={{ flex: 1, flexDirection:"row" }}>
        <View style={{ flex: 1, backgroundColor: "yellow" }}></View>
        <View style={{ flex: 1, backgroundColor: "darkturquoise" }}></View>
      </View>
      
    </View>
  );
}
