import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { Routes } from "../../common/constants";

const Header = ({ navigation }: any) => {
  console.log("navigation", navigation);
  if (!navigation) return <></>;
  const routes = navigation.getState().routes;
  const len = routes.length;
  const name = routes[len - 1]["name"];
  // console.log("navigation", routes[len - 1]["name"]);
  return (
    <View style={styles.container}>
      {Routes.map((route, idx) => (
        // <Button
        //   key={idx}
        //
        //   title={`${route.title}`}
        //   onPress={() => navigation.navigate(route.name)}
        // >

        // </Button>
        <Icon
          name={route.icon}
          color={name !== route.name ? "#bab9c0" : "#1c1a33"}
          style={{ margin: 0, padding: 10 }}
          key={idx}
          size={25}
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
    justifyContent: "space-evenly",
    flexDirection: "row",

    // backgroundColor: "#fff",
    alignItems: "center",
  },
});
