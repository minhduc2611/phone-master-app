import React, { useRef, useState } from "react";
import {
  Animated, ScrollView, StyleSheet, Text, View
} from "react-native";
import {
  useSafeAreaInsets
} from "react-native-safe-area-context";
import SafeView from "../../components/SafeView";
import AddExpense from "./AddExpense";
import AddIcon from "./AddIcon";

const ScrollThrestHold = -50;

const Expenses = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();

  const scrollViewRef = useRef<any>(null);
  const modalRef = useRef<any>(null);
  const [animatedWidthValue] = useState(
    new Animated.Value(1)
  );

  const handleScroll = (event: any) => {
    // ScrollThrestHold la 100%
    // scrollPosition = 25 la 250%
    // x positon la ? %
    const scrollPosition = event.nativeEvent.contentOffset.y;
    const percent = (-1 * scrollPosition * 100) / (-1 * ScrollThrestHold);
    // console.log("scrollPosition", -1 * scrollPosition, "===>", percent, "%");

    if (scrollPosition < 0 && percent < 100) {
      // 0.5 la 100%
      // 0 la 0%
      // ? la x%

      Animated.timing(animatedWidthValue, {
        toValue: 1 + (0.5 * percent) / 100,
        duration: 10,
        useNativeDriver: false,
      }).start();
    }

    // if (scrollPosition < -1) {
    // //   console.log("get big", animatedWidthValue);

    //   Animated.timing(animatedWidthValue, {
    //     duration: 100,
    //     toValue: 1.5,
    //     useNativeDriver: false,
    //   }).start();
    // }
  };

  return (
    <SafeView navigation={navigation}>
      <View
        style={{
          margin: 15,
          height: 30,
          zIndex: 100,
          position: "absolute",
          right: insets.right,
          top: insets.top + 10,
          alignItems: "center",
        }}
      >
        <Animated.Text
          style={[
            {
              transform: [{ scale: animatedWidthValue }],
            },
          ]}
        >
          <AddIcon />
        </Animated.Text>
      </View>
      <View
        id="expense-total"
        style={{
          height: 150,
          alignItems: "center",
          alignContent: "center",
          paddingTop: 70,
        }}
      >
        <Text style={{ fontSize: 30 }}>4.500.000 VND</Text>
      </View>

      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        // stickyHeaderIndices={[0]}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        onMomentumScrollBegin={(e) => {
          if (e.nativeEvent.contentOffset.y < ScrollThrestHold) {
            modalRef.current?.setModalVisible(true);
          }
        }}
      >
        <View style={{ backgroundColor: "gray", height: 100, padding: 10 }}>
          <Text>Cơm tấm: 500.000 VND</Text>
        </View>
        <View style={{ backgroundColor: "white", height: 100, padding: 10 }}>
          <Text>Cơm tấm: 500.000 VND</Text>
        </View>
        <View style={{ backgroundColor: "gray", height: 100, padding: 10 }}>
          <Text>Cơm tấm: 500.000 VND</Text>
        </View>
        <View style={{ backgroundColor: "white", height: 100, padding: 10 }}>
          <Text>Cơm tấm: 500.000 VND</Text>
        </View>
        <View style={{ backgroundColor: "gray", height: 100, padding: 10 }}>
          <Text>Cơm tấm: 500.000 VND</Text>
        </View>
        <View style={{ backgroundColor: "white", height: 100, padding: 10 }}>
          <Text>Cơm tấm: 500.000 VND</Text>
        </View>
        <View style={{ backgroundColor: "gray", height: 100, padding: 10 }}>
          <Text>Cơm tấm: 500.000 VND</Text>
        </View>
        <View style={{ backgroundColor: "white", height: 100, padding: 10 }}>
          <Text>Cơm tấm: 500.000 VND</Text>
        </View>
        <View style={{ backgroundColor: "gray", height: 100, padding: 10 }}>
          <Text>Cơm tấm: 500.000 VND</Text>
        </View>
        <View style={{ backgroundColor: "white", height: 100, padding: 10 }}>
          <Text>Cơm tấm: 500.000 VND</Text>
        </View>
        <AddExpense ref={modalRef} />
      </ScrollView>
    </SafeView>
  );
};

export default Expenses;

const styles = StyleSheet.create({
  box: {
    height: 30,
    width: 30,
    position: "relative",
  },
  container: {},
  scrollView: {
    flex: 1,
  },
  icon: {
    // position: "fixed",
    // top: 0,
    // right: 0
  },
  titleContainer: {
    backgroundColor: "#000080",
    color: "white",
    alignItems: "center",
  },
  title: {
    color: "#fff",
  },
  //   scrollView: {},


  green: {
    height: 100,
    width: "100%",
    backgroundColor: "green",
  },
  red: {
    height: 300,
    width: "100%",
    backgroundColor: "red",
  },
  blue: {
    position: "absolute",
    height: 300,
    width: "100%",
    backgroundColor: "blue",
  },
  animatedViewsPositioner: {
    position: "relative",
  },
});
