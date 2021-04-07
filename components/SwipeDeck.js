import React, { useState } from "react";
import {
  View,
  Animated,
  Image,
  Dimensions,
  PanResponder,
  Text,
} from "react-native";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const threshold = Dimensions.get("window").width * 0.05;
const Users = [
  { id: "1", uri: require("../assets/img1.jpeg") },
  { id: "2", uri: require("../assets/img2.jpeg") },
  { id: "3", uri: require("../assets/img3.jpeg") },
  { id: "4", uri: require("../assets/img4.jpeg") },
];

const SwipeDeck = () => {
  const [currentIndex, setIndex] = useState(0);

  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (event, gesture) => true,
    onPanResponderMove: (event, gesture) => {
      position.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: (event, gesture) => {
      if (gesture.dx > threshold) {
        Animated.spring(position, {
          toValue: { x: width + 100, y: gesture.dy },
          useNativeDriver: false,
        }).start(() => onSwipeComplete());
      }
    },
  });

  const onSwipeComplete = () => {
    setIndex(currentIndex + 1);
    position.setValue({ x: 0, y: 0 });
  };
  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-width / 2, 0, width / 2],
      outputRange: ["-10deg", "0deg", "10deg"],
    });
    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    };
  };

  const opacityDislike = position.x.interpolate({
    inputRange: [-width / 2, 0, width / 2],
    outputRange: [1, 0, 0],
  });

  const opacityLike = position.x.interpolate({
    inputRange: [-width / 2, 0, width / 2],
    outputRange: [0, 0, 1],
  });

  const nextCardOpacity = position.x.interpolate({
    inputRange: [-width / 2, 0, width / 2],
    outputRange: [1, 0, 1],
  });

  const nextCardScale = position.x.interpolate({
    inputRange: [-width / 2, 0, width / 2],
    outputRange: [1, 0.8, 1],
  });

  const renderUser = () => {
    return Users.map((item, index) => {
      if (index < currentIndex) {
        return null;
      } else if (index === currentIndex) {
        return (
          <Animated.View
            key={index}
            {...panResponder.panHandlers}
            style={[
              getCardStyle(),
              {
                height: height - 80,
                width: width,
                padding: 10,
                position: "absolute",
              },
            ]}
          >
            <Animated.View
              style={{
                transform: [{ rotate: "-30deg" }],
                opacity: opacityLike,
                top: 50,
                left: 60,
                zIndex: 1000,
                position: "absolute",
              }}
            >
              <Text
                style={{
                  fontSize: 35,
                  color: "green",
                  borderColor: "green",
                  borderWidth: 1,
                  padding: 10,
                  fontWeight: "800",
                  backgroundColor: "black",
                }}
              >
                Like
              </Text>
            </Animated.View>
            <Animated.View
              style={{
                transform: [{ rotate: "30deg" }],
                opacity: opacityDislike,
                top: 50,
                right: 60,
                zIndex: 1000,
                position: "absolute",
              }}
            >
              <Text
                style={{
                  borderColor: "red",
                  borderWidth: 1,
                  borderColor: "red",
                  fontWeight: "800",
                  fontSize: 35,
                  padding: 10,
                  color: "red",
                  backgroundColor: "black",
                }}
              >
                Nope
              </Text>
            </Animated.View>

            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: "cover",
                borderRadius: 10,
              }}
              source={item.uri}
            />
          </Animated.View>
        );
      } else {
        return (
          <Animated.View
            key={index}
            style={[
              {
                height: height - 120,
                width: width,
                padding: 10,
                position: "absolute",
                opacity: nextCardOpacity,
                // transform: [{ scale: nextCardScale }],
              },
            ]}
          >
            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: "cover",
                borderRadius: 10,
              }}
              source={item.uri}
            />
          </Animated.View>
        );
      }
    }).reverse();
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 60 }}></View>
      {renderUser()}
      <View style={{ height: 60 }}></View>
    </View>
  );
};

export default SwipeDeck;
