import React from "react";
import Badge from "./Badge";
import { View, ScrollView } from "react-native";
import { Pressable } from "react-native";

const BadgeList = ({ genres, onPress, currentCategory }) => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {genres.map((item) => (
          <Pressable key={item.id} onPress={() => onPress(item.genre)}>
            <Badge
              isActive={item.genre === currentCategory ? true : false}
              text={item.genre}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};
export default BadgeList;
