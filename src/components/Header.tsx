import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, Text } from "./Theme";
import RoundIconButton  from "./RoundedIconButton"
import { RectButton } from "react-native-gesture-handler";
import RoundedIcon from "./RoundedIcon";
import { RoundedIconButton } from ".";

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  right: {
    icon: string;
    onPress: () => void;
  };
  dark: boolean;
  transparent?: boolean;
}

const Header = ({left, title, right, dark, transparent}:HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? "white" : "secondary";
  const backgroundColor = dark ? "secondary" : "lightGrey";
  
    return (
    <Box 
    flexDirection="row" 
    style={{ marginTop: insets.top}}
    alignItems="center"
    justifyContent="space-between" 
    paddingHorizontal="m"
   >
      
        <RoundedIconButton
        size={24}
        iconRatio={0.4}
          name={left.icon}
          onPress={left.onPress}
          {... { color, backgroundColor}}
        />
    

      <Text variant="header" {...{ color}}>{title.toUpperCase()}</Text>
        <RoundedIconButton
          size={44}
          iconRatio={0.4}
          name={right.icon}
          onPress={right.onPress}
          {... { color, backgroundColor}}

        />
{/*      
          <View style={{width: 70}} /> */}
    </Box>
  );
};



Header.defaultProps = {
    dark:false
}

export default Header; 
