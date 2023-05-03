import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
const IconContainer = ({
  name,
  size,
  style,
  user,
  onPress,
  color = "#E96E6E",
  width = 44,
}) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={[
          styles.container,
          style,
          { width: width, height: width, borderRadius: width / 2 },
        ]}
      >
        {!user ? (
          <MaterialCommunityIcons size={size} name={name} color={color} />
        ) : (
          <Text style={styles.text}>{user}</Text>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontSize: 30,
  },
});
export default IconContainer;
