import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Schedule = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScheduleRow day={"Monday"} morning={"Physics"} afternoon={"Language"} />
      <ScheduleRow
        day={"Tuesday"}
        morning={"Mathematics"}
        afternoon={"Communication"}
      />
      <ScheduleRow />
      <ScheduleRow />
      <ScheduleRow />
      <ScheduleRow />
    </View>
  );
};

const ScheduleRow = ({ day, morning, afternoon }) => {
  return (
    <View style={{ flex: 1, flexDirection: "row",margin:10 }}>
      <View style={{ flex: 1 }}>
        <Text>{day}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>{morning}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>{afternoon}</Text>
      </View>
    </View>
  );
};

export default Schedule;
