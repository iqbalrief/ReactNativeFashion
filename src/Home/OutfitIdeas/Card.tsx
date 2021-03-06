import { Entypo, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { backgroundColor } from "@shopify/restyle";
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useEffect, useState } from "react";
import { FlatList, View, StyleSheet, Dimensions, Image, Text, TextInput, ScrollView, TouchableOpacity, StatusBar } from "react-native";
import Animated, { interpolateColor } from "react-native-reanimated";
import { mixColor } from "react-native-redash";


import { Box } from "../../components/Theme";
import { ProductsContext } from "../../Service/Products/productsContext";
import ListCard from "./ListCard";

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.75;
const height = width * (294 / 425);
const borderRadius = 24

interface CardProps {
   
}



export const Card = ({ }) => {
    const [products, setProducts] = useState()
    const { getAllProducts }: any = useContext(ProductsContext);

    useEffect( async () => {  
        const getItem = await getAllProducts() 
        setProducts(getItem.data)
    }, [])
    
    return ( 

    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: "#ffffff",
      }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        
       
        <View
          style={{
            padding: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: "#000000",
                  fontWeight: '500',
                  letterSpacing: 1,
                }}>
                Products
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#000000",
                  fontWeight: '400',
                  opacity: 0.5,
                  marginLeft: 10,
                }}>
                41
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "#0043F9",
                fontWeight: '400',
              }}>
              SeeAll
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {products && products.map((item:any, i) => (
            <ListCard
              key={i}
              products={item}
              
            />
          ))}
          </View>
        </View>

        
      </ScrollView>
    </View>

      
        
    )
}

export default Card;