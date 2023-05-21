import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, StatusBar, FlatList } from "react-native";
import OrderItem from "../components/OrderItem";
import { useIsFocused } from "@react-navigation/native";
import AuthContext from "../context/AuthContext";
import api from "../api/api";

const OrderList = () => {
  const [item, setItem] = useState([]);
  const context = useContext(AuthContext);
  const focused = useIsFocused();
  useEffect(() => {
    const getItems = async () => {
      const result = await api.get(`user/${context.user._id}/orders`);
      setItem(result.data);
      //console.log(item);
    };
    getItems();
  }, []);
  useEffect(() => {
    const getItems = async () => {
      const result = await api.get(`user/${context.user._id}/orders`);
      setItem(result.data);
      //console.log(item);
    };
    getItems();
  }, [focused]);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Orders</Text>
      <FlatList
        data={item}
        keyExtractor={(i) => Math.random(1000)}
        renderItem={({ item }) => (
          <OrderItem
            id={item.productID}
            color={item.color}
            image={item.imageURL}
            name={item.productName}
            size={item.size}
            cost={item.cost}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf1f3",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 20,
  },
});
export default OrderList;
