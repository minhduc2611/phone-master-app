import React from "react";
import { StyleSheet, View } from "react-native";

import SafeViewWrapper from "@/components/SafeViewWrapper";
const Home = ({ navigation }: any) => {
  return (
    <SafeViewWrapper navigation={navigation}>
      <View style={styles.titleContainer}>
        {/* <Text style={styles.title}>Home Screen</Text> */}
      </View>
    </SafeViewWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: "#000080",
    color: "white",
    alignItems: "center",
  },
  title: {
    color: "white",
  },
});
