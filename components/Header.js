import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ title,back }) => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {back && <Ionicons name={"chevron-back"} size={32} color={"purple"} onPress={back} />}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 25, color: "red" }}>{title}</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Ionicons name={"home"} size={32} color={"purple"} />
      </View>
    </View>
  );
};

export default Header;
