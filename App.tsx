import * as React from "react";
import { 
  assets as authenticationAssets, 
  AuthenticationNavigator 
} from "./src/Authentication";

import {LoadAssets, theme} from "./src/components";
import { AppRoutes } from "./src/components/Navigation";
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeNavigator } from "./src/Home/Index"
import { StatusBar } from "react-native";
import { AuthContextProvider } from "./src/Service/Authentication/authContext";
import { ProductsContextProvider } from "./src/Service/Products/productsContext";


const assets = [...authenticationAssets]

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
};


const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <ThemeProvider {...{ theme, assets }} >
    <LoadAssets {...{ fonts }}>
    {/* <StatusBar barStyle="light-content"/> */}
    <SafeAreaProvider>
    <AuthContextProvider>
    <ProductsContextProvider> 
      <AppStack.Navigator>
        <AppStack.Screen
          name="Authentication"
          component={AuthenticationNavigator}
          options={{ headerShown: false }}
        />
           <AppStack.Screen
          name="Home" 
          component={HomeNavigator}
          options={{ headerShown: false }}
        /> 
      </AppStack.Navigator>
      </ProductsContextProvider>
      </AuthContextProvider>
       
      </SafeAreaProvider>
    
    </LoadAssets>
    </ThemeProvider>
  );
}
