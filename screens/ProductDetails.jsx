import React, { useContext, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  Text,
  ToastAndroid,
} from "react-native";
import AppButton from "../components/Button";
import SizeList from "../components/SizeList";
import ColorList from "../components/ColorList";
import AuthContext from "../context/AuthContext";
import api from "../api/api";

const sizeArray = [
  { name: "S", id: 1 },
  { name: "M", id: 2 },
  { name: "X", id: 3 },
  { name: "XL", id: 4 },
];

const colorArray = [
  { name: "grey", id: 1, color: "#91A1B0" },
  { name: "red", id: 2, color: "#B11D1D" },
  { name: "blue", id: 3, color: "#1F44A3" },
  { name: "brown", id: 4, color: "#9F632A" },
  { name: "green", id: 5, color: "#1D752B" },
  { name: "black", id: 6, color: "#000000" },
];

const ProductDetails = ({ route, navigation }) => {
  const context = useContext(AuthContext);
  const [size, setSize] = useState("S");
  const [color, setColor] = useState("grey");
  handleSubmit = async () => {
    const obj = {
      productID: route.params._id,
      productName: route.params.name,
      imageURL: route.params.imageURL,
      size: size,
      color: color,
      cost: route.params.cost,
    };
    const result = await api.post(`user/${context.user._id}/cart`, obj);
    if (!result.ok)
      return ToastAndroid.show("Item Already in the cart", ToastAndroid.SHORT);
    navigation.navigate("Products");
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: route.params.imageURL,
        }}
        style={styles.image}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.text}>{route.params.name}</Text>
          <Text style={[styles.text, { fontWeight: "700" }]}>
            ${route.params.cost}
          </Text>
        </View>
        <View>
          <Text style={styles.text}>Size</Text>
          <View style={styles.sizes}>
            <SizeList
              onPress={(i) => setSize(i.name)}
              sizes={sizeArray}
              currentSize={size}
            />
          </View>
        </View>
        <View style={styles.colorContainer}>
          <Text style={styles.text}>Colors</Text>
          <View style={styles.colors}>
            <ColorList
              onPress={(i) => setColor(i.name)}
              colors={colorArray}
              currentColor={color}
            />
          </View>
        </View>
        <AppButton onPress={handleSubmit} title={"Add To Cart"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fdf1f3",
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: 413,
    resizeMode: "contain",
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    color: "#4D4C4C",
    marginBottom: 15,
  },

  colors: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomContainer: {
    paddingHorizontal: 20,
    justifyContent: "space-around",
    flex: 1,
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
export default ProductDetails;
