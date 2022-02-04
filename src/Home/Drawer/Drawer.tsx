import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { Dimensions, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Header } from "react-native/Libraries/NewAppScreen";
import { RoundedIconButton } from "../../components";




import theme, { Box, Text } from "../../components/Theme";
import DrawerItem, { DrawerItemProps } from "./DrawerItem";



const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;

const items: DrawerItemProps[]  = [
    {
      icon: "zap",
      label: "Outfit Ideas",
      screen: "OutfitIdeas",
      color: "primary",
    },
    {
      icon: "heart",
      label: "Favourite Outfits",
      screen: "FavouriteOutfits",
      color: "orange",
    },
    {
      icon: "user",
      label: "Edit Profile",
      screen: "EditProfile",
      color: "yellow",
    },
    {
      icon: "clock",
      label: "Transaction History",
      screen: "TransactionHistory",
      color: "pink",
    },
    {
      icon: "settings",
      label: "Notification Settings",
      screen: "NotificationSettings",
      color: "violet",
    },
  ];
  

const Drawer = () => {
  // const theme = useTheme()
  // const insets = useSafeAreaInsets();
    return (
        <Box flex={1}>
        <Box flex={0.2} backgroundColor="white">
          <Box 
            position="absolute" 
            top={0} 
            left={0} 
            right={0} 
            bottom={0} 
            borderBottomRightRadius="xl"
            backgroundColor="secondary"
            flexDirection="row"
            justifyContent="space-between"
            paddingHorizontal="m"
            // style={{ paddingTop: insets.top}}
          >
           {/* <RoundedIconButton 
            size={24}
            name="x" 
            color="white" 
            backgroundColor="secondary" 
            onPress={() => true}           
            />
            <Text color="white">My Profile</Text>
            <RoundedIconButton 
            size={24}
            name="x" 
            color="white" 
            backgroundColor="secondary" 
            onPress={() => true}           
            />   */}

            < Header 
            title="Menu"
            left={{ icon: "x", onPress: () => true}} 
            right={{ icon: "shoping-bag", onPress:() => true}}
            
            />
              
        </Box>
        </Box>
        <Box flex={0.85} >
        <Box 
        flex={1} 
        backgroundColor="secondary" />
        <Box flex={1} backgroundColor="primaryLight"/>
        <Image
          source={require("../../components/assets/patterns/3.png")}
          style={{
            position: "absolute",
            bottom: -height * 0.61,
            left: 0,
            right: 0,
            width: DRAWER_WIDTH,
            height: height,
          }}
          />
        <Box 
          position="absolute" 
          top={0} 
          left={0} 
          right={0} 
          bottom={0} 
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          justifyContent="center"
          padding="xl"
        >
          <Box
          position="absolute" 
          backgroundColor="primary"
          alignSelf="center"
          left={DRAWER_WIDTH / 2 - 50} 
          top={-50}
           width={100}
           height={100}
           style={{ borderRadius:50}}
           />
          <Box 
          marginBottom="m" 
          top={-20}>
          <Text variant="title1" textAlign="center">Iqbal Arief</Text>
          <Text variant="title1" textAlign="center">Iqbal@gmail.com</Text>
         
          {items.map((item) => (
              <DrawerItem key={item.screen} {...item}  />
              ))}
        </Box>
        </Box>
        </Box>
        <Box 
        backgroundColor="white" 
        width={DRAWER_WIDTH} 
        height={height * 0.61}>
        <Image
          source={require("../../components/assets/patterns/1.png")}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: -height * (1 - 0.61),
            width: DRAWER_WIDTH,
            height,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
        </Box>
        </Box>

       
    );
}

export default Drawer;