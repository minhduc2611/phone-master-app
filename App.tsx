import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { Suspense } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { Routes } from "./common/constants";
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Suspense fallback={<Text>Loading ...</Text>}>
          <Tab.Navigator
            initialRouteName="Home"
            activeColor="#1c1a33"
            inactiveColor="#bab9c0"
            barStyle={{ backgroundColor: "transparent" }}
          >
            {Routes.map((route, idx) => (
              <Tab.Screen
                key={idx}
                name={route.name}
                component={route.conponent}
                options={{
                  tabBarLabel: route.name,
                  tabBarIcon: ({ color }) => (
                    <Icon name={route.icon} color={color} size={26} />
                  ),
                }}
              />
            ))}
          </Tab.Navigator>
        </Suspense>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
