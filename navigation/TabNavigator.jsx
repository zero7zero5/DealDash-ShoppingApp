import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Cart from "./../screens/Cart";
import Account from "./../screens/Account";
import StackNavigation from "./StackNavigation";
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#E96E6E",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons color={color} size={size} name="home" />
          ),
        }}
        name="Home"
        component={StackNavigation}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons color={color} size={size} name="cart" />
          ),
        }}
        name="Cart"
        component={Cart}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons color={color} size={size} name="account" />
          ),
        }}
        name="Account"
        component={Account}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
