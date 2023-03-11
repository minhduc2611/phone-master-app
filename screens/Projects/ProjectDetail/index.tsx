import React from "react";
import { Text } from "react-native";
import SafeViewWrapper from "@/components/SafeViewWrapper";

export default function ProjectDetail({ navigation, route } : any) {
  const { projectId } = route.params;
  console.log("projectId", projectId);
  return (
    <SafeViewWrapper>
      <Text>ProjectDetail {projectId}</Text>
    </SafeViewWrapper>
  );
}
