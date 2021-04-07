import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Title, Button } from "react-native-paper";

import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import StoryItem from "./StoryItem";

const Profile = () => {
  const stories = [
    {
      id: "1",
      location: "Kolhapur",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: "2",
      location: "Pune",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: "3",
      location: "Sangli",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: "4",
      location: "Satara",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
  ];
  return (
    <View style={styles.root}>
      <Image
        style={{
          height: "35%",
          marginLeft: -20,
          marginRight: -30,
          marginTop: -60,
          marginBottom: -10,
          transform: [{ rotate: "5deg" }],
        }}
        source={{
          uri:
            "https://images.unsplash.com/photo-1563801920606-d1964f3d0927?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        }}
      />
      <View style={{ alignItems: "center", marginTop: -70 }}>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          }}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 5 }}>
        <Title>Jhon Doe</Title>
        <Text style={{ fontWeight: "bold" }}>Active Volunteer</Text>
      </View>
      <View style={styles.stats}>
        <View>
          <Text style={styles.data}>12</Text>
          <Text>posts</Text>
        </View>
        <View>
          <Text style={styles.data}>150</Text>
          <Text>Followers</Text>
        </View>
        <View>
          <Text style={styles.data}>250</Text>
          <Text>Following</Text>
        </View>
      </View>
      <View style={styles.bio}>
        <Text style={{ fontWeight: "bold" }}>
          Helping, understanding, and serving others is the most important
          thing.📖
        </Text>
      </View>
      <View style={{ flexDirection: "row", margin: 25 }}>
        <FontAwesome5 name="hands-helping" size={24} color="green" />
        <Text
          style={{
            paddingHorizontal: 20,
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: 1,
            fontSize: 20,
          }}
        >
          Recent Contributions
        </Text>
      </View>
      <ScrollView horizontal={true} style={{ paddingHorizontal: 5 }}>
        <View style={{ flexDirection: "row" }}>
          {stories.map((story) => (
            <StoryItem
              style={{ marginHorizontal: 5 }}
              key={story.id}
              story={story}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  stats: {
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "space-evenly",
  },
  data: {
    fontWeight: "bold",
    textAlign: "center",
  },
  bio: {
    alignItems: "center",
    padding: 40,
    elevation: 1,
    fontWeight: "bold",
  },
});
export default Profile;
