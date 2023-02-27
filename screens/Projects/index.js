import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
} from "react-native";

import SafeView from "../../components/SafeView";
import { projects } from "./mock";
const TaskItem = ({item: {name, is_finished, due_date}}) => {
  // console.log("taskitem", item);

  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskTitle}>
        {is_finished ? "🌱" : "🌶️"} {name}
      </Text>
      <Text style={styles.taskTitleSecond}> Due: {due_date}</Text>
    </View>
  );
};
const Item = ({ item: { id, name, inProgress, type, tasks } }) => (
  <View style={styles.item}>
    <Text style={styles.title}>
      {inProgress ? "🟢" : "🔴"} {name}
    </Text>
    <Text style={styles.titleSecond}> {type}</Text>
    <View style={styles.tasksContainer}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => {
          return <TaskItem item={item} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  </View>
);
const Projects = ({ navigation }) => {
  return (
    <SafeView navigation={navigation}>
      <View style={styles.titleContainer}>
        {/* <Text style={styles.title}>Projects Screen</Text> */}
      </View>
      <FlatList
        data={projects}
        renderItem={({ item }) => {
          return <Item item={item} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeView>
  );
};

export default Projects;

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: "#000080",
    color: "white",
    alignItems: "center",
  },
  title: {
    // color: "white",
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },
  titleSecond: {
    fontSize: 18,
    color: "gray",
  },
  taskTitle: {
    fontSize: 15,
  },
  taskTitleSecond: {
    fontSize: 13,
    color: "gray",
  },
  taskItem: {
    padding: 10,
  },
  tasksContainer: {
    marginLeft: 15,
  },
});
