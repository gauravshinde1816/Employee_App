import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Card = ({ employee, img }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: `https://source.unsplash.com/random/${employee.id}`,
          }}
        />
        <View style={styles.text}>
          <Text>{employee.occupation}</Text>
          <Text>{employee.company}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     backgroundColor: "#fff",
  //     marginTop: 60,
  //   },
  card: {
    flexDirection: "row",
    justifyContent: "space-around",
    elevation: 2,
    shadowColor: "grey",
    padding: 20,
    borderRadius: 2,
    margin: 10,
  },
  image: {
    borderRadius: 60 / 2,
    height: 60,
    width: 60,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default Card;
