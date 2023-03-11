import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFetchProject } from "../../api/projects/hooks";

import SafeView from "../../components/SafeView";
import { projects } from "./mock";
import ProjectDetail from "./ProjectDetail";
import ProjectsList from "./ProjectsList";
const TaskItem = ({ item: { name, is_finished, due_date } } : any) => {
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
const Item = ({ item: { id, name, inProgress, type, tasks } } : any) => (
  <View style={styles.item}>
    <Text style={styles.title}>
      {inProgress ? "🟢" : "🔴"} {name}
    </Text>
    <Text style={styles.titleSecond}> {type}</Text>
    <View style={styles.tasksContainer}>
      <FlatList
        data={tasks ? tasks.filter((el : any) => el !== undefined) : []}
        renderItem={({ item }) => {
          return <TaskItem item={item} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  </View>
);
const Stack = createNativeStackNavigator();

const Projects = ({ navigation } : any) => {
  return (
    <Stack.Navigator
      initialRouteName="ProjectsList"
      screenOptions={{
        headerShown: false,
        // animationEnabled: false,
        animation: "none",
      }}
    >
      <Stack.Screen
        name={"ProjectsList"}
        component={ProjectsList}
        options={{ title: "ProjectsList" }}
      />
      <Stack.Screen
        name={"ProjectDetail"}
        component={ProjectDetail}
        options={{ title: "ProjectDetail" }}
      />
    </Stack.Navigator>
  );
};

export default Projects;

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: "#000080",
    color: "white",
    alignItems: "center",
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
