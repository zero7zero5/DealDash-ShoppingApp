import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SizeBadge from "./SizeBadge";
import ColorBadge from "./ColorBadge";
import { Pressable } from "react-native";
const CartItem = ({ image, name, cost, size, color, onPress, id }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.title}>${cost}</Text>
        <View style={styles.color}>
          <ColorBadge margin={5} color={color} />
          <SizeBadge margin={5} content={size} />
        </View>
      </View>
      <View style={styles.delete}>
        <Pressable onPress={() => onPress(id)}>
          <MaterialCommunityIcons
            color={"#F68CB5"}
            name="delete-outline"
            size={35}
          />
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 180,
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
  },
  image: {
    width: 120,
    borderRadius: 20,
    resizeMode: "center",
  },
  info: {
    width: "40%",
    justifyContent: "space-evenly",
  },
  color: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#444444",
  },
  delete: {
    justifyContent: "center",
  },
});
export default CartItem;
