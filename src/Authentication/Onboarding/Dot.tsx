import React from "react";
import { Dimensions } from "react-native";
import Animated, {
    interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";

const { width } = Dimensions.get("window")

interface DotProps {
    index: number;
    paging: any;
}

const Dot = ({ index, paging }: DotProps) => {
    const style = useAnimatedStyle(() => {
        const opacity = interpolateColor(
            paging.value / width,
            [index - 1, index, index + 1],
            ["rgba(44, 185, 176, 0.5)",
            "rgba(44, 185, 176, 1)",
            "rgba(44, 185, 176, 0.5)"],
          );
          return { backgroundColor: opacity}
    });

    const animation = useAnimatedStyle(() => {
        const scale  = interpolate(
            paging.value,
            [index - 1, index, index + 1],
            [1, 1.25, 1],
            "clamp",
          );
          return { transform: [{scale}]}
    });

    // const scale = interpolateColor(
    //     paging.value,
    //     [index - 1, index, index + 1],
    //     [1, 1.25, 1],
    //   );
      
      return (
          <Animated.View style={[
        {   
            backgroundColor: "#2CB9B0",
            width: 8,
            height: 8,
            borderRadius: 4,
            margin: 4,
          }, style, animation
          ]}
          />
      );
    };
      
export default Dot;