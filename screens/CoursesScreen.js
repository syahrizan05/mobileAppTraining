import React from "react";
import { View, FlatList, Text } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import courses from "../data/courses";

export default function CoursesScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header title={"Courses"} />
      <View style={{ flex: 5 }}>
        <FlatList
          data={courses}
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
        borderColor:"lightgrey",
        padding: 10,
        marginHorizontal: 10,
        backgroundColor:"ivory"
      }}
    >
      <Text style={{fontWeight:"bold"}}>{item.title}</Text>
      <Text style={{color:"blue"}}>{item.lecturer}</Text>
      <Text>{item.description}</Text>
    </View>
  );
};
