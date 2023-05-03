import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Input = ({ icon, ...props }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          style={{ paddingRight: 10 }}
          size={20}
          name={icon}
          color={"#8c8c8c"}
        />
      )}
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 55,
    backgroundColor: "white",
    borderRadius: 14,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  input: {
    color: "#8c8c8c",
    fontSize: 16,
  },
});
export default Input;
