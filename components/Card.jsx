import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Pressable,
  Dimensions,
} from "react-native";
import IconContainer from "./IconContainer";
const Card = ({ image, title, subtitle, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground
            resizeMode="contain"
            style={styles.image}
            source={{ uri: image }}
            borderRadius={20}
          >
            <IconContainer
              style={styles.icon}
              name={"cards-heart-outline"}
              size={20}
            />
          </ImageBackground>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>${subtitle}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width / 2.3,
    margin: 10,
  },
  image: {
    height: 256,
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    color: "#444444",
    marginVertical: 3,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 500,
    color: "#9C9C9C",
  },
  icon: {
    position: "absolute",
    top: 5,
    right: 5,
  },
});
export default Card;
