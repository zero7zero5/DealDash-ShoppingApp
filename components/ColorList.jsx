import React from "react";
import ColorBadge from "./ColorBadge";
import { Pressable } from "react-native";

const ColorList = ({ colors, onPress, currentColor }) => {
  return (
    <>
      {colors.map((i) => (
        <Pressable onPress={() => onPress(i)} key={i.id}>
          <ColorBadge
            active={i.name === currentColor ? true : false}
            color={i.color}
          />
        </Pressable>
      ))}
    </>
  );
};

export default ColorList;
