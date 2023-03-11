import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import moment from "moment";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import SafeViewWrapper from "@/components/SafeViewWrapper";

const Todos = ({ navigation }: any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [todoType, setTodoType] = useState("Personal");
  const handleSave = () => {
    // Save the todo item
  };

  const handleDateChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || dueDate;
    setShowDatePicker(false);
    setDueDate(currentDate);
  };

  return (
    <SafeViewWrapper navigation={navigation} keyboardDissmissabled>
      <View style={styles.container}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} value={title} onChangeText={setTitle} />
        <Text style={styles.label}>Description</Text>

        <TextInput
          value={description}
          onChangeText={setDescription}
          style={{ ...styles.input, flex: 1, padding: 10, paddingTop: 12, paddingBottom: 12 }}
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
            mode={"datetime" as any}
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
    </SafeViewWrapper>
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
