import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Title } from "react-native-paper";

const StoryModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      ></Modal>
    </View>
  );
};

const styles = StyleSheet.create({});

export default StoryModal;
