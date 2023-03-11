import React from "react";
import { Animated, StyleSheet, View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

interface Props {
  children: React.ReactNode;
}
const SwipeableRow: React.FC<Props> = ({ children }) => {
  const renderLeftActions = (
    progress: Animated.AnimatedInterpolation<string | number>,
    dragX: Animated.AnimatedInterpolation<string | number>
  ) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0 , 0, 1],
    });
    const close = () => {};
    return (
      <RectButton style={[styles.leftAction]} onPress={close}>
        <Animated.Text
          style={[

            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          Archive
        </Animated.Text>
      </RectButton>
    );
  };
  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<string | number>,
    dragX: Animated.AnimatedInterpolation<string | number>
  ) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    const close = () => {};
    return (
      <>
        <RectButton style={{ ...styles.leftAction }} onPress={close}>
          <Animated.Text style={[styles.actionText]}>Archive</Animated.Text>
        </RectButton>
      </>
    );
  };
  return (
    <Swipeable
      renderRightActions={renderRightActions}
    //   renderLeftActions={renderLeftActions}
    >
      {children}
    </Swipeable>
  );
};

export default SwipeableRow;

const styles = StyleSheet.create({
  leftAction: {
    backgroundColor: "red",
    width:100,
  },
  actionText: {
    color: "white",
  },
  div: {
    backgroundColor: "gray",
    height: 100,
  },
});
