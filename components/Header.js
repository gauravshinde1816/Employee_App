import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Header = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri:
            "https://images.unsplash.com/photo-1541576980233-97577392db9a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        }}
      />
      <Text>Header Components</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  image: {
    borderRadius: 50 / 2,
    height: 50,
    width: 50,
  },
});
export default Header;
