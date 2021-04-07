import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Home from "./components/Home";
import CreateEmployee from "./components/CreateEmployee";
import Profile from "./components/Profile";
import SwipeDeck from "./components/SwipeDeck";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <CreateEmployee /> */}
      <Profile />
      {/* <SwipeDeck /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingTop: 30,
  },
});
