import React from 'react'
import { RectButton } from 'react-native-gesture-handler';
import RoundedIcon from '../../components/RoundedIcon'
import theme, { Box, Theme, Text } from '../../components/Theme'

export interface DrawerItemProps {
    icon: string;
    color: keyof Theme["colors"];
    screen: string;
    label: string;
}

const DrawerItem = ({ icon, color, screen, label}: DrawerItemProps) => {
    return (
        <RectButton>
        <Box 
        flexDirection="row" 
        alignItems="center" 
        style={{ padding: 12 }}
        >
       <RoundedIcon
          iconRatio={0.6}
          name={icon}
          size={36}
          backgroundColor={color}
          color={"white"}
        /> 
        <Text 
        variant="button" 
        color="secondary" 
        marginLeft="m">
          {label}
        </Text>
      </Box>
    </RectButton>
        
    )
};

export default DrawerItem;