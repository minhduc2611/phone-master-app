import React from "react";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import Header from "../../components/Header";

import SafeView from "../../components/SafeView";
const Home = ({ navigation }) => {
  return (
    <SafeView>
      <Header navigation={navigation} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Home Screen</Text>
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
