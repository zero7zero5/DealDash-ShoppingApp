import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, StatusBar, FlatList } from "react-native";
import CartItem from "../components/CartItem";
import AppButton from "./../components/Button";
import AuthContext from "../context/AuthContext";
import api from "./../api/api";
import { ToastAndroid } from "react-native";
import { useIsFocused } from "@react-navigation/native";
const Cart = ({ navigation }) => {
  const context = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [cost, setCost] = useState(0);
  const [refreshing, onRefreshing] = useState(false);
  const isFocused = useIsFocused();
  async function getCartItems() {
    const result = await api.get(`user/${context.user._id}/cart`);
    setCart(result.data);
  }
  useEffect(() => {
    getCartItems();
  }, [isFocused]);
  useEffect(() => {
    let sum = 0;
    cart.forEach((i) => (sum += i.cost));
    setCost(sum);
  }, [cart.length]);
  handleDelete = async (id) => {
    const newCart = cart.filter((i) => i.productID != id);
    setCart(newCart);
    await api.delete(`user/${context.user._id}/cart/${id}`);
  };
  const order = async () => {
    if (cart.length === 0)
      return ToastAndroid.show("Cart is empty", ToastAndroid.SHORT);
    const { data } = await api.get(`user/${context.user._id}/orders`);
    const newCart = cart.concat(data);
    await api.put(`user/${context.user._id}/orders`, { items: newCart });
    ToastAndroid.show("Ordered Placed successfully", ToastAndroid.SHORT);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(i) => i._id}
        refreshing={refreshing}
        onRefresh={() => getCartItems()}
        renderItem={({ item }) => (
          <CartItem
            id={item.productID}
            color={item.color}
            image={item.imageURL}
            name={item.productName}
            size={item.size}
            cost={item.cost}
            onPress={(id) => handleDelete(id)}
          />
        )}
      />
      <View style={styles.amountContainer}>
        <View style={styles.price}>
          <Text style={styles.text}>Total:</Text>
          <Text style={styles.text}>${cost}</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.text}>Shipping:</Text>
          <Text style={styles.text}>$0</Text>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.price}>
        <Text style={styles.text}>Grand Total:</Text>
        <Text style={styles.text}>${cost}</Text>
      </View>
      <AppButton onPress={order} title={"Checkout"} />
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
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    color: "#757575",
    fontWeight: "500",
  },
  line: {
    width: "100%",
    borderWidth: 0.5,
    borderColor: "#C0C0C0",
    marginTop: 20,
  },
  amountContainer: {
    marginTop: 20,
  },
});
export default Cart;
