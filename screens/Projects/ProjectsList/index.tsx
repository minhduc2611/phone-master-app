import React, { useRef } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { useFetchProject } from "../../../api/projects/hooks";
import SafeView from "../../../components/SafeView";
import ProjectAdd from "../ProjectAdd";
import SwipeableRow from "../SwipeableRow";
const TaskItem = ({ item: { name, is_finished, due_date } }: any) => {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskTitle}>
        {is_finished ? "🌱" : "🌶️"} {name}
      </Text>
      <Text style={styles.taskTitleSecond}> Due: {due_date}</Text>
    </View>
  );
};
const Item = ({
  toDetail,
  item: { id, name, inProgress, type, tasks },
}: any) => (
  <View style={styles.item}>
    <Text onPress={() => toDetail(id)} style={styles.title}>
      {inProgress ? "🟢" : "🔴"} {name}
    </Text>
    <Text style={styles.titleSecond}> {type}</Text>
    <View style={styles.tasksContainer}>
      <FlatList
        data={
          tasks && tasks.length > 0
            ? tasks.filter((el: any) => el !== undefined)
            : []
        }
        renderItem={({ item }) => {
          return <TaskItem item={item} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  </View>
);

const ProjectsList = ({ navigation }: any) => {
  const { projects, loading } = useFetchProject();
  console.log("loading", loading);
  console.log("projects", projects);
  const toDetail = (projectId: any) => {
    navigation.navigate("ProjectDetail", {
      projectId,
    });
  };
  const modalRef = useRef<any>(null);
  return (
    <SafeView>
      <ProjectAdd ref={modalRef} />
      <Button
        title="Add"
        onPress={() => modalRef.current?.setModalVisible(true)}
      />

      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={projects}
          renderItem={({ item }) => {
            return (
              <>
                <SwipeableRow>
                  <Item toDetail={toDetail} item={item} />
                </SwipeableRow>
              </>
            );
          }}
          keyExtractor={(item: any) => item.id}
        />
      )}
    </SafeView>
  );
};

export default ProjectsList;

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
