import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Schedule = ({ goToCourses }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScheduleRow
        goToCourses={goToCourses}
        day={"Monday"}
        morning={"Physics"}
        afternoon={"Language"}
      />
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

const ScheduleRow = ({ day, morning, afternoon, goToCourses }) => {
  return (
    <View style={{ flex: 1, flexDirection: "row", margin: 10 }}>
      <View style={{ flex: 1 }}>
        <Text>{day}</Text>
      </View>
      <TouchableOpacity onPress={goToCourses} style={{ flex: 1 }}>
        <Text>{morning}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToCourses} style={{ flex: 1 }}>
        <Text>{afternoon}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Schedule;
