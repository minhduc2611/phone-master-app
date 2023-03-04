import React from "react";
import { Text } from "react-native";
import SafeView from "../../../components/SafeView";

export default function ProjectDetail({ navigation, route } : any) {
  const { projectId } = route.params;
  console.log("projectId", projectId);
  return (
    <SafeView>
      <Text>ProjectDetail {projectId}</Text>
    </SafeView>
  );
}
