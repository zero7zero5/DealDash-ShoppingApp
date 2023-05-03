import React from "react";
import { Pressable } from "react-native";
import SizeBadge from "./SizeBadge";
const SizeList = ({ sizes, onPress, currentSize }) => {
  return (
    <>
      {sizes.map((i) => (
        <Pressable onPress={() => onPress(i)} key={i.id}>
          <SizeBadge
            active={currentSize === i.name ? true : false}
            content={i.name}
          />
        </Pressable>
      ))}
    </>
  );
};

export default SizeList;
