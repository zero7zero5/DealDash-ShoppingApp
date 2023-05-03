import React from "react";
import { Image } from "react-native";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import AppButton from "../components/Button";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/background.jpg")}
      blurRadius={4}
    >
      <View style={styles.iconContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.text}>Best Place for Shopping</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          onPress={() => navigation.navigate("Login")}
          title={"Login"}
        />
        <AppButton
          onPress={() => navigation.navigate("Register")}
          color="#4ecdc4"
          title={"Register"}
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    margin: 10,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 60,
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
  },
  buttonContainer: {
    width: "100%",
  },
});

export default WelcomeScreen;
