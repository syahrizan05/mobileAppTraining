import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import courses from "../data/courses";

export default function ProfileScreen() {
  const [name, setName] = useState(null);

  const showContent=()=>{
      Alert.alert(`nama : ${name}`)
  }

  return (
    <View style={{ flex: 1 }}>
      <Header title={"Profile"} />
      <View style={{ flex: 5 }}>
        <Text
          style={{
            marginHorizontal: 10,
            padding: 5,
            marginBottom: 10,
          }}
        >
          Name :
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "lightgrey",
            marginHorizontal: 10,
            padding: 5,
            marginBottom: 10,
          }}
          onChangeText={(value) => setName(value)}
          value={name}
        />

        <TouchableOpacity
          style={{
            marginHorizontal: 10,
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "seagreen",
          }}
          onPress={()=>showContent()}
        >
          <Text style={{ fontSize: 17, color: "white" }}>SUBMIT</Text>
        </TouchableOpacity>

      </View>
   
    </View>
  );
}

const CourseCard = ({ item }) => {
  return (
    <View
      style={{
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "lightgrey",
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: "ivory",
      }}
    >
      <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
      <Text style={{ color: "blue" }}>{item.lecturer}</Text>
      <Text>{item.description}</Text>
    </View>
  );
};
