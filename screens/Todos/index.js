import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import moment from "moment";
import Header from "../../components/Header";
import SafeView from "../../components/SafeView";
import DismissKeyboardView from "../../hoc/DismissKeyboardView";

const Todos = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [todoType, setTodoType] = useState("Personal");

  const handleSave = () => {
    // Save the todo item
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dueDate;
    setShowDatePicker(false);
    setDueDate(currentDate);
  };

  return (
    <SafeView>
      <DismissKeyboardView>
      <Header navigation={navigation}></Header>
      
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Todos Screen</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} value={title} onChangeText={setTitle} />
        <Text style={styles.label}>Description</Text>
        
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
            styles={{ flex: 1, padding: 10, paddingTop: 12, paddingBottom: 12 }}
            maxHeight={240}
            onBlur={() => console.log("ON BLUR")}
            onFocus={() => console.log("ON FOCUS")}
          />

        <Text style={styles.label}>Due date</Text>
        <Button
          title={moment(dueDate).format("YYYY-MM-DD HH:mm")}
          onPress={() => setShowDatePicker(true)}
        />
        {showDatePicker && (
          <DateTimePicker
            value={dueDate}
            mode="datetime"
            is24Hour={true}
            display="default"
            onChange={handleDateChange}
          />
        )}
        <Text style={styles.label}>Type</Text>
        <Picker
          selectedValue={todoType}
          onValueChange={(itemValue) => setTodoType(itemValue)}
        >
          <Picker.Item label="Personal" value="Personal" />
          <Picker.Item label="Work" value="Work" />
          <Picker.Item label="Shopping" value="Shopping" />
        </Picker>
        <Button title="Save" onPress={handleSave} />
      </View>
      </DismissKeyboardView>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: "#000080",
    color: "white",
    alignItems: "center",
  },
  title: {
    color: "#fff",
  },
  container: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
});

export default Todos;
