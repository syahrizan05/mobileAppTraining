import React from "react";
import { View, FlatList, Text } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

const objectExample = { besar: "Medium", markah: "50" };
const dataArray = [
  { besar: "Medium", markah: "20" },
  { besar: "Large", markah: "15" },
  { besar: "Small", markah: "40" },
  { besar: "Big", markah: "50" },
  { besar: "Medium", markah: "35" },
];

export default function CoursesScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header title={"Courses"} />
      <View style={{ flex: 5 }}>
        <FlatList
          data={dataArray}
          renderItem={({ item }) => <CourseCard item={item} />}
        />
      </View>
      <Footer />
    </View>
  );
}

const CourseCard = ({ item }) => {
  return (
    <View
      style={{
        marginBottom: 20,
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 10,
      }}
    >
      <Text> {item.besar}</Text>
      <Text> {item.markah}</Text>
    </View>
  );
};
