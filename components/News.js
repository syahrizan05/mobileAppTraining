import React, { useEffect, useState } from "react";
import { View, FlatList, Text, ImageBackground } from "react-native";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";
import courses from "../data/courses";
const apiEndPoint =
  "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=74b5d3f148b8421ebcbfcf34258ba99c";

export default function News({ navigation }) {
  const getNewsList = async () => {
    try {
      const response = await axios.get(apiEndPoint);
      console.log(JSON.stringify(response.data.articles, null, 2));
      setNewsList(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const [newsList, setNewsList] = useState(null);

  useEffect(() => {
    getNewsList();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={newsList}
        renderItem={({ item }) => <CourseCard item={item} />}
        horizontal
      />
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
        width: 200,
      }}
    >
      <ImageBackground
        source={{ uri: item.urlToImage }}
        style={{ width: 200, height: 200 }}
      >
        <Text style={{ backgroundColor: "white" }}>{item.title}</Text>
      </ImageBackground>

      {/* <Text>{item.description}</Text> */}
    </View>
  );
};
