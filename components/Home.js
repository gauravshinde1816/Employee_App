import { StatusBar } from "expo-status-bar";
import React from "react";
import Card from "./Card";
import { FAB } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Home = () => {
  const data = [
    {
      id: "1",
      occupation: "Sr. Developer",
      company: "Sigm Tenant Pvt. Limited",
    },
    {
      id: "2",
      occupation: "Jr. Web Developer",
      company: "BlackCoffer Pvt. Limited",
    },
    {
      id: "3",
      occupation: "Flutter Developer",
      company: "ThingsGoSpecial Pvt. Limited",
    },
    {
      id: "4",
      occupation: "Flutter Developer",
      company: "ThingsGoSpecial Pvt. Limited",
    },
    {
      id: "5",
      occupation: "Flutter Developer",
      company: "ThingsGoSpecial Pvt. Limited",
    },
    {
      id: "6",
      occupation: "Flutter Developer",
      company: "ThingsGoSpecial Pvt. Limited",
    },
  ];
  return (
    <View>
      <ScrollView>
        {data.map((item) => (
          <Card key={item.id} employee={item} />
        ))}
      </ScrollView>
      <FAB style={styles.fab} icon="plus" />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "blue",
  },
});

export default Home;
