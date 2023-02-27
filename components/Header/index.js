import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Routes } from "../../common/constants";

const Header = ({ navigation }) => {
  const routes = navigation.getState().routes;
  const len = routes.length;
  const name = routes[len - 1]["name"];
  // console.log("navigation", routes.map(i => i.name));
  // console.log("navigation", routes[len - 1]["name"]);
  return (
    <View style={styles.container}>
      {Routes.map((route, idx) => (
        <Button
          key={idx}
          color={name !== route.name ? "gray" : "blue" }
          title={`${route.title}`}
          onPress={() => navigation.navigate(route.name)}
        />
      ))}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",

    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
