import React from "react";
import { StyleSheet, View } from "react-native";

import SafeView from "../../components/SafeView";
const Home = ({ navigation } : any) => {
  return (
    <SafeView navigation={navigation}>
      <View style={styles.titleContainer}>
        {/* <Text style={styles.title}>Home Screen</Text> */}
      </View>
    </SafeView>
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
