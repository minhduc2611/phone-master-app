import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Animated,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Header from "../../components/Header";
import SafeView from "../../components/SafeView";
import AddExpense from "./AddExpense";
import Icon from "react-native-vector-icons/Ionicons";
import { Image, Svg } from "react-native-svg";
import AddIcon from "./AddIcon";

const ScrollThrestHold = -50;

const Expenses = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const scrollViewRef = useRef(null);
  const modalRef = useRef(null);
  const [showBlueView, setShowBlueView] = useState(false);
  const [animatedWidthValue, setAnimatedWidthValue] = useState(
    new Animated.Value(1)
  );

  const handleScroll = (event) => {
    // ScrollThrestHold la 100%
    // scrollPosition = 25 la 250%
    // x positon la ? %
    const scrollPosition = event.nativeEvent.contentOffset.y;
    const percent = (-1 * scrollPosition * 100) / (-1 * ScrollThrestHold);
    console.log("scrollPosition", -1 * scrollPosition, "===>", percent, "%");

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
    <SafeView>
      <Header navigation={navigation}></Header>
      {/* <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.text}>Expenses Screen</Text>
        </View>
        
      </ScrollView> */}
      {/* <SafeAreaView style={styles.container}> */}
      {/* <View style={styles.titleContainer}>
        <Text style={styles.title}>Expenses Screen</Text>
      </View> */}
      <View
        style={{
          margin: 15,
          //   backgroundColor: "yellow",
          //   flex: 1,
          justifyContent: "end",
          height: 30,
          //   width: 30,
          zIndex: 100,
          position: "absolute",
          right: insets.right,
          top: insets.top + 40,

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
          alignItems: 'center',
          alignContent: 'center',
          paddingTop: 70
        }}
      >
        <Text style={{fontSize: 30}} >4.500.000 VND</Text>
      </View>
      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        // stickyHeaderIndices={[0]}
        // horizontal={true}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        onMomentumScrollBegin={(e) => {
          if (e.nativeEvent.contentOffset.y < ScrollThrestHold) {
            console.log(
              "onMomentumScrollBegin OPEN THE MODALLLLL",
              e.nativeEvent.contentOffset
            );
            console.log("scrollViewRef", scrollViewRef.current.contentOffset);
            console.log("modalRef", modalRef.current.setModalVisible(true));
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

      {/* </SafeAreaView> */}
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
    backgroundColor: "pink",
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

  scrollView: {
    flex: 1,
  },
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
