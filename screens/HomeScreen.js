import React from "react";
import { View } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header />

      <View style={{ flex: 5, backgroundColor: "blue" }}>
        <Profile />
        <Schedule />
      </View>

      <Footer />
    </View>
  );
}
