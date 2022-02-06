import * as React from "react"
import { createDrawerNavigator, } from "@react-navigation/drawer";
// import DrawerContent from "./Drawer/Drawer"
// import OutfitIdeas from './OutfitIdeas'
import { HomeRoutes } from "../components/Navigation";
import OutfitIdeas from "./OutfitIdeas";
import DrawerContent, { DRAWER_WIDTH } from "./Drawer";
import OutfitIdeasDetail from "./OutfitIdeas/OutfitIdeasDetail";
import Cart from "./Cart";




const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => (
  <Drawer.Navigator 
    drawerContent={DrawerContent}
    screenOptions={{ drawerStyle: { width: DRAWER_WIDTH } }} >
  
    <Drawer.Screen options={{ headerShown: false }}
      name="OutfitIdeas" component={OutfitIdeas} />

<Drawer.Screen options={{ headerShown: false }}
      name="OutfitIdeasDetail" component={OutfitIdeasDetail} />

<Drawer.Screen options={{ headerShown: false }}
      name="Cart" component={Cart} />
  </Drawer.Navigator>
);