import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { theme } from '../../components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Box } from '../../components/Theme';
import { productsRequest } from '../../Service/Products/productsService';

const ListCart = ({ cart }: any) => {
    console.log(cart)
    return (
        <>
            
          {/* {product ? product.map(renderProducts) : null} */}
          <TouchableOpacity
        // key={data.key}
        // onPress={() => navigation.navigate('ProductInfo', {productID: data.id})}
        style={{
          width: '100%',
          height: 100,
          marginVertical: 6,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {/* <View
          style={{
            width: '30%',
            height: 100,
            padding: 14,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.backgroundLight,
            borderRadius: 10,
            marginRight: 22,
          }}> */}
          <Image
            source={{uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fbiggo.id%2Fs%2Ftshirt%2Berigo%2Boriginal%2F&psig=AOvVaw3izPOC9wuy5mMjVs1KcGWM&ust=1644307100367000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiqqLiP7fUCFQAAAAAdAAAAABAJ"}}
            style={{
            flex: 1,
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        {/* </View> */}

        
        <View
          style={{
            flex: 1,
            height: '100%',
            justifyContent: 'space-around',
          }}>
          <View style={{}}>
            <Text
              style={{
                fontSize: 14,
                maxWidth: '100%',
                color: theme.colors.black,
                fontWeight: '600',
                letterSpacing: 1,
              }}>
               {cart.product.title}
            </Text>
            <View
              style={{
                marginTop: 4,
                flexDirection: 'row',
                alignItems: 'center',
                opacity: 0.6,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  maxWidth: '85%',
                  marginRight: 4,
                }}>
                {/* &#8377; */}
                {cart.product.price}
              </Text>
              <View>
              <Text  style={{
                  fontSize: 14,
                  fontWeight: '400',
                  maxWidth: '85%',
                  marginRight: 4,
                }}>
               {cart.size}
              </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderRadius: 100,
                  marginRight: 20,
                  padding: 4,
                  borderWidth: 1,
                  borderColor: theme.colors.backgroundMedium,
                  opacity: 0.5,
                }}>
                <MaterialCommunityIcons
                  name="minus"
                  style={{
                    fontSize: 16,
                    color: theme.colors.backgroundDark,
                  }}
                />
              </View>
              <Text>1</Text>
              <View
                style={{
                  borderRadius: 100,
                  marginLeft: 20,
                  padding: 4,
                  borderWidth: 1,
                  borderColor: theme.colors.backgroundMedium,
                  opacity: 0.5,
                }}>
                <MaterialCommunityIcons
                  name="plus"
                  style={{
                    fontSize: 16,
                    color: theme.colors.backgroundDark,
                  }}
                />
              </View>
            </View>
            <TouchableOpacity onPress={() => true}>
              <MaterialCommunityIcons
                name="delete-outline"
                style={{
                  fontSize: 16,
                  color: theme.colors.backgroundDark,
                  backgroundColor: theme.colors.backgroundLight,
                  padding: 8,
                  borderRadius: 100,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>        
       
        </>

    );
};

export default ListCart;
