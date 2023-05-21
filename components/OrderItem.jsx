import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import SizeBadge from "./SizeBadge";
import ColorBadge from "./ColorBadge";
const OrderItem = ({ image, name, cost, size, color, date }) => {
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
        <Text style={styles.subtitle}>${cost}</Text>
        <View style={styles.color}>
          <ColorBadge margin={5} color={color} />
          <SizeBadge margin={5} content={size} />
        </View>
      </View>
      <View style={styles.date}>
        <Text>{date}</Text>
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
  subtitle: {
    fontSize: 18,
  },
  date: {
    justifyContent: "center",
  },
});
export default OrderItem;
