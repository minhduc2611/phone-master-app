import { Picker } from "@react-native-picker/picker";
import React, { useImperativeHandle, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Modal,
  Alert,
  Pressable,
  Button,
  TextInput,
} from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import { useManageProject } from "../../../api/projects/hooks";
import { Project, ProjectTypes } from "../../../common/type";
import MainView from "../../../components/MainView";
import SafeView from "../../../components/SafeView";

function AddProjectComponent(props: any, ref: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [projectType, setProjectType] = useState<ProjectTypes>();
  const { addOneProject } = useManageProject();
  useImperativeHandle(ref, () => ({
    setModalVisible: setModalVisible,
  }));
  const handleAddProject = () => {
    if (name && projectType) {
      addOneProject(name, projectType);
      setModalVisible(!modalVisible);
    }
  };
  return (
    <View ref={ref}>
      <GestureRecognizer
        style={{ flex: 1 }}
        onSwipeDown={() => setModalVisible(false)}
      >
        <Modal
          animationType="slide"
          // transparent={true}
          visible={modalVisible}
          presentationStyle={"pageSheet"}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalView}>
            {/* CANCEL BUTTON */}
            <View style={{ flexDirection: "row" }}>
              <Button
                title="cancel"
                onPress={() => {
                  setModalVisible(false);
                }}
              ></Button>
            </View>
            <Text style={styles.label}>Project Name</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              style={styles.input}
              onBlur={() => console.log("ON BLUR")}
              onFocus={() => console.log("ON FOCUS")}
            />
            <Picker
              selectedValue={projectType}
              
              onValueChange={(itemValue) => setProjectType(itemValue)}
            >
              {Object.entries(ProjectTypes).map(([key, value]) => (
                <Picker.Item key={key} label={value} value={value} />
              ))}
            </Picker>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                console.log('add', {name, projectType});
                
                handleAddProject();

              }}
            >
              <Text style={styles.textStyle}>Add</Text>
            </Pressable>
          </View>
        </Modal>
      </GestureRecognizer>
    </View>
  );
}
const ProjectAdd = React.forwardRef(AddProjectComponent);
export default ProjectAdd;

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    color: "white",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
});
