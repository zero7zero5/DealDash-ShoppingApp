import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SizeBadge = ({ content, active, margin, width = 36 }) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: width,
          height: width,
          borderRadius: width / 2,
          marginHorizontal: margin,
        },
      ]}
    >
      {active ? (
        <Text style={[styles.text, { color: "#E65B5B", fontWeight: "600" }]}>
          {content}
        </Text>
      ) : (
        <Text style={styles.text}>{content}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
});
export default SizeBadge;
