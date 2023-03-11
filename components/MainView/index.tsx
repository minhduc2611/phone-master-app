import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DismissKeyboardView from "@/hoc/DismissKeyboardView";
const MainView = ({ keyboardDissmissabled = false, style, children }: any) => {
  const insets = useSafeAreaInsets();
  const renderView = (
    <View style={{ ...style, ...styles.container,
    //  paddingTop: insets.top 
     }}>
      {children}
    </View>
  );
  return keyboardDissmissabled ? (
    <DismissKeyboardView>{renderView}</DismissKeyboardView>
  ) : (
    <>{renderView}</>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});

export default MainView;
