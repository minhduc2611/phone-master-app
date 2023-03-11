import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import MainView from "../MainView";
const SafeViewWrapper = ({ children, keyboardDissmissabled = false }: any) => {
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

export default SafeViewWrapper;
