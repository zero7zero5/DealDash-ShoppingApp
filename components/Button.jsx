import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
const AppButton = ({ title, onPress, color = "#E96E6E" }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, { backgroundColor: color }]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E96E6E",
    borderRadius: 20,
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontSize: 24,
  },
});
export default AppButton;
