import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../components';
import { FontAwesome } from '@expo/vector-icons';

export const ListCard = ({ products }: any) => {
    const navigation = useNavigation();
    return (
        
        <>
        <TouchableOpacity
        onPress={() => navigation.navigate("OutfitIdeasDetail")}
        style={{
          width: '48%',
          marginVertical: 14,
        }}>
        <View
          style={{
            width: '100%',
            height: 100,
            borderRadius: 10,
            backgroundColor: theme.colors.backgroundLight,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 8,
          }}>
          {products.isOff ? (
            <View
              style={{
                position: 'absolute',
                width: '20%',
                height: '24%',
                backgroundColor: theme.colors.green,
                top: 0,
                left: 0,
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: theme.colors.white2,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}>
                {products.offPercentage}%
              </Text>
            </View>
          ) : null}
          <Image
            source={{
                uri:
                    `http://192.168.1.10:3000/api/products/image/${products.image[0].filename}`,
            }}
            style={{
              width: '80%',
              height: '80%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            color: theme.colors.black,
            fontWeight: '600',
            marginBottom: 2,
          }}>
          {products.price}
        </Text>
        
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <FontAwesome
                name="circle"
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: theme.colors.green,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: theme.colors.green,
                }}>
              {products.title}
              </Text>
            </View>
      
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <FontAwesome
                name="circle"
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: theme.colors.red,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: theme.colors.red,
                }}>
                {products.description}
              </Text>
            </View>
        <Text>&#8377; {products.price}</Text>
      </TouchableOpacity>





        </>
    );
};

export default ListCard;
