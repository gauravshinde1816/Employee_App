import React, { useState } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { TextInput, Button } from "react-native-paper";
const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [profile, setProfile] = useState("");
  const [modal, setModal] = useState(false);
  const [phone, setPhone] = useState("");
  return (
    <View style={styles.root}>
      <Text style={styles.header}>New Employee</Text>
      <TextInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        label="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label="salary"
        value={salary}
        keyboardType="decimal-pad"
        onChangeText={(text) => setSalary(text)}
      />
      <TextInput
        label="profile"
        value={profile}
        onChangeText={(text) => setProfile(text)}
      />
      <TextInput
        label="phone"
        value={phone}
        keyboardType="decimal-pad"
        onChangeText={(text) => setPhone(text)}
      />
      <Button
        style={{ marginVertical: 10 }}
        icon="upload"
        mode="contained"
        onPress={() => setModal(true)}
      >
        Upload Image
      </Button>
      <Button
        style={{ marginTop: 10 }}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Submit
      </Button>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(!modal);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.upload}>
            <Button
              style={{ marginTop: 10, backgroundColor: "blue" }}
              mode="contained"
              icon="camera"
              onPress={() => setModal(false)}
            >
              Take picture
            </Button>
            <Button
              style={{ marginTop: 10, backgroundColor: "blue" }}
              icon="image"
              mode="contained"
              onPress={() => setModal(false)}
            >
              Gallery
            </Button>
          </View>
          <Button
            style={{
              marginTop: 10,

              marginHorizontal: 50,
            }}
            mode="outlined"
            onPress={() => setModal(false)}
          >
            cancel
          </Button>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 15,
  },
  header: {
    textAlign: "center",
    marginVertical: 15,
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "uppercase",

    letterSpacing: 2,
  },
  modalView: {
    position: "absolute",
    bottom: 1,
    width: "100%",
    padding: 20,
    backgroundColor: "white",
    elevation: 2,
  },
  upload: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 25,
  },
});
export default CreateEmployee;
