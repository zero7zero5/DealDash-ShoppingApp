import React from "react";
import { Text, StyleSheet } from "react-native";

const ErrorText = ({ error }) => {
  return <Text style={styles.text}>{error}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "red",
    textAlign: "left",
  },
});
export default ErrorText;
