import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
const ColorBadge = ({ color, width = 36, active, margin }) => {
  return active ? (
    <View
      style={[
        styles.colorContainer,
        {
          marginHorizontal: margin,
          backgroundColor: color,
          borderWidth: 2,
          borderColor: "black",
        },
      ]}
    />
  ) : (
    <>
      <View
        style={[
          styles.colorContainer,
          {
            backgroundColor: color,
            marginHorizontal: margin,
            width: width,
            height: width,
            borderRadius: width / 2,
          },
        ]}
      />
    </>
  );
};
const styles = StyleSheet.create({
  colorContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    margin: 1,
  },
});

export default ColorBadge;
