import React from "react";
import { View, StyleSheet, Text } from "react-native";
const Badge = ({ text, isActive }) => {
  return (
    <>
      {isActive ? (
        <View style={[styles.activeContainer]}>
          <Text style={styles.activeText}>{text}</Text>
        </View>
      ) : (
        <View style={[styles.container]}>
          <Text style={styles.text}>{text}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  activeContainer: {
    width: 150,
    height: 41,
    borderRadius: 16,
    backgroundColor: "#E96E6E",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  container: {
    minWidth: 50,
    height: 41,
    borderRadius: 16,
    backgroundColor: "#DFDCDC",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    marginHorizontal: 5,
  },
  activeText: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },
  text: {
    fontSize: 16,
    color: "#938F8F",
    fontWeight: "600",
  },
});
export default Badge;
