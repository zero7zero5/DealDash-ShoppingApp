import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Cart from "./../screens/Cart";
import Account from "./../screens/Account";
import StackNavigation from "./StackNavigation";
import OrderList from "../screens/OrderList";
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
            <MaterialCommunityIcons
              color={color}
              size={size}
              name="home-outline"
            />
          ),
        }}
        name="Home"
        component={StackNavigation}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name="cart-outline"
            />
          ),
        }}
        name="Cart"
        component={Cart}
      />
      <Tab.Screen
        options={{
          title: "My Orders",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name="cube-outline"
            />
          ),
        }}
        name="MyOrders"
        component={OrderList}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name="account-outline"
            />
          ),
        }}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
