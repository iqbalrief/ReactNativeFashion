import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Text, Theme } from "./Theme";

export interface RoundedIconProps {
    name: any;
    size: number;
    color: keyof Theme["colors"];
    backgroundColor: keyof Theme["colors"];
    iconRatio: number;
    align: "center" | "flex-start" | "flex-end";
}

const RoundedIcon = ({
    name,
    size,
    color,
    backgroundColor,
    iconRatio

}: RoundedIconProps) => {

    const iconSize = size * iconRatio;
    
    return (
        <Box
            height={size}
            width={size}
            borderRadius="m"
            justifyContent="center"
            alignItems="center"
            style={{ borderRadius: size / 2 }}
            {... { backgroundColor }}
        >

            <Text style={{ width: iconSize, height: iconSize }} {... { color }} >
                <Icon
                    size={iconSize}
                    marginLeft={5}
                    name={name}
                    color={color}
                />
            </Text>
        </Box>
    );
};

RoundedIcon.defaultProps = {
    iconRatio: 0.7,
};

export default RoundedIcon;
