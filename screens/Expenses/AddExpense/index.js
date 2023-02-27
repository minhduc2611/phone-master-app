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
} from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import SafeView from "../../../components/SafeView";

function AddExpenseComponent(props, ref) {
  const [modalVisible, setModalVisible] = useState(false);
  useImperativeHandle(ref, () => ({
    setModalVisible: setModalVisible,
  }));
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
            <View style={{flexDirection: 'row'}}>
              <Button
                title="cancel"
                style={styles.closeButton}
                onPress={() => {
                  setModalVisible(false);
                }}
              ></Button>
            </View>

            <Text style={styles.modalText}>Cơm tấm: 500.000 VND</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Add</Text>
            </Pressable>
          </View>
          {/* <SafeView style={styles.centeredView}>
          </SafeView> */}
        </Modal>
      </GestureRecognizer>
    </View>
  );
}

export default AddExpense = React.forwardRef(AddExpenseComponent);

const styles = StyleSheet.create({
  closeButton:{
    flexDirection: ''
  },
  centeredView: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    //   margin: 20,
    backgroundColor: "white",
    //   borderRadius: 20,
    color: "white",
    // padding: 35,
    // width: "100%",
    // height: "100%",
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
});
