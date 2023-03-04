import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import React from "react";
import { View } from "react-native";
import Header from "../Header";
import MainView from "../MainView";

const SafeView = ({ children, keyboardDissmissabled = false }: any) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "space-between",
        // alignItems: "center",

        // Paddings to handle safe area
        flexDirection: "column-reverse",
        paddingTop: insets.top,
        // paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <MainView keyboardDissmissabled={keyboardDissmissabled}>
        {children}
      </MainView>
    </View>
  );
};

export default SafeView;
